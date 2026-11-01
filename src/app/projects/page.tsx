import mealVaultPic from "@/assets/meal-vault.png";
import ProjectCard from "./_components/project-card";
import countriesPic from "@/assets/countries2.png";
import RevealOnScroll from "../_components/reveal-on-scroll";

export default function ProjectsMainPage() {
  const theMealVault = [
    {
      href: "/projects/the-meal-vault",
      src: mealVaultPic,
      alt: "A recipes website landing page",
      title: "The Meal Vault",
      description:
        "A responsive recipes web app, that uses the MealDB REST APIs, featured video recipes and has a dark theme toggle.",
      buttons: ["React", "Next.JS", "TypeScript", "Tailwind CSS", "Schadcn UI"],
    },
  ];

  const whereInTheWorld = [
    {
      href: "/projects/where-in-the-world",
      src: countriesPic,
      alt: "Countries Website landing page",
      title: "Where in the World",
      description:
        "A responsive web app that implements the Countries REST APIs, with a search input, continents filter and a dark theme toggle.",
      buttons: ["React", "Next.JS", "TypeScript", "Tailwind CSS", "Schadcn UI"],
    },
  ];

  return (
    <section className="bg-neutral-100 dark:bg-indigo-950">
      <RevealOnScroll>
        <h2 className="pb-8 text-center text-4xl font-semibold text-sky-600">Featured Projects</h2>

        {/* project cards */}
        <section className="mx-auto grid w-full grid-cols-1 gap-8 px-8 md:w-3/5 md:grid-cols-2">
          {/* md:grid-cols-2 grid grid-cols-1 gap-8*/}
          {/* project Card 1 */}
          {theMealVault.map((item) => {
            return (
              <ProjectCard
                key={item.title}
                href={item.href}
                src={item.src.src}
                alt={item.alt}
                title={item.title}
                description={item.description}
                buttons={item.buttons}
              />
            );
          })}

          {/* project Card 2 */}
          {whereInTheWorld.map((item) => {
            return (
              <ProjectCard
                key={item.title}
                href={item.href}
                src={item.src.src}
                alt={item.alt}
                title={item.title}
                description={item.description}
                buttons={item.buttons}
              />
            );
          })}
        </section>
      </RevealOnScroll>
    </section>
  );
}
