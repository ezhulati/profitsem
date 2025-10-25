import { Container } from '../layout/Container';
import { Heading } from '../ui/Heading';
import { Badge } from '../ui/Badge';

export function ProcessSection() {
  const steps = [
    {
      phase: 'Week 1-2',
      title: 'Connect The Dots',
      description: 'Most accounts are broken from day one. You\'re tracking form fills, but Google doesn\'t know which forms became customers. You\'re optimizing for clicks, not sales. We fix that first.',
      whatThisMeans: 'Week 1-2 is setup. No campaigns running yet. We\'re building the foundation that everything else depends on. Without this, the rest doesn\'t work.',
      items: [
        'Track real sales: Connect your CRM so we see which ads lead to paying customers',
        'Find the waste: Audit shows where you\'re bleeding money (usually 30-50% of budget)',
        'Fix broken tracking: Most accounts can\'t accurately attribute sales to ads',
        'Set expectations: Here\'s the realistic 90-day timeline',
      ],
    },
    {
      phase: 'Week 3-6',
      title: 'Build The Foundation',
      description: 'Your old agency launched 20 campaigns with 500 keywords. That fragments your data and starves Google\'s AI. We do the opposite: Fewer campaigns, more data per campaign. Then we wait while Google learns.',
      whatThisMeans: 'This is the hardest month for clients. Nothing\'s broken - Google\'s learning. But you\'re used to agencies changing things daily. We don\'t. Patience here = results later.',
      items: [
        'Simplified structure: Consolidated campaigns grouped by customer intent',
        'High-quality keywords: Fewer, better keywords focused on buyers',
        'Stop the tweaking: No more daily \'optimizations\' that reset learning',
        'Initial learning period: Google starts figuring out who your customers are',
      ],
    },
    {
      phase: 'Week 7-9',
      title: 'Let AI Take Over',
      description: 'Manual bidding = you guessing what each click is worth. Smart bidding = Google automatically adjusting prices to hit your goals. But it only works if Phases 1-2 were done right.',
      whatThisMeans: 'Week 7-9 is when things start clicking. Your cost-per-sale becomes predictable. Less daily volatility. Google\'s proactively finding ideal customers.',
      items: [
        'Smart bidding activation: Google manages pricing automatically',
        'Conversion optimization: Focus on customers, not clicks',
        'Predictable cost-per-sale: Your customer acquisition cost stabilizes',
        'AI pattern recognition: Google finds customers you wouldn\'t have targeted manually',
      ],
    },
    {
      phase: 'Week 10-12',
      title: 'Scale What\'s Working',
      description: 'Most agencies try to scale in Week 2 and blow your budget on garbage traffic. We wait until Week 10 when the system is trained and the math is predictable. Then we expand confidently.',
      whatThisMeans: 'This is \'unlock\' month. You can confidently spend more because you know what revenue to expect. New customer acquisition becomes predictable.',
      items: [
        'Expansion testing: New customer types Google discovered',
        'Budget scaling: Increase spend without increasing risk',
        'Advanced targeting: Lookalike audiences based on real customers',
        'Growth acceleration: Revenue compounds as AI gets smarter',
      ],
    },
    {
      phase: 'Month 4+',
      title: 'Predictable Growth Engine',
      description: 'We\'re not optimizing campaigns daily. We\'re monitoring performance and maintaining the system. The AI does the heavy lifting. We guide it strategically based on your business goals.',
      whatThisMeans: 'You know what revenue to expect from ad spend. We\'re not in a black box. You can plan your business around predictable customer acquisition.',
      items: [
        'Monthly strategy reviews: Align Google Ads with business priorities',
        'System maintenance: Keep AI trained as business evolves',
        'Expansion opportunities: Test new channels when timing is right',
        'Complete transparency: You see everything, understand everything',
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
