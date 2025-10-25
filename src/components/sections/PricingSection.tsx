import { Container } from '../layout/Container';
import { Heading } from '../ui/Heading';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export function PricingSection() {
  const plans = [
    {
      name: 'Growth',
      description: 'Perfect for businesses ready to scale profitably',
      price: '$2,500',
      period: '/month',
      popular: false,
      features: [
        'Up to $20K/month ad spend',
        'Google Search & Display campaigns',
        'Monthly strategy sessions',
        'Landing page audit',
        'Conversion tracking setup',
        'Monthly performance reports',
      ],
    },
    {
      name: 'Scale',
      description: 'For businesses serious about dominating their market',
      price: '$4,500',
      period: '/month',
      popular: true,
      features: [
        'Up to $50K/month ad spend',
        'Full Google Ads suite',
        'Bi-weekly strategy sessions',
        'A/B testing & CRO',
        'Advanced conversion tracking',
        'Dedicated account manager',
        'Priority support',
        'Custom reporting dashboard',
      ],
    },
    {
      name: 'Enterprise',
      description: 'Custom solutions for high-growth companies',
      price: 'Custom',
      period: '',
      popular: false,
      features: [
        'Unlimited ad spend',
        'Multi-platform campaigns',
        'Weekly strategy sessions',
        'Full-funnel optimization',
        'Custom tracking & attribution',
        'Dedicated team',
        '24/7 support',
        'Quarterly business reviews',
      ],
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <Heading as="h2" size="5xl" className="mb-4">
            Transparent Pricing, Zero Surprises
          </Heading>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flat-rate management fees. No hidden charges. No percentage-based pricing.
            Cancel anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              variant="bordered"
              padding="lg"
              className={plan.popular ? 'border-blue-500 border-2 relative' : ''}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge variant="info" size="md">
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="mb-6">
                <Heading as="h3" size="2xl" className="mb-2">
                  {plan.name}
                </Heading>
                <p className="text-gray-600 text-sm">
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-gray-600">{plan.period}</span>}
                </div>
              </div>

              <Button
                variant={plan.popular ? 'primary' : 'ghost'}
                size="lg"
                fullWidth
                className="mb-6"
              >
                {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
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
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
          <p className="text-blue-900">
            <span className="font-semibold">90-Day Money-Back Guarantee:</span> If we don't improve
            your ROI within 90 days, you get a full refund. No questions asked.
          </p>
        </div>
      </Container>
    </section>
  );
}
