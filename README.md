# Electricista Badalona — landing (Astro + Tailwind)

Landing de una sola página (ES + CA) para posicionar **"electricista badalona"**.

## Comandos

```bash
npm install      # instalar dependencias
npm run dev      # servidor local en http://localhost:4321
npm run build    # build de producción en dist/
npm run preview  # previsualizar el build
```

## Editar datos del negocio

Todo el NAP (teléfono, dirección, email, horario, GA4) está centralizado en
[`src/data/business.ts`](src/data/business.ts). Cámbialo ahí una sola vez.

Los textos de la web (ES y CA) están en [`src/data/content.ts`](src/data/content.ts).

## Pendiente antes de publicar

- Rellenar `legalName` y `nif` en `src/data/business.ts` (alta de autónomo).
- Sustituir el placeholder `[FOTO ELECTRICISTA AQUÍ]` del hero por una foto real.
- Ver [`SEO-LOCAL-CHECKLIST.md`](SEO-LOCAL-CHECKLIST.md) para el SEO off-site (Google Business Profile, reseñas…).

## Plan completo

Ver [`web-plan.md`](web-plan.md).
