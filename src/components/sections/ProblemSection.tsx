import { Container } from '../layout/Container';
import { Heading } from '../ui/Heading';
import { Icon } from '../ui/Icon';

interface Problem {
  title: string;
  description: string;
}

export function ProblemSection() {
  const problems: Problem[] = [
    {
      title: 'Wasted Ad Spend',
      description:
        'Your budget disappears on irrelevant clicks, with no clear strategy to stop the bleeding.',
    },
    {
      title: 'Stagnant ROAS',
      description:
        "Campaigns that once worked have plateaued, and can't find new paths to growth.",
    },
    {
      title: 'Lack of Transparency',
      description:
        "You get campaign reports you can't decipher, leaving you well-guessing into what your agency is doing.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12 md:mb-16">
            <Heading as="h2" size="4xl" className="mb-4 text-balance">
              Is This What Your Google Ads Look Like?
            </Heading>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-balance">
              Most agencies set it and forget it. We see the same costly mistakes robbing
              businesses of their true potential every single day.
            </p>
          </div>

          {/* Problem Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 md:p-8"
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 rounded-full bg-red-50 border-2 border-red-200 flex items-center justify-center mb-6">
                  <Icon name="x" size="lg" className="text-red-500" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {problem.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
