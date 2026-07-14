import Image from "next/image";
import { site } from "@/data/site";
import { CTAButton } from "./cta-button";
import { MinhwaHeroBranch } from "./icons/minhwa-hero-branch";

export function MenuHero() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--color-cream)]">
      {/* Desktop: left cream panel + right photo */}
      <div className="hidden lg:flex" style={{ minHeight: "440px" }}>
        <div className="flex w-[36%] shrink-0 flex-col justify-center px-10 py-14 xl:px-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--color-muted)]">
            {site.hero.eyebrow}
          </p>
          <h1 className="font-display text-4xl leading-tight text-[color:var(--color-espresso)] xl:text-5xl">
            {site.hero.headline}
          </h1>
          <p className="mt-4 max-w-xs text-base leading-7 text-[color:var(--color-muted)]">
            {site.hero.subheadline}
          </p>
          <div className="mt-8">
            <CTAButton href={site.orderingLink}>Order Now</CTAButton>
          </div>
        </div>

        {/* Photo panel — cream background matches site; no overlay gradient needed */}
        <div className="relative flex-1 overflow-hidden">
          <Image
            src="/images/hero/hero-candidate.webp"
            alt="Tom N Toms signature menu — snow flakes, waffles, specialty drinks, and fresh food"
            fill
            priority
            sizes="64vw"
            className="object-cover object-center"
          />
        </div>

        {/* Minhwa branch at the cream/photo junction */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[34%] top-4">
            <MinhwaHeroBranch className="opacity-85" />
          </div>
        </div>
      </div>

      {/* Mobile: photo banner then text */}
      <div className="lg:hidden">
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
          <Image
            src="/images/hero/hero-candidate.webp"
            alt="Tom N Toms signature menu — snow flakes, waffles, specialty drinks, and fresh food"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="px-4 pb-6 pt-5 sm:px-6">
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
