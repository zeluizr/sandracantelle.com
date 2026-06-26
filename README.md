![Sandra Cantelle](.github/cover.png)

# Sandra Cantelle

**Sitio personal de Sandra Cantelle — Chief Marketing Technology Officer.**

Ejecutiva de marketing, e-commerce y business intelligence; fotógrafa y pintora. Una
dirección editorial de cuarto oscuro, _«Tungsten & Bone»_ —near-black cálido, papel tibio
y un único acento ámbar—, con un índice de trayectoria que se revela en ámbar al hacer scroll.

**[Ver sitio en vivo →](https://sandracantelle.com)**

[![último commit](https://badgen.net/github/last-commit/zeluizr/sandracantelle.com?label=último%20commit&color=E8822A)](https://github.com/zeluizr/sandracantelle.com/commits)

---

## Stack

- **React Router 7** — framework mode con SSR
- **Tailwind CSS 4** — tokens de diseño vía `@theme` en `app/app.css`
- **Motion** — revelados en scroll y micro-interacciones
- **TypeScript** + **Vite**
- Tipografía: **Fraunces** (display), **Hanken Grotesk** (texto), **JetBrains Mono** (datos)

## Requisitos

- **Node.js 20+**
- **pnpm**

## Instalación

```bash
git clone https://github.com/zeluizr/sandracantelle.com.git
cd sandracantelle.com
pnpm install
```

## Desarrollo

```bash
pnpm dev
```

Levanta el sitio en `http://localhost:5173` con hot reload.

## Producción

```bash
pnpm build      # genera ./build
pnpm start      # sirve el build con SSR (react-router-serve)
```

Es una app SSR servida por Node, así que `pnpm start` la deja lista detrás del proxy o host
que prefieras.

## Estructura

```
app/
  root.tsx              layout, fuentes, error boundary
  routes/home.tsx       composición de la página
  app.css               tokens de diseño (color, tipografía)
  data/cv.ts            única fuente del contenido
  components/           Nav · Hero · Profile · Trajectory · Expertise · Education · Contact · Footer
    primitives.tsx      Reveal · SectionHead · Eyebrow · CropMarks
    art.tsx             BrushStroke (pincelada) + Atmosphere (grano/lienzo)
```

Accesible por defecto: responsive, foco visible y `prefers-reduced-motion` respetado.

---

_Hecho con amor y café por [zeluizr](https://github.com/zeluizr) y con la ayuda de [Claude](https://claude.ai/referral/Cz_UimA0NQ) ☕_
