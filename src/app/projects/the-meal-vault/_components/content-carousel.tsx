import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import imgOptPic from "@/assets/image-optimization.png";
import Image from "next/image";
import lazyLoadedPic from "@/assets/iframe.png";
import responsivePic from "@/assets/responsive.png";
import colorContrastPic from "@/assets/color-contrast.png";

export function ContentCarousel() {
  const carouselContent = [
    {
      src: imgOptPic,
      alt: "A snapshot of the app showing some images",
      title: "Next.js Image Optimization",
    },
    {
      src: lazyLoadedPic,
      alt: "A snapshot for a recipe YouTube video",
      title: "Lazy-Loading iframes for YouTube recipe videos",
    },
    {
      src: responsivePic,
      alt: "A snapshot for the main dishes section",
      title: "Responsive-styling, for mobile, tablet, and desktop",
    },
    {
      src: colorContrastPic,
      alt: "A snapshot for Continents page in dark mode",
      title: "Semantic HTML and sufficient color contrast",
    },
  ];

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="relative aspect-square w-full max-w-lg md:h-screen"
    >
      <CarouselContent>
        {/* image optimization */}
        {carouselContent.map((card, index) => {
          return (
            <CarouselItem key={index}>
              {/* description */}
              <figcaption className="mb-4 flex items-center justify-center rounded-2xl bg-sky-200 p-3 text-center text-sky-900 dark:bg-blue-900">
                <p className="text-lg font-semibold text-sky-900 md:text-xl dark:text-slate-300">
                  {card.title}
                </p>
              </figcaption>
              <figure className="relative flex aspect-video p-1">
                {/* background image */}
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  className="size-full rounded-lg object-cover object-center"
                />
              </figure>
            </CarouselItem>
          );
        })}
      </CarouselContent>

      <CarouselPrevious className="absolute top-1/2 left-4 z-10 -translate-y-1/2 dark:bg-slate-50 dark:text-blue-800 dark:hover:bg-slate-200 dark:hover:text-blue-600" />
      <CarouselNext className="absolute top-1/2 right-4 z-10 -translate-y-1/2 dark:bg-slate-50 dark:text-blue-800 dark:hover:bg-slate-200 dark:hover:text-blue-600" />
    </Carousel>
  );
}
