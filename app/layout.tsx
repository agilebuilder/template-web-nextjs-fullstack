import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import SiteHeader from "@/components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: siteConfig.author ? [{ name: siteConfig.author }] : undefined,
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <SiteHeader />
        <main className="mx-auto w-full max-w-3xl px-6 py-12">{children}</main>
      </body>
    </html>
  );
}
