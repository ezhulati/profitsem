import { Container } from '../layout/Container';

export function TrustSection() {
  const logos = [
    { name: 'Google Partner', width: 120 },
    { name: 'Shopify Partner', width: 100 },
    { name: 'Meta Business Partner', width: 110 },
    { name: 'HubSpot Partner', width: 100 },
    { name: 'ClickFunnels', width: 100 },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <Container>
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
            Trusted by 200+ Brands & Certified Partners
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center"
              style={{ width: `${logo.width}px` }}
            >
              <div className="text-gray-600 font-bold text-lg">{logo.name}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
