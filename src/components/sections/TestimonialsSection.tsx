import { Container } from '../layout/Container';
import { Heading } from '../ui/Heading';
import { Card } from '../ui/Card';

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "ProfitSEM turned our Google Ads from a money pit into our #1 revenue channel. We went from barely breaking even to 4.2x ROAS in 60 days. The team actually understands e-commerce profitability.",
      author: 'Sarah Chen',
      role: 'CEO, Premium Home Goods',
      revenue: '+$186K monthly revenue',
    },
    {
      quote: "After burning through 3 agencies that couldn't deliver, ProfitSEM finally got it right. Our cost per qualified lead dropped 68% while lead quality went up. They're not just running ads—they're growing our business.",
      author: 'Michael Rodriguez',
      role: 'VP Marketing, TechFlow SaaS',
      revenue: '4.8x increase in SQLs',
    },
    {
      quote: "I was skeptical of the 90-day guarantee, but they delivered in 45 days. Our CPA went from $142 to $56, and we're now booking 80+ jobs per month instead of 28. Best investment we've made.",
      author: 'David Thompson',
      role: 'Owner, Arctic HVAC Solutions',
      revenue: '+186% booked jobs',
    },
    {
      quote: "What I love most is the transparency. Real-time dashboard, weekly updates, and they actually explain what they're doing and why. No BS, just results. Our ROAS jumped from 1.8x to 5.6x.",
      author: 'Jennifer Park',
      role: 'CMO, Luxe Furniture Co.',
      revenue: '312% increase in ROAS',
    },
    {
      quote: "We went from spending $8K/month with zero tracking to properly managed campaigns generating $34K in profit monthly. The conversion tracking setup alone was worth the investment.",
      author: 'Alex Kumar',
      role: 'Founder, FitGear Direct',
      revenue: '+425% profit margin',
    },
    {
      quote: "ProfitSEM doesn't just manage our ads—they're strategic partners. They've helped us scale from $12K to $68K in MRR from Google Ads while improving lead quality. Game changer.",
      author: 'Emily Watson',
      role: 'Head of Growth, DataMetrics',
      revenue: '+467% MRR from ads',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center mb-16">
          <Heading as="h2" size="5xl" className="mb-4">
            Don't Take Our Word For It
          </Heading>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our clients say about working with ProfitSEM
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} variant="bordered" padding="lg">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600 mb-2">{testimonial.role}</p>
                <div className="inline-flex items-center gap-1 text-green-600 text-sm font-semibold">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                  {testimonial.revenue}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
