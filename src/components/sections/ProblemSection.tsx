import { Container } from '../layout/Container';
import { Heading } from '../ui/Heading';

export function ProblemSection() {
  const stats = [
    { number: 'Daily "Optimizations"', label: 'They tweak things constantly, resetting Google\'s learning' },
    { number: 'Hundreds of Keywords', label: 'Fragmented campaigns that starve the AI of data' },
    { number: 'Black Box Reporting', label: 'Metrics you don\'t understand, no clear path to sales' },
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-red-50 to-orange-50">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Main Problem */}
          <div className="text-center mb-16">
            <Heading as="h2" size="5xl" className="mb-8 text-balance">
              Your Agency is Stuck in 2015.
              <span className="block text-red-600 mt-2">
                Here's How You Know.
              </span>
            </Heading>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              They treat your account like a science experiment—constantly changing things to "see what happens." You get reports full of metrics you don't understand.
            </p>
          </div>

          {/* Stat Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border-2 border-red-200 text-center"
              >
                <div className="text-2xl font-bold text-red-600 mb-3">
                  {stat.number}
                </div>
                <p className="text-sm text-gray-700 font-medium leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Text */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 font-semibold">
              Sound familiar? It's not your fault. Most agencies still use tactics from 10 years ago. Google's AI has evolved. They haven't.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
