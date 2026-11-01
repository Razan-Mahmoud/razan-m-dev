import { ArrowDown } from "lucide-react";
import Navbar from "../_components/navbar";

export default function Hero() {
  const buttons = ["React", "Next.JS", "TypeScript", "Tailwind CSS"];
  return (
    <section className="relative min-h-screen w-full">
      {/* background  */}
      <article className="absolute inset-0 -z-10 bg-neutral-100 dark:bg-indigo-950"></article>

      {/* navbar */}
      <article className="absolute z-30 w-full">
        <Navbar />
      </article>

      {/* introduction */}
      <article className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center">
        <article className="mt-14 space-y-5">
          {/* name */}
          <p className="bg-sky-600 bg-clip-text text-3xl font-bold text-transparent md:text-5xl">
            Razan Mahmoud Fahmi
          </p>
          <h1 className="text-center text-2xl font-semibold text-sky-700 dark:text-slate-300">
            Frontend Developer
          </h1>

          {/* Stack buttons */}
          <section className="flex flex-wrap items-center justify-center gap-4">
            {buttons.map((index) => {
              return (
                <article
                  key={index}
                  className="rounded-xl bg-sky-200 p-2 text-center text-sky-900 dark:bg-blue-900 dark:text-slate-300"
                >
                  {index}
                </article>
              );
            })}
          </section>
        </article>

        {/* down Arrow */}
        <article className="z-30 mt-14 flex items-center justify-center">
          <ArrowDown className="animate-bounce" color="oklch(58.8% 0.158 241.966)" />
        </article>
      </article>

      {/* overlayer */}
      <article className="absolute inset-0 top-1/2 z-10 bg-linear-to-t from-neutral-300 dark:bg-none"></article>
    </section>
  );
}
