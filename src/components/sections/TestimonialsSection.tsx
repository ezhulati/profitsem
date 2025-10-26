import { Container } from '../layout/Container';
import { Heading } from '../ui/Heading';
import { Card } from '../ui/Card';

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "The team at ProfitSEM taught us to stop tweaking everything daily. Once they trained our campaigns with proper conversion data, we hit 5.6x ROAS in 60 days.",
      author: 'Marcus Patterson',
      role: 'Founder, Apex Outdoor Supply',
      revenue: '+$186K monthly revenue',
    },
    {
      quote: "The guys at ProfitSEM completely rebuilt how we track conversions. Offline data integration was a game-changer. Our cost per lead dropped 68% once Google's AI had quality data to work with.",
      author: 'Rachel Nguyen',
      role: 'Marketing Director, CloudNest',
      revenue: '4.8x more qualified leads',
    },
    {
      quote: "They consolidated our mess of campaigns into a smart structure. The team at ProfitSEM let AI do the heavy lifting while they focused on strategy. Our cost per job went from $142 to $56.",
      author: 'Tom Brennan',
      role: 'Owner, Precision Plumbing Co.',
      revenue: '+186% booked jobs',
    },
    {
      quote: "The guys at ProfitSEM stopped us from over-optimizing and disrupting the learning phase. Patience paid off—we're at $5.60 ROAS now with smart bidding fully dialed in.",
      author: 'Lisa Hartwell',
      role: 'VP Sales, Evergreen Furnishings',
      revenue: '312% increase in sales',
    },
    {
      quote: "The team at ProfitSEM set up enhanced conversions and trained our account properly. Once Google's AI understood our best customers, everything clicked. From break-even to 4.2x ROAS.",
      author: 'Jordan Kim',
      role: 'CEO, Velocity Apparel',
      revenue: '+425% profit margin',
    },
    {
      quote: "The guys at ProfitSEM helped us move from keyword hunting to AI training. Broad match with smart bidding scaled us from $12K to $68K monthly while improving lead quality.",
      author: 'Nina Alvarez',
      role: 'Growth Lead, Summit Analytics',
      revenue: '+467% monthly revenue',
    },
  ];

  return (
    <section className="py-32 bg-gray-50">
      <Container>
        <div className="text-center mb-20">
          <Heading as="h2" size="5xl" className="mb-6">
            "Will You Actually Answer When I Call?"
          </Heading>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
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
