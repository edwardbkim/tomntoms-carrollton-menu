import Link from "next/link";
import Image from "next/image";
import { businessLinks, fullAddress, site } from "@/data/site";

const navItems = [
  { href: "/", label: "Home" },
  { href: businessLinks.menu, label: "Menu" },
  { href: businessLinks.about, label: "About" },
  { href: businessLinks.visit, label: "Visit" },
  { href: businessLinks.contact, label: "Contact" }
];

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-border)] bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="relative h-14 w-[84px] shrink-0">
              <Image
                src="/brand/logo-transparent.png"
                alt="Tom N Toms brand mark"
                fill
                sizes="84px"
                className="object-contain"
              />
            </div>
            <div>
              <p className="font-display text-2xl text-[color:var(--color-espresso)]">
                {site.shortName}
              </p>
              <p className="text-xs uppercase tracking-[0.26em] text-[color:var(--color-muted)]">
                Korean Café & Bakery
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-[color:var(--color-muted)]">
            {site.description}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--color-muted)]">
            Navigation
          </p>
          <div className="mt-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[color:var(--color-espresso)] transition hover:text-[color:var(--color-red)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--color-muted)]">
            Visit
          </p>
          <div className="mt-4 space-y-3 text-sm leading-7 text-[color:var(--color-muted)]">
            <p>{fullAddress}</p>
            <p>
              <Link
                href={site.phoneHref}
                className="text-[color:var(--color-espresso)] transition hover:text-[color:var(--color-red)]"
              >
                {site.phone}
              </Link>
            </p>
            <p>
              <Link
                href={`mailto:${site.email}`}
                className="text-[color:var(--color-espresso)] transition hover:text-[color:var(--color-red)]"
              >
                {site.email}
              </Link>
            </p>
            <p>
              <Link
                href={site.instagram}
                className="text-[color:var(--color-espresso)] transition hover:text-[color:var(--color-red)]"
              >
                Instagram
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
