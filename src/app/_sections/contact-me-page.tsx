import RevealOnScroll from "../_components/reveal-on-scroll";

import SocialIcons from "./social-icons";

export default function ContactMePage() {
  return (
    <section className="mx-8 flex flex-col items-center justify-center gap-5 space-y-6 rounded-lg bg-linear-to-r from-sky-50 to-sky-100 p-14 text-center dark:from-blue-950 dark:to-blue-950">
      <RevealOnScroll>
        {/* title */}
        <h2 className="pb-5 text-3xl font-bold text-sky-600 md:text-5xl dark:text-sky-600">
          Contact Me
        </h2>
        <p className="flex flex-col items-center gap-2 pb-5 text-xl">
          Have a project in mind?
          <span> You can find me on:</span>
        </p>

        <SocialIcons />
      </RevealOnScroll>
    </section>
  );
}
