import Image from "next/image";
import countryPic from "@/assets/countries-main-page.png";

import darkThemedPic from "@/assets/dark-theme.png";
import regionFilterPic from "@/assets/region-filter.png";
import detailsPic from "@/assets/country-details.png";
import Link from "next/link";

export default function page() {
  return (
    <section className="bg-stone-100 py-6 *:text-lg dark:bg-indigo-950">
      {/* Project title */}
      <h2 className="text-center text-xl leading-8 font-semibold text-sky-600 md:text-3xl dark:text-indigo-400">
        <Link href="https://rest-countries-api-mu-five.vercel.app/" target="_blank">
          <span className="italic">&quot;Where in The World?&quot;</span>
          <br />
          REST Countries Explorer
        </Link>
      </h2>
      {/* 1 */}
      {/* hero section */}
      <section className="grid grid-cols-1 items-center gap-6 p-4 md:grid-cols-2 md:p-8">
        {/* description */}
        <figcaption className="col-span-1 w-full text-center text-lg leading-8">
          It is a fully responsive web app for exploring countries around the world. Users can
          search by name, filter by region, and dive into detailed country profiles — population,
          capital, and bordering nations.
          <br />
          Built with{" "}
          <Link
            href="https://nextjs.org/"
            target="_blank"
            className="font-semibold text-sky-600 dark:text-indigo-400"
          >
            Next.js,
          </Link>{" "}
          <Link
            href="https://www.typescriptlang.org/"
            target="_blank"
            className="font-semibold text-sky-600 dark:text-indigo-400"
          >
            TypeScript
          </Link>{" "}
          and{" "}
          <Link
            href="https://tailwindcss.com/"
            target="_blank"
            className="font-semibold text-sky-600 dark:text-indigo-400"
          >
            Tailwind CSS,
          </Link>{" "}
          with full light and dark theme support.
        </figcaption>

        {/* image */}
        <figure className="relative col-span-1 aspect-video rounded-md border">
          <Image
            src={countryPic}
            alt="Where in the world website main page"
            fill
            className="w-full object-contain"
          />
        </figure>
      </section>

      {/* 2 */}
      {/* What I built section */}
      <section className="flex flex-col items-center justify-center bg-sky-100 p-5 *:text-center *:leading-8 md:p-8 dark:bg-indigo-900">
        <h3 className="pb-4 text-center text-3xl leading-8 font-semibold text-sky-600 md:pb-1 dark:text-indigo-400">
          What I built:
        </h3>

        {/* 1 */}
        <article className="grid w-full grid-cols-1 items-center gap-3 md:grid-cols-2 md:gap-6">
          <figcaption className="col-span-1">
            <p>Light and dark theme toggle with next-themes.</p>
            <p>Responsive, accessible UI components built with Shadcn UI and Tailwind CSS.</p>
          </figcaption>

          <figure className="relative col-span-1 aspect-video">
            <Image
              src={darkThemedPic}
              alt="Main Page in dark theme"
              fill
              className="w-full rounded-xl object-contain"
            />
          </figure>
        </article>

        {/* 2 */}
        <article className="grid w-full grid-cols-1 items-center gap-3 md:grid-cols-2 md:gap-6">
          <figcaption className="col-span-1">
            <p>
              Real-time search and region filtering, with parallel data fetching to avoid request
              waterfalls.
            </p>
          </figcaption>

          <figure className="relative col-span-1 aspect-video">
            <Image
              src={regionFilterPic}
              alt="Region filter"
              fill
              className="w-full rounded-xl object-contain"
            />
          </figure>
        </article>

        {/* 3 */}
        <article className="grid w-full grid-cols-1 items-center gap-3 md:grid-cols-2 md:gap-6">
          <figcaption className="col-span-1">
            <p>Dynamic country detail pages with border-country navigation.</p>
            <p>
              Fully type-safe data layer using TypeScript generics, eliminating &quot;any&quot;
              types across the entire API integration.
            </p>
          </figcaption>

          <figure className="relative col-span-1 aspect-video">
            <Image
              src={detailsPic}
              alt="Country details page"
              fill
              className="w-full rounded-xl object-contain"
            />
          </figure>
        </article>
      </section>

      {/* 3 */}
      {/* technical highlights */}
      <section className="space-y-3 p-5 text-center leading-8 md:space-y-5 md:p-8 *:md:text-left">
        <h3 className="text-center text-xl leading-8 font-semibold text-sky-600 md:text-2xl dark:text-indigo-400">
          Technical Highlights
        </h3>
        <p>
          ☑️ One of the more interesting challenges was avoiding a request waterfall.
          <br /> The app needed to conditionally fetch all countries, search results, or
          region-filtered results — depending on user interaction — without sequential await calls
          slowing things down.
        </p>{" "}
        <p>
          ☑️ I solved this with Promise.all(), combined with conditional Promise.resolve(null)
          fallbacks for skipped fetches, keeping all three data paths running in parallel.
        </p>
        <p>
          ☑️ I also designed a generic &quot;CountryPicker&quot; utility type to make the API layer
          reusable and type-safe across different endpoints, rather than duplicating types for each
          fetch function.
        </p>
      </section>
    </section>
  );
}
