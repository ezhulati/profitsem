import { Container } from '../layout/Container';
import { Heading } from '../ui/Heading';
import { Card } from '../ui/Card';
import { Icon } from '../ui/Icon';

export function ServicesSection() {
  const services = [
    {
      title: 'Week 1-2',
      phase: 'Connect The Dots',
      description: 'Your agency shows you clicks and conversions. We show you which ads lead to actual paying customers.',
      details: 'We connect your CRM so Google knows who became a customer (not just who filled a form). We find where you\'re wasting money right now. We set up tracking so there\'s no more guessing.',
      outcomes: [
        'CRM integration (track actual sales, not form fills)',
        'Waste identification report (where you\'re bleeding money)',
        'Tracking audit (most accounts are broken)',
        '90-day roadmap (phases 2-5)'
      ]
    },
    {
      title: 'Week 3-9',
      phase: 'Train Google\'s AI',
      description: 'Most agencies panic and start tweaking things on Day 3. That\'s why your ads never improve.',
      details: 'We do the opposite: We feed Google high-quality data about your actual customers, then we let it learn. No constant changes. No resetting the system. Just patience while Google figures out who your ideal customers are.',
      outcomes: [
        'Simplified campaign structure (consolidated, not fragmented)',
        'Smart bidding implementation (AI-driven pricing)',
        'Weekly reports (conversions → sales, not vanity metrics)',
        'Strategic patience (we don\'t panic on week 2)'
      ]
    },
    {
      title: 'Week 10+',
      phase: 'Predictable Growth',
      description: 'This is when it clicks. Google\'s AI knows who your customers are. Your cost per sale becomes predictable.',
      details: 'You can confidently increase spend because the math works. We\'re not tweaking campaigns daily. We\'re monitoring performance and feeding the system better data as your business evolves.',
      outcomes: [
        'Predictable cost-per-customer math',
        'Expansion into new customer types Google discovered',
        'Monthly strategy reviews (not daily micro-management)',
        'Transparent reporting (you see everything)'
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
