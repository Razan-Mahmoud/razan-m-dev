import Navbar from "../_components/navbar";

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* navbar */}
      <Navbar />

      {/* children */}
      <main className="bg-neutral-100">{children}</main>
    </>
  );
}
