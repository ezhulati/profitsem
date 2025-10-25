/**
 * StructuredData Component
 *
 * Renders JSON-LD structured data for SEO
 * Supports multiple schema.org types
 */

interface OrganizationSchema {
  type: 'Organization';
  name: string;
  description: string;
  url: string;
  logo?: string;
  telephone?: string;
  email?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  sameAs?: string[];
}

interface LocalBusinessSchema {
  type: 'LocalBusiness';
  name: string;
  description: string;
  url: string;
  telephone: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  priceRange?: string;
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

interface ArticleSchema {
  type: 'Article' | 'BlogPosting';
  headline: string;
  description: string;
  image?: string;
  author: {
    name: string;
    url?: string;
  };
  publisher: {
    name: string;
    logo?: string;
  };
  datePublished: string;
  dateModified?: string;
}

interface FAQSchema {
  type: 'FAQPage';
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

interface BreadcrumbSchema {
  type: 'BreadcrumbList';
  items: Array<{
    name: string;
    url: string;
  }>;
}

type Schema = OrganizationSchema | LocalBusinessSchema | ArticleSchema | FAQSchema | BreadcrumbSchema;

export interface StructuredDataProps {
  schema: Schema;
}

export function StructuredData({ schema }: StructuredDataProps) {
  const generateSchema = () => {
    const baseSchema = {
      '@context': 'https://schema.org',
    };

    switch (schema.type) {
      case 'Organization':
        return {
          ...baseSchema,
          '@type': 'Organization',
          name: schema.name,
          description: schema.description,
          url: schema.url,
          logo: schema.logo,
          telephone: schema.telephone,
          email: schema.email,
          address: schema.address,
          sameAs: schema.sameAs,
        };

      case 'LocalBusiness':
        return {
          ...baseSchema,
          '@type': 'ProfessionalService',
          name: schema.name,
          description: schema.description,
          url: schema.url,
          telephone: schema.telephone,
          address: {
            '@type': 'PostalAddress',
            streetAddress: schema.address.streetAddress,
            addressLocality: schema.address.addressLocality,
            addressRegion: schema.address.addressRegion,
            postalCode: schema.address.postalCode,
            addressCountry: schema.address.addressCountry,
          },
          geo: schema.geo ? {
            '@type': 'GeoCoordinates',
            latitude: schema.geo.latitude,
            longitude: schema.geo.longitude,
          } : undefined,
          priceRange: schema.priceRange,
          aggregateRating: schema.aggregateRating ? {
            '@type': 'AggregateRating',
            ratingValue: schema.aggregateRating.ratingValue,
            reviewCount: schema.aggregateRating.reviewCount,
          } : undefined,
        };

      case 'Article':
      case 'BlogPosting':
        return {
          ...baseSchema,
          '@type': schema.type,
          headline: schema.headline,
          description: schema.description,
          image: schema.image,
          author: {
            '@type': 'Person',
            name: schema.author.name,
            url: schema.author.url,
          },
          publisher: {
            '@type': 'Organization',
            name: schema.publisher.name,
            logo: schema.publisher.logo ? {
              '@type': 'ImageObject',
              url: schema.publisher.logo,
            } : undefined,
          },
          datePublished: schema.datePublished,
          dateModified: schema.dateModified || schema.datePublished,
        };

      case 'FAQPage':
        return {
          ...baseSchema,
          '@type': 'FAQPage',
          mainEntity: schema.questions.map((q) => ({
            '@type': 'Question',
            name: q.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: q.answer,
            },
          })),
        };

      case 'BreadcrumbList':
        return {
          ...baseSchema,
          '@type': 'BreadcrumbList',
          itemListElement: schema.items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        };

      default:
        return baseSchema;
    }
  };

  const schemaData = generateSchema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData, null, 2),
      }}
    />
  );
}
