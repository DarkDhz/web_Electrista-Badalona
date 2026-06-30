/**
 * Fuente única de verdad de los datos del negocio (NAP).
 * Cualquier cambio de teléfono, zona, etc. se hace SOLO aquí.
 */
export const business = {
  name: 'Electricista Badalona',
  legalName: '[NOMBRE FISCAL / RAZÓN SOCIAL]', // pendiente: alta de autónomo
  nif: '[NIF]', // pendiente: alta de autónomo
  // Contacto
  phone: '684302922',
  phoneDisplay: '684 30 29 22',
  whatsapp: '34684302922',
  email: 'arnau.gris@gmail.com',
  // Ubicación pública. No publicar una dirección privada en la web.
  publicLocation: {
    es: 'Badalona y alrededores',
    ca: 'Badalona i rodalies',
  },
  fiscalAddress: '[DOMICILIO FISCAL]', // pendiente: alta de autónomo o domicilio profesional
  city: 'Badalona',
  region: 'Barcelona',
  country: 'ES',
  // Horario
  openingHours: 'Lu-Vi 08:00-20:00',
  openingHoursDisplay: {
    es: 'Lunes a viernes, 8:00 - 20:00 h',
    ca: 'Dilluns a divendres, 8:00 - 20:00 h',
  },
  // Dominio / web
  url: 'https://www.electricista-badalona.com',
  // Analítica — propiedad GA4 real
  ga4Id: 'G-KN0LS7Y9Y1',
  // Zona de cobertura
  areaServed: ['Badalona', 'Santa Coloma de Gramenet', 'Sant Adrià de Besòs', 'Montgat', 'Tiana'],
} as const;

/** Enlace tel: para botones de llamada */
export const telHref = `tel:+34${business.phone}`;

/** Enlace de WhatsApp con mensaje predefinido */
export function whatsappHref(
  lang: 'es' | 'ca' = 'es',
  message = lang === 'ca'
    ? 'Hola, necessito informació sobre una instal·lació elèctrica a Badalona.'
    : 'Hola, necesito información sobre una instalación eléctrica en Badalona.',
) {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}
