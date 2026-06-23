/**
 * Single source of truth for the dossier. All copy is derived from
 * Sandra Cantelle's professional record; nothing here is invented.
 */

export const identity = {
  name: "Sandra Cantelle",
  role: "Chief Marketing Technology Officer",
  shortRole: "CMTO",
  email: "scantelle@gmail.com",
  linkedin: "https://www.linkedin.com/in/cantelle",
  linkedinLabel: "linkedin.com/in/cantelle",
  base: "Santiago de Chile",
  coordinates: "33°27′ S · 70°39′ O",
  timezone: "GMT−4",
  migration: ["Rio de Janeiro", "Buenos Aires", "Santiago"],
};

/** Her multifaceted practice — strategist, technologist, photographer, painter. */
export const disciplines = ["Marketing", "Tecnología", "Fotografía", "Pintura"];

export const stats = [
  { value: "22+", label: "Años de experiencia" },
  { value: "02", label: "Empresas co-fundadas" },
  { value: "40+", label: "Personas lideradas" },
  { value: "LATAM", label: "Alcance regional" },
];

export const bio = {
  lead: "Ejecutiva multifacética con experiencia en marketing, e-commerce, customer experience y business intelligence — en multinacionales de consumo masivo, grandes empresas y agencias reconocidas de Brasil y toda Latinoamérica.",
  paragraphs: [
    "He levantado dos empresas hoy en plena expansión, definiendo desde la estrategia de marketing hasta el desarrollo de productos para distintos mercados de Brasil y Latinoamérica.",
    "Como co-fundadora participo activamente en los proyectos de nuestros clientes — diseñando estrategias de marketing digital y proyectos de transformación digital y e-commerce — y lidero al equipo en toda la región.",
    "Conduzco la estrategia general de empresas, agencias y sus clientes, velando por el cumplimiento de las metas y el crecimiento anual con prospección activa, inbound marketing, marketing automation y tecnología CRM.",
  ],
};

export const languages = [
  { name: "Português", level: "Nativo", strength: 3 },
  { name: "Español", level: "Profesional", strength: 2 },
  { name: "English", level: "Básico", strength: 1 },
];

export const strengths = ["Liderazgo", "Gestión de proyectos", "Liderazgo de equipos"];

export const ficha = [
  { key: "Base", value: "Santiago, Chile" },
  { key: "Foco", value: "Latinoamérica" },
  { key: "Rol", value: "CMTO · CEO" },
  { key: "Activa desde", value: "1999" },
];

export type Role = {
  year: string;
  role: string;
  org: string;
  location?: string;
  kicker?: string;
  points?: string[];
  tags?: string[];
};

export type Era = {
  country: string;
  city: string;
  span: string;
  roles: Role[];
};

/**
 * Reverse-chronological, grouped by the country the work was based in.
 * Read top-to-bottom, the page retraces a 22-year migration:
 * Chile ← Argentina ← Brasil.
 */
export const eras: Era[] = [
  {
    country: "Chile",
    city: "Santiago",
    span: "2018 — Presente",
    roles: [
      {
        year: "2020",
        role: "Co-fundadora · CMTO",
        org: "commente.me",
        location: "Santiago",
        kicker:
          "Chief Marketing Technology Officer. Deployment, e-commerce, dirección digital, marketing y BI.",
        tags: ["Deployment", "E-commerce", "Digital Manager", "Marketing & BI"],
      },
      {
        year: "2019",
        role: "Co-fundadora · CEO",
        org: "Inmmerce",
        location: "Santiago",
        points: [
          "Plan de desarrollo estratégico de la escuela.",
          "Plan comercial y estrategia de marketing y contenido.",
          "Coordinación del equipo Digital Specialist a nivel internacional.",
          "Enlace entre la escuela, las empresas, VTEX, clientes y alumnos.",
        ],
      },
      {
        year: "2018",
        role: "Directora de Proyectos",
        org: "Mitocondria",
        location: "Chile",
        kicker: "E-commerce y atención al cliente.",
        points: [
          "Liderazgo de la estrategia general de la agencia y sus clientes.",
          "Gestión de un equipo de 40 personas.",
          "Estrategia B2B y B2C con inbound marketing y CRM.",
        ],
      },
    ],
  },
  {
    country: "Argentina",
    city: "Buenos Aires",
    span: "2014 — 2018",
    roles: [
      {
        year: "2017",
        role: "Project Manager · Consultoría",
        org: "elSuper.cl · Sambatour · DecoGallery",
        location: "Santiago / Buenos Aires",
        kicker: "Gestión de proyectos y consultoría en marketing digital.",
      },
      {
        year: "2015",
        role: "Gerente de Proyectos Web",
        org: "Consultoría Web · The Firm",
        location: "Argentina",
        kicker: "Proyectos de e-commerce: Prestigio Web, DecoGallery, Puppis.",
      },
      {
        year: "2014",
        role: "Fotógrafa",
        org: "Cantelle Photo",
        location: "Buenos Aires / Chile",
        kicker:
          "Fotografía y catalogación para tiendas virtuales, fotoperiodismo, producto, modelos y eventos.",
      },
      {
        year: "2014",
        role: "Traductora autónoma",
        org: "VTEX e-Commerce Cloud",
        location: "Buenos Aires",
        kicker: "Traducción y contenido completo de Help VTEX para LATAM.",
      },
    ],
  },
  {
    country: "Brasil",
    city: "Rio de Janeiro",
    span: "1999 — 2014",
    roles: [
      {
        year: "2009",
        role: "Gerente de Proyectos Web",
        org: "Nós da Comunicação",
        location: "Rio de Janeiro",
        kicker:
          "Clientes: Coca-Cola Brasil, Petrobrás, Previ, Brasilcap, EBX, Contax.",
      },
      {
        year: "2008",
        role: "Socia Ejecutiva",
        org: "Casa Cria — Comunicação",
        location: "Rio de Janeiro",
        kicker:
          "Comunicación integrada, cultura organizacional y gestión de crisis.",
      },
      {
        year: "2003",
        role: "Coordinadora Nacional de Comunicación",
        org: "Contax",
        location: "Rio de Janeiro",
        kicker:
          "Comunicación interna para 65.000 colaboradores y más de 40 clientes.",
      },
      {
        year: "1999",
        role: "Analista de Comunicación",
        org: "Metrô Rio",
        location: "Rio de Janeiro",
        kicker:
          "Relaciones institucionales, campañas y eventos de concientización.",
      },
    ],
  },
];

export const domains = [
  {
    title: "Marketing & estrategia",
    tags: [
      "Marketing digital",
      "Trade marketing",
      "Branding",
      "Paid media",
      "Inbound marketing",
      "Marketing automation",
    ],
  },
  {
    title: "E-commerce & ventas",
    tags: ["E-commerce", "B2B", "B2C", "B2B2C", "CRM", "Ventas mayoristas"],
  },
  {
    title: "Business intelligence",
    tags: [
      "BI & analytics",
      "Análisis de mercados",
      "KPIs",
      "Decisiones basadas en datos",
    ],
  },
  {
    title: "Gestión & liderazgo",
    tags: [
      "Liderazgo de equipos",
      "Project management",
      "Gestión de crisis",
      "Cultura organizacional",
    ],
  },
];

export const specialties = [
  {
    title: "Comunicación",
    items: [
      "Comunicación integrada",
      "Relaciones públicas",
      "Comunicación interna",
      "Eventos corporativos",
    ],
  },
  {
    title: "Customer experience",
    items: [
      "Atención al cliente",
      "Customer journey",
      "Relación con clientes",
      "Fidelización",
    ],
  },
  {
    title: "Transformación digital",
    items: [
      "Estrategia digital",
      "Innovación tecnológica",
      "Procesos digitales",
      "Change management",
    ],
  },
];

export type Education = {
  period: string;
  institution: string;
  place: string;
  degree: string;
  items?: string[];
};

export const education: Education[] = [
  {
    period: "2021 — 2022",
    institution: "MIT Professional Education",
    place: "Cambridge, EE. UU.",
    degree: "Certificado profesional",
    items: [
      "Transformación digital",
      "Liderazgo en la innovación",
      "Cultural awareness en negocios globales",
    ],
  },
  {
    period: "2014 — 2016",
    institution: "Universidad de Buenos Aires",
    place: "Buenos Aires, Argentina",
    degree: "Español · Facultad de Filosofía y Letras",
  },
  {
    period: "2010",
    institution: "Universidade Estácio de Sá",
    place: "Rio de Janeiro, Brasil",
    degree: "Pós-graduação · Comunicação Empresarial",
  },
  {
    period: "1999 — 2003",
    institution: "Universidade Estácio de Sá",
    place: "Rio de Janeiro, Brasil",
    degree: "Graduação · Publicidade e Marketing",
  },
];

export const nav = [
  { href: "#perfil", label: "Perfil", index: "01" },
  { href: "#trayectoria", label: "Trayectoria", index: "02" },
  { href: "#capacidades", label: "Capacidades", index: "03" },
  { href: "#formacion", label: "Formación", index: "04" },
  { href: "#contacto", label: "Contacto", index: "05" },
];
