import RevealOnScroll from "../_components/reveal-on-scroll";
import SocialIcons from "../_sections/social-icons";
import ContactForm from "../contact-me/_components/contact-form";

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

        {/* form and social icons */}
        <article className="flex flex-col items-center justify-center gap-6">
          {/* contact me form */}
          <article className="w-full">
            <p className="pb-3 text-lg md:text-xl">Write to me directly,</p>
            <ContactForm />
          </article>

          {/* Social icons */}
          <article className="w-full">
            <p className="pb-3 text-lg md:text-xl">...or you can reach me via:</p>
            <SocialIcons />
          </article>
        </article>
      </RevealOnScroll>
    </section>
  );
}
