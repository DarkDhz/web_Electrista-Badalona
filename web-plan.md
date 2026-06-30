# Web "Electricista Badalona" — landing Astro (ES/CA) + SEO local

## Context

El objetivo es posicionar en el puesto #1 de Google para "electricista Badalona" (y variaciones por barrio/servicio). Hoy `c:\Users\blaze\Desktop\Electricidad` solo contiene un archivo `web` vacío (0 bytes) — proyecto desde cero. El usuario tiene acceso manual al panel de Ahrefs (la API vía MCP está a 0 unidades ahora mismo, así que el research de keywords se hará con conocimiento SEO local estándar + lo que el usuario pueda pasar manualmente desde Ahrefs más adelante).

Datos confirmados por el usuario:
- Nombre comercial: **Electricista Badalona**
- Servicio único de foco: **instalaciones eléctricas** (no boletines/averías/domótica por ahora)
- Idiomas: **castellano + catalán**
- Teléfono/WhatsApp real: **684 30 29 22** (confirmado por el usuario) → se usa en footer, botón de llamada/WhatsApp y schema LocalBusiness.
- Dirección completa y confirmada: **Carrer de la Camèlia, 20, 08912 Badalona**. Dato real y completo para el schema LocalBusiness y el NAP (footer + contacto), sin placeholders.
- Email de contacto: **arnau.gris@gmail.com**.
- Stack elegido: **Astro** (sitio estático, ideal para SEO/Core Web Vitals).
- Dominio elegido: **electricista-badalona.com** ($11.25/año, disponible en Vercel). Exact-match con la keyword principal, TLD `.com` universal/confianza alta. Nota: el competidor real `electricistabadalona.com` (ISE Electrical Solutions, Santa Coloma de Gramenet, 15+ años, ya con testimonios) ya está ocupado — es el rival directo a batir en el SERP de "electricista badalona".

Datos reales de Ahrefs (panel manual del usuario, captura compartida):
- "electricista badalona": **KD 0**, volumen 150/mes, CPC $1.80, intención Local — prácticamente sin competencia SEO.
- "electricistas badalona": **KD 0**, volumen 150/mes, CPC $1.80, intención Local.
- Esto confirma que el objetivo #1 es muy alcanzable con un sitio bien optimizado on-page + ficha GBP correcta; no hace falta una estrategia de contenido masiva para competir.

Importante a comunicar al usuario: el posicionamiento #1 en el mapa/local pack depende tanto de la web como de la **Ficha de Google Business Profile, citas NAP y reseñas** (trabajo fuera del código). El plan entrega la web + un checklist accionable para esa parte off-site, pero no puede ejecutar esas acciones (no hay acceso a la cuenta de GBP del usuario).

**Aviso importante**: el usuario confirma que **todavía no está dado de alta como autónomo/empresa**. Esto no bloquea construir la web (se usan placeholders legales), pero sí debería bloquear publicarla y operar comercialmente (facturar, ficha de Google Business Profile como negocio verificado, Aviso Legal con NIF real) hasta completar el alta — se deja como nota destacada en el checklist off-site, no es responsabilidad del código pero es relevante para el plan completo de salida a producción.

Datos confirmados en esta ronda de preguntas:
- Imagen de hero: **placeholder marcado** (caja con color de marca + texto `[FOTO ELECTRICISTA AQUÍ]`), nada de foto de stock ni imagen generada por IA simulando una persona.
- Sección "por qué elegirnos": **sin cifras inventadas** (nada de "X años de experiencia" ni números no verificables) — copy centrado en garantía, transparencia y rapidez.
- Horario: **lunes a viernes 8:00–20:00**, usado en JSON-LD `openingHours` y en la sección de contacto.

## Alcance de esta fase

**Petición explícita del usuario: una sola landing page** (one-pager), no un sitio multi-página, enfocada en indexar y posicionar "electricista Badalona". Todo el contenido (servicios, confianza, zona de cobertura, FAQ, contacto) vive en una única página por idioma, como secciones con anclas (`#servicios`, `#contacto`, etc.), no como páginas separadas. Fuera de alcance de esta fase (se entregan como checklist, no como código): alta y verificación de Google Business Profile, citas en directorios, generación de reseñas, compra de dominio/hosting, despliegue.

## Arquitectura del sitio

Astro con i18n nativo (`defaultLocale: 'es'`, `locales: ['es','ca']`, `prefixDefaultLocale: false` → castellano en raíz, catalán bajo `/ca/`). Tailwind CSS para estilos (rápido de mantener, mobile-first).

Una única landing por idioma (`/` en castellano, `/ca/` en catalán), con estas secciones en una sola página, en este orden:
1. **Hero** — H1 con la keyword exacta "Electricista en Badalona", CTA llamar/WhatsApp inmediato.
2. **Servicios** — instalaciones eléctricas (instalación nueva, reforma, cuadros eléctricos), foco único del negocio.
3. **Por qué elegirnos** — confianza sin depender de reseñas (negocio nuevo, sin prueba social todavía): presupuesto sin compromiso, materiales homologados, garantía del trabajo, tiempo de respuesta, transparencia en el proceso. Nada de testimonios o cifras de clientes inventados — eso son afirmaciones falsas que además violan las políticas de reseñas de Google.
4. **Zona de cobertura** — Badalona y alrededores.
5. **FAQ** — con `FAQPage` schema (ayuda extra a posicionar e indexar bien).
6. **Contacto final** — teléfono, WhatsApp, NAP, mapa embebido.

Nota: la sección de reseñas/prueba social se añadirá más adelante en cuanto existan reseñas reales en Google Business Profile (es el primer paso del checklist off-site). Por ahora la landing genera confianza por transparencia y claridad del proceso, no por prueba social.

Páginas legales mínimas (`/aviso-legal/`, `/politica-privacidad/` y equivalentes `/ca/avis-legal/`, `/ca/politica-de-privacitat/`) se mantienen como páginas aparte porque son obligatorias por ley en España, pero no compiten por SEO ni se enlazan desde el menú principal más que en el footer. Como el usuario aún no está dado de alta, el Aviso Legal lleva placeholders claros `[NOMBRE FISCAL / RAZÓN SOCIAL]` y `[NIF]` — **no se debe publicar la web en producción con estos placeholders sin rellenar**, es un requisito legal real, no solo de contenido.

Nota sobre escalado futuro (no incluido en esta fase, lo dejo documentado para después): si más adelante se quiere ampliar a páginas por barrio de Badalona o por servicio adicional, se puede crecer desde esta landing sin rehacer la base.

## Dirección de estilo visual: "Cercanía de barrio"

Elegida por el usuario entre 3 direcciones (industrial técnico / cercanía de barrio / minimalista premium) para evitar el look genérico de plantilla de gremio. Tokens de diseño a implementar en Tailwind (`tailwind.config.mjs` → `theme.extend`):

- **Colores**: fondo crema `#FAF6F0`, texto principal `#2A2420` (gris-marrón cálido, no negro puro), acento primario terracota `#C1502E` (CTAs, botones de llamada), acento secundario teal mediterráneo `#2F6E6A` (enlaces, badges, detalles secundarios).
- **Tipografía**: titulares con **Fraunces** (serif con carácter, cálida, evita el "sans corporativo" de cualquier plantilla) en peso 600-700; texto y UI con **Inter**. Autohospedadas vía `@fontsource/fraunces` y `@fontsource/inter` (mejor rendimiento que Google Fonts CDN, evita layout shift).
- **Forma**: esquinas redondeadas (`rounded-xl`/`rounded-2xl`) en tarjetas, botones e imágenes; sombras suaves y cálidas en vez de sombras grises duras; nada de bordes rectos agresivos.
- **Imágenes**: dirección cálida y humana — en el hero, mientras no haya foto real, caja placeholder con color de marca y texto `[FOTO ELECTRICISTA AQUÍ]` (nunca foto de stock genérica ni imagen generada por IA simulando una persona); fotos de trabajos reales se añadirán cuando el usuario las aporte; evitar iconografía de clipart genérico a favor de line-icons simples en el acento terracota/teal.
- **Confianza sin reseñas**: en vez de un bloque de estrellas/testimonios (negocio nuevo, sin prueba social todavía), se usan `TrustBadge` cerca del hero con garantías reales (presupuesto sin compromiso, materiales homologados, respuesta rápida).
- **Tono de copy**: cercano y directo, en segunda persona ("tu electricista de confianza en Badalona"), no corporativo/distante.

### Cómo evitar el look "genérico de plantilla IA"

Preocupación explícita del usuario: que la web no parezca otra landing genérica generada por IA. Lista concreta de qué evitar y qué hacer en su lugar:

| Evitar (típico de plantilla IA/SaaS genérica) | Hacer en su lugar |
|---|---|
| Hero centrado, texto + botones + blob de gradiente difuminado detrás | Hero **asimétrico**: texto alineado a la izquierda, imagen sangrando hasta el borde derecho del viewport (placeholder `[FOTO ELECTRICISTA AQUÍ]` hasta tener foto real) |
| Gradiente morado/azul (el más usado en plantillas IA) | Paleta crema + terracota + teal ya definida, sin gradientes — colores planos y deliberados |
| Tipografía Inter/Poppins/Manrope para todo (titulares y cuerpo) | Contraste real: **Fraunces** (serif con carácter) en titulares vs **Inter** en cuerpo — ya definido, mantenerlo estricto |
| Rejilla de 3 tarjetas "feature" con icono genérico (Heroicons) + sombra suave en todo | Proceso numerado y concreto del propio negocio ("1. Llamas → 2. Vengo a valorar la instalación → 3. Presupuesto claro → 4. Trabajo con garantía"), no una rejilla abstracta de "beneficios" |
| Iconos genéricos tipo Heroicons/Lucide repetidos sin relación con el oficio | Set pequeño de iconos lineales con motivo eléctrico real (cuadro eléctrico, cable, llave de luz) en un único color de acento |
| Glassmorphism, blur, sombra difusa en todas las tarjetas | Sombras planas y cálidas o sin sombra; si hace falta separar bloques, usar borde fino o color de fondo distinto, no blur |
| Barra de logos "Trusted by" inventada o stock | Omitir por completo — no hay marcas reales que mostrar todavía, mejor no fingir |
| Foto de stock genérica (manos con guantes, cables azules, modelo sonriente de banco de imágenes) o ilustración estilo "blob people" de IA | Foto real del electricista trabajando (placeholder explícito hasta que el usuario aporte una foto real — **nunca** una imagen generada por IA simulando una persona real) |
| Copy vago tipo "soluciones eléctricas integrales para tu hogar" | Copy específico y local: menciona Badalona, el tipo de instalación real, sin relleno corporativo |
| Border-radius idéntico aplicado a absolutamente todo (botones, tarjetas, inputs, imágenes) | Variar deliberadamente: imágenes con esquina recortada distinta a botones, algún elemento totalmente recto como contraste |

## Componentes reutilizables

- `BaseLayout.astro` — `<head>` con meta tags, OG/Twitter cards, canonical, hreflang es/ca, inyección de JSON-LD.
- `Header.astro` (nav con anclas a las secciones de la propia landing), `Footer.astro` (NAP visible).
- `StickyCallButton.astro` — botón fijo móvil de llamar/WhatsApp (CRO crítico: la mayoría de búsquedas de electricista son urgentes y desde móvil).
- `FaqAccordion.astro` — preguntas frecuentes con `FAQPage` schema.
- `ServiceCard.astro`, `TrustBadge.astro` (garantía, materiales homologados, respuesta rápida — sin testimonios inventados).
- `CookieBanner.astro` — banner de consentimiento RGPD (aceptar/rechazar) que carga Google Analytics 4 solo tras aceptación; placeholder `[GA4_MEASUREMENT_ID]` hasta que el usuario cree la propiedad de GA4.
- Todos estos componentes se ensamblan dentro de `src/pages/index.astro` (y su espejo `src/pages/ca/index.astro`) como secciones de una sola página.

## SEO técnico on-page

- `@astrojs/sitemap` para sitemap.xml automático; `robots.txt` permitiendo todo + referencia al sitemap.
- JSON-LD `Electrician`/`LocalBusiness` con NAP real (Carrer de la Camèlia 20, 08912 Badalona), `areaServed: Badalona`, `openingHours` (L-V 8:00-20:00), `telephone`, `email`, y `geo` (`GeoCoordinates`) con las coordenadas de Carrer de la Camèlia 20, Badalona (geocodificar la dirección exacta al implementar).
- `hreflang` es/ca recíproco entre páginas equivalentes.
- Imágenes vía `astro:assets` (optimización automática, `loading="lazy"` salvo hero).
- HTML semántico: un único `<h1>` por página con la keyword objetivo, jerarquía de `<h2>` por servicio/sección.
- Core Web Vitals: CSS mínimo, sin frameworks JS pesados, fuentes con `font-display: swap`.
- **Google Analytics 4**: integrado con carga condicionada al consentimiento del `CookieBanner` (gtag solo se carga tras aceptar, para cumplir RGPD); mide visitas y clic en botón de llamar/WhatsApp como evento. La Política de Privacidad documenta el uso de cookies de analítica.

## Checklist off-site (entregable en markdown, no código)

Documento `SEO-LOCAL-CHECKLIST.md` con pasos accionables, en orden: **0. Darse de alta como autónomo/empresa (NIF/CIF) antes de publicar y operar** — bloquea el resto de pasos comerciales; 1. alta y optimización de Google Business Profile (categoría "Electricista", horario, fotos, área de servicio); 2. citas NAP consistentes (páginas amarillas, directorios locales de Badalona/Barcelona); 3. estrategia de solicitud de reseñas; 4. qué keywords validar manualmente en Ahrefs cuando el usuario tenga cupo o use el panel manual.

## Archivos clave a crear

- `astro.config.mjs` (i18n + sitemap + tailwind integration)
- `src/layouts/BaseLayout.astro`
- `src/components/{Header,Footer,StickyCallButton,FaqAccordion,ServiceCard,TrustBadge,CookieBanner}.astro`
- `src/pages/index.astro` (landing ES completa, una sola página)
- `src/pages/ca/index.astro` (landing CA, espejo)
- `src/pages/aviso-legal.astro`, `src/pages/politica-privacidad.astro` + equivalentes `src/pages/ca/avis-legal.astro`, `src/pages/ca/politica-de-privacitat.astro`
- `public/robots.txt`
- `SEO-LOCAL-CHECKLIST.md`
- El archivo vacío `web` actual se sustituye por la carpeta de proyecto Astro `web/` (se elimina el archivo y se crea la carpeta en su lugar).
- `web/web-plan.md` — copia de este plan dentro del propio proyecto, como referencia persistente (primer archivo a crear al iniciar la ejecución).

## Verificación

1. `npm run build` sin errores.
2. `npm run dev` y revisar visualmente la landing completa (todas las secciones) en móvil y escritorio.
3. Validar JSON-LD con el Rich Results Test de Google (manual, pegando el HTML generado).
4. Revisar que `/ca/` y `/` se enlazan correctamente vía hreflang.
5. Ejecutar Lighthouse/PageSpeed local (`npx lighthouse` o Chrome DevTools) para confirmar Core Web Vitals en verde.
6. Tras el build, opcionalmente invocar el skill `seo-technical` o `seo-local` sobre el sitio generado para una auditoría adicional.
