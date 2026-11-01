import Image from "next/image";
import devSVG from "@/assets/dev-svgrepo-com.svg";
import Link from "next/link";
import { ThemeToggleButton } from "@/app/_components/theme-toggle-button";

export default function Navbar() {
  return (
    <nav className="flex h-20 w-full items-center justify-between border-b-2 border-sky-600 bg-neutral-100 px-8 py-3 dark:border-blue-800 dark:bg-indigo-950 dark:text-slate-300">
      {/* logo and title */}
      <Link
        href="/"
        className="flex items-center justify-start gap-4 text-lg font-medium lg:text-xl"
      >
        <Image src={devSVG} alt="HTML tag" className="size-12" />
      </Link>

      {/* Dark mode toggle */}
      <ThemeToggleButton />
    </nav>
  );
}
