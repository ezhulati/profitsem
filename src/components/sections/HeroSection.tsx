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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 backdrop-blur border border-green-400/40 rounded-full mb-6">
              <span className="text-green-400 text-sm font-bold">
                $2.4M In Sales Last Month
              </span>
            </div>

            <Heading as="h1" size="6xl" align="left" className="mb-6">
              Stop Wasting Money On
              <span className="block gradient-text">
                Google Ads
              </span>
              <span className="block text-gray-300 text-2xl sm:text-3xl lg:text-4xl mt-2">
                Start Making Profit in 90 Days
              </span>
            </Heading>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Most businesses waste 60%+ of their Google Ads budget on the wrong clicks. We'll show you exactly where your money is going and how to turn it into consistent, profitable sales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="primary" size="lg" href="/free-analysis">
                Get Your Free Audit ($2,500 Value)
              </Button>
              <Button variant="secondary" size="lg" href="#proof">
                See The Proof
              </Button>
            </div>

            {/* Specific Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>$47M+ In Client Sales</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Top 3% Google Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No Long-Term Contracts</span>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="glass rounded-2xl p-6 magnetic-hover-sm fade-in-scroll">
              <StatCounter
                value="$3.47"
                label="Back For Every $1 Spent"
                variant="success"
                className="text-white"
              />
            </div>
            <div className="glass rounded-2xl p-6 magnetic-hover-sm fade-in-scroll">
              <StatCounter
                prefix="$"
                value="2.4M"
                label="In Sales (Last 30 Days)"
                variant="primary"
                className="text-white"
              />
            </div>
            <div className="glass rounded-2xl p-6 magnetic-hover-sm fade-in-scroll">
              <StatCounter
                value="90"
                label="Days to Profitability"
                variant="primary"
                className="text-white"
              />
            </div>
            <div className="glass rounded-2xl p-6 magnetic-hover-sm fade-in-scroll">
              <StatCounter
                value="4.8"
                suffix="/5"
                label="Client Satisfaction"
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
