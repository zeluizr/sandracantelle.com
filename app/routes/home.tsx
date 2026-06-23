import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Profile } from "../components/Profile";
import { Trajectory } from "../components/Trajectory";
import { Expertise } from "../components/Expertise";
import { Education } from "../components/Education";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Atmosphere } from "../components/art";

export function meta() {
  const title = "Sandra Cantelle — Chief Marketing Technology Officer";
  const description =
    "Ejecutiva de marketing, e-commerce y business intelligence. 22 años construyendo marcas y operaciones digitales en Brasil, Argentina y Chile. Co-fundadora de commente.me e Inmmerce. Fotógrafa y pintora.";
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: "es_CL" },
    { name: "twitter:card", content: "summary_large_image" },
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
