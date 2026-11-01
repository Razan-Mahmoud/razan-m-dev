"use client";

import { useEffect, useRef, useState } from "react";

type props = {
  title: string;
  width: string;
};
export default function SkillComponentCard({ title, width }: props) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col gap-1">
      {/* title */}
      <div className="flex justify-between">
        <p>{title}</p>
      </div>

      <div className="relative">
        {/* background */}
        <div className="h-2 w-full rounded-lg bg-slate-200 dark:bg-indigo-800"></div>

        {/* foreground */}
        <div
          ref={sectionRef}
          className={`absolute inset-0 h-2 rounded-lg transition-all duration-1000 ease-out ${width} ${
            isVisible ? "bg-gradient-to-r from-blue-500 to-purple-500" : "bg-slate-300"
          }`}
        ></div>
      </div>
    </div>
  );
}
