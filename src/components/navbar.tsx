"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { businessLinks, site } from "@/data/site";
import { cn } from "@/lib/utils";
import { CTAButton } from "./cta-button";

const navItems = [
  { href: "/", label: "Home" },
  { href: businessLinks.menu, label: "Menu" },
  { href: businessLinks.about, label: "About" },
  { href: businessLinks.visit, label: "Visit" },
  { href: businessLinks.contact, label: "Contact" }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const close = () => setIsOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-[color:var(--color-cream)] transition-all duration-300",
        isScrolled
          ? "border-b border-[color:var(--color-border)] shadow-[0_4px_20px_rgba(62,43,31,0.06)]"
          : "border-b border-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "flex w-full items-center justify-between transition-all duration-300",
            isScrolled ? "py-3" : "py-4"
          )}
        >
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
              <Image
                src="/brand/logo-transparent.png"
                alt="Tom N Toms logo"
                fill
                className="object-cover"
                sizes="44px"
              />
            </div>
            <div>
              <p className="font-display text-xl leading-none text-[color:var(--color-espresso)]">
                {site.shortName}
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.26em] text-[color:var(--color-muted)]">
                Café
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium tracking-[0.04em] text-[color:var(--color-espresso)] transition hover:text-[color:var(--color-red)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href={site.phoneHref}
              className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.04em] text-[color:var(--color-espresso)] transition hover:text-[color:var(--color-red)]"
            >
              <Phone className="h-4 w-4" />
              {site.phone}
            </Link>
            <CTAButton href={site.orderingLink}>Order Now</CTAButton>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-[color:var(--color-espresso)] lg:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="border-t border-[color:var(--color-border)] bg-[color:var(--color-cream)] px-4 py-3 sm:px-6 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-4 py-3 text-base font-medium tracking-[0.03em] text-[color:var(--color-espresso)] transition hover:bg-[color:var(--color-cream-alt)] hover:text-[color:var(--color-red)]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={site.phoneHref}
              className="rounded-xl px-4 py-3 text-base font-medium text-[color:var(--color-red)]"
              onClick={() => setIsOpen(false)}
            >
              Call {site.phone}
            </Link>
            <div className="mt-2 px-4 pb-2">
              <CTAButton href={site.orderingLink} className="w-full" variant="primary">
                Order Now
              </CTAButton>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
