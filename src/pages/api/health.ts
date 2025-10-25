import type { APIRoute } from 'astro';

/**
 * Health check endpoint to verify deployment and environment
 *
 * Returns deployment status and configuration info
 */

export const GET: APIRoute = async () => {
  const health = {
    status: 'ok',
    timestamp: new Date().toISOString(),
    environment: {
      resendApiKey: !!import.meta.env.RESEND_API_KEY,
      nodeVersion: process.version,
      platform: process.platform,
    },
    services: {
      resend: import.meta.env.RESEND_API_KEY ? 'configured' : 'missing',
    },
  };

  // Test Resend connectivity if API key is present
  if (import.meta.env.RESEND_API_KEY) {
    try {
      const response = await fetch('https://api.resend.com/domains', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${import.meta.env.RESEND_API_KEY}`,
        },
      });

      if (response.ok) {
        health.services.resend = 'connected';
      } else {
        health.services.resend = `error: ${response.status}`;
      }
    } catch (error) {
      health.services.resend = 'connection_failed';
    }
  }

  return new Response(
    JSON.stringify(health, null, 2),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    }
  );
};
