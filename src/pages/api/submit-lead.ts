import type { APIRoute } from 'astro';
import { Resend } from 'resend';

/**
 * Lead submission API endpoint
 *
 * Receives form data, validates it, and sends email notifications via Resend
 * Returns success/error response
 */

// Ensure this route is server-rendered, not prerendered
export const prerender = false;

interface LeadSubmission {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  monthlyAdSpend: string;
  monthlyRevenue: string;
  timeline: string;
  decisionMaker: string;
  previousAgency?: string;
  industry: string;
  primaryGoal: string;
  currentChallenges?: string;
  budget: string;
  additionalInfo?: string;
  score: number;
  category: 'hot' | 'warm' | 'cold' | 'reject';
  submittedAt: string;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    // Parse request body
    const data: LeadSubmission = await request.json();

    // Validate required fields
    const requiredFields = [
      'fullName',
      'email',
      'company',
      'phone',
      'monthlyAdSpend',
      'monthlyRevenue',
      'timeline',
      'industry',
      'decisionMaker',
      'primaryGoal',
      'budget',
      'score',
      'category',
    ];

    for (const field of requiredFields) {
      if (!data[field as keyof LeadSubmission]) {
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

    // Send notification email to team with lead details
    try {
      const urgencyLabel = data.category === 'hot' ? '🔥 HOT LEAD' : data.category === 'warm' ? '⚡ WARM LEAD' : data.category === 'cold' ? '❄️ COLD LEAD' : '❌ REJECTED';

      await resend.emails.send({
        from: 'ProfitSEM Leads <hello@profitsem.com>',
        to: 'enrizhulati@gmail.com',
        subject: `${urgencyLabel}: ${data.fullName} from ${data.company} (Score: ${data.score})`,
        html: `
          <h2>${urgencyLabel} Lead Submission</h2>
          <p><strong>Lead Score:</strong> ${data.score}/100</p>
          <p><strong>Category:</strong> ${data.category.toUpperCase()}</p>
          <hr>
          <h3>Contact Information</h3>
          <p><strong>Name:</strong> ${data.fullName}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p><strong>Company:</strong> ${data.company}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <hr>
          <h3>Business Details</h3>
          <p><strong>Industry:</strong> ${data.industry}</p>
          <p><strong>Monthly Ad Spend:</strong> ${data.monthlyAdSpend}</p>
          <p><strong>Monthly Revenue:</strong> ${data.monthlyRevenue}</p>
          <p><strong>Budget:</strong> ${data.budget}</p>
          <p><strong>Timeline:</strong> ${data.timeline}</p>
          <p><strong>Decision Maker:</strong> ${data.decisionMaker}</p>
          ${data.previousAgency ? `<p><strong>Previous Agency:</strong> ${data.previousAgency}</p>` : ''}
          <hr>
          <h3>Goals & Challenges</h3>
          <p><strong>Primary Goal:</strong> ${data.primaryGoal}</p>
          ${data.currentChallenges ? `<p><strong>Current Challenges:</strong> ${data.currentChallenges}</p>` : ''}
          ${data.additionalInfo ? `<p><strong>Additional Info:</strong> ${data.additionalInfo}</p>` : ''}
          <hr>
          <p><em>Submitted at: ${data.submittedAt}</em></p>
        `,
      });

      // Send confirmation email to lead based on category
      let userEmailHtml = '';

      if (data.category === 'hot' || data.category === 'warm') {
        userEmailHtml = `
          <h2>Thanks for your interest, ${data.fullName.split(' ')[0]}!</h2>
          <p>We've received your request for a free Google Ads profit analysis.</p>
          <p><strong>Next Steps:</strong></p>
          <ul>
            <li>Our team will review your submission within 24 hours</li>
            <li>We'll reach out to schedule your free analysis call</li>
            <li>We'll prepare a custom profit roadmap for ${data.company}</li>
          </ul>
          <p>In the meantime, check out how we've helped businesses like yours:</p>
          <p><a href="https://profitsem.com/case-studies" style="background: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">View Case Studies</a></p>
          <br>
          <p>Best regards,<br>The ProfitSEM Team</p>
        `;
      } else {
        userEmailHtml = `
          <h2>Thanks for your interest, ${data.fullName.split(' ')[0]}!</h2>
          <p>We appreciate you taking the time to learn about ProfitSEM.</p>
          <p>Based on your current needs, we've put together some resources that might help:</p>
          <ul>
            <li><a href="https://profitsem.com/blog">Google Ads Strategy Blog</a></li>
            <li><a href="https://profitsem.com/resources/roi-calculator">ROI Calculator</a></li>
            <li><a href="https://profitsem.com/resources/google-ads-guide">Complete Google Ads Guide</a></li>
          </ul>
          <p>Feel free to reach out when you're ready to take your Google Ads to the next level!</p>
          <br>
          <p>Best regards,<br>The ProfitSEM Team</p>
        `;
      }

      await resend.emails.send({
        from: 'ProfitSEM <hello@profitsem.com>',
        to: data.email,
        subject: data.category === 'hot' || data.category === 'warm'
          ? 'Your Free Google Ads Profit Analysis - Next Steps'
          : 'Thanks for your interest in ProfitSEM',
        html: userEmailHtml,
      });
    } catch (emailError) {
      console.error('Failed to send email:', emailError);
      // Continue even if email fails
    }

    console.log('Lead submitted:', {
      email: data.email,
      company: data.company,
      score: data.score,
      category: data.category,
      timestamp: data.submittedAt,
    });

    // Return success response
    return new Response(
      JSON.stringify({
        success: true,
        category: data.category,
        score: data.score,
        message: 'Lead submitted successfully',
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Lead submission error:', error);

    return new Response(
      JSON.stringify({
        error: 'Failed to submit lead. Please try again.',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
