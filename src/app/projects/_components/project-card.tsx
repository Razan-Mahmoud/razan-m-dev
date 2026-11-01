import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";

type ProjectCardProps = {
  href: string;
  src: string | StaticImageData;
  alt: string;
  title: string;
  description: string;
  buttons: string[];
};

export default function ProjectCard({
  href,
  src,
  alt,
  title,
  description,
  buttons,
}: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
      {/* link to project page */}
      <Link href={href}>
        {/* image */}
        <figure className="relative aspect-square h-48 w-full overflow-hidden rounded-t-md">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 700px) 100vw, 33vw"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
          />
        </figure>

        {/* details */}
        <figcaption className="flex h-full flex-col gap-2 rounded-b-md bg-slate-100 p-3 text-center dark:bg-indigo-900">
          {/* title */}
          <p className="text-center text-xl font-semibold">{title}</p>

          {/* description */}
          <p>{description}</p>

          {/* Stack buttons */}
          <section className="flex flex-wrap items-center justify-center gap-3">
            {buttons.map((index) => {
              return (
                <article
                  key={index}
                  className="rounded-xl bg-sky-200 p-2 text-center font-medium text-sky-900 dark:bg-indigo-800 dark:text-slate-300"
                >
                  {index}
                </article>
              );
            })}
          </section>
        </figcaption>
      </Link>
    </article>
  );
}
