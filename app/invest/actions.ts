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

  const rangeLabels: Record<string, string> = {
    '25-100': '$25K – $100K',
    '100-500': '$100K – $500K',
    '500+': '$500K+',
    'undisclosed': 'Prefer not to say',
  };

  const levelLabels: Record<string, string> = {
    holding: 'Holding-Level',
    vertical: 'Vertical-Specific',
    brand: 'Brand-Specific',
    unsure: 'Not Sure Yet',
  };

  const displayRange = rangeLabels[parsed.investmentRange] || parsed.investmentRange;
  const displayLevel = levelLabels[parsed.investmentLevel] || parsed.investmentLevel;

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
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
        <!-- Header -->
        <tr>
          <td style="background-color:#1e293b;padding:32px 40px;">
            <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:700;letter-spacing:-0.02em;">ZV Holdings</h1>
            <p style="margin:8px 0 0;color:#94a3b8;font-size:13px;">New Investment Inquiry</p>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:32px 40px;">
            <h2 style="margin:0 0 24px;font-size:22px;color:#0f172a;">${parsed.name} wants to connect</h2>

            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
              <tr>
                <td style="padding:16px;background-color:#f8fafc;border-radius:8px;border-left:4px solid #3b82f6;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="padding:4px 0;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;">Inquiry Type</td>
                      <td style="padding:4px 0;color:#0f172a;font-size:14px;font-weight:600;text-align:right;">${parsed.inquiryType}</td>
                    </tr>
                    ${parsed.investmentLevel !== 'N/A' ? `
                    <tr>
                      <td style="padding:4px 0;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;">Investment Level</td>
                      <td style="padding:4px 0;color:#0f172a;font-size:14px;font-weight:600;text-align:right;">${displayLevel}</td>
                    </tr>` : ''}
                    ${parsed.investmentRange !== 'N/A' ? `
                    <tr>
                      <td style="padding:4px 0;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;">Investment Range</td>
                      <td style="padding:4px 0;color:#0f172a;font-size:14px;font-weight:600;text-align:right;">${displayRange}</td>
                    </tr>` : ''}
                  </table>
                </td>
              </tr>
            </table>

            <!-- Contact Details -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
              <tr>
                <td style="padding:16px;background-color:#f8fafc;border-radius:8px;">
                  <p style="margin:0 0 4px;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;">Contact</p>
                  <p style="margin:0 0 2px;color:#0f172a;font-size:16px;font-weight:600;">${parsed.name}</p>
                  <p style="margin:0;"><a href="mailto:${parsed.email}" style="color:#3b82f6;font-size:14px;text-decoration:none;">${parsed.email}</a></p>
                  ${parsed.company ? `<p style="margin:4px 0 0;color:#64748b;font-size:14px;">${parsed.company}</p>` : ''}
                </td>
              </tr>
            </table>

            ${parsed.message ? `
            <!-- Message -->
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:16px;background-color:#f8fafc;border-radius:8px;">
                  <p style="margin:0 0 8px;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;">Message</p>
                  <p style="margin:0;color:#334155;font-size:14px;line-height:1.6;">${parsed.message}</p>
                </td>
              </tr>
            </table>` : ''}

          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="padding:24px 40px;border-top:1px solid #e2e8f0;">
            <p style="margin:0;color:#94a3b8;font-size:12px;text-align:center;">This inquiry was submitted via the ZV Holdings website invest form.</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>
    `,
  });

  if (error) {
    console.error('Resend error:', error);
    return { success: false, errors: { form: 'Failed to send inquiry. Please try again.' } };
  }

  return { success: true };
}
