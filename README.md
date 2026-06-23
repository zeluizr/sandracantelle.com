# Sandra Cantelle — sitio personal

Sitio personal de **Sandra Cantelle**, Chief Marketing Technology Officer — ejecutiva de
marketing, e-commerce y business intelligence, fotógrafa y pintora.

Diseño *“Tungsten & Bone”*: una dirección editorial de cuarto oscuro (warm near-black +
papel cálido + un único acento ámbar) que conecta su mirada fotográfica, su mano de pintora
y su trabajo de marketing. La pieza central es el **índice de trayectoria**: una columna
cronológica agrupada por país cuyos nodos se “revelan” en ámbar a medida que se hace scroll.

## Stack

- **React Router 7** (framework mode, SSR)
- **Tailwind CSS 4** (tokens vía `@theme` en `app/app.css`)
- **Motion 12** (Framer Motion) para revelados en scroll y micro-interacciones
- **TypeScript** + **Vite 6**

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:5173
```

## Producción

```bash
npm run build
npm run start      # sirve ./build
```

## Estructura

```
app/
  root.tsx              layout, fuentes, error boundary
  routes/home.tsx       composición de la página
  app.css               tokens de diseño (color, tipografía)
  data/cv.ts            único origen del contenido
  components/
    Nav, Hero, Profile, Trajectory, Expertise, Education, Contact, Footer
    primitives.tsx      Reveal, SectionHead, Eyebrow, CropMarks
    art.tsx             BrushStroke (pincelada) + Atmosphere (grano/lienzo)
```

Tipografía: **Fraunces** (display), **Hanken Grotesk** (texto), **JetBrains Mono** (datos).
Accesible por defecto: responsive, foco visible, `prefers-reduced-motion` respetado.
