import RevealOnScroll from "../_components/reveal-on-scroll";
import SocialIcons from "./social-icons";

export default function ContactMePage() {
  return (
    <section className="mx-5 space-y-4 rounded-lg bg-linear-to-r from-sky-50 to-sky-100 px-4 py-6 text-center md:mx-8 dark:from-blue-950 dark:to-blue-950">
      <RevealOnScroll>
        {/* title */}
        <h2 className="pb-3 text-3xl font-bold text-sky-600 md:text-5xl dark:text-sky-600">
          Contact Me
        </h2>
        <p className="flex flex-col items-center gap-2 pb-3 text-lg md:text-xl">
          Got any questions or have a project in mind?
        </p>

        {/* social icons */}
        <p className="pb-3 text-lg md:text-xl">You can reach me via:</p>
        <SocialIcons />
      </RevealOnScroll>
    </section>
  );
}
