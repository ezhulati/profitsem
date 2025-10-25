import { Container } from '../layout/Container';
import { Heading } from '../ui/Heading';
import { Card } from '../ui/Card';

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "ProfitSEM made our Google Ads profitable. We went from barely breaking even to getting $4.20 back for every dollar spent in 60 days. They understand e-commerce profitability inside and out.",
      author: 'Sarah Chen',
      role: 'CEO, Premium Home Goods',
      revenue: '+$186K monthly revenue',
    },
    {
      quote: "We struggled with Google Ads for years. ProfitSEM got it dialed in quickly. Our cost per qualified lead dropped 68% while lead quality went way up. They're growing our business, not just running ads.",
      author: 'Michael Rodriguez',
      role: 'VP Marketing, TechFlow SaaS',
      revenue: '4.8x more qualified leads',
    },
    {
      quote: "I was skeptical of the 90-day guarantee, but they delivered in 45 days. Our cost per job went from $142 to $56, and we're now booking 80+ jobs per month instead of 28. Best investment we've made.",
      author: 'David Thompson',
      role: 'Owner, Arctic HVAC Solutions',
      revenue: '+186% booked jobs',
    },
    {
      quote: "What I love most is the transparency. Real-time dashboard, weekly updates, and they explain exactly what they're doing and why. We're getting $5.60 back for every dollar we spend now.",
      author: 'Jennifer Park',
      role: 'CMO, Luxe Furniture Co.',
      revenue: '312% increase in sales',
    },
    {
      quote: "We went from spending $8K/month with zero tracking to properly managed campaigns generating $34K in profit monthly. The conversion tracking setup alone was worth every penny.",
      author: 'Alex Kumar',
      role: 'Founder, FitGear Direct',
      revenue: '+425% profit margin',
    },
    {
      quote: "ProfitSEM is more than a vendor—they're strategic partners. They've helped us scale from $12K to $68K in monthly recurring revenue from Google Ads while improving lead quality tremendously.",
      author: 'Emily Watson',
      role: 'Head of Growth, DataMetrics',
      revenue: '+467% monthly revenue',
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <Heading as="h2" size="5xl" className="mb-4">
            "Will You Actually Answer When I Call?"
          </Heading>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Yes. Here's what clients say.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
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
              <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-100 pt-4">
                <p className="font-bold text-gray-900 text-sm">{testimonial.author}</p>
                <p className="text-xs text-gray-500 mb-3">{testimonial.role}</p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 rounded-full">
                  <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-bold text-emerald-700">{testimonial.revenue}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
