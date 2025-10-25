import { Container } from '../layout/Container';
import { Heading } from '../ui/Heading';
import { Badge } from '../ui/Badge';

export function ProcessSection() {
  const steps = [
    {
      phase: 'Week 1-2',
      title: 'Connect The Dots',
      description: 'Success starts with accurate data. We integrate your CRM so Google sees which leads become customers, identify budget inefficiencies, and build complete attribution tracking.',
      whatThisMeans: 'This is foundation week. We\'re not launching campaigns yet—we\'re building the data infrastructure that enables everything else. Quality data is the difference between guessing and knowing.',
      items: [
        'CRM integration: Connect sales data so Google learns from actual customers',
        'Waste analysis: Identify budget inefficiencies and optimization opportunities',
        'Attribution tracking: Build complete visibility from click to customer',
        '90-day roadmap: Set clear expectations for each phase',
      ],
    },
    {
      phase: 'Week 3-6',
      title: 'Build The Foundation',
      description: 'We launch consolidated campaigns designed to feed Google\'s AI high-quality data. Then comes the critical part: strategic patience while the system learns customer patterns.',
      whatThisMeans: 'This phase requires discipline. The AI is learning, which means results will fluctuate. Resisting the urge to make daily changes is what allows the system to identify true patterns.',
      items: [
        'Consolidated structure: Campaigns grouped by customer intent for maximum data flow',
        'High-intent keywords: Focused targeting on buyer signals',
        'Learning period: AI begins identifying customer characteristics',
        'Performance monitoring: Track learning progress without interference',
      ],
    },
    {
      phase: 'Week 7-9',
      title: 'Let AI Take Over',
      description: 'Smart bidding activates. Google\'s AI now automatically adjusts bids to hit your target cost-per-acquisition, using all the customer data from Phases 1-2.',
      whatThisMeans: 'This is when results stabilize. Customer acquisition costs become predictable. Daily volatility decreases. The AI is now proactively optimizing based on learned patterns.',
      items: [
        'Smart bidding activation: AI manages pricing automatically',
        'Conversion focus: System optimizes for customers, not just clicks',
        'Cost stabilization: Customer acquisition costs become consistent',
        'Pattern recognition: AI finds high-value prospects efficiently',
      ],
    },
    {
      phase: 'Week 10-12',
      title: 'Scale What\'s Working',
      description: 'With the system trained and costs predictable, we expand strategically. The math works, so scaling becomes a confident decision rather than a gamble.',
      whatThisMeans: 'You can now forecast revenue from ad spend increases. New customer acquisition is predictable. This is when growth accelerates with controlled risk.',
      items: [
        'Strategic expansion: Test new audiences AI has identified',
        'Budget scaling: Increase spend with predictable outcomes',
        'Advanced targeting: Lookalike audiences based on customer data',
        'Accelerated growth: Results compound as AI continuously improves',
      ],
    },
    {
      phase: 'Month 4+',
      title: 'Predictable Growth Engine',
      description: 'The system is mature. We focus on strategic guidance and system maintenance while AI handles the optimization. You have predictable, scalable customer acquisition.',
      whatThisMeans: 'You can confidently plan business growth around predictable acquisition costs. The system runs efficiently with strategic oversight rather than constant intervention.',
      items: [
        'Strategic reviews: Monthly alignment with business goals',
        'System maintenance: Keep AI trained as markets evolve',
        'Expansion testing: Explore new channels when appropriate',
        'Full transparency: Complete visibility into performance',
      ],
    },
  ];

  return (
    <section className="py-32 bg-gray-50">
      <Container>
        <div className="text-center mb-20">
          <Heading as="h2" size="5xl" className="mb-6">
            90-Day Roadmap
          </Heading>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            From audit to profit in 90 days.
          </p>
        </div>

        <div className="grid gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-emerald-500 hover:shadow-2xl transition-all"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Step Number */}
                <div className="flex-shrink-0 flex justify-center lg:justify-start">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="info" size="sm">
                      {step.phase}
                    </Badge>
                    <Heading as="h3" size="2xl">
                      {step.title}
                    </Heading>
                  </div>

                  <p className="text-gray-600 mb-4">
                    {step.description}
                  </p>

                  <div className="bg-gradient-to-br from-emerald-50 to-blue-50 border-l-4 border-emerald-500 rounded-r-lg p-4 mb-6">
                    <p className="text-xs font-bold text-emerald-700 uppercase tracking-wide mb-2">What This Means For You</p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {step.whatThisMeans}
                    </p>
                  </div>

                  <ul className="grid sm:grid-cols-2 gap-3">
                    {step.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <svg
                          className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
