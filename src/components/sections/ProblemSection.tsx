import { Container } from '../layout/Container';
import { Heading } from '../ui/Heading';

export function ProblemSection() {
  const paradigms = [
    {
      oldWay: 'Keyword Hunting',
      oldDesc: 'Thousands of exact match keywords trying to capture every search variation manually.',
      newWay: 'AI Training',
      newDesc: 'Google\'s AI learns what a good customer looks like, then finds similar people using intent signals.',
      iconSvg: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      oldWay: 'Daily Bid Tweaking',
      oldDesc: 'Manual bid adjustments every day trying to optimize performance by hand.',
      newWay: 'Strategic Data Feeding',
      newDesc: 'Feed Google high-quality conversion data (real sales, not form fills) and let AI optimize automatically.',
      iconSvg: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      oldWay: 'Exact Match Control',
      oldDesc: 'Segment everything to control which searches trigger your ads—fragmented structure.',
      newWay: 'Broad Match + Smart Bidding',
      newDesc: 'Once AI is trained, broad match captures intent-based searches you\'d never think to target.',
      iconSvg: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      )
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 to-gray-100">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Main Message */}
          <div className="text-center mb-16">
            <Heading as="h2" size="5xl" className="mb-8 text-balance">
              Why Most Google Ads Accounts<br/>
              <span className="block text-navy-950 mt-2">
                Are Stuck in 2019
              </span>
            </Heading>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Google fundamentally changed how search works. AI now interprets intent instead of matching keywords. Most accounts haven't adapted.
            </p>
          </div>

          {/* Paradigm Shift Cards */}
          <div className="space-y-6 mb-16">
            {paradigms.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Old Way */}
                  <div className="text-center md:text-right">
                    <div className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-2 flex items-center justify-center md:justify-end gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span>Old Way</span>
                    </div>
                    <div className="text-xl font-bold text-gray-900 mb-3">
                      {item.oldWay}
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {item.oldDesc}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      {item.iconSvg}
                    </div>
                  </div>

                  {/* New Way */}
                  <div className="text-center md:text-left">
                    <div className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-2 flex items-center justify-center md:justify-start gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>New Way (2025)</span>
                    </div>
                    <div className="text-xl font-bold text-navy-950 mb-3">
                      {item.newWay}
                    </div>
                    <p className="text-gray-700 leading-relaxed font-medium">
                      {item.newDesc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Text */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-2xl text-navy-950 font-bold mb-4">
              The Shift: From Traffic Buyer to AI Trainer
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Success in 2025 means teaching Google's AI what a valuable customer looks like—then trusting it to find more. This requires better tracking, consolidated structure, and patience for AI to learn. That's what we do in 90 days.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
