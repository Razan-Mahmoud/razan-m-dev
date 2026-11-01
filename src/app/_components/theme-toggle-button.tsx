"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggleButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";
  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-md border-2 border-stone-300 bg-stone-200 p-1 text-lg font-semibold text-mauve-500 transition-all duration-300 ease-in-out hover:bg-stone-100 md:p-2 md:text-xl dark:border-blue-800 dark:bg-blue-900 dark:text-slate-300 dark:hover:bg-blue-800"
    >
      {/* border-sky-600 bg-sky-200 hover:bg-sky-100 text-sky-700*/}
      {isDark ? "🌙  Dark" : "☀️ Light"}
    </button>
  );
}
