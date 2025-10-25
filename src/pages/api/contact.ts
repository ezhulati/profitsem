import type { APIRoute } from 'astro';

/**
 * Contact form submission endpoint
 *
 * Receives contact form data and sends email notification
 *
 * TODO: Set up email service integration:
 * - Resend API
 * - SendGrid
 * - AWS SES
 * - Or custom SMTP
 */

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

    // TODO: Send email notification
    // For now, log to console
    console.log('New contact form submission:', {
      name: data.name,
      email: data.email,
      subject: data.subject,
      timestamp: data.submittedAt,
    });

    // TODO: Store in database/CRM (Airtable, HubSpot, etc.)

    // TODO: Send auto-reply email to user

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
