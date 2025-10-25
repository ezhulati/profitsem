import { useState } from 'react';
import { Container } from '../layout/Container';
import { Heading } from '../ui/Heading';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How is ProfitSEM different from other Google Ads agencies?',
      answer: 'We focus on profit, not clicks. Flat-rate pricing means we succeed when you profit, not when you spend more.',
    },
    {
      question: 'Do you offer any guarantees?',
      answer: 'No. Too many factors are outside our control. What we promise: proven tactics, transparent reporting, and constant optimization. Not satisfied? Cancel anytime.',
    },
    {
      question: 'Do you require long-term contracts?',
      answer: 'No. Month-to-month. Cancel anytime.',
    },
    {
      question: 'What industries do you work with?',
      answer: 'E-commerce, SaaS, B2B services, and home services. Different industry? Contact us—we\'ll tell you if we can help.',
    },
    {
      question: 'How much should I budget for Google Ads?',
      answer: 'Depends on your industry and goals. We\'ll tell you what makes sense after reviewing your account. Start with the free audit.',
    },
    {
      question: 'How do you charge for your services?',
      answer: 'Custom pricing based on your needs. NOT a percentage of ad spend. We evaluate your account size, industry, and goals, then give you a transparent monthly rate.',
    },
    {
      question: 'How quickly will I see results?',
      answer: 'Most clients see improvements within 30-45 days. Results vary by industry and competition.',
    },
    {
      question: 'Do you offer PPC audits?',
      answer: 'Yes. Free. We analyze your account, identify profit leaks and wasted spend, then give you a custom plan.',
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <Container size="lg">
        <div className="text-center mb-16">
          <Heading as="h2" size="5xl" className="mb-4">
            "Yeah, But What About..."
          </Heading>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers. No sales call.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-emerald-500 transition-colors"
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900 pr-8 text-base">
                  {faq.question}
                </span>
                <div className={`w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 group-hover:bg-emerald-100 transition-colors ${openIndex === index ? 'bg-emerald-100' : ''}`}>
                  <svg
                    className={`w-5 h-5 text-gray-600 group-hover:text-emerald-600 transition-all ${
                      openIndex === index ? 'rotate-180 text-emerald-600' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
