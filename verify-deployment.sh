#!/bin/bash

# Deployment Verification Script for ProfitSEM
# This script checks if the production deployment is healthy and working correctly

set -e

SITE_URL="https://profitsem.com"
HEALTH_ENDPOINT="$SITE_URL/api/health"

echo "🔍 ProfitSEM Deployment Verification"
echo "===================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to check if a URL is accessible
check_url() {
  local url=$1
  local name=$2

  echo -n "Checking $name... "

  if response=$(curl -s -o /dev/null -w "%{http_code}" "$url" 2>&1); then
    if [ "$response" = "200" ]; then
      echo -e "${GREEN}✓ OK${NC} (HTTP $response)"
      return 0
    else
      echo -e "${RED}✗ FAILED${NC} (HTTP $response)"
      return 1
    fi
  else
    echo -e "${RED}✗ FAILED${NC} (Connection error)"
    return 1
  fi
}

# Function to check health endpoint
check_health() {
  echo -n "Checking health endpoint... "

  if response=$(curl -s "$HEALTH_ENDPOINT" 2>&1); then
    # Check if response contains "ok"
    if echo "$response" | grep -q '"status":"ok"'; then
      echo -e "${GREEN}✓ OK${NC}"
      echo ""
      echo "Health Response:"
      echo "$response" | jq '.' 2>/dev/null || echo "$response"
      echo ""

      # Check Resend status
      if echo "$response" | grep -q '"resend":"connected"'; then
        echo -e "${GREEN}✓ Resend: Connected${NC}"
      else
        resend_status=$(echo "$response" | jq -r '.services.resend' 2>/dev/null || echo "unknown")
        echo -e "${YELLOW}⚠ Resend: $resend_status${NC}"
      fi

      return 0
    else
      echo -e "${RED}✗ FAILED${NC}"
      echo "Response: $response"
      return 1
    fi
  else
    echo -e "${RED}✗ FAILED${NC} (Connection error)"
    return 1
  fi
}

# Main checks
echo "1. Site Accessibility"
echo "---------------------"
check_url "$SITE_URL" "Homepage"
check_url "$SITE_URL/contact" "Contact Page"
check_url "$SITE_URL/free-analysis" "Lead Form Page"
echo ""

echo "2. Health Check"
echo "---------------"
check_health
echo ""

echo "3. API Endpoints"
echo "----------------"
# Note: These are POST endpoints, so we just check they exist
echo -n "Contact API endpoint... "
contact_response=$(curl -s -o /dev/null -w "%{http_code}" -X OPTIONS "$SITE_URL/api/contact" 2>&1)
if [ "$contact_response" = "200" ] || [ "$contact_response" = "405" ] || [ "$contact_response" = "404" ]; then
  echo -e "${GREEN}✓ Exists${NC}"
else
  echo -e "${RED}✗ Not found${NC}"
fi

echo -n "Lead submission API endpoint... "
lead_response=$(curl -s -o /dev/null -w "%{http_code}" -X OPTIONS "$SITE_URL/api/submit-lead" 2>&1)
if [ "$lead_response" = "200" ] || [ "$lead_response" = "405" ] || [ "$lead_response" = "404" ]; then
  echo -e "${GREEN}✓ Exists${NC}"
else
  echo -e "${RED}✗ Not found${NC}"
fi
echo ""

echo "4. DNS Records (for email)"
echo "--------------------------"
echo "Checking DNS records for profitsem.com..."

# Check DKIM
echo -n "DKIM record... "
if dig +short TXT resend._domainkey.profitsem.com | grep -q "MIGfMA0GCSqGSIb3DQEBAQUAA"; then
  echo -e "${GREEN}✓ Found${NC}"
else
  echo -e "${YELLOW}⚠ Not found or pending propagation${NC}"
fi

# Check SPF for send subdomain
echo -n "SPF record (send)... "
if dig +short TXT send.profitsem.com | grep -q "v=spf1"; then
  echo -e "${GREEN}✓ Found${NC}"
else
  echo -e "${YELLOW}⚠ Not found or pending propagation${NC}"
fi

# Check MX for send subdomain
echo -n "MX record (send)... "
if dig +short MX send.profitsem.com | grep -q "amazonses"; then
  echo -e "${GREEN}✓ Found${NC}"
else
  echo -e "${YELLOW}⚠ Not found or pending propagation${NC}"
fi

# Check DMARC
echo -n "DMARC record... "
if dig +short TXT _dmarc.profitsem.com | grep -q "v=DMARC1"; then
  echo -e "${GREEN}✓ Found${NC}"
else
  echo -e "${YELLOW}⚠ Not found or pending propagation${NC}"
fi
echo ""

echo "===================================="
echo "Verification complete!"
echo ""
echo "📋 Next Steps:"
echo "1. If all checks pass, test the contact form: $SITE_URL/contact"
echo "2. Test the lead form: $SITE_URL/free-analysis"
echo "3. Check Resend dashboard for sent emails: https://resend.com/emails"
echo "4. Monitor Vercel logs: https://vercel.com/ezhulatis-projects/profitsem"
echo ""
