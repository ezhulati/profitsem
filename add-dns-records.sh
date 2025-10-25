#!/bin/bash

# ProfitSEM - Vercel DNS Configuration Script
# Run this script when network connectivity to Vercel is available

set -e  # Exit on error

echo "🚀 Adding DNS records to Vercel..."
echo ""

# Get the domain name (update this if different)
DOMAIN="profitsem.com"
echo "Domain: $DOMAIN"
echo ""

# Record 1: DKIM (Domain Key) - TXT Record
echo "✅ Adding DKIM record (resend._domainkey)..."
npx vercel dns add "$DOMAIN" resend._domainkey TXT "p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBSM7Pc2C6Zrf6SeYVPnE7Gza2xu9zzfZ0aJFHJee02icX92ouDb+aTg9hUB5wLGxyIffl2EOl8sQCCgTTGUGC2puPAT4L3iK7xe7S/nMZHYiZ/JF5Bs43BJ/aCgnxYhn+DOR8S+pUXw7GQya2a8yYabJCUG0qv6Mxx4AP7/SItQIDAQAB"
echo ""

# Record 2: MX Record (Mail Exchange)
echo "✅ Adding MX record (send)..."
npx vercel dns add "$DOMAIN" send MX "feedback-smtp.us-east-1.amazonses.com" --ttl 60
echo ""

# Record 3: SPF - TXT Record
echo "✅ Adding SPF record (send)..."
npx vercel dns add "$DOMAIN" send TXT "v=spf1 include:amazonses.com ~all" --ttl 60
echo ""

# Record 4: DMARC - TXT Record
echo "✅ Adding DMARC record (_dmarc)..."
npx vercel dns add "$DOMAIN" _dmarc TXT "v=DMARC1; p=none;"
echo ""

echo "🎉 All DNS records added successfully!"
echo ""
echo "⏱️  Wait 15-30 minutes for DNS propagation"
echo ""
echo "🔍 Verify records with:"
echo "  dig TXT resend._domainkey.$DOMAIN"
echo "  dig MX send.$DOMAIN"
echo "  dig TXT send.$DOMAIN"
echo "  dig TXT _dmarc.$DOMAIN"
echo ""
echo "📋 Next steps:"
echo "  1. Wait for DNS propagation"
echo "  2. Verify records with dig commands above"
echo "  3. Add RESEND_API_KEY to Vercel environment variables"
echo "  4. Test email sending via forms"
