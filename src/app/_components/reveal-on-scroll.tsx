"use client";

import { useEffect, useRef } from "react";

export default function RevealOnScroll({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (ref.current) {
          if (entry.isIntersecting) {
            ref.current.classList.add("visible");
          }
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
}
