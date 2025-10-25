#!/bin/bash

# Quick deployment check using Google DNS to bypass local DNS issues
# This script resolves DNS using Google's 8.8.8.8 nameserver

set -e

echo "🔍 ProfitSEM Deployment Status Check"
echo "====================================="
echo ""
echo "Note: Using Google DNS (8.8.8.8) to bypass local DNS issues"
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Get IP for profitsem.com using Google DNS
echo "Resolving profitsem.com..."
SITE_IP=$(nslookup profitsem.com 8.8.8.8 | grep "Address:" | tail -1 | awk '{print $2}')
echo "  IP: $SITE_IP"
echo ""

# Check if site is accessible
echo "1. Testing Site Accessibility"
echo "------------------------------"

echo -n "Homepage... "
if response=$(curl -s -o /dev/null -w "%{http_code}" https://profitsem.com 2>&1); then
  if [ "$response" = "200" ]; then
    echo -e "${GREEN}✓ OK${NC} (HTTP $response)"
  else
    echo -e "${RED}✗ FAILED${NC} (HTTP $response)"
  fi
else
  echo -e "${RED}✗ Connection failed${NC}"
fi

echo -n "Health endpoint... "
if response=$(curl -s -o /dev/null -w "%{http_code}" https://profitsem.com/api/health 2>&1); then
  if [ "$response" = "200" ]; then
    echo -e "${GREEN}✓ OK${NC} (HTTP $response)"
  else
    echo -e "${YELLOW}⚠ HTTP $response${NC}"
  fi
else
  echo -e "${RED}✗ Connection failed${NC}"
fi
echo ""

# Check health status
echo "2. Health Check Details"
echo "------------------------"
if health_response=$(curl -s https://profitsem.com/api/health 2>&1); then
  echo "$health_response" | jq '.' 2>/dev/null || echo "$health_response"
  echo ""

  # Check Resend status
  if echo "$health_response" | grep -q '"resend":"connected"'; then
    echo -e "${GREEN}✓ Resend API: Connected and working!${NC}"
  else
    resend_status=$(echo "$health_response" | jq -r '.services.resend' 2>/dev/null || echo "unknown")
    echo -e "${YELLOW}⚠ Resend Status: $resend_status${NC}"
    echo ""
    echo "If Resend shows 'missing' or 'error':"
    echo "1. Go to: https://vercel.com/ezhulatis-projects/profitsem/settings/environment-variables"
    echo "2. Make sure RESEND_API_KEY is set"
    echo "3. Redeploy the project"
  fi
else
  echo -e "${RED}✗ Could not fetch health status${NC}"
fi
echo ""

# Test DNS records
echo "3. DNS Records (Email)"
echo "----------------------"

echo -n "DKIM record... "
if nslookup resend._domainkey.profitsem.com 8.8.8.8 | grep -q "MIGfMA0GCSqGSIb3DQEBAQUAA"; then
  echo -e "${GREEN}✓ Found${NC}"
else
  echo -e "${YELLOW}⚠ Not found${NC}"
fi

echo -n "MX record (send)... "
if nslookup -type=MX send.profitsem.com 8.8.8.8 | grep -q "amazonses"; then
  echo -e "${GREEN}✓ Found${NC}"
else
  echo -e "${YELLOW}⚠ Not found${NC}"
fi

echo -n "SPF record (send)... "
if nslookup -type=TXT send.profitsem.com 8.8.8.8 | grep -q "v=spf1"; then
  echo -e "${GREEN}✓ Found${NC}"
else
  echo -e "${YELLOW}⚠ Not found${NC}"
fi

echo -n "DMARC record... "
if nslookup -type=TXT _dmarc.profitsem.com 8.8.8.8 | grep -q "v=DMARC1"; then
  echo -e "${GREEN}✓ Found${NC}"
else
  echo -e "${YELLOW}⚠ Not found${NC}"
fi
echo ""

# Check recent deployments on GitHub
echo "4. Latest Deployment"
echo "--------------------"
echo "GitHub repo: https://github.com/ezhulati/profitsem"
echo "Vercel dashboard: https://vercel.com/ezhulatis-projects/profitsem"
echo ""
echo "Recent commits pushed:"
git log --oneline -3
echo ""

echo "====================================="
echo "✅ Deployment Check Complete!"
echo ""
echo "Next Steps:"
echo "1. If health shows 'connected', test contact form: https://profitsem.com/contact"
echo "2. Check Resend dashboard for emails: https://resend.com/emails"
echo "3. Monitor Vercel deployment: https://vercel.com/ezhulatis-projects/profitsem"
echo ""
echo "To fix local DNS issues permanently:"
echo "  System Settings → Network → Wi-Fi → Details → DNS"
echo "  Add: 8.8.8.8 and 8.8.4.4"
echo ""
