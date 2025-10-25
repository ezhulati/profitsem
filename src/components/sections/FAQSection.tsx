import { useState } from 'react';
import { Container } from '../layout/Container';
import { Heading } from '../ui/Heading';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How is ProfitSEM different from other Google Ads agencies?',
      answer: 'We focus on profit, not vanity metrics. While others chase clicks and impressions, we optimize for actual revenue and ROI. Our flat-rate pricing means our incentives align with yours—we succeed when you profit, not when you spend more.',
    },
    {
      question: 'What is your 90-Day Money-Back Guarantee?',
      answer: 'If we don\'t improve your ROI within 90 days of starting, you get a full refund of our management fees. No fine print. No questions asked. We\'re confident in our process and put our money where our mouth is.',
    },
    {
      question: 'Do you require long-term contracts?',
      answer: 'No. We work month-to-month. If you\'re not seeing results, you can cancel anytime. We earn your business every single month through performance, not by locking you into a contract.',
    },
    {
      question: 'What industries do you work with?',
      answer: 'We specialize in e-commerce, SaaS, B2B services, and home services. These are industries where Google Ads can be extremely profitable when managed correctly. If you\'re in a different industry, contact us—we\'ll let you know if we can help.',
    },
    {
      question: 'How much should I budget for Google Ads?',
      answer: 'We recommend a minimum ad spend of $3,000/month for our Growth plan and $8,000/month for Scale. This gives us enough data to optimize effectively. If your budget is lower, we can discuss options or recommend starting with a PPC audit.',
    },
    {
      question: 'How do you charge for your services?',
      answer: 'Flat monthly rate based on the plan you choose, NOT a percentage of ad spend. Our Growth plan is $2,500/month, Scale is $4,500/month, and Enterprise is custom. No hidden fees. No surprise charges.',
    },
    {
      question: 'How quickly will I see results?',
      answer: 'Most clients see measurable improvements within 30-45 days. Our 90-Day Profit Sprint is designed to get you to profitability within 3 months. However, results vary based on industry, competition, and starting point.',
    },
    {
      question: 'Do you offer PPC audits?',
      answer: 'Yes! Our comprehensive PPC audit identifies profit leaks, wasted spend, and missed opportunities. It\'s $497 and includes a custom roadmap to profitability. If you sign up for management within 30 days, we credit the audit fee to your first month.',
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <Container size="lg">
        <div className="text-center mb-16">
          <Heading as="h2" size="5xl" className="mb-4">
            Frequently Asked Questions
          </Heading>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about working with ProfitSEM
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
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
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600 animate-slide-down">
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
