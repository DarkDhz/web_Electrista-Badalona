# Checklist SEO local — Electricista Badalona

Objetivo: posicionar #1 en Google para **"electricista badalona"** (KD 0, 150 búsq./mes según Ahrefs).

La web (este proyecto) cubre el SEO **on-page**. Pero el puesto #1 en el "pack local"/mapa de Google
depende sobre todo del trabajo **off-site** de esta lista. Hazlo en orden.

---

## 0. ⚠️ ANTES DE PUBLICAR: alta de autónomo / empresa

- [ ] **Darte de alta como autónomo (o crear empresa) y obtener NIF/CIF.** Es obligatorio para facturar y para
      poder verificar la ficha de Google Business Profile como negocio real.
- [ ] Rellenar en `src/data/business.ts` los campos `legalName` y `nif` (ahora son placeholders
      `[NOMBRE FISCAL / RAZÓN SOCIAL]` y `[NIF]`). El Aviso Legal y la Política de Privacidad los usan automáticamente.
- [ ] **No publicar la web en producción** con esos placeholders sin rellenar: el Aviso Legal con datos fiscales
      reales es un requisito legal (LSSI), no opcional.

## 1. Google Business Profile (lo más importante para el mapa)

- [ ] Crear la ficha en https://business.google.com con el nombre exacto **Electricista Badalona**.
- [ ] Categoría principal: **Electricista**. Categorías secundarias si aplica (p. ej. "Servicio de instalación eléctrica").
- [ ] Dirección: **Carrer de la Camèlia, 20, 08912 Badalona** (debe coincidir EXACTAMENTE con la web — ver punto 2).
- [ ] Teléfono: **684 30 29 22** (el mismo que en la web).
- [ ] Web: **https://electricista-badalona.com**
- [ ] Horario: **Lunes a viernes, 8:00–20:00** (igual que la web).
- [ ] Definir **área de servicio**: Badalona, Santa Coloma de Gramenet, Sant Adrià de Besòs, Montgat, Tiana.
- [ ] Subir **fotos reales**: trabajos hechos, el vehículo, tú trabajando. (Google premia las fichas con fotos reales.)
- [ ] Completar la descripción mencionando "instalaciones eléctricas en Badalona".
- [ ] **Verificar la ficha** (Google envía un código por correo postal / vídeo). Sin verificar no apareces en el mapa.

## 2. NAP consistente (Nombre, Dirección, Teléfono)

El NAP debe ser **idéntico, carácter por carácter**, en la web, en Google y en todos los directorios. Ya es coherente
en la web (todo sale de `src/data/business.ts`). Replica EXACTAMENTE:

```
Electricista Badalona
Carrer de la Camèlia, 20, 08912 Badalona
684 30 29 22
```

- [ ] Páginas Amarillas (paginasamarillas.es)
- [ ] Yelp España
- [ ] Apple Maps / Bing Places
- [ ] Directorios de gremios y de electricistas locales (Badalona / Barcelonès)
- [ ] Redes sociales del negocio (si las creas), con el mismo NAP en la bio.

## 3. Reseñas (cuando tengas primeros clientes)

- [ ] Pedir reseña en Google a cada cliente satisfecho (es la palanca nº1 del ranking local).
- [ ] Crear un enlace corto de "deja tu reseña" desde la ficha de Google y enviarlo por WhatsApp al terminar el trabajo.
- [ ] Responder a TODAS las reseñas (también ayuda al SEO).
- [ ] Cuando tengas reseñas reales, añadir una sección de reseñas a la web (hoy se omite a propósito: no se inventan).

## 4. Indexación y seguimiento

- [ ] Dar de alta el dominio en **Google Search Console** (https://search.google.com/search-console) y verificarlo.
- [ ] Enviar el sitemap: `https://electricista-badalona.com/sitemap-index.xml`
- [ ] Comprobar que GA4 (`G-KN0LS7Y9Y1`) recibe visitas (ya integrado, se activa al aceptar cookies).
- [ ] Validar el schema con el Rich Results Test: https://search.google.com/test/rich-results
- [ ] Repetir el research de keywords en Ahrefs cuando tengas cupo: validar "electricista badalona",
      "electricistas badalona", "instalación eléctrica badalona", "electricista [barrio]" y posibles páginas futuras.

## 5. Crecimiento futuro (opcional, fase 2)

- [ ] Páginas por barrio de Badalona (Llefià, Sant Roc, Casagemes, Bufalà, Centre…) si quieres dominar más términos.
- [ ] Página de servicio dedicada si amplías más allá de instalaciones (averías, boletines, domótica).
- [ ] Conseguir enlaces locales (prensa de Badalona, asociaciones de comerciantes, proveedores).

---

### Datos del proyecto (referencia rápida)

| Dato | Valor |
|------|-------|
| Dominio | electricista-badalona.com |
| Teléfono / WhatsApp | 684 30 29 22 |
| Email | arnau.gris@gmail.com |
| Dirección | Carrer de la Camèlia, 20, 08912 Badalona |
| Horario | L-V 8:00–20:00 |
| GA4 | G-KN0LS7Y9Y1 |
| Competidor directo a batir | electricistabadalona.com (ISE Electrical Solutions) |
