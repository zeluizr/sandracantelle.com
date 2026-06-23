import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Profile } from "../components/Profile";
import { Trajectory } from "../components/Trajectory";
import { Expertise } from "../components/Expertise";
import { Education } from "../components/Education";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Atmosphere } from "../components/art";

const SITE = "https://sandracantelle.com";
const OG_IMAGE = `${SITE}/og-image.png`;
const TITLE = "Sandra Cantelle — Chief Marketing Technology Officer";
const DESCRIPTION =
  "Ejecutiva de marketing, e-commerce y business intelligence. 22 años construyendo marcas y operaciones digitales en Brasil, Argentina y Chile. Co-fundadora de commente.me e inmmerce. Fotógrafa y pintora.";

export function meta() {
  return [
    { title: TITLE },
    { name: "description", content: DESCRIPTION },
    {
      name: "keywords",
      content:
        "Sandra Cantelle, Chief Marketing Technology Officer, CMTO, marketing digital, e-commerce, business intelligence, transformación digital, LATAM, commente.me, inmmerce, fotógrafa, pintora, Santiago de Chile",
    },
    { name: "author", content: "Sandra Cantelle" },
    { name: "robots", content: "index, follow, max-image-preview:large" },
    { tagName: "link", rel: "canonical", href: SITE },

    // Open Graph (Facebook, LinkedIn, WhatsApp…)
    { property: "og:type", content: "profile" },
    { property: "og:site_name", content: "Sandra Cantelle" },
    { property: "og:title", content: TITLE },
    { property: "og:description", content: DESCRIPTION },
    { property: "og:url", content: SITE },
    { property: "og:locale", content: "es_CL" },
    { property: "og:image", content: OG_IMAGE },
    { property: "og:image:secure_url", content: OG_IMAGE },
    { property: "og:image:type", content: "image/png" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    {
      property: "og:image:alt",
      content: "Sandra Cantelle — Chief Marketing Technology Officer",
    },
    { property: "profile:first_name", content: "Sandra" },
    { property: "profile:last_name", content: "Cantelle" },

    // Twitter / X
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: TITLE },
    { name: "twitter:description", content: DESCRIPTION },
    { name: "twitter:image", content: OG_IMAGE },
    {
      name: "twitter:image:alt",
      content: "Sandra Cantelle — Chief Marketing Technology Officer",
    },

    // Structured data for richer search results
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Sandra Cantelle",
        jobTitle: "Chief Marketing Technology Officer",
        url: SITE,
        image: OG_IMAGE,
        email: "mailto:cantelle@commente.me",
        description: DESCRIPTION,
        sameAs: [
          "https://www.linkedin.com/in/cantelle",
          "https://commente.me",
          "https://inmmerce.com",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Santiago",
          addressCountry: "CL",
        },
        worksFor: [
          { "@type": "Organization", name: "commente.me", url: "https://commente.me" },
          { "@type": "Organization", name: "inmmerce", url: "https://inmmerce.com" },
        ],
        knowsLanguage: ["Portuguese", "Spanish", "English"],
        knowsAbout: [
          "Marketing Digital",
          "E-commerce",
          "Business Intelligence",
          "Transformación Digital",
          "Fotografía",
          "Pintura",
        ],
      },
    },
  ];
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Profile />
        <Trajectory />
        <Expertise />
        <Education />
        <Contact />
      </main>
      <Footer />
      <Atmosphere />
    </>
  );
}
