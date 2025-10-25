import { Container } from '../layout/Container';
import { Heading } from '../ui/Heading';
import { Card } from '../ui/Card';
import { Icon } from '../ui/Icon';

export function IndustriesSection() {
  const industries = [
    {
      icon: 'chart' as const,
      name: 'E-commerce',
      description: 'Shopping campaigns, feed optimization, and profit-focused ROAS targets',
      results: 'Avg. 4.2x ROAS',
    },
    {
      icon: 'rocket' as const,
      name: 'SaaS & Software',
      description: 'Lead generation, free trial optimization, and MRR growth campaigns',
      results: 'Avg. $89 CPL',
    },
    {
      icon: 'users' as const,
      name: 'B2B Services',
      description: 'High-value lead generation with quality over quantity approach',
      results: '51% SQL rate',
    },
    {
      icon: 'shield' as const,
      name: 'Home Services',
      description: 'Local service ads, call tracking, and booked job optimization',
      results: 'Avg. $56 per job',
    },
    {
      icon: 'dollar' as const,
      name: 'Finance & Insurance',
      description: 'Compliant campaigns focused on qualified applications',
      results: '3.8x conversion rate',
    },
    {
      icon: 'lightning' as const,
      name: 'Health & Wellness',
      description: 'Patient acquisition and appointment booking campaigns',
      results: '68% lower CPA',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center mb-16">
          <Heading as="h2" size="5xl" className="mb-4">
            Industries We Serve
          </Heading>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deep expertise in high-value industries where Google Ads drives real profit
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <Card key={industry.name} variant="bordered" padding="lg" className="hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Icon name={industry.icon} size="lg" className="text-white" />
                </div>
              </div>

              <Heading as="h3" size="xl" className="mb-2">
                {industry.name}
              </Heading>

              <p className="text-gray-600 mb-4 text-sm">
                {industry.description}
              </p>

              <div className="flex items-center gap-2 text-emerald-600 text-sm font-semibold">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg>
                {industry.results}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
