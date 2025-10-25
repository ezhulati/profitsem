import { Container } from '../layout/Container';
import { Heading } from '../ui/Heading';
import { Button } from '../ui/Button';

export function CaseStudiesPreview() {
  const results = [
    {
      industry: 'E-commerce Furniture',
      metric: 'ROAS',
      before: '1.8x',
      after: '5.6x',
      improvement: '+211%',
      secondary: 'Revenue: $45K → $186K/mo',
      color: 'emerald'
    },
    {
      industry: 'SaaS Platform',
      metric: 'Cost Per Lead',
      before: '$246',
      after: '$89',
      improvement: '-64%',
      secondary: 'Lead Quality: 12% → 51%',
      color: 'blue'
    },
    {
      industry: 'HVAC Services',
      metric: 'Cost Per Job',
      before: '$142',
      after: '$56',
      improvement: '-61%',
      secondary: 'Monthly Jobs: 28 → 80',
      color: 'purple'
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 to-white" id="proof">
      <Container>
        <div className="text-center mb-20">
          <Heading as="h2" size="5xl" className="mb-6">
            Will This Work For My Business?
          </Heading>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Here's what happened with three completely different industries.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
          {results.map((result) => (
            <div key={result.industry} className="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-emerald-500 hover:shadow-2xl transition-all duration-300 text-center">
              {/* Industry Badge */}
              <div className="mb-8">
                <span className={`inline-block px-4 py-2 bg-${result.color}-100 text-${result.color}-700 text-sm font-bold rounded-lg`}>
                  {result.industry}
                </span>
              </div>

              {/* Metric Label */}
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
                {result.metric}
              </p>

              {/* Before/After Display */}
              <div className="mb-6">
                <div className="flex items-end justify-center gap-4 mb-2">
                  <div className="text-2xl font-bold text-gray-400 line-through">
                    {result.before}
                  </div>
                  <svg className="w-6 h-6 text-emerald-500 mb-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <div className="text-5xl font-bold text-gray-900">
                    {result.after}
                  </div>
                </div>

                {/* Improvement Badge */}
                <div className="flex justify-center">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-bold rounded-full">
                    {result.improvement}
                  </span>
                </div>
              </div>

              {/* Secondary Metric */}
              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 font-medium">
                  {result.secondary}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="primary" size="lg" href="/case-studies">
            View Full Case Studies
          </Button>
        </div>
      </Container>
    </section>
  );
}
