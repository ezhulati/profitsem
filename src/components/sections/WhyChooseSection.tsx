import { Container } from '../layout/Container';
import { Heading } from '../ui/Heading';
import { Icon } from '../ui/Icon';

export function WhyChooseSection() {
  const reasons = [
    {
      icon: 'target' as const,
      title: 'Profit-First',
      description: 'We optimize for revenue and profit, not vanity metrics. Your ROI is our only KPI.',
    },
    {
      icon: 'dollar' as const,
      title: 'Flat-Rate Pricing',
      description: 'No percentage fees. No incentive to waste your budget. We profit when you profit.',
    },
    {
      icon: 'trophy' as const,
      title: 'Premier Partner',
      description: 'Top 3% of Google Partners with direct access to Google support and beta features.',
    },
    {
      icon: 'chart' as const,
      title: 'Data-Driven',
      description: 'Every decision backed by data. Weekly optimization based on what drives profit.',
    },
    {
      icon: 'users' as const,
      title: 'Dedicated Team',
      description: 'Your own account manager and specialist team. Not junior employees.',
    },
    {
      icon: 'lightning' as const,
      title: 'Fast Results',
      description: 'Most clients see improvements within 30-45 days, not 6 months of testing.',
    },
    {
      icon: 'clock' as const,
      title: 'No Contracts',
      description: 'Month-to-month service. We earn your business through results.',
    },
    {
      icon: 'shield' as const,
      title: 'Transparent',
      description: 'Weekly reporting. Direct Slack access. See exactly where your money goes.',
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white">
      <Container>
        <div className="text-center mb-20">
          <Heading as="h2" size="5xl" className="mb-6">
            Why Choose ProfitSEM
          </Heading>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            Not just another Google Ads agency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {reasons.map((reason) => (
            <div key={reason.title} className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 backdrop-blur border-2 border-emerald-400/30 rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <Icon name={reason.icon} size="lg" className="text-emerald-400" />
                </div>
              </div>

              <Heading as="h3" size="xl" className="mb-3 font-bold">
                {reason.title}
              </Heading>

              <p className="text-gray-400 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
