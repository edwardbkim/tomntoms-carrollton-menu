"use client";

import Link from "next/link";
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
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled ? "px-3 pt-3" : "px-0 pt-0"
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between transition-all duration-300",
          isScrolled
            ? "rounded-full border border-white/70 bg-white/82 px-4 py-3 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent px-4 py-4 sm:px-6 lg:px-8"
        )}
      >
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--color-burgundy)] text-base font-semibold tracking-[0.2em] text-white shadow-[0_10px_24px_rgba(107,23,23,0.25)]">
            TT
          </span>
          <div>
            <p className="font-display text-xl leading-none text-[color:var(--color-text)]">
              {site.shortName}
            </p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.26em] text-[color:var(--color-muted)]">
              Cafe
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[color:var(--color-text)] transition hover:text-[color:var(--color-burgundy)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={site.phoneHref}
            className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--color-text)] transition hover:text-[color:var(--color-green)]"
          >
            <Phone className="h-4 w-4" />
            {site.phone}
          </Link>
          <CTAButton href={site.orderingLink}>Order Now</CTAButton>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--color-border)] bg-white/85 text-[color:var(--color-text)] lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="mx-3 mt-3 rounded-[2rem] border border-white/70 bg-white/92 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-base font-medium text-[color:var(--color-text)] transition hover:bg-[color:var(--color-cream-strong)]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={site.phoneHref}
              className="rounded-2xl px-4 py-3 text-base font-medium text-[color:var(--color-green)]"
              onClick={() => setIsOpen(false)}
            >
              Call {site.phone}
            </Link>
            <CTAButton href={site.orderingLink} className="mt-2 w-full" variant="primary">
              Order Now
            </CTAButton>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
