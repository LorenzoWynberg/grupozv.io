'use server';

import { z } from 'zod';

const investFormSchema = z.object({
  inquiryType: z.enum(['investor', 'partner', 'general']),
  investmentLevel: z.string(),
  investmentRange: z.string(),
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Please enter a valid email'),
  company: z.string().max(200).optional().default(''),
  message: z.string().max(2000).optional().default(''),
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

  // Log for now — replace with email service (Resend, SendGrid, etc.)
  console.log('--- New Investment Inquiry ---');
  console.log(`Type: ${parsed.inquiryType}`);
  console.log(`Level: ${parsed.investmentLevel}`);
  console.log(`Range: ${parsed.investmentRange}`);
  console.log(`Name: ${parsed.name}`);
  console.log(`Email: ${parsed.email}`);
  console.log(`Company: ${parsed.company || 'N/A'}`);
  console.log(`Message: ${parsed.message || 'N/A'}`);
  console.log('--- End Inquiry ---');

  // TODO: Send email to invest@grupozv.com via Resend/SendGrid

  return { success: true };
}
