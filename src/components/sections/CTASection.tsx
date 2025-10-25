import { Container } from '../layout/Container';
import { Heading } from '../ui/Heading';
import { Button } from '../ui/Button';

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 rounded-full mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-bold">Only 3 Spots Available This Month</span>
          </div>

          <Heading as="h2" size="5xl" className="mb-6">
            Stop Wasting Money.
            <span className="block mt-2">Start Making It.</span>
          </Heading>

          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a free campaign audit revealing exactly where you're losing money and our 90-day plan to triple your sales.
            <span className="block mt-2 font-semibold">Worth $2,500. Yours free today.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-bold" href="/free-analysis">
              Claim Your Free $2,500 Audit →
            </Button>
            <Button variant="ghost" size="lg" className="text-white border-white/30 hover:bg-white/10" href="#proof">
              View Case Studies
            </Button>
          </div>

          {/* Specific Trust Elements */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-blue-100">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Results in 90 days or full refund</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>$47M+ managed for clients</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>15-min call, no pressure</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
