# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Project Overview

**ProfitSEM** - A world-class Google Ads agency website built to rival industry leaders. This is a lead-generation focused marketing site with smart qualification, auto-scoring, and integrated booking system.

**Timeline:** 15-day sprint (Oct 24 - Nov 7, 2025)
**Status:** Foundation phase (Day 0 complete)
**Tech Stack:** Astro 4 + React 19 + Tailwind CSS 3 + TypeScript

---

## Essential Commands

### Development
```bash
npm run dev          # Start dev server (usually port 4321 or 4322)
npm run build        # Build for production (runs type-check first)
npm run preview      # Preview production build locally
```

### Code Quality
```bash
npm run type-check   # TypeScript validation (must pass before build)
npm run lint         # ESLint check (must have zero warnings)
npm run format       # Prettier auto-format
```

### Testing
- **No automated tests** - Manual QA only
- Follow test scenarios in `docs/15-TESTING-SCENARIOS.md`
- Test in Chrome, Safari, Firefox, iOS Safari, Android Chrome

---

## Architecture

### Astro Islands Pattern
- **SSR pages** (`.astro`) for SEO and performance
- **React islands** for interactive components (forms, calculators, animations)
- Minimal JavaScript shipped to client (only interactive components hydrate)

### Data Flow for Lead Generation
```
QualificationForm (React)
  → Zod validation
  → calculateLeadScore() in lib/leadScoring.ts
  → Airtable API (lib/api/airtable.ts)
  → Resend email (lib/api/resend.ts)
  → Routing logic (Hot → Cal.com | Warm → Thank you | Cold → Resources | Reject → Alternatives)
```

### Component Organization
- **`components/ui/`** - Atomic components (Button, Input, Card) using Radix UI primitives
- **`components/forms/`** - Form components (QualificationForm, ContactForm)
- **`components/layout/`** - Structural components (Nav, Footer, Container)
- **`components/sections/`** - Homepage sections (Hero, Stats, Testimonials)

### Design System
All design tokens are in `tailwind.config.mjs` and `src/styles/global.css`:
- Colors: `--color-navy-950`, `--color-blue-500`, `--color-green-400`, etc.
- Spacing: `--space-4`, `--space-8`, `--space-16` (4px base unit)
- Typography: Inter (sans), JetBrains Mono (mono)
- **ALWAYS use CSS variables**, never hardcode values

---

## Critical Workflows

### PM Agent Review Process
**After completing ANY feature**, call the PM Agent:
```
"PM review for [feature name]"
```

PM Agent will:
1. Check all 85 Definition of Done criteria (`docs/04-DEFINITION-OF-DONE.md`)
2. Update `docs/06-FEATURE-CHECKLIST.md`
3. Calculate progress %
4. Check for milestone celebration (20%, 40%, 60%, 80%, 95%, 100%)
5. Return status report

**Features are BINARY:** Done (100% DoD) or Not Done. No "mostly done."

### Milestone Celebrations
- **6 milestones** with increasing pizza parties
- **Milestone 6 (100%)** = Hawaii trip announcement for team + partners
- See `docs/10-MILESTONES.md` and `docs/11-PM-CELEBRATION-PROTOCOL.md`

### Definition of Done (85 items)
Before marking ANY feature complete, verify:
- Code Quality (10): TypeScript errors, ESLint, Prettier, no console.logs
- Functionality (12): All flows tested, error handling, loading states
- Design (10): Design system compliance, hover/focus states
- Responsiveness (8): 375px, 768px, 1440px tested
- Accessibility (12): WCAG 2.1 AA, screen reader tested
- Performance (8): <2s load, Lighthouse 95+, CLS < 0.1
- SEO (8): Meta tags, schema markup, alt text
- Security (5): Zod validation, CAPTCHA, rate limiting
- Testing (7): Cross-browser, form submissions logged
- Documentation (5): Props documented, README updated

Full checklist: `docs/04-DEFINITION-OF-DONE.md`

---

## Project-Specific Patterns

### Lead Scoring Algorithm
File: `lib/leadScoring.ts` (to be created)

Scoring factors (0-100 points):
- Ad spend tier: 0-30 points (>$50k = 30, $15-50k = 25, $5-15k = 15, <$5k = 0)
- Revenue tier: 0-25 points (>$2M = 25, $500k-2M = 20, $100k-500k = 15, etc.)
- Timeline urgency: 0-20 points (Immediate = 20, 30 days = 15, 90 days = 10, etc.)
- Decision maker: 0-15 points (Yes = 15, Shared = 10, No = 0)
- Goals quality: 0-10 points (Scale/Improve ROAS = 10, Explore = 0)

Lead types:
- Hot: 80-100 points → Cal.com booking
- Warm: 60-79 points → Manual review email
- Cold: 40-59 points → Nurture sequence
- Reject: 0-39 points → Resources page

### Email Templates
7 templates in `docs/12-EMAIL-TEMPLATES.md`:
1. Internal: Hot lead alert
2. Internal: Warm lead notification
3. Auto-reply: Hot lead (with booking link)
4. Auto-reply: Warm lead (24hr response)
5. Auto-reply: Cold lead (free resources)
6. Auto-reply: Reject lead (alternatives)
7. Nurture: Day 3 follow-up

### Environment Variables
Required in `.env.local` (see `.env.example`):
```
AIRTABLE_API_KEY          # Lead database
AIRTABLE_BASE_ID          # Base ID
RESEND_API_KEY            # Email notifications
PUBLIC_HCAPTCHA_SITEKEY   # Spam protection (public)
HCAPTCHA_SECRET           # Spam protection (private)
PUBLIC_GA_ID              # Google Analytics 4
```

### API Integration Points
- **Airtable:** `lib/api/airtable.ts` - Create lead records, log submissions
- **Resend:** `lib/api/resend.ts` - Send 7 email templates
- **Cal.com:** Embed only, no API (iframe integration)
- **hCaptcha:** `components/forms/` - Spam protection on qualification form

---

## Page Structure

### Homepage (12 sections)
1. Hero + primary CTA
2. Social proof bar (logos + stats)
3. Problem section (pain points)
4. Solution (90-day framework)
5. Services overview (6 cards)
6. Results preview (3 case studies)
7. Comparison table (us vs competitors)
8. Industries (8 icons)
9. Video testimonials
10. Trust signals (badges)
11. ROI calculator (interactive)
12. Final CTA

Target: All sections in `components/sections/`, composed in `pages/index.astro`

### Site Map (46 pages total)
- Core: 8 pages (home, analysis, about, contact, how-we-work, pricing, industries, reviews)
- Services: 6 pages (Search, Shopping, PMax, Display, YouTube, Audit)
- Industries: 8 pages (eCommerce, SaaS, Lead Gen, Real Estate, Healthcare, etc.)
- Resources: 8 pages (blog hub, 7 posts, 3 guides)
- Legal: 4 pages (privacy, terms, FAQ, book-a-call)
- SEO: 9 location pages (major US cities)
- Case studies: 5 pages

See `docs/06-FEATURE-CHECKLIST.md` for complete list.

---

## Content Strategy

**Placeholder Approach:** This is a demo/portfolio site.
- Metrics use `[XXX]+` placeholders or disclosed fictional data
- Team photos: Stock from Unsplash or illustrated avatars
- Case studies: "Based on industry research (not actual clients)"
- Testimonials: Fictional but disclosed
- Footer disclaimer: "Demonstration website showcasing capabilities"

Blog posts (7 total) are AI-generated + human-edited, 2000-2500 words each.

---

## Performance Targets

**Non-Negotiable:**
- Page load: <2 seconds (3G throttling)
- Lighthouse: 95+ (all categories)
- CLS: <0.1 (no layout shift)
- Accessibility: WCAG 2.1 AA compliant
- Bundle size: <100kb per component

**How to achieve:**
- Images: WebP format, responsive srcset, lazy loading
- Fonts: Preload Inter/JetBrains Mono
- CSS: Tailwind purging, critical CSS inlined
- JS: Astro islands (minimal hydration)

---

## Documentation Hierarchy

**Must read before coding:**
1. `docs/00-STRATEGIC-DECISIONS.md` - Domain, content strategy, timeline
2. `docs/04-DEFINITION-OF-DONE.md` - 85-item quality checklist
3. `docs/06-FEATURE-CHECKLIST.md` - Progress tracking

**Reference as needed:**
4. `docs/10-MILESTONES.md` - Celebration schedule
5. `docs/11-PM-CELEBRATION-PROTOCOL.md` - How PM Agent works
6. `README.md` - Quick start, tech stack, environment setup

**Full documentation:** 15+ files in `/docs` covering security, legal, analytics, testing, etc.

---

## Common Gotchas

### Import Paths
Use TypeScript path aliases (configured in `tsconfig.json`):
```typescript
import { Button } from '@/components/ui/Button';
import { calculateScore } from '@/lib/leadScoring';
```

### Astro Components vs React
- Use `.astro` for static content (SEO pages, layouts)
- Use `.tsx` for interactive elements (forms, calculators, animations)
- Mark React components with `client:load` or `client:visible` in Astro

### Design Tokens
❌ Bad: `className="text-[#0066FF]"`
✅ Good: `className="text-blue-500"`

❌ Bad: `style={{ marginTop: '24px' }}`
✅ Good: `className="mt-6"` (uses --space-6)

### DoD Violations
Most common failures:
- Missing alt text on images
- No loading/error states for forms
- Hardcoded colors/spacing instead of design tokens
- Not tested in Safari/Firefox
- Console.log statements left in code

---

## Project Management

### Progress Tracking
- `docs/06-FEATURE-CHECKLIST.md` - Master task list (update after EVERY feature)
- Use legend: ⬜ Not Started | 🔄 In Progress | ✅ Complete | ❌ Blocked

### When Stuck
1. Check relevant docs in `/docs`
2. Review existing code patterns in `src/`
3. Call PM Agent for guidance
4. Check Definition of Done for what's required

### Before Committing
1. Run `npm run type-check` (zero errors)
2. Run `npm run lint` (zero warnings)
3. Run `npm run format`
4. Test in browser (Chrome + Safari minimum)
5. Call PM Agent for DoD review

---

## Success Criteria

**This project is done when:**
- ✅ All 46 pages deployed to production
- ✅ All 75 features pass 100% DoD compliance
- ✅ Lighthouse 95+ on all pages
- ✅ WCAG 2.1 AA compliant
- ✅ Domain configured with SSL
- ✅ Analytics tracking verified
- ✅ 6th milestone reached = 🌴 HAWAII TRIP ANNOUNCED! 🌴

Current progress: ~5% (foundation complete)
Next milestone: 🍕 Pizza Party at 20%

---

**Last Updated:** October 24, 2025
