import { Container } from '../layout/Container';
import { Heading } from '../ui/Heading';

export function ProblemSection() {
  const problems = [
    {
      title: 'You Hit a Plateau',
      description: 'Growth stopped months ago. You\'ve tried adjusting bids, adding keywords, changing budgets—nothing moves the needle.',
      icon: '📉'
    },
    {
      title: 'Results Are Unpredictable',
      description: 'One month you crush it, next month tanks. You can\'t rely on Google Ads for consistent customer acquisition.',
      icon: '🎲'
    },
    {
      title: 'You\'re Outgrowing Your Setup',
      description: 'Your agency or in-house team built this 3 years ago. Google\'s AI evolved—your account structure didn\'t.',
      icon: '⚙️'
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 to-gray-100">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Main Message */}
          <div className="text-center mb-16">
            <Heading as="h2" size="5xl" className="mb-8 text-balance">
              Why Your Account<br/>
              <span className="block text-navy-950 mt-2">
                Stopped Scaling
              </span>
            </Heading>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              If you're spending $10k+ per month but stuck at the same revenue for 6+ months, here's what's probably happening:
            </p>
          </div>

          {/* Problem Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-navy-500 hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-4 text-center">
                  {problem.icon}
                </div>
                <div className="text-xl font-bold text-navy-950 mb-3 text-center">
                  {problem.title}
                </div>
                <p className="text-base text-gray-700 leading-relaxed text-center">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Text */}
          <div className="text-center mt-16 max-w-3xl mx-auto">
            <p className="text-2xl text-navy-950 font-bold mb-4">
              The Fix: Train Google's AI with High-Quality Data
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We rebuilt our entire approach around Google's new AI system. Instead of daily bid tweaking, we focus on feeding the algorithm premium conversion data—then let it scale intelligently. It's how we get clients predictable results in 90 days.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
