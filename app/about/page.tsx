import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about this project",
};

export default function AboutPage() {
  return (
    <article className="space-y-4">
      <h1 className="text-3xl font-bold tracking-tight">About</h1>
      <p className="text-slate-600">
        This is an example route page located at <code>app/about/page.tsx</code>
        . Create more routes by adding folders next to it.
      </p>
      <p className="text-slate-600">
        Every route can export a <code>metadata</code> object or a{" "}
        <code>generateMetadata</code> function to customize SEO information.
      </p>
    </article>
  );
}
