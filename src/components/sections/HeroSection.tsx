import { Container } from '../layout/Container';
import { Heading } from '../ui/Heading';
import { Button } from '../ui/Button';
import { StatCounter } from '../ui/StatCounter';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white py-24 lg:py-32 overflow-hidden">
      {/* Background Elements with Parallax */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl parallax-slow" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-emerald-400 rounded-full blur-3xl parallax-fast" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(var(--color-emerald-400) 1px, transparent 1px), linear-gradient(90deg, var(--color-emerald-400) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <Heading as="h1" size="6xl" align="left" className="mb-6">
              AI-Driven <span className="gradient-text">Google Ads</span> Management
            </Heading>

            <p className="text-2xl sm:text-3xl text-gray-300 mb-8 max-w-2xl font-medium">
              Train Google's AI to Find Your Best Customers, Then Scale Predictably
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 relative z-20">
              <a
                href="/process"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white shadow-lg hover:shadow-xl magnetic-hover relative z-20"
              >
                Learn About Our Process →
              </a>
              <a
                href="/free-analysis"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 bg-white text-navy-900 hover:bg-gray-100 active:bg-gray-200 shadow-lg hover:shadow-xl magnetic-hover relative z-20"
              >
                Get Free Analysis
              </a>
            </div>

            {/* Specific Trust Indicators */}
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>90 Days to Predictable Revenue</span>
              </div>
              <span className="text-gray-600">•</span>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>$2.3M+ In Tracked Profit</span>
              </div>
            </div>
          </div>

          {/* Right Content - Before/After Results */}
          <div className="lg:col-span-1 grid grid-cols-2 gap-3">
            {/* ROAS Card */}
            <div className="glass rounded-xl p-4 magnetic-hover-sm fade-in-scroll">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">ROAS</span>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full">+211%</span>
              </div>
              <div className="flex items-end gap-2">
                <div className="text-lg font-bold text-gray-500 line-through">1.8x</div>
                <svg className="w-4 h-4 text-emerald-400 mb-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <div className="text-3xl font-bold text-white">5.6x</div>
              </div>
            </div>

            {/* Monthly Revenue Card */}
            <div className="glass rounded-xl p-4 magnetic-hover-sm fade-in-scroll">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Revenue</span>
                <span className="text-xs font-bold text-blue-400 bg-blue-500/20 px-2 py-0.5 rounded-full">+313%</span>
              </div>
              <div className="flex items-end gap-2">
                <div className="text-lg font-bold text-gray-500 line-through">$45K</div>
                <svg className="w-4 h-4 text-blue-400 mb-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <div className="text-3xl font-bold text-white">$186K</div>
              </div>
            </div>

            {/* Cost Per Lead Card */}
            <div className="glass rounded-xl p-4 magnetic-hover-sm fade-in-scroll">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Cost/Lead</span>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full">-64%</span>
              </div>
              <div className="flex items-end gap-2">
                <div className="text-lg font-bold text-gray-500 line-through">$246</div>
                <svg className="w-4 h-4 text-emerald-400 mb-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <div className="text-3xl font-bold text-white">$89</div>
              </div>
            </div>

            {/* Conversion Rate Card */}
            <div className="glass rounded-xl p-4 magnetic-hover-sm fade-in-scroll">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Conv Rate</span>
                <span className="text-xs font-bold text-blue-400 bg-blue-500/20 px-2 py-0.5 rounded-full">+300%</span>
              </div>
              <div className="flex items-end gap-2">
                <div className="text-lg font-bold text-gray-500 line-through">1.2%</div>
                <svg className="w-4 h-4 text-blue-400 mb-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <div className="text-3xl font-bold text-white">4.8%</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
