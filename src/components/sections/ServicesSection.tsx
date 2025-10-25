import { Container } from '../layout/Container';
import { Heading } from '../ui/Heading';
import { Card } from '../ui/Card';
import { Icon } from '../ui/Icon';

export function ServicesSection() {
  const services = [
    {
      icon: 'target' as const,
      title: 'Google Ads Management',
      description: 'Full-service campaign management focused on profit, not vanity metrics. We optimize for revenue, not just traffic.',
    },
    {
      icon: 'chart' as const,
      title: 'PPC Audit & Strategy',
      description: 'Comprehensive account audit identifying profit leaks and missed opportunities. Get a custom roadmap to profitability.',
    },
    {
      icon: 'zap' as const,
      title: 'Landing Page Optimization',
      description: 'High-converting landing pages designed to turn clicks into customers. CRO-driven approach for maximum ROI.',
    },
    {
      icon: 'trending-up' as const,
      title: 'Conversion Tracking',
      description: 'Bulletproof tracking setup so you know exactly where every dollar goes. No guesswork, just accurate data.',
    },
    {
      icon: 'dollar' as const,
      title: 'Shopping Ads',
      description: 'E-commerce Google Shopping campaigns that drive profitable sales. Product feed optimization included.',
    },
    {
      icon: 'shield' as const,
      title: 'Account Recovery',
      description: 'Rescue underperforming accounts and turn them profitable. We fix what others break.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center mb-16">
          <Heading as="h2" size="5xl" className="mb-4">
            Profit-Focused Services
          </Heading>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to turn Google Ads into a profitable revenue channel.
            No fluff. No unnecessary add-ons.
          </p>
        </div>

        <div className="bento-grid grid-cols-1 md:grid-cols-3">
          {/* Featured Service - Large Card */}
          <Card key={services[0].title} variant="bordered" padding="lg" className="bento-item-large magnetic-hover-sm bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-200 fade-in-scroll">
            <div className="mb-6">
              <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-glow-blue">
                <Icon name={services[0].icon} size="xl" className="text-white" />
              </div>
            </div>
            <Heading as="h3" size="3xl" className="mb-4">
              {services[0].title}
            </Heading>
            <p className="text-gray-700 text-lg">
              {services[0].description}
            </p>
          </Card>

          {/* Regular Services */}
          {services.slice(1).map((service, index) => (
            <Card
              key={service.title}
              variant="bordered"
              padding="lg"
              className={`magnetic-hover-sm smooth-transition hover:shadow-xl ${
                index % 3 === 0 ? 'slide-in-left' :
                index % 3 === 1 ? 'fade-in-scroll' :
                'slide-in-right'
              }`}
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Icon name={service.icon} size="lg" className="text-blue-500" />
                </div>
              </div>
              <Heading as="h3" size="xl" className="mb-3">
                {service.title}
              </Heading>
              <p className="text-gray-600">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
