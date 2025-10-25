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
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-400 rounded-full blur-3xl parallax-fast" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(var(--color-green-400) 1px, transparent 1px), linear-gradient(90deg, var(--color-green-400) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur border border-white/20 rounded-full mb-6">
              <span className="text-green-400 text-sm font-semibold">
                90-Day Profit Guarantee
              </span>
            </div>

            <Heading as="h1" size="6xl" align="left" className="mb-6">
              Turn Google Ads Into
              <span className="block gradient-text">
                Pure Profit
              </span>
            </Heading>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              We don't chase clicks. We maximize profit. Data-driven Google Ads campaigns
              that deliver measurable ROI in 90 days. No contracts. No fluff. Just results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="primary" size="lg" href="/free-analysis">
                Get Free Profit Analysis
              </Button>
              <Button variant="secondary" size="lg" href="/case-studies">
                View Case Studies
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No Long-Term Contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Google Premier Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Money-Back Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="glass rounded-2xl p-6 magnetic-hover-sm fade-in-scroll">
              <StatCounter
                value="247"
                suffix="%"
                label="Average ROI"
                variant="success"
                className="text-white"
              />
            </div>
            <div className="glass rounded-2xl p-6 magnetic-hover-sm fade-in-scroll">
              <StatCounter
                prefix="$"
                value="2.4M"
                label="Client Revenue (30 Days)"
                variant="primary"
                className="text-white"
              />
            </div>
            <div className="glass rounded-2xl p-6 magnetic-hover-sm fade-in-scroll">
              <StatCounter
                value="90"
                label="Days to Profit"
                variant="primary"
                className="text-white"
              />
            </div>
            <div className="glass rounded-2xl p-6 magnetic-hover-sm fade-in-scroll">
              <StatCounter
                value="4.8"
                suffix="/5"
                label="Client Rating"
                variant="success"
                className="text-white"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
