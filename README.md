# Morfom — Landing

Sitio de marketing público de Morfom. **Proyecto separado** del `frontend/` (la app):
deploy propio, sin auth, sin Redux, optimizado para SEO y velocidad.

## Stack

- [Astro 5](https://astro.build/) — salida estática (`output: "static"`)
- Tailwind CSS 3 (`@astrojs/tailwind`)
- i18n nativo de Astro: `es` (default, sin prefijo) + `en` (`/en/…`)
- `@astrojs/sitemap`

## Desarrollo

```bash
cd landing
npm install
npm run dev        # http://localhost:4321
npm run build      # genera dist/
npm run preview    # sirve dist/
```

## Estructura

```
src/
  config.ts              APP_URL y endpoint de leads (ver variables de entorno)
  i18n/content.ts         TODO el copy es/en + helpers de ruta
  layouts/Base.astro      <head>, SEO/OG, reveal-on-scroll
  components/
    Landing.astro         la landing completa (todas las secciones)
    LegalPage.astro        privacidad / términos
  pages/
    index.astro            /            (es)
    privacidad.astro       /privacidad
    terminos.astro         /terminos
    en/index.astro         /en
    en/privacidad.astro    /en/privacidad
    en/terminos.astro      /en/terminos
public/
  favicon.svg  og.svg  robots.txt
```

## Variables de entorno

| Variable                | Default                              | Uso                              |
| ----------------------- | ------------------------------------ | -------------------------------- |
| `PUBLIC_LEADS_ENDPOINT` | `https://api.morfom.cl/public/leads` | POST del formulario "Solicitar demo" |

`APP_URL` (`https://app.morfom.cl`) está en `src/config.ts` — es el dominio de la app;
el botón "Ingresar" apunta a `${APP_URL}/login`.

## Pendiente antes de publicar

- [ ] Crear ruta pública `POST /public/leads` en el backend + modelo `Lead` (schema public)
- [ ] Reemplazar cifras del payslip de ejemplo si se quiere otro caso
- [ ] Screenshots reales del producto (tenant `dev`, datos dummy) para reemplazar la tarjeta ilustrativa
- [ ] Revisar textos legales con abogado (hoy son borrador)
- [ ] Configurar DNS: `morfom.cl` → este sitio, `app.morfom.cl` → `frontend/`
- [ ] Analítica (Plausible/Umami self-hosted) + evento en el CTA
- [ ] `og.svg` → exportar a PNG 1200×630 para mejor compatibilidad social
