![Sandra Cantelle](.github/cover.png)

**Sitio personal de Sandra Cantelle — Chief Marketing Technology Officer.**

Ejecutiva de marketing, e-commerce y business intelligence; fotógrafa y pintora. Una página
única, servida con SSR, con el índice de trayectoria revelándose sección por sección al
hacer scroll. La dirección editorial es _«Golden Hour»_: papel crema cálido, tinta espresso,
un sol dorado como acento y una sola sección en azul crepuscular, para que el sitio viva
entre lo claro y lo oscuro.

**[Ver sitio en vivo →](https://sandracantelle.com)**

---

## Stack

- [React Router 7](https://reactrouter.com) en framework mode, con SSR
- [Tailwind CSS 4](https://tailwindcss.com) — tokens de diseño vía `@theme` en `app/app.css`
- [Motion](https://motion.dev) — revelados en scroll y micro-interacciones
- TypeScript y [Vite](https://vite.dev)
- Tipografía: Fraunces (display), DM Serif Display (serif), Hanken Grotesk (texto),
  JetBrains Mono (datos) y Caveat (acento manuscrito)

## Requisitos

- Node `>= 20`
- `pnpm`

No hay base de datos, ni API, ni variables de entorno: el contenido vive en el repositorio.

## Instalación

```bash
git clone https://github.com/zeluizr/sandracantelle.com.git
cd sandracantelle.com
pnpm install
```

## Desarrollo

```bash
pnpm dev          # servidor local en http://localhost:5173, con hot reload
pnpm typecheck    # react-router typegen + tsc, única puerta estática
```

Los datos del currículum — bio, ficha, trayectoria, expertise, formación, idiomas — salen
de `app/data/cv.ts`. Actualizar contenido es editar ese archivo, no los componentes; en los
`.tsx` sólo quedan los títulos editoriales de cada sección.

## Producción

```bash
pnpm build      # genera ./build
pnpm start      # sirve el build con SSR (react-router-serve)
```

Es una app SSR servida por Node, así que `pnpm start` la deja lista detrás del proxy o host
que prefieras. El despliegue va a Railway con railpack; `.railwayignore` recorta el snapshot
que se sube, y `pnpm-workspace.yaml` **no** está ignorado a propósito: railpack lo copia
igual y necesita que sea un workspace válido.

Situación operativa: verificada el 06/09/2026 — `https://sandracantelle.com` responde `200`,
servido por Railway detrás de Cloudflare.

## Estructura

```
app/
├── root.tsx                 layout, fuentes, error boundary
├── routes.ts
├── routes/home.tsx          composición de la página y todo el SEO (meta, OG, JSON-LD)
├── app.css                  tokens de diseño: color, tipografía, capa base
├── data/cv.ts               datos del currículum
└── components/
    ├── Nav · Hero · Profile · Trajectory · Expertise · Education · Contact · Footer
    ├── primitives.tsx       BrandText · Reveal · Eyebrow · SectionHead · CropMarks
    ├── art.tsx              BrushStroke (pincelada) + Atmosphere (grano y lienzo)
    └── icons.tsx
```

## Convenciones

- Accesible por defecto: responsive, foco visible con `outline` propio, y
  `prefers-reduced-motion` neutraliza animaciones y transiciones en la capa base.
- Los colores y las familias tipográficas se declaran una sola vez, en `@theme`. Ningún
  componente escribe un hex.
- Conventional Commits; el mensaje describe el efecto, no el cambio.

## Licencia

Por definir. El repositorio todavía no tiene archivo `LICENSE`.

_Hecho con amor y café por [zeluizr](https://github.com/zeluizr) y con la ayuda de [Claude](https://claude.ai/referral/Cz_UimA0NQ) ☕_
