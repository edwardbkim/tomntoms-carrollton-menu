import Image from "next/image";
import { site } from "@/data/site";
import { CTAButton } from "./cta-button";

export function MenuHero() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--color-cream)]">
      {/* Desktop: left cream panel + right photo */}
      <div className="hidden lg:flex" style={{ minHeight: "380px" }}>
        <div className="flex w-[42%] shrink-0 flex-col justify-center px-12 py-14 xl:px-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--color-muted)]">
            {site.hero.eyebrow}
          </p>
          <h1 className="font-display text-4xl leading-tight text-[color:var(--color-espresso)] xl:text-5xl">
            {site.hero.headline}
          </h1>
          <p className="mt-4 max-w-sm text-base leading-7 text-[color:var(--color-muted)]">
            {site.hero.subheadline}
          </p>
          <div className="mt-8">
            <CTAButton href={site.orderingLink}>Order Now</CTAButton>
          </div>
        </div>

        <div className="relative flex-1 overflow-hidden">
          <Image
            src="/images/hero/hero-waffle.webp"
            alt="Strawberry whip cream waffle with coffee at Tom N Tom's Carrollton"
            fill
            priority
            sizes="58vw"
            className="object-cover object-center"
          />
          {/* Soft left-edge blend into cream */}
          <div
            className="absolute inset-y-0 left-0 w-16 pointer-events-none"
            style={{ background: "linear-gradient(to right, #FAF5EC, transparent)" }}
          />
        </div>
      </div>

      {/* Mobile: stacked photo then text */}
      <div className="lg:hidden">
        <div className="relative aspect-[3/2] w-full overflow-hidden">
          <Image
            src="/images/hero/hero-waffle.webp"
            alt="Strawberry whip cream waffle with coffee at Tom N Tom's Carrollton"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
            style={{ background: "linear-gradient(to top, #FAF5EC, transparent)" }}
          />
        </div>
        <div className="px-4 pb-6 pt-4 sm:px-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--color-muted)]">
            {site.hero.eyebrow}
          </p>
          <h1 className="font-display text-3xl leading-tight text-[color:var(--color-espresso)] sm:text-4xl">
            {site.hero.headline}
          </h1>
          <div className="mt-5">
            <CTAButton href={site.orderingLink}>Order Now</CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
