import { Container } from '../layout/Container';
import { Heading } from '../ui/Heading';
import { Badge } from '../ui/Badge';

export function ProcessSection() {
  const steps = [
    {
      phase: 'Week 1-2',
      title: 'Deep Dive Analysis',
      description: 'Comprehensive audit of your current setup, target audience research, and competitor analysis. We identify profit opportunities others miss.',
      items: [
        'Account audit & profit leak identification',
        'Customer journey mapping',
        'Competitor intelligence gathering',
        'Tracking & attribution setup',
      ],
    },
    {
      phase: 'Week 3-4',
      title: 'Campaign Architecture',
      description: 'Strategic campaign structure designed for profit. We build conversion-focused campaigns with precise targeting.',
      items: [
        'Profit-optimized campaign structure',
        'High-intent keyword research',
        'Ad copy testing framework',
        'Landing page recommendations',
      ],
    },
    {
      phase: 'Week 5-8',
      title: 'Launch & Optimize',
      description: 'Campaigns go live with aggressive testing and optimization. Daily monitoring ensures peak performance.',
      items: [
        'Phased campaign launch',
        'A/B testing ads & landing pages',
        'Bid strategy optimization',
        'Quality Score improvements',
      ],
    },
    {
      phase: 'Week 9-12',
      title: 'Scale & Profit',
      description: 'Double down on what works. Scale profitable campaigns while cutting waste. This is where ROI accelerates.',
      items: [
        'Profitable campaign scaling',
        'Audience expansion testing',
        'Advanced bid automation',
        'Monthly strategy reviews',
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
