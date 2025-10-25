import { Container } from '../layout/Container';
import { Heading } from '../ui/Heading';
import { Card } from '../ui/Card';
import { Icon } from '../ui/Icon';

export function ServicesSection() {
  const services = [
    {
      title: 'Week 1-2',
      phase: 'The Audit',
      description: 'Pull every report. Check every keyword. Find every leak.',
      outcomes: [
        'Screen recording walking through your account',
        'Spreadsheet showing waste by campaign',
        'Tracking audit (most accounts are broken)',
        '30-min call explaining findings'
      ]
    },
    {
      title: 'Week 3-8',
      phase: 'The Fix',
      description: 'Cut bad keywords. Fix tracking. Rebuild campaigns.',
      outcomes: [
        'Monday: Performance review',
        'Tuesday: Campaign changes',
        'Friday: Week recap + screenshots',
        'Monthly: 30-min strategy session'
      ]
    },
    {
      title: 'Month 3+',
      phase: 'Growth',
      description: 'Scale what works. Test new stuff. Handle Google updates.',
      outcomes: [
        'Weekly reporting continues',
        'New tests every week',
        'Direct Slack access',
        'Cancel with 30 days notice'
      ]
    },
  ];

  return (
    <section className="py-24 bg-gray-50" id="solution">
      <Container>
        <div className="text-center mb-16">
          <Heading as="h2" size="5xl" className="mb-4">
            Here's Exactly What We Do
          </Heading>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Week by week. Nothing hidden.
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

              <div className="mb-6">
                <p className="text-sm font-bold text-emerald-600 mb-2">{service.title}</p>
                <Heading as="h3" size="2xl" className="text-gray-900">
                  {service.phase}
                </Heading>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                {service.description}
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
