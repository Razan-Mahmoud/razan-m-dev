import type { Metadata } from "next";
import { Roboto, Geist } from "next/font/google";

import "./globals.css";

import { ThemeProvider } from "@/providers/theme-provider";
import ScrollToTopButton from "./_components/up-button";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Razan M. Fahmy",
  description: "Portfolio of Razan M. Fahmy - Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("scroll-smooth", "font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <body
        className={`bg-neutral-100 dark:bg-indigo-950 dark:text-slate-300 ${roboto.className} `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Main App */}
          <div className="min-h-screen">{children}</div>
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
