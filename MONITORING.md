# Deployment Monitoring Guide

## Quick Start

### Check Deployment Health

Run the automated verification script:

```bash
./verify-deployment.sh
```

**Requirements:**
- `curl` (installed by default on macOS/Linux)
- `dig` (for DNS checks, optional)
- `jq` (for pretty JSON output, optional)

### Manual Health Check

Visit the health endpoint in your browser:
```
https://profitsem.com/api/health
```

Expected response when everything is working:
```json
{
  "status": "ok",
  "timestamp": "2025-10-24T23:XX:XX.XXXZ",
  "environment": {
    "resendApiKey": true,
    "nodeVersion": "20.x.x",
    "platform": "linux"
  },
  "services": {
    "resend": "connected"
  }
}
```

## Common Issues

### DNS Resolution Error (Local)

If you see `ENOTFOUND` or `Could not resolve host` errors when running scripts locally:

**This is a local DNS issue.** The production site works fine. To fix:

1. **Flush DNS cache:**
   ```bash
   sudo dscacheutil -flushcache
   sudo killall -HUP mDNSResponder
   ```

2. **Change DNS servers:**
   - Go to System Settings → Network → Wi-Fi → Details → DNS
   - Add: `8.8.8.8` and `8.8.4.4` (Google DNS)
   - Or: `1.1.1.1` and `1.0.0.1` (Cloudflare DNS)

3. **Restart network:**
   ```bash
   sudo ifconfig en0 down
   sudo ifconfig en0 up
   ```

### Resend Shows "missing" or "connection_failed"

1. **Check Environment Variable in Vercel:**
   - Go to https://vercel.com/ezhulatis-projects/profitsem/settings/environment-variables
   - Make sure `RESEND_API_KEY` is set to: `re_XypgqF2J_KfpDTTvYaKpgRKBGHQ6uKoF5`
   - Ensure it's enabled for "Production" environment
   - Click "Save"

2. **Redeploy:**
   - Go to Deployments tab
   - Click "..." on latest deployment
   - Select "Redeploy"

### Email Not Sending

1. **Verify domain in Resend:**
   - Go to https://resend.com/domains
   - Make sure `profitsem.com` shows as "Verified"

2. **Check DNS records:**
   ```bash
   dig TXT resend._domainkey.profitsem.com
   dig MX send.profitsem.com
   dig TXT send.profitsem.com
   dig TXT _dmarc.profitsem.com
   ```

3. **Check Resend logs:**
   - Go to https://resend.com/emails
   - Look for recent send attempts
   - Check for any errors

## Monitoring in Production

### View Deployment Logs

1. Go to https://vercel.com/ezhulatis-projects/profitsem
2. Click on latest deployment
3. Click "Functions" tab
4. View real-time logs

### Check Email Delivery

1. **Resend Dashboard:** https://resend.com/emails
   - Shows all sent emails
   - Delivery status
   - Bounce/error information

2. **Test email sending:**
   ```bash
   # Submit test contact form
   curl -X POST https://profitsem.com/api/contact \
     -H "Content-Type: application/json" \
     -d '{
       "name": "Test User",
       "email": "your-email@example.com",
       "subject": "Test",
       "message": "Testing email system",
       "submittedAt": "'$(date -u +"%Y-%m-%dT%H:%M:%SZ")'"
     }'
   ```

### Monitor Analytics

- **Vercel Analytics:** https://vercel.com/ezhulatis-projects/profitsem/analytics
- **Google Analytics:** https://analytics.google.com (if configured)

## Alerts & Notifications

### Set up Vercel Notifications

1. Go to Project Settings → Notifications
2. Enable:
   - Deployment Failed
   - Deployment Succeeded (optional)
   - Comments (optional)

### Monitor Uptime

Consider setting up external monitoring:
- **UptimeRobot** (free): https://uptimerobot.com
- **Pingdom** (paid): https://www.pingdom.com
- **Better Uptime** (free tier): https://betteruptime.com

Monitor these URLs:
- `https://profitsem.com` (homepage)
- `https://profitsem.com/api/health` (API health)

## Performance Monitoring

### Vercel Speed Insights

Already enabled via the Vercel adapter. View at:
```
https://vercel.com/ezhulatis-projects/profitsem/speed-insights
```

### Core Web Vitals

Check at:
- Vercel Dashboard → Speed Insights
- Google PageSpeed Insights: https://pagespeed.web.dev/

## Troubleshooting Commands

```bash
# Check if site is accessible
curl -I https://profitsem.com

# Test health endpoint
curl https://profitsem.com/api/health

# Check DNS records
dig profitsem.com
dig TXT resend._domainkey.profitsem.com
dig MX send.profitsem.com

# Test API endpoints (returns 405 Method Not Allowed, which is expected)
curl -I https://profitsem.com/api/contact
curl -I https://profitsem.com/api/submit-lead

# Check if Vercel deployment is accessible
curl -I https://profitsem-nqvkxe29a-ezhulatis-projects.vercel.app
```

## Emergency Rollback

If something breaks in production:

1. **Via Vercel Dashboard:**
   - Go to Deployments
   - Find the last working deployment
   - Click "..." → "Promote to Production"

2. **Via Git:**
   ```bash
   git revert HEAD
   git push origin main
   ```

## Support Resources

- **Vercel Docs:** https://vercel.com/docs
- **Astro Docs:** https://docs.astro.build
- **Resend Docs:** https://resend.com/docs
- **Vercel Support:** https://vercel.com/support
