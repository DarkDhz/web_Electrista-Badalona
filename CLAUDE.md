# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Qué es esto

Landing de una sola página (one-pager) bilingüe **castellano + catalán** para un electricista en Badalona.
El único objetivo del proyecto es posicionar en Google para **"electricista badalona"** (KD 0 según Ahrefs) y
convertir esa visita en una llamada/WhatsApp. Toda decisión de contenido, diseño y SEO se subordina a ese objetivo.

Stack: **Astro 5** (output estático) + **Tailwind CSS 4** (vía `@tailwindcss/vite`, sin `tailwind.config.js`).

## Comandos

```bash
npm install      # dependencias
npm run dev      # dev server en http://localhost:4321
npm run build    # build estático a dist/ (incluye astro sync + genera sitemap)
npm run preview  # sirve dist/ tal como quedará en producción
```

No hay tests ni linter configurados. La verificación es: `npm run build` sin errores + revisar el HTML de `dist/`
(H1, hreflang, JSON-LD) y comprobar visualmente con `npm run preview`.

**Verificación responsive (importante):** el sitio se rompe con facilidad en anchos concretos (textos cortados,
overflow). Para cambios de layout, captura a 375px y 1366px y detecta overflow horizontal. Hay Playwright disponible
vía `npx playwright` y Chrome del sistema en `C:/Program Files/Google/Chrome/Application/chrome.exe`; el patrón usado
es instalar `playwright-core` en un dir scratch y lanzar Chrome con `executablePath` (evita descargar navegador) para
hacer `fullPage` screenshots y comprobar `documentElement.scrollWidth > clientWidth`. El mapa de Google embebido sale
en blanco en headless (no pinta tiles sin consentimiento) pero funciona en un navegador real — no es un bug.

## Arquitectura

El patrón central es **contenido separado de presentación**, para que las dos landing (ES y CA) compartan el mismo
markup y solo cambie el idioma:

- **`src/data/business.ts`** — fuente ÚNICA de verdad del NAP (nombre, teléfono, dirección, email, horario, geo,
  GA4 ID, zona de cobertura). Cualquier cambio de datos del negocio se hace SOLO aquí; el resto del sitio lo importa.
  Exporta también helpers `telHref` y `whatsappHref()`.
- **`src/data/content.ts`** — TODA la copy de la web en `es` y `ca` dentro de `content: Record<Lang, LandingContent>`.
  Para tocar textos, edita aquí; nunca pongas strings literales en los `.astro`.
- **`src/data/schema.ts`** — genera el JSON-LD (`localBusinessSchema(lang)` tipo `Electrician`, y `faqSchema(items)`)
  a partir de `business.ts` y de las FAQ de `content.ts`.

Flujo de renderizado:

- **`src/pages/index.astro`** (ES, ruta `/`) y **`src/pages/ca/index.astro`** (CA, ruta `/ca/`) son envoltorios
  finos: fijan `lang`, pasan meta + `jsonLd` a `BaseLayout` y renderizan `<Landing lang={lang} />`.
- **`src/components/Landing.astro`** ensambla TODAS las secciones de la página (hero, franja de confianza, servicios,
  proceso, por qué, zona, FAQ, contacto). Aquí es donde se edita la estructura/orden de la landing. Los fondos de
  sección alternan a propósito (crema ↔ `bg-white/40`) para separarlas visualmente.
- **`src/layouts/BaseLayout.astro`** es el `<head>` común: meta, OG, canonical, hreflang recíproco (recibe `alternates`),
  inyección de JSON-LD y el bootstrap de Google Analytics. **GA4 NO se carga hasta que el usuario acepta cookies**
  (consentimiento RGPD): el script define `window.__loadGA4__` y `CookieBanner.astro` lo invoca al pulsar "Aceptar".
  Acepta una prop `noindex` que emite `<meta name="robots" content="noindex, follow">` (por defecto `index, follow`).
- **`src/layouts/LegalLayout.astro`** + `src/pages/aviso-legal.astro`, `politica-privacidad.astro` y sus espejos en
  `src/pages/ca/` son las páginas legales (obligatorias en España), enlazadas solo desde el footer. Llevan `noindex`
  (pasan la prop a `BaseLayout`) **y** están excluidas del sitemap vía el `filter` de `@astrojs/sitemap` en
  `astro.config.mjs`. Si añades o renombras una página que no deba indexarse, mantén ambos sitios sincronizados.

i18n: configurado en `astro.config.mjs` con `defaultLocale: 'es'` y `prefixDefaultLocale: false` → castellano en la
raíz, catalán bajo `/ca/`. Al añadir cualquier página nueva, créala en ambos idiomas y enlaza el par vía `alternates`
para mantener el hreflang correcto.

## Diseño (no negociable)

Dirección visual **"Cercanía de barrio"**, definida con tokens en `@theme` dentro de `src/styles/global.css`
(Tailwind 4 configura por CSS, no por archivo JS): paleta crema/terracota/teal, titulares en **Fraunces** (serif) y
cuerpo en **Inter**. Las fuentes son `@fontsource-variable/*` autohospedadas, importadas en `global.css`.

Hay una regla explícita del cliente: **la web NO debe parecer una plantilla genérica de IA**. Mantener al editar:
sin gradientes morado/azul, hero asimétrico, proceso numerado (no rejilla de iconos abstracta), iconos lineales
propios en `src/components/Icon.astro` (no Heroicons), sin glassmorphism, copy específico y local. Ver la tabla
"Cómo evitar el look genérico de plantilla IA" en `web-plan.md`.

## Reglas de contenido (importantes)

- **Nunca inventar prueba social**: no hay reseñas ni testimonios todavía (negocio nuevo). La confianza se transmite
  con garantías reales (`TrustBadge.astro`), no con estrellas/cifras falsas. Añadir reseñas solo cuando existan de verdad.
- **Foto del hero es un placeholder** (`[FOTO ELECTRICISTA AQUÍ]`); sustituir por foto real, nunca por imagen de IA
  simulando una persona ni stock genérico.
- **Datos fiscales pendientes**: `legalName` y `nif` en `business.ts` son placeholders porque el titular aún no está
  dado de alta como autónomo. **No se debe desplegar a producción** sin rellenarlos (requisito legal del Aviso Legal).
- **Dos CTA de WhatsApp según dispositivo** (no duplicar): `StickyCallButton.astro` es la barra fija inferior con
  Llamar + WhatsApp, solo en móvil (`md:hidden`); `FloatingWhatsApp.astro` es el botón flotante circular, solo en
  escritorio (`hidden md:grid`). Todos los CTA llevan `data-call-cta` / `data-whatsapp-cta` para medir clics en GA4.

## Contexto del proyecto

- `web-plan.md` — plan completo aprobado: decisiones, datos del negocio, dirección de diseño.
- `SEO-LOCAL-CHECKLIST.md` — trabajo SEO off-site (Google Business Profile, NAP, reseñas) que es lo que de verdad
  da el #1 en el pack local; la web sola no basta.
- Dominio objetivo: `electricista-badalona.com`. Competidor directo a batir: `electricistabadalona.com` (ISE).
