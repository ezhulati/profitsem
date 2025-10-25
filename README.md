# ScaleMyAds - World-Class Google Ads Agency Website

**Status:** 🚧 In Development
**Timeline:** 15 days (Oct 24 - Nov 7, 2025)
**Progress:** 0% → [View Live Progress](./docs/06-FEATURE-CHECKLIST.md)

---

## 🎯 Project Overview

ScaleMyAds is a world-class Google Ads agency website built to rival and surpass the best in the industry. This project features:

- ✨ **Modern Stack:** Astro 5 + Tailwind CSS v4 + TypeScript
- 🎨 **Cutting-Edge Design:** 2025 trends, brutalist typography, micro-interactions
- ⚡ **High Performance:** <2s load times, 95+ Lighthouse scores
- 🎯 **Lead Generation:** Smart qualification system with auto-scoring
- 📊 **Data-Driven:** Airtable integration, email automation, analytics
- ♿ **Accessible:** WCAG 2.1 AA compliant
- 🔒 **Secure:** Rate limiting, CAPTCHA, input sanitization

---

## 📚 Documentation

All project documentation is in `/docs`:

| File | Purpose |
|------|---------|
| [00-STRATEGIC-DECISIONS.md](./docs/00-STRATEGIC-DECISIONS.md) | Project decisions & domain selection |
| [01-PRD.md](./docs/01-PRD.md) | Product Requirements Document |
| [02-PRODUCT-DEVELOPMENT-PLAN.md](./docs/02-PRODUCT-DEVELOPMENT-PLAN.md) | Architecture & tech stack |
| [03-DESIGN-SYSTEM.md](./docs/03-DESIGN-SYSTEM.md) | Colors, typography, components |
| [04-DEFINITION-OF-DONE.md](./docs/04-DEFINITION-OF-DONE.md) | Quality checklist (85 items) |
| [05-PROJECT-MANAGEMENT.md](./docs/05-PROJECT-MANAGEMENT.md) | PM processes & workflows |
| [06-FEATURE-CHECKLIST.md](./docs/06-FEATURE-CHECKLIST.md) | Master feature tracking |
| [07-QUALITY-STANDARDS.md](./docs/07-QUALITY-STANDARDS.md) | Code quality guidelines |
| [08-CONTENT-GUIDELINES.md](./docs/08-CONTENT-GUIDELINES.md) | Writing & content standards |
| [09-DEPLOYMENT-CHECKLIST.md](./docs/09-DEPLOYMENT-CHECKLIST.md) | Launch readiness |
| [10-MILESTONES.md](./docs/10-MILESTONES.md) | 6 milestones + celebrations |
| [11-PM-CELEBRATION-PROTOCOL.md](./docs/11-PM-CELEBRATION-PROTOCOL.md) | Pizza parties + Hawaii trip! |
| [12-EMAIL-TEMPLATES.md](./docs/12-EMAIL-TEMPLATES.md) | 7 email templates |
| [13-LEGAL-COMPLIANCE.md](./docs/13-LEGAL-COMPLIANCE.md) | Privacy, terms, GDPR |
| [14-SECURITY-STANDARDS.md](./docs/14-SECURITY-STANDARDS.md) | Security implementation |
| [15-TESTING-SCENARIOS.md](./docs/15-TESTING-SCENARIOS.md) | QA test plan |
| [16-ANALYTICS-TRACKING.md](./docs/16-ANALYTICS-TRACKING.md) | GA4 events & goals |
| [17-GTM-STRATEGY.md](./docs/17-GTM-STRATEGY.md) | Post-launch marketing |

---

## 🗂️ Project Structure

```
GrowMyAds/
├── docs/                    # Complete project documentation
├── src/
│   ├── components/
│   │   ├── layout/         # Nav, Footer, Container
│   │   ├── forms/          # QualificationForm, ContactForm
│   │   ├── ui/             # Button, Card, Input (Radix UI)
│   │   └── sections/       # Hero, Stats, Testimonials
│   ├── pages/
│   │   ├── index.astro     # Homepage
│   │   ├── free-analysis.astro
│   │   └── [...dynamic pages]
│   ├── content/
│   │   ├── blog/           # MDX blog posts
│   │   └── guides/         # Lead magnet content
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── BlogLayout.astro
│   ├── lib/
│   │   ├── utils.ts
│   │   ├── leadScoring.ts
│   │   └── api/
│   └── styles/
│       └── global.css
├── public/
│   ├── images/
│   └── fonts/
├── .env.example
├── .env.local              # Not committed
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── vercel.json
```

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or pnpm
- Git

### Installation

```bash
# Clone repository
git clone https://github.com/ezhulati/growmyads.git
cd growmyads

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Fill in your API keys in .env.local
# - AIRTABLE_API_KEY
# - AIRTABLE_BASE_ID
# - RESEND_API_KEY
# - PUBLIC_HCAPTCHA_SITEKEY
# - HCAPTCHA_SECRET

# Start development server
npm run dev

# Open browser
open http://localhost:4321
```

### Development Commands

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run type-check   # TypeScript validation
npm run lint         # ESLint check
npm run format       # Prettier format
```

---

## 🏗️ Tech Stack

### Core
- **Framework:** [Astro 5](https://astro.build/) - Fast, SEO-friendly
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first
- **Language:** [TypeScript](https://www.typescriptlang.org/) - Type safety
- **Icons:** [Lucide](https://lucide.dev/) - Beautiful icons

### UI Components
- **React 19** - Interactive islands
- **Radix UI** - Accessible primitives
- **Framer Motion** - Smooth animations
- **Recharts** - Data visualizations

### Forms & Validation
- **React Hook Form** - Form management
- **Zod** - Runtime validation

### Backend Services
- **Airtable** - Lead database
- **Resend** - Email notifications
- **Cal.com** - Calendar booking
- **hCaptcha** - Spam protection

### Analytics & Monitoring
- **Google Analytics 4** - Behavior tracking
- **Vercel Analytics** - Performance monitoring

### Deployment
- **Vercel** - Hosting + edge functions
- **Cloudflare** - DNS + CDN

---

## 📊 Site Features

### Core Pages (46 total)
- Homepage with 12 conversion-optimized sections
- Free Analysis landing page
- About Us
- How We Work
- Services (6 pages)
- Industries (8 pages)
- Pricing + ROI Calculator
- Blog + 7 posts
- Case Studies (5)
- Contact
- Legal (Privacy, Terms)

### Lead Generation System
- 3-step qualification form
- Smart lead scoring (0-100 points)
- Auto-routing (Hot/Warm/Cold/Reject)
- Email automation (7 templates)
- Airtable logging
- Cal.com integration

### Performance Targets
- **Load Time:** <2 seconds
- **Lighthouse:** 95+ (all categories)
- **Accessibility:** WCAG 2.1 AA
- **SEO:** 100/100

---

## 🎨 Design System

### Colors
```css
--color-navy-950: #0A1628;      /* Dark backgrounds */
--color-blue-500: #0066FF;      /* Primary CTA */
--color-green-400: #00FF88;     /* Success/ROI */
--color-gray-50: #F5F7FA;       /* Light backgrounds */
```

### Typography
- **Font:** Inter (variable)
- **Scale:** 12px → 60px
- **Weights:** 400, 500, 600, 700, 900

### Spacing
- **System:** 4px base unit
- **Scale:** 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px

[Full design system →](./docs/03-DESIGN-SYSTEM.md)

---

## 🎯 Milestones & Celebrations

This project uses a milestone-based approach with celebrations:

| Milestone | Progress | Celebration |
|-----------|----------|-------------|
| 1. Foundation | 20% | 🍕 Pizza Party |
| 2. Core Pages | 40% | 🍕🍕 Double Pizza Party |
| 3. Lead Gen System | 60% | 🍕🍕🍕 Triple Pizza Party |
| 4. Content & Services | 80% | 🍕🍕🍕🍕 Mega Pizza Party |
| 5. Polish & Optimization | 95% | 🍕🍕🍕🍕🍕 Ultimate Pizza Party |
| 6. **LAUNCH** | 100% | 🌴 **HAWAII TRIP!** 🌴 |

**Team + Partners All-Expenses-Paid Hawaii Trip at Launch!** ✈️🏝️

[View milestone details →](./docs/10-MILESTONES.md)

---

## ✅ Definition of Done

Every feature must pass **all 85 DoD criteria:**

- ✅ Code Quality (10 items)
- ✅ Functionality (12 items)
- ✅ Design (10 items)
- ✅ Responsiveness (8 items)
- ✅ Accessibility (12 items)
- ✅ Performance (8 items)
- ✅ SEO (8 items)
- ✅ Security (5 items)
- ✅ Testing (7 items)
- ✅ Documentation (5 items)

**No exceptions. No "mostly done". Binary: Done or Not Done.**

[Full DoD checklist →](./docs/04-DEFINITION-OF-DONE.md)

---

## 📈 Progress Tracking

### Current Status
**Overall:** 0% Complete
**Milestone:** Pre-Development
**Next Celebration:** 🍕 at 20%

### Track Progress
- [Feature Checklist](./docs/06-FEATURE-CHECKLIST.md) - Detailed task tracking
- [Milestones](./docs/10-MILESTONES.md) - Celebration schedule
- [GitHub Projects](#) - Kanban board (coming soon)

---

## 🔒 Environment Variables

Required API keys (add to `.env.local`):

```bash
# Airtable
AIRTABLE_API_KEY="keyXXXXXXXXXXXXXXXX"
AIRTABLE_BASE_ID="appXXXXXXXXXXXXXXXX"

# Resend (Email)
RESEND_API_KEY="re_XXXXXXXXXXXXXXXXXXXXXXXX"

# hCaptcha (Spam Protection)
PUBLIC_HCAPTCHA_SITEKEY="XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
HCAPTCHA_SECRET="0xXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"

# Google Analytics
PUBLIC_GA_ID="G-XXXXXXXXXX"
```

[Setup instructions →](./docs/02-PRODUCT-DEVELOPMENT-PLAN.md#api-setup)

---

## 🧪 Testing

### Manual Testing
```bash
# Run type checks
npm run type-check

# Run linter
npm run lint

# Build and check for errors
npm run build

# Preview production build
npm run preview
```

### Test Scenarios
20 complete test scenarios covering:
- Form submissions (all paths)
- Cross-browser compatibility
- Mobile responsiveness
- Accessibility
- Performance
- Analytics

[Full test plan →](./docs/15-TESTING-SCENARIOS.md)

---

## 🚢 Deployment

### Staging
```bash
# Push to main branch
git push origin main

# Vercel auto-deploys to staging
# Preview at: https://growmyads-staging.vercel.app
```

### Production
```bash
# Tag release
git tag v1.0.0
git push --tags

# Deploy to production via Vercel dashboard
# Or: vercel --prod
```

[Deployment checklist →](./docs/09-DEPLOYMENT-CHECKLIST.md)

---

## 🤝 Contributing

This is a private project, but contributions from the team are welcome!

### Workflow
1. Create feature branch: `git checkout -b feature/amazing-feature`
2. Build feature following DoD
3. Call PM Agent for review: "PM review for [feature]"
4. Fix any DoD violations
5. Get PM approval
6. Merge to main

### Code Standards
- TypeScript strict mode
- ESLint + Prettier
- Semantic commits
- 100% DoD compliance

[Quality standards →](./docs/07-QUALITY-STANDARDS.md)

---

## 📞 Support

### Questions?
- Check `/docs` folder first
- Review [PRD](./docs/01-PRD.md)
- Ask in team channel

### Bugs?
- Check [Definition of Done](./docs/04-DEFINITION-OF-DONE.md)
- Review [Testing Scenarios](./docs/15-TESTING-SCENARIOS.md)
- Create GitHub issue

---

## 📜 License

Private project - All rights reserved.

---

## 🎉 Team

Built with ❤️ by the ScaleMyAds team.

**Hawaii countdown:** 100% away! 🌴✈️

---

**Last Updated:** October 24, 2025
