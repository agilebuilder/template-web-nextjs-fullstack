import Link from "next/link";
import { siteConfig } from "@/lib/site";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/about", label: "关于" },
];

export default function SiteHeader() {
  return (
    <header className="border-b border-slate-200">
      <div className="mx-auto flex h-14 w-full max-w-3xl items-center justify-between px-6">
        <Link href="/" className="text-base font-semibold">
          {siteConfig.name}
        </Link>
        <nav className="flex items-center gap-5 text-sm text-slate-600">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
