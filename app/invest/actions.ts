'use server';

import { z } from 'zod';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const investFormSchema = z.object({
  inquiryType: z.enum(['investor', 'partner', 'general']),
  investmentLevel: z.string(),
  investmentRange: z.string(),
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Please enter a valid email'),
  company: z.string().max(200).optional().default(''),
  message: z.string().max(2000).optional().default(''),
  honeypot: z
    .object({
      website: z.string().default(''),
      phone: z.string().default(''),
      address: z.string().default(''),
    })
    .default({ website: '', phone: '', address: '' }),
});

export type InvestFormData = z.infer<typeof investFormSchema>;

export type InvestFormResult =
  | { success: true }
  | { success: false; errors: Record<string, string> };

export async function submitInvestForm(data: InvestFormData): Promise<InvestFormResult> {
  const result = investFormSchema.safeParse(data);

  if (!result.success) {
    const errors: Record<string, string> = {};
    for (const issue of result.error.issues) {
      const key = issue.path[0];
      if (typeof key === 'string') {
        errors[key] = issue.message;
      }
    }
    return { success: false, errors };
  }

  const parsed = result.data;

  // Honeypot check — if any hidden field is filled, it's a bot
  const hp = parsed.honeypot;
  if (hp.website || hp.phone || hp.address) {
    // Silently pretend success so bots don't retry
    return { success: true };
  }

  const { error } = await resend.emails.send({
    from: 'ZV Holdings <info@zv.holdings>',
    to: 'info@zv.holdings',
    replyTo: parsed.email,
    subject: `New ${parsed.inquiryType} inquiry from ${parsed.name}`,
    html: `
      <h2>New Investment Inquiry</h2>
      <p><strong>Type:</strong> ${parsed.inquiryType}</p>
      <p><strong>Level:</strong> ${parsed.investmentLevel}</p>
      <p><strong>Range:</strong> ${parsed.investmentRange}</p>
      <p><strong>Name:</strong> ${parsed.name}</p>
      <p><strong>Email:</strong> ${parsed.email}</p>
      <p><strong>Company:</strong> ${parsed.company || 'N/A'}</p>
      <p><strong>Message:</strong> ${parsed.message || 'N/A'}</p>
    `,
  });

  if (error) {
    console.error('Resend error:', error);
    return { success: false, errors: { form: 'Failed to send inquiry. Please try again.' } };
  }

  return { success: true };
}
