import type { APIRoute } from 'astro';
import { Resend } from 'resend';

/**
 * Contact form submission endpoint
 *
 * Receives contact form data and sends email notification via Resend
 */

// Ensure this route is server-rendered, not prerendered
export const prerender = false;

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  subject: string;
  message: string;
  submittedAt: string;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    console.log('Contact API called - Content-Type:', request.headers.get('content-type'));
    console.log('Request method:', request.method);

    const data: ContactFormData = await request.json();

    // Validate required fields
    const requiredFields = ['name', 'email', 'subject', 'message'];
    for (const field of requiredFields) {
      if (!data[field as keyof ContactFormData]) {
        return new Response(
          JSON.stringify({ error: `Missing required field: ${field}` }),
          {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
          }
        );
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Initialize Resend
    const resend = new Resend(import.meta.env.RESEND_API_KEY);

    // Send notification email to team
    try {
      await resend.emails.send({
        from: 'ProfitSEM <hello@profitsem.com>',
        to: 'enrizhulati@gmail.com',
        subject: `New Contact Form: ${data.subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>From:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
          ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
          <p><strong>Subject:</strong> ${data.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message.replace(/\n/g, '<br>')}</p>
          <p><em>Submitted at: ${data.submittedAt}</em></p>
        `,
      });

      // Send auto-reply to user
      await resend.emails.send({
        from: 'ProfitSEM <hello@profitsem.com>',
        to: data.email,
        subject: 'Thanks for contacting ProfitSEM',
        html: `
          <h2>Thanks for reaching out, ${data.name}!</h2>
          <p>We've received your message and will get back to you within 24 hours.</p>
          <p>In the meantime, feel free to check out our <a href="https://profitsem.com/case-studies">case studies</a> to see how we've helped businesses like yours.</p>
          <br>
          <p>Best regards,<br>The ProfitSEM Team</p>
          <hr>
          <p style="color: #666; font-size: 12px;">Your message: ${data.subject}</p>
        `,
      });
    } catch (emailError) {
      console.error('Failed to send email:', emailError);
      // Continue even if email fails - we still want to return success
    }

    console.log('Contact form submitted:', {
      name: data.name,
      email: data.email,
      subject: data.subject,
      timestamp: data.submittedAt,
    });

    // Return success response
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Contact form submitted successfully',
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    return new Response(
      JSON.stringify({
        error: 'Failed to submit contact form. Please try again.',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
