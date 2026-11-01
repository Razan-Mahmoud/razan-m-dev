import gitHubPic from "@/assets/github-svgrepo-com.svg";
import linkedInPic from "@/assets/linkedin.svg";
import upWorkPic from "@/assets/upwork.svg";

import Image from "next/image";
import Link from "next/link";

export default function SocialIcons() {
  const iconsInfo = [
    {
      href: "https://github.com/Razan-Mahmoud",
      src: gitHubPic,
      alt: "GitHub Icon",
    },
    {
      href: "https://www.upwork.com/freelancers/~01c0ec6f4eeca1543a",
      src: upWorkPic,
      alt: "UpWork Icon",
    },
    {
      href: "https://www.linkedin.com/in/razan-mahmoud-fahmi/",
      src: linkedInPic,
      alt: "LinkedIn Icon",
    },
  ];
  return (
    <section className="flex items-start justify-center gap-8 py-4">
      {/* GitHub */}
      {iconsInfo.map((icon) => {
        return (
          <Link key={icon.alt} href={icon.href} target="_blank">
            <Image
              src={icon.src}
              alt={icon.alt}
              width={50}
              height={50}
              className="rounded-xl transition-opacity duration-300 ease-in-out hover:opacity-75 dark:bg-slate-300"
            />
          </Link>
        );
      })}
    </section>
  );
}
