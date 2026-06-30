import { business } from './business';
import type { FaqItem } from './content';

/** Schema Electrician/LocalBusiness con contacto, horario y zona. */
export function localBusinessSchema(lang: 'es' | 'ca') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    '@id': `${business.url}/#business`,
    name: business.name,
    description:
      lang === 'ca'
        ? 'Electricista a Badalona especialitzat en instal·lacions elèctriques: instal·lació nova, reformes i quadres elèctrics.'
        : 'Electricista en Badalona especializado en instalaciones eléctricas: instalación nueva, reformas y cuadros eléctricos.',
    url: business.url,
    telephone: `+34${business.phone}`,
    email: business.email,
    image: `${business.url}/og-image.jpg`,
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      addressLocality: business.city,
      addressRegion: business.region,
      addressCountry: business.country,
    },
    areaServed: business.areaServed.map((a) => ({ '@type': 'City', name: a })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '20:00',
      },
    ],
    knowsAbout: ['Instalaciones eléctricas', 'Cuadros eléctricos', 'REBT', 'Reforma eléctrica'],
  };
}

/** Schema FAQPage a partir de las preguntas frecuentes de la landing. */
export function faqSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}
