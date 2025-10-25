import { Container } from '../layout/Container';
import { Heading } from '../ui/Heading';
import { Card } from '../ui/Card';
import { Icon } from '../ui/Icon';

export function ServicesSection() {
  const services = [
    {
      title: 'Week 1-2',
      phase: 'Connect The Dots',
      description: 'Everything starts with quality data. We connect Google Ads to your actual sales, not just form fills.',
      details: 'CRM integration shows Google which leads became customers. Comprehensive tracking audit identifies gaps in attribution. Waste analysis reveals where budget is being spent inefficiently. This foundation determines everything that follows.',
      outcomes: [
        'CRM integration (track actual sales)',
        'Waste identification report',
        'Complete tracking audit',
        'Custom 90-day roadmap'
      ]
    },
    {
      title: 'Week 3-9',
      phase: 'Train Google\'s AI',
      description: 'AI learns best from consolidated, high-quality data. We build the structure and give it time to learn patterns.',
      details: 'Simplified campaign architecture focuses AI on high-intent signals. Smart bidding automatically optimizes toward your goals. Strategic patience allows the system to identify customer patterns without interference. This learning phase is critical.',
      outcomes: [
        'Consolidated campaign structure',
        'Smart bidding implementation',
        'Weekly performance reports',
        'AI learning cycle completion'
      ]
    },
    {
      title: 'Week 10+',
      phase: 'Predictable Growth',
      description: 'With AI trained on your customer data, costs stabilize and scaling becomes predictable.',
      details: 'Customer acquisition costs become consistent and forecastable. Google\'s AI identifies expansion opportunities based on learned patterns. Strategic guidance replaces daily micro-management. Revenue scales confidently as the system matures.',
      outcomes: [
        'Predictable cost-per-customer',
        'AI-driven expansion opportunities',
        'Monthly strategy reviews',
        'Complete performance transparency'
      ]
    },
  ];

  return (
    <section className="py-24 bg-gray-50" id="solution">
      <Container>
        <div className="text-center mb-16">
          <Heading as="h2" size="5xl" className="mb-4">
            Here's How We're Different
          </Heading>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We work WITH Google's AI, not against it. Here's what that actually means for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-emerald-500 hover:shadow-xl transition-all duration-300"
            >
              {/* Step Number */}
              <div className="mb-6 flex justify-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl shadow-lg">
                  <span className="text-white font-bold text-2xl">{index + 1}</span>
                </div>
              </div>

              <div className="mb-6 text-center">
                <p className="text-sm font-bold text-emerald-600 mb-2">{service.title}</p>
                <Heading as="h3" size="2xl" className="text-gray-900">
                  {service.phase}
                </Heading>
              </div>

              <p className="text-gray-900 mb-4 leading-relaxed font-semibold text-center">
                {service.description}
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed text-sm text-center">
                {service.details}
              </p>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">Deliverables</p>
                <ul className="space-y-3">
                  {service.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-3">
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
                      <span className="text-sm text-gray-700 leading-tight">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
