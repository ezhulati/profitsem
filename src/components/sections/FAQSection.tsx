import { useState } from 'react';
import { Container } from '../layout/Container';
import { Heading } from '../ui/Heading';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Why does it take 90 days to see results?',
      answer: 'Google\'s AI needs time to learn what a customer looks like for your business. Week 1-2, we connect your CRM so Google learns from actual sales (not just clicks). Week 3-6, Google identifies patterns in who buys. Week 7-9, smart bidding activates and costs stabilize. Week 10-12, you can scale confidently because the math is predictable. You can\'t train AI faster without sacrificing accuracy—it\'s like trying to learn a language in a week.',
    },
    {
      question: 'What is "AI training" and why does it matter?',
      answer: 'Google Ads is a machine learning system. It needs quality data (real customer sales from your CRM), consolidated campaign structure (not hundreds of fragmented keywords), and time to identify patterns. Most accounts feed Google garbage data and change things daily, which resets the learning. We feed it quality data and let it learn without interference. The result is predictable customer acquisition costs you can scale.',
    },
    {
      question: 'What happens during the first 90 days?',
      answer: 'Week 1-2: We integrate your CRM and fix tracking (foundation). Week 3-6: Google\'s AI learns customer patterns (results fluctuate—this is normal). Week 7-9: Smart bidding activates, costs become predictable. Week 10-12: Confident scaling based on proven math. Month 4+: Predictable growth engine. Each phase builds on the previous. Skip steps = poor results.',
    },
    {
      question: 'Do you guarantee results?',
      answer: 'Yes. If we don\'t improve your ROI within 90 days, you get a full refund of our management fees. We can make this guarantee because the AI training process works when done properly. The 90-day timeline isn\'t arbitrary—it\'s how long Google\'s AI actually needs to learn.',
    },
    {
      question: 'How do you charge?',
      answer: 'Flat monthly rate based on your ad spend tier, not a percentage. We don\'t make more money when you spend more—we make money when you get results. See our pricing page for specific tiers. No setup fees. Cancel anytime after 90 days.',
    },
    {
      question: 'What makes your approach different?',
      answer: 'We treat Google Ads like what it is: an AI system that needs training. That means CRM integration (so Google learns from real customers), consolidated campaigns (concentrated data beats fragmented data), and strategic patience (letting AI learn without constant interference). It\'s not flashy, but the math works.',
    },
    {
      question: 'What industries do you work with?',
      answer: 'Any business where you can track a customer from ad click to sale. E-commerce, SaaS, B2B services, professional services, home services. If you have a CRM or can track actual customers (not just leads), we can train Google\'s AI for you.',
    },
    {
      question: 'Can I see faster results?',
      answer: 'Not without compromising quality. You can launch ads in a day, but training Google\'s AI to find customers efficiently takes 90 days. We\'ve tried every shortcut—they all lead to wasted money. The good news: once trained, the system keeps improving and costs stay predictable. The 90 days is an investment that pays off long-term.',
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <Container size="lg">
        <div className="text-center mb-16">
          <Heading as="h2" size="5xl" className="mb-4">
            Common Questions About the Process
          </Heading>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the 90-day AI training timeline and what to expect
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
