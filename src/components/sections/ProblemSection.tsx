import { Container } from '../layout/Container';
import { Heading } from '../ui/Heading';

export function ProblemSection() {
  const stats = [
    { number: '67%', label: 'Of ad budgets wasted on wrong keywords' },
    { number: '3-6mo', label: 'Most agencies take to see results' },
    { number: '80%', label: 'Of campaigns never see positive ROI' },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-red-50 to-orange-50">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Main Problem */}
          <div className="text-center mb-12">
            <Heading as="h2" size="5xl" className="mb-6 text-balance">
              You Shouldn't Need a PhD
              <span className="block text-red-600 mt-2">
                To Understand Your Own Ad Account
              </span>
            </Heading>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              The dashboard is confusing. The reports make no sense. And you have no idea if you're getting ripped off.
            </p>
          </div>

          {/* Stat Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border-2 border-red-200 text-center"
              >
                <div className="text-4xl font-bold text-red-600 mb-2">
                  {stat.number}
                </div>
                <p className="text-sm text-gray-700 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Text */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 font-semibold">
              Sound familiar? You're not alone. And it's not your fault.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
