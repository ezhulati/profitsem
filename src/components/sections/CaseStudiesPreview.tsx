import { Container } from '../layout/Container';
import { Heading } from '../ui/Heading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export function CaseStudiesPreview() {
  const caseStudies = [
    {
      industry: 'E-commerce',
      company: 'Premium Furniture Retailer',
      challenge: 'High ad spend with poor ROAS',
      result: '312% increase in ROAS in 60 days',
      metrics: [
        { label: 'ROAS', before: '1.8x', after: '5.6x' },
        { label: 'Monthly Revenue', before: '$45K', after: '$186K' },
        { label: 'CPA', before: '$78', after: '$24' },
      ],
    },
    {
      industry: 'SaaS',
      company: 'B2B Analytics Platform',
      challenge: 'Low-quality leads, wasted budget',
      result: '4.2x increase in qualified demos',
      metrics: [
        { label: 'SQL Rate', before: '12%', after: '51%' },
        { label: 'CPL', before: '$246', after: '$89' },
        { label: 'MRR from Ads', before: '$12K', after: '$68K' },
      ],
    },
    {
      industry: 'Home Services',
      company: 'HVAC Installation Company',
      challenge: 'Seasonal volatility, inconsistent leads',
      result: '186% increase in booked jobs',
      metrics: [
        { label: 'Cost per Job', before: '$142', after: '$56' },
        { label: 'Conversion Rate', before: '3.2%', after: '9.1%' },
        { label: 'Monthly Jobs', before: '28', after: '80' },
      ],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center mb-16">
          <Heading as="h2" size="5xl" className="mb-4">
            Real Results, Real Businesses
          </Heading>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've transformed Google Ads from cost centers into profit engines.
          </p>
        </div>

        <div className="bento-grid grid-cols-1 lg:grid-cols-3 mb-12">
          {/* Featured Case - Large Card */}
          <Card
            key={caseStudies[0].company}
            variant="bordered"
            padding="lg"
            className="bento-item-large bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-300 hover-lift fade-in-scroll"
          >
            <Badge variant="info" size="sm" className="mb-6">
              {caseStudies[0].industry}
            </Badge>

            <Heading as="h3" size="3xl" className="mb-4">
              {caseStudies[0].company}
            </Heading>

            <p className="text-base text-gray-700 mb-6">
              <span className="font-semibold">Challenge:</span> {caseStudies[0].challenge}
            </p>

            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 mb-8 pulse-glow">
              <p className="text-white font-bold text-xl">
                {caseStudies[0].result}
              </p>
            </div>

            <div className="space-y-4">
              {caseStudies[0].metrics.map((metric) => (
                <div key={metric.label} className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">{metric.label}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400 text-sm">{metric.before}</span>
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="font-bold text-green-600 text-lg">{metric.after}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Other Cases - Standard Cards */}
          {caseStudies.slice(1).map((study, index) => (
            <Card
              key={study.company}
              variant="bordered"
              padding="lg"
              className={`magnetic-hover-sm smooth-transition hover:shadow-xl ${
                index === 0 ? 'slide-in-left' : 'slide-in-right'
              }`}
            >
              <Badge variant="info" size="sm" className="mb-4">
                {study.industry}
              </Badge>

              <Heading as="h3" size="xl" className="mb-2">
                {study.company}
              </Heading>

              <p className="text-sm text-gray-600 mb-4">
                <span className="font-semibold">Challenge:</span> {study.challenge}
              </p>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-green-800 font-semibold text-sm">
                  {study.result}
                </p>
              </div>

              <div className="space-y-3">
                {study.metrics.map((metric) => (
                  <div key={metric.label} className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">{metric.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">{metric.before}</span>
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold text-green-600">{metric.after}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="primary" size="lg" href="/case-studies">
            View All Case Studies
          </Button>
        </div>
      </Container>
    </section>
  );
}
