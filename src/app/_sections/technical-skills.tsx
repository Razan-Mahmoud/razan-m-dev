import RevealOnScroll from "../_components/reveal-on-scroll";
import SkillComponentCard from "./skill-component-card";

export default function TechnicalSkills() {
  const techCards = [
    { title: "Next.js/React", width: "w-[95%]" },
    { title: "JavaScript", width: "w-[90%]" },
    { title: "TypeScript", width: "w-[90%]" },
    { title: "Tailwind Css", width: "w-[95%]" },
    { title: "Responsive Design", width: "w-[85%]" },
    { title: "Git and GitHub", width: "w-[85%]" },
  ];
  return (
    <section className="min-h-screen bg-slate-100 px-4 py-10 md:px-8 dark:bg-indigo-950">
      <RevealOnScroll>
        {/* title */}

        <h2 className="pb-10 text-center text-4xl font-semibold text-sky-600">Technical Skills</h2>

        {/* tech skills figures */}
        <article className="grid grid-cols-1 gap-12 px-5 md:grid-cols-2">
          {techCards.map((card) => {
            return <SkillComponentCard key={card.title} title={card.title} width={card.width} />;
          })}
        </article>
      </RevealOnScroll>
    </section>
  );
}
