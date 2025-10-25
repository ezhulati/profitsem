import { Container } from '../layout/Container';
import { Heading } from '../ui/Heading';
import { StatCounter } from '../ui/StatCounter';

export function ResultsSection() {
  const results = [
    {
      value: '247',
      suffix: '%',
      label: 'Average ROI',
      variant: 'success' as const,
    },
    {
      prefix: '$',
      value: '2.4M',
      label: 'Client Revenue (Last 30 Days)',
      variant: 'primary' as const,
    },
    {
      value: '4.2',
      suffix: 'x',
      label: 'Average ROAS',
      variant: 'success' as const,
    },
    {
      value: '90',
      label: 'Days to Profitability',
      variant: 'primary' as const,
    },
    {
      value: '68',
      suffix: '%',
      label: 'Reduction in CPA',
      variant: 'success' as const,
    },
    {
      value: '200',
      suffix: '+',
      label: 'Active Clients',
      variant: 'default' as const,
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white">
      <Container>
        <div className="text-center mb-20">
          <Heading as="h2" size="5xl" className="mb-6">
            Results That Speak Louder
          </Heading>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            Real numbers from real campaigns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((result) => (
            <div
              key={result.label}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors"
            >
              <StatCounter {...result} className="justify-center" />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            * Results from client accounts managed Jan-Oct 2025. Individual results may vary.
          </p>
        </div>
      </Container>
    </section>
  );
}
