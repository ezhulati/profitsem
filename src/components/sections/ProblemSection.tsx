import { Container } from '../layout/Container';
import { Heading } from '../ui/Heading';

export function ProblemSection() {
  const requirements = [
    { title: 'Quality Data', description: 'Google\'s AI needs real sales data, not just form fills. CRM integration is foundational.' },
    { title: 'Consolidated Structure', description: 'High-volume campaigns feed AI better data. Fragmentation starves the learning process.' },
    { title: 'Strategic Patience', description: 'AI needs time to learn patterns. Constant changes reset progress and delay results.' },
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-blue-50 to-indigo-50">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Main Message */}
          <div className="text-center mb-16">
            <Heading as="h2" size="5xl" className="mb-8 text-balance">
              Google Ads in 2025 Requires a
              <span className="block text-blue-600 mt-2">
                Different Approach
              </span>
            </Heading>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Google's AI has evolved dramatically. Success now depends on feeding the system high-quality data, building smart campaign structures, and giving AI time to learn.
            </p>
          </div>

          {/* Requirement Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {requirements.map((req, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border-2 border-blue-200 text-center hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <div className="text-2xl font-bold text-blue-600 mb-3">
                  {req.title}
                </div>
                <p className="text-sm text-gray-700 font-medium leading-relaxed">
                  {req.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Text */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 font-semibold">
              We've spent years mastering this AI-driven approach. It's how we deliver predictable results in 90 days.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
