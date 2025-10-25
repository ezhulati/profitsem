import { Container } from '../layout/Container';
import { Heading } from '../ui/Heading';
import { Icon } from '../ui/Icon';

export function WhyChooseSection() {
  const reasons = [
    {
      icon: 'target' as const,
      title: 'Profit-First Approach',
      description: 'We optimize for revenue and profit, not vanity metrics like clicks and impressions. Your ROI is our only KPI that matters.',
    },
    {
      icon: 'shield' as const,
      title: '90-Day Money-Back Guarantee',
      description: 'We\'re so confident in our process that we offer a full refund if we don\'t improve your ROI within 90 days. Zero risk.',
    },
    {
      icon: 'dollar' as const,
      title: 'Transparent Flat-Rate Pricing',
      description: 'No percentage-based fees. No incentive to increase your spend unnecessarily. Our success is tied to your profit, not your budget.',
    },
    {
      icon: 'trophy' as const,
      title: 'Google Premier Partner',
      description: 'We\'re in the top 3% of Google Partners with direct access to Google support and beta features for our clients.',
    },
    {
      icon: 'chart' as const,
      title: 'Data-Driven Optimization',
      description: 'Every decision backed by data. Advanced tracking, attribution modeling, and weekly optimization based on what actually drives profit.',
    },
    {
      icon: 'users' as const,
      title: 'Dedicated Account Team',
      description: 'You get a dedicated account manager and specialist team, not a revolving door of junior employees learning on your dime.',
    },
    {
      icon: 'lightning' as const,
      title: 'Rapid Implementation',
      description: 'We move fast. Most clients see measurable improvements within 30-45 days, not 6 months of "testing".',
    },
    {
      icon: 'clock' as const,
      title: 'No Long-Term Contracts',
      description: 'Month-to-month service. We earn your business every month through results, not by locking you into a contract.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white">
      <Container>
        <div className="text-center mb-16">
          <Heading as="h2" size="5xl" className="mb-4">
            Why Leading Brands Choose ProfitSEM
          </Heading>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're not just another Google Ads agency. Here's what makes us different.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="text-center">
              <div className="mb-4 inline-flex">
                <div className="w-16 h-16 bg-white/10 backdrop-blur border border-white/20 rounded-xl flex items-center justify-center">
                  <Icon name={reason.icon} size="lg" className="text-blue-400" />
                </div>
              </div>

              <Heading as="h3" size="lg" className="mb-2">
                {reason.title}
              </Heading>

              <p className="text-gray-400 text-sm">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
