# Definition of Done

**Every feature MUST pass ALL 85 criteria before marking as complete.**

No exceptions. No "mostly done". Binary: Done or Not Done.

---

## Code Quality (10 items)

- [ ] TypeScript: Zero errors (`npm run type-check`)
- [ ] ESLint: Zero warnings (`npm run lint`)
- [ ] Prettier: Code formatted (`npm run format`)
- [ ] No `console.log` statements in production code
- [ ] No commented-out code blocks
- [ ] No `// TODO` comments (move to issues)
- [ ] Imports organized (external → internal → types → styles)
- [ ] Functions are < 50 lines
- [ ] Components are < 300 lines
- [ ] Props interfaces fully documented with JSDoc

---

## Functionality (12 items)

- [ ] Feature works exactly as specified in PRD
- [ ] All user flows manually tested
- [ ] Happy path works flawlessly
- [ ] Error cases handled gracefully
- [ ] Edge cases covered (empty states, nulls, etc.)
- [ ] Form validation works correctly (if applicable)
- [ ] API calls include `try/catch` error handling
- [ ] Loading states displayed during async operations
- [ ] Success states displayed after completion
- [ ] Error messages are clear and actionable
- [ ] Fallback behavior implemented for failures
- [ ] No broken links (all href/src valid)

---

## Design (10 items)

- [ ] Matches design system specifications exactly
- [ ] Uses design tokens (CSS variables, not hardcoded values)
- [ ] Colors match design system palette
- [ ] Typography uses design system scale
- [ ] Spacing uses design system values
- [ ] Hover states implemented and smooth
- [ ] Focus states visible (keyboard navigation)
- [ ] Animations smooth, no jank (60fps)
- [ ] Visually consistent with other pages
- [ ] Final polish applied (no placeholder text visible)

---

## Responsiveness (8 items)

- [ ] Mobile (375px) tested and works perfectly
- [ ] Tablet (768px) tested and works perfectly
- [ ] Desktop (1440px) tested and works perfectly
- [ ] No horizontal scroll at any breakpoint
- [ ] Touch targets ≥ 44x44px on mobile
- [ ] Mobile menu opens/closes correctly
- [ ] Images scale correctly at all sizes
- [ ] Text is readable at all sizes (min 16px)

---

## Accessibility (12 items)

- [ ] Semantic HTML used correctly (header, nav, main, footer, article)
- [ ] ARIA labels present where needed (buttons, links, form fields)
- [ ] Keyboard navigation works (Tab, Enter, Escape, Arrow keys)
- [ ] Tab order is logical (follows visual flow)
- [ ] Focus indicators clearly visible (not `outline: none` without replacement)
- [ ] "Skip to content" link present on pages
- [ ] Alt text on ALL images (descriptive, not decorative)
- [ ] Form labels properly associated with inputs
- [ ] Error messages announced to screen readers
- [ ] Color contrast meets WCAG AA (4.5:1 for text)
- [ ] Screen reader tested (VoiceOver/NVDA)
- [ ] WCAG 2.1 AA compliant (verified with axe DevTools)

---

## Performance (8 items)

- [ ] Images optimized (WebP format preferred)
- [ ] Images sized correctly (responsive srcset)
- [ ] Lazy loading enabled for below-fold images
- [ ] No layout shift (CLS < 0.1)
- [ ] Bundle size reasonable (<100kb for component JS)
- [ ] Page load time < 2 seconds (3G network simulation)
- [ ] Lighthouse Performance score ≥ 95
- [ ] No console warnings/errors related to performance

---

## SEO (8 items)

- [ ] Meta title present and unique (55-60 characters)
- [ ] Meta description present (150-160 characters)
- [ ] OG image configured (1200x630px)
- [ ] Schema markup valid (test with Google Rich Results)
- [ ] Alt text descriptive (not just "image" or filename)
- [ ] Heading hierarchy correct (one h1, then h2, h3, etc.)
- [ ] Internal links present (3-5 per page)
- [ ] Canonical URL set correctly

---

## Security (5 items)

- [ ] Input validated with Zod schemas
- [ ] Input sanitized (HTML/script tags removed)
- [ ] CAPTCHA implemented (if public form)
- [ ] Rate limiting works (tested with multiple submissions)
- [ ] No secrets exposed in client code

---

## Testing (7 items)

- [ ] Chrome (latest) tested - macOS
- [ ] Safari (latest) tested - macOS/iOS
- [ ] Firefox (latest) tested
- [ ] iOS Safari tested (real device or simulator)
- [ ] Android Chrome tested (real device or simulator)
- [ ] Form submission logged correctly (Airtable/email)
- [ ] Analytics events fire correctly (GA4 DebugView)

---

## Documentation (5 items)

- [ ] Component props documented with TypeScript interfaces
- [ ] Complex logic includes inline comments explaining "why"
- [ ] README updated if new feature area
- [ ] `.env.example` updated if new environment variables added
- [ ] `FEATURE-CHECKLIST.md` updated with completion status

---

## Feature-Specific (Additional checks based on feature type)

### If Feature is a Form:
- [ ] Form validates on submit (not on every keystroke)
- [ ] Error messages appear below/near relevant fields
- [ ] Submit button disabled during submission
- [ ] Success message shown after submission
- [ ] Form resets after successful submission (or redirects)
- [ ] Email notifications sent within 60 seconds
- [ ] Data logged to Airtable correctly
- [ ] Spam protection active (honeypot + CAPTCHA)

### If Feature is a Page:
- [ ] Page has unique URL (no duplicates)
- [ ] Page accessible from navigation/sitemap
- [ ] 404 error page works if URL mistyped
- [ ] Social sharing works (correct OG tags)

### If Feature is a Component:
- [ ] Component is reusable (not hardcoded to one use case)
- [ ] Props have sensible defaults
- [ ] Component handles missing/null props gracefully

### If Feature uses External API:
- [ ] API key stored in environment variable
- [ ] Error handling for API failures
- [ ] Fallback behavior if API is down
- [ ] API rate limits respected
- [ ] Loading state during API call

---

## DoD Checklist Summary

**Total Items:** 85

**Categories:**
- Code Quality: 10
- Functionality: 12
- Design: 10
- Responsiveness: 8
- Accessibility: 12
- Performance: 8
- SEO: 8
- Security: 5
- Testing: 7
- Documentation: 5
- Feature-Specific: Variable

---

## How to Use This Checklist

### Before Starting Feature:
1. Read PRD requirements
2. Understand DoD criteria for this feature type
3. Plan approach to meet all criteria

### During Development:
1. Check items off as you complete them
2. Don't defer "polish" items to end
3. Test as you build (don't save testing for end)

### Before Submitting for PM Review:
1. Go through checklist yourself
2. Fix any failing items
3. Only submit when 100% complete

### PM Agent Review:
1. PM Agent goes through checklist systematically
2. Any failing item = NOT DONE (feature returned)
3. All passing = DONE (feature approved, celebration time!)

---

## Consequences of Not Meeting DoD

**If Feature Doesn't Meet DoD:**
- ❌ Feature marked as "In Progress" (not "Done")
- ❌ No milestone credit given
- ❌ No pizza party until fixed
- ❌ Blocks dependent features
- ❌ Technical debt accumulates

**Why This Matters:**
- Quality compounds over time
- Skipping steps creates bugs later
- Team builds bad habits
- Launch gets delayed

**The Standard:**
- ✅ 100% DoD compliance or it's not done
- ✅ No exceptions, no shortcuts
- ✅ Build it right the first time

---

**Last Updated:** October 24, 2025
