/**
 * Contenido de la landing en castellano (es) y catalán (ca).
 * Copy específico y local, sin relleno corporativo.
 */

export type Lang = 'es' | 'ca';

export interface FaqItem {
  q: string;
  a: string;
}

export interface ProcessStep {
  n: string;
  title: string;
  text: string;
}

export interface ServiceItem {
  title: string;
  text: string;
}

export interface TrustItem {
  title: string;
  text: string;
}

export interface LandingContent {
  htmlLang: string;
  locale: string;
  metaTitle: string;
  metaDescription: string;
  nav: { servicios: string; proceso: string; zona: string; faq: string; contacto: string; cta: string };
  hero: {
    eyebrow: string;
    h1: string;
    subtitle: string;
    callBtn: string;
    whatsappBtn: string;
    photoPlaceholder: string;
  };
  trust: TrustItem[];
  services: { title: string; intro: string; items: ServiceItem[] };
  process: { title: string; intro: string; steps: ProcessStep[] };
  why: { title: string; intro: string; points: string[] };
  zone: { title: string; text: string; listLabel: string };
  faq: { title: string; items: FaqItem[] };
  contact: {
    title: string;
    intro: string;
    addressLabel: string;
    phoneLabel: string;
    emailLabel: string;
    hoursLabel: string;
    mapTitle: string;
  };
  footer: { tagline: string; legal: string; privacy: string; rights: string };
  cookies: { text: string; accept: string; reject: string; link: string };
  stickyCall: string;
}

export const content: Record<Lang, LandingContent> = {
  es: {
    htmlLang: 'es',
    locale: 'es_ES',
    metaTitle: 'Electricista en Badalona | Instalaciones eléctricas — Presupuesto sin compromiso',
    metaDescription:
      'Electricista en Badalona especializado en instalaciones eléctricas: instalación nueva, reformas y cuadros eléctricos. Presupuesto sin compromiso. Llama al 684 30 29 22.',
    nav: { servicios: 'Servicios', proceso: 'Cómo trabajo', zona: 'Zona', faq: 'Preguntas', contacto: 'Contacto', cta: 'Llamar ahora' },
    hero: {
      eyebrow: 'Electricista en Badalona',
      h1: 'Tu electricista de confianza en Badalona',
      subtitle:
        'Instalaciones eléctricas hechas bien, a la primera. Instalación nueva, reformas y cuadros eléctricos para tu casa o local. Presupuesto claro y sin compromiso.',
      callBtn: 'Llamar al 684 30 29 22',
      whatsappBtn: 'Escribir por WhatsApp',
      photoPlaceholder: '[FOTO ELECTRICISTA AQUÍ]',
    },
    trust: [
      { title: 'Presupuesto sin compromiso', text: 'Te digo lo que cuesta antes de empezar. Sin sorpresas en la factura.' },
      { title: 'Materiales homologados', text: 'Solo material que cumple la normativa (REBT). Lo barato sale caro en electricidad.' },
      { title: 'Trabajo con garantía', text: 'Respondo de lo que instalo. Si algo falla, vuelvo.' },
    ],
    services: {
      title: 'Instalaciones eléctricas en Badalona',
      intro:
        'Me dedico en exclusiva a las instalaciones eléctricas. Hacer una sola cosa y hacerla bien es lo que me permite darte un trabajo limpio, seguro y conforme a normativa.',
      items: [
        {
          title: 'Instalación eléctrica nueva',
          text: 'Vivienda, local u obra nueva: diseño y monto la instalación completa desde cero, dimensionada para lo que de verdad vas a usar.',
        },
        {
          title: 'Reforma de instalación',
          text: '¿Saltan los plomos, tienes una instalación vieja o vas a reformar? La pongo al día y la dejo segura y conforme al REBT.',
        },
        {
          title: 'Cuadros eléctricos',
          text: 'Montaje y renovación de cuadros: magnetotérmicos, diferenciales y protección bien dimensionada para tu instalación.',
        },
      ],
    },
    process: {
      title: 'Cómo trabajo',
      intro: 'Sin letra pequeña. Esto es lo que pasa desde que me llamas:',
      steps: [
        { n: '1', title: 'Me llamas', text: 'Me cuentas qué necesitas por teléfono o WhatsApp. Sin compromiso.' },
        { n: '2', title: 'Valoro la instalación', text: 'Voy a verlo en persona y te explico qué hace falta y por qué.' },
        { n: '3', title: 'Presupuesto claro', text: 'Te paso un presupuesto cerrado y por escrito antes de tocar nada.' },
        { n: '4', title: 'Trabajo con garantía', text: 'Hago la instalación, dejo todo recogido y respondo del resultado.' },
      ],
    },
    why: {
      title: '¿Por qué llamarme a mí?',
      intro: 'Soy un electricista de Badalona, no una empresa con centralita. Hablas directamente con quien va a hacer el trabajo.',
      points: [
        'Trato directo: el que coge el teléfono es el que hace la instalación.',
        'Presupuesto por escrito antes de empezar, sin cargos sorpresa.',
        'Instalaciones conformes al Reglamento Electrotécnico de Baja Tensión (REBT).',
        'Trabajo limpio: dejo la obra recogida al terminar.',
      ],
    },
    zone: {
      title: 'Zona de cobertura',
      text: 'Trabajo en Badalona y los municipios de alrededor. Si tienes dudas de si llego a tu zona, pregúntame.',
      listLabel: 'Doy servicio en:',
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Cuánto cuesta una instalación eléctrica en Badalona?',
          a: 'Depende del tipo de instalación, los metros y el estado de partida. Por eso voy a verlo antes y te paso un presupuesto cerrado y por escrito, sin compromiso.',
        },
        {
          q: '¿Hacéis el boletín / Certificado de Instalación Eléctrica (CIE)?',
          a: 'Las instalaciones que realizo se hacen conforme al REBT. Si tu caso necesita boletín eléctrico (CIE) para dar de alta o ampliar la luz, lo valoramos cuando vea la instalación.',
        },
        {
          q: '¿Atendéis urgencias?',
          a: 'Mi foco son las instalaciones planificadas. Si tienes una avería, llámame y te digo si puedo ayudarte o te oriento sobre qué hacer.',
        },
        {
          q: '¿En qué zonas trabajáis?',
          a: 'En Badalona y alrededores (Santa Coloma de Gramenet, Sant Adrià de Besòs, Montgat, Tiana). Si tienes dudas con tu dirección, pregúntame.',
        },
      ],
    },
    contact: {
      title: 'Pide tu presupuesto',
      intro: 'Llámame, escríbeme por WhatsApp o mándame un correo. Te respondo lo antes posible.',
      addressLabel: 'Dirección',
      phoneLabel: 'Teléfono y WhatsApp',
      emailLabel: 'Correo',
      hoursLabel: 'Horario',
      mapTitle: 'Ubicación en Badalona',
    },
    footer: {
      tagline: 'Electricista en Badalona — Instalaciones eléctricas.',
      legal: 'Aviso legal',
      privacy: 'Política de privacidad',
      rights: 'Todos los derechos reservados.',
    },
    cookies: {
      text: 'Uso cookies propias y de Google Analytics para entender cómo se usa la web. Puedes aceptarlas o rechazarlas.',
      accept: 'Aceptar',
      reject: 'Rechazar',
      link: 'Más información',
    },
    stickyCall: 'Llamar',
  },
  ca: {
    htmlLang: 'ca',
    locale: 'ca_ES',
    metaTitle: 'Electricista a Badalona | Instal·lacions elèctriques — Pressupost sense compromís',
    metaDescription:
      'Electricista a Badalona especialitzat en instal·lacions elèctriques: instal·lació nova, reformes i quadres elèctrics. Pressupost sense compromís. Truca al 684 30 29 22.',
    nav: { servicios: 'Serveis', proceso: 'Com treballo', zona: 'Zona', faq: 'Preguntes', contacto: 'Contacte', cta: 'Trucar ara' },
    hero: {
      eyebrow: 'Electricista a Badalona',
      h1: 'El teu electricista de confiança a Badalona',
      subtitle:
        'Instal·lacions elèctriques ben fetes, a la primera. Instal·lació nova, reformes i quadres elèctrics per a casa teva o el teu local. Pressupost clar i sense compromís.',
      callBtn: 'Trucar al 684 30 29 22',
      whatsappBtn: 'Escriure per WhatsApp',
      photoPlaceholder: '[FOTO ELECTRICISTA AQUÍ]',
    },
    trust: [
      { title: 'Pressupost sense compromís', text: 'Et dic què costa abans de començar. Sense sorpreses a la factura.' },
      { title: 'Materials homologats', text: 'Només material que compleix la normativa (REBT). El barat surt car en electricitat.' },
      { title: 'Feina amb garantia', text: 'Responc del que instal·lo. Si alguna cosa falla, hi torno.' },
    ],
    services: {
      title: 'Instal·lacions elèctriques a Badalona',
      intro:
        'Em dedico en exclusiva a les instal·lacions elèctriques. Fer una sola cosa i fer-la bé és el que em permet donar-te una feina neta, segura i conforme a normativa.',
      items: [
        {
          title: 'Instal·lació elèctrica nova',
          text: 'Habitatge, local o obra nova: dissenyo i munto la instal·lació completa des de zero, dimensionada per al que realment faràs servir.',
        },
        {
          title: 'Reforma d’instal·lació',
          text: 'Salten els ploms, tens una instal·lació vella o vas a reformar? La poso al dia i la deixo segura i conforme al REBT.',
        },
        {
          title: 'Quadres elèctrics',
          text: 'Muntatge i renovació de quadres: magnetotèrmics, diferencials i protecció ben dimensionada per a la teva instal·lació.',
        },
      ],
    },
    process: {
      title: 'Com treballo',
      intro: 'Sense lletra petita. Això és el que passa des que em truques:',
      steps: [
        { n: '1', title: 'Em truques', text: 'M’expliques què necessites per telèfon o WhatsApp. Sense compromís.' },
        { n: '2', title: 'Valoro la instal·lació', text: 'Vaig a veure-ho en persona i t’explico què cal i per què.' },
        { n: '3', title: 'Pressupost clar', text: 'Et passo un pressupost tancat i per escrit abans de tocar res.' },
        { n: '4', title: 'Feina amb garantia', text: 'Faig la instal·lació, ho deixo tot recollit i responc del resultat.' },
      ],
    },
    why: {
      title: 'Per què trucar-me a mi?',
      intro: 'Sóc un electricista de Badalona, no una empresa amb centraleta. Parles directament amb qui farà la feina.',
      points: [
        'Tracte directe: qui agafa el telèfon és qui fa la instal·lació.',
        'Pressupost per escrit abans de començar, sense càrrecs sorpresa.',
        'Instal·lacions conformes al Reglament Electrotècnic de Baixa Tensió (REBT).',
        'Feina neta: deixo l’obra recollida en acabar.',
      ],
    },
    zone: {
      title: 'Zona de cobertura',
      text: 'Treballo a Badalona i els municipis del voltant. Si tens dubtes de si arribo a la teva zona, pregunta-m’ho.',
      listLabel: 'Dono servei a:',
    },
    faq: {
      title: 'Preguntes freqüents',
      items: [
        {
          q: 'Quant costa una instal·lació elèctrica a Badalona?',
          a: 'Depèn del tipus d’instal·lació, els metres i l’estat de partida. Per això ho vaig a veure abans i et passo un pressupost tancat i per escrit, sense compromís.',
        },
        {
          q: 'Feu el butlletí / Certificat d’Instal·lació Elèctrica (CIE)?',
          a: 'Les instal·lacions que faig es realitzen conforme al REBT. Si el teu cas necessita butlletí elèctric (CIE) per donar d’alta o ampliar la llum, ho valorem quan vegi la instal·lació.',
        },
        {
          q: 'Ateneu urgències?',
          a: 'El meu focus són les instal·lacions planificades. Si tens una avaria, truca’m i et dic si puc ajudar-te o t’oriento sobre què fer.',
        },
        {
          q: 'A quines zones treballeu?',
          a: 'A Badalona i rodalies (Santa Coloma de Gramenet, Sant Adrià de Besòs, Montgat, Tiana). Si tens dubtes amb la teva adreça, pregunta-m’ho.',
        },
      ],
    },
    contact: {
      title: 'Demana el teu pressupost',
      intro: 'Truca’m, escriu-me per WhatsApp o envia’m un correu. Et responc al més aviat possible.',
      addressLabel: 'Adreça',
      phoneLabel: 'Telèfon i WhatsApp',
      emailLabel: 'Correu',
      hoursLabel: 'Horari',
      mapTitle: 'Ubicació a Badalona',
    },
    footer: {
      tagline: 'Electricista a Badalona — Instal·lacions elèctriques.',
      legal: 'Avís legal',
      privacy: 'Política de privacitat',
      rights: 'Tots els drets reservats.',
    },
    cookies: {
      text: 'Faig servir cookies pròpies i de Google Analytics per entendre com es fa servir el web. Pots acceptar-les o rebutjar-les.',
      accept: 'Acceptar',
      reject: 'Rebutjar',
      link: 'Més informació',
    },
    stickyCall: 'Trucar',
  },
};

/** Rutas equivalentes por idioma para hreflang y selector de idioma */
export const localizedHome: Record<Lang, string> = {
  es: '/',
  ca: '/ca/',
};
