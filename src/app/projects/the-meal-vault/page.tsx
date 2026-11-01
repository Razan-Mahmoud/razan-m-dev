import Image from "next/image";
import Link from "next/link";

import mealPicBg from "@/assets/meal-vault-main-page.png";
import asiaPic from "@/assets/asia.png";

import notFoundPic from "@/assets/not-found.png";
import { ContentCarousel } from "./_components/content-carousel";

export default function page() {
  return (
    <section className="space-y-14 p-5 md:space-y-8 md:p-8 dark:bg-indigo-950">
      {/* project title */}
      <h2 className="text-center text-3xl font-semibold text-sky-600">
        <Link href="https://the-meal-vault.vercel.app/" target="_blank">
          <span className="italic">&quot;The Meal Vault&quot;</span>
          <br />
          Recipes Explorer
        </Link>
      </h2>

      {/* section 1: */}
      {/* introduction and tech stack */}
      <section className="grid w-full grid-cols-1 gap-6 py-3 md:grid-cols-2 md:gap-7">
        {/* image */}
        <figure className="relative flex aspect-square w-full items-center justify-center">
          <Image
            src={mealPicBg}
            alt="A snapshot of the Meal Vault App's landing page"
            fill
            className="size-full object-contain"
          />
        </figure>

        {/* Introduction */}
        <article className="flex flex-col items-center justify-center space-y-3 text-center text-lg leading-7 text-slate-600 md:w-full md:text-xl md:leading-10 dark:text-slate-400">
          {/* title */}
          <h2 className="text-center text-xl font-semibold text-sky-600 md:text-2xl dark:text-indigo-400">
            Tech Stack
          </h2>

          {/* description */}
          <p>
            <Link href="https://the-meal-vault.vercel.app/" target="_blank">
              <span className="font-semibold text-sky-600 dark:text-indigo-400">
                This is a recipe discovery platform,
              </span>{" "}
            </Link>
            built with{" "}
            <Link
              href="https://nextjs.org/"
              target="_blank"
              className="font-semibold text-sky-600 dark:text-indigo-400"
            >
              Next.js
            </Link>{" "}
            and{" "}
            <Link
              href="https://www.typescriptlang.org/"
              target="_blank"
              className="font-semibold text-sky-600 dark:text-indigo-400"
            >
              TypeScript
            </Link>{" "}
            to ensure type safety, which helped catch bugs early, especially when working with API
            responses.
          </p>

          <p className="">
            <Link
              href="https://github.com/pacocoursey/next-themes"
              target="_blank"
              className="font-semibold text-sky-600 dark:text-indigo-400"
            >
              The app also implements next-themes
            </Link>{" "}
            to ensures smooth theme toggling; between light and dark modes, to enhance accessibility
            and user comfort.
          </p>
        </article>
      </section>

      {/* section 2: */}
      {/* Styling and dynamic navigation */}
      <section className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
        {/* Introduction */}
        <article className="flex flex-col items-center justify-center space-y-3 text-center text-lg leading-7 text-slate-600 md:w-full md:text-xl md:leading-10 dark:text-slate-400">
          {/* title */}
          <h2 className="text-center text-xl font-semibold text-sky-600 md:text-2xl dark:text-indigo-400">
            Styling and Dynamic Navigation
          </h2>

          {/* description */}
          <p>
            <Link
              href="https://tailwindcss.com/"
              target="_blank"
              className="font-semibold text-sky-600 dark:text-indigo-400"
            >
              Tailwind CSS
            </Link>{" "}
            was used for styling, and{" "}
            <Link
              href="https://ui.shadcn.com/"
              target="_blank"
              className="font-semibold text-sky-600 dark:text-indigo-400"
            >
              Shadcn UI components library
            </Link>{" "}
            was used to build accessible, reusable components throughout the entire app.
          </p>

          <p>
            I also built a dynamic navigation system with{" "}
            <Link href="https://the-meal-vault.vercel.app/areas" target="_blank">
              <span className="font-semibold text-sky-600 dark:text-indigo-400">
                country-based cuisine filtering,
              </span>
            </Link>{" "}
            to help users find international cuisiens with ease.
          </p>
        </article>

        {/* image */}
        <figure className="relative flex aspect-square w-full items-center justify-center">
          {/* background image */}
          <Image
            src={asiaPic}
            alt="Asia map with buttons on it showing countries' names"
            fill
            className="size-full object-contain"
          />
        </figure>
      </section>

      {/* section 3: */}
      {/* Data fetching and Next.js file-based conventions */}
      <section className="grid w-full grid-cols-1 gap-6 md:h-screen md:grid-cols-2 md:gap-6">
        {/* image */}
        <figure className="relative flex aspect-square w-full items-center justify-center">
          {/* background image */}
          <Image
            src={notFoundPic}
            alt="A snapshot of the app shows the not-found page"
            fill
            className="object-contain"
          />
        </figure>

        {/* Introduction */}
        <article className="flex flex-col items-center justify-center space-y-3 text-center text-lg leading-7 text-slate-600 md:w-full md:text-xl md:leading-10 dark:text-slate-400">
          {/* title */}
          <h2 className="text-center text-xl font-semibold text-sky-600 md:text-2xl dark:text-indigo-400">
            Data Fetching and Error Handling
          </h2>

          {/* description */}
          <p>
            <Link href="https://www.themealdb.com/api.php" target="_blank">
              <span className="font-semibold text-sky-600 dark:text-indigo-400">
                I integrated the MealDB REST APIs
              </span>
            </Link>{" "}
            with typed fetch functions and proper error handling.
          </p>

          <p>
            I integrated aslo{" "}
            <Link
              href="https://nextjs.org/docs/app/api-reference/file-conventions"
              target="_blank"
              className="font-semibold text-sky-600 dark:text-indigo-400"
            >
              the Next.js file-based conventions,
            </Link>{" "}
            like loading.tsx for skeleton screens, and not-found.tsx for invalid routes.
          </p>
        </article>
      </section>

      {/* section 4 */}
      {/* Enhancing Performance */}
      <section className="flex aspect-video w-full flex-col items-center justify-center space-y-5">
        {/* title */}
        <h2 className="text-center text-xl font-semibold text-sky-600 md:text-2xl dark:text-indigo-400">
          To Enhance Performance, I used:
        </h2>
        {/* Carousel */}
        <ContentCarousel />
      </section>
    </section>
  );
}
