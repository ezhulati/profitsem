import { Container } from '../layout/Container';
import { Heading } from '../ui/Heading';
import { Card } from '../ui/Card';
import { Icon } from '../ui/Icon';

export function ServicesSection() {
  const services = [
    {
      icon: 'target' as const,
      title: 'We Fix Your Campaigns',
      metric: '3x More Sales',
      description: 'Complete campaign overhaul in 30 days. We eliminate wasted spend, fix tracking, and scale what actually converts. Average client triples their sales in 90 days.',
      outcomes: [
        'Stop spending on clicks that don\'t buy',
        'Fix tracking so you see real results',
        'Rebuild campaigns that actually sell',
        'Scale what works, cut what doesn\'t'
      ]
    },
    {
      icon: 'trending-up' as const,
      title: 'We Scale What Works',
      metric: '3-5x Revenue Growth',
      description: 'Once profitable, we scale fast. Expand to new customers while keeping your cost per sale low. Growth without waste.',
      outcomes: [
        'Reach more buyers without raising costs',
        'Test new ways to get customers',
        'Keep cost per sale low as you grow',
        'Hit $100k+/month profitably'
      ]
    },
    {
      icon: 'shield' as const,
      title: 'We Guarantee Results',
      metric: '90-Day Money-Back',
      description: 'If we don\'t triple your sales from Google Ads in 90 days, you get every penny back. No excuses. We only win when you win.',
      outcomes: [
        'Triple sales or full refund',
        'No long-term contracts',
        'Cancel anytime, no penalty',
        'Clear weekly reports you can understand'
      ]
    },
  ];

  return (
    <section className="py-24 bg-white" id="solution">
      <Container>
        <div className="text-center mb-16">
          <Heading as="h2" size="5xl" className="mb-4">
            How We Triple Your Sales in 90 Days
          </Heading>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three steps. Guaranteed results. No agency BS.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              variant="bordered"
              padding="lg"
              className="magnetic-hover-sm smooth-transition hover:shadow-xl border-2 fade-in-scroll"
            >
              {/* Step Number */}
              <div className="mb-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
                <div className="text-sm font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                  {service.metric}
                </div>
              </div>

              <Heading as="h3" size="2xl" className="mb-3">
                {service.title}
              </Heading>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Outcomes */}
              <ul className="space-y-2">
                {service.outcomes.map((outcome, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-700">{outcome}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
