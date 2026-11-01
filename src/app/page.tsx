import ContactMePage from "./_sections/contact-me-page";
import Hero from "./_sections/hero";
import TechnicalSkills from "./_sections/technical-skills";
import ProjectsMainPage from "./projects/page";

export default function Home() {
  return (
    <main className="space-y-16 pb-10">
      <Hero />
      <ProjectsMainPage />
      <TechnicalSkills />

      <ContactMePage />
    </main>
  );
}
