import { Container } from '../layout/Container';
import { Heading } from '../ui/Heading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export function CaseStudiesPreview() {
  const results = [
    {
      industry: 'Furniture Store',
      before: 'Spending $12K/month. Getting $1.80 back per dollar.',
      after: 'Now getting $5.60 back. Monthly sales went from $45K to $186K.',
    },
    {
      industry: 'SaaS Company',
      before: 'Paying $246 per lead. Only 12% were qualified.',
      after: 'Now paying $89 per lead. 51% are qualified.',
    },
    {
      industry: 'HVAC Installer',
      before: 'Spending $142 per job. Getting 28 jobs per month.',
      after: 'Now spending $56 per job. Getting 80 jobs per month.',
    },
  ];

  return (
    <section className="py-24 bg-white" id="proof">
      <Container>
        <div className="text-center mb-16">
          <Heading as="h2" size="5xl" className="mb-4">
            Will This Work For My Business?
          </Heading>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here's what happened with three different industries.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-12">
          {results.map((result) => (
            <div key={result.industry} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full mb-4">
                  {result.industry}
                </span>
              </div>

              <div className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r">
                  <p className="text-xs font-bold text-red-600 mb-1">BEFORE</p>
                  <p className="text-sm text-gray-700">{result.before}</p>
                </div>

                <div className="flex justify-center">
                  <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>

                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r">
                  <p className="text-xs font-bold text-emerald-600 mb-1">AFTER</p>
                  <p className="text-sm font-semibold text-gray-900">{result.after}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="ghost" size="lg" href="/case-studies">
            See Full Case Studies
          </Button>
        </div>
      </Container>
    </section>
  );
}
