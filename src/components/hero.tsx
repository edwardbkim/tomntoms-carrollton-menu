import Image from "next/image";
import { site } from "@/data/site";
import { CTAButton } from "./cta-button";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24 lg:pt-14">
      <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top_left,rgba(88,28,32,0.10),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.5),rgba(250,245,236,0))]" />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--color-muted)]">
            {site.hero.eyebrow}
          </p>
          <h1 className="font-display text-balance text-5xl leading-[0.95] text-[color:var(--color-espresso)] sm:text-6xl lg:text-7xl">
            {site.hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[color:var(--color-muted)] sm:text-xl">
            {site.hero.subheadline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="/menu">View Menu</CTAButton>
            <CTAButton href="/visit" variant="secondary">
              Visit Us
            </CTAButton>
          </div>
          <div className="mt-10 grid max-w-lg grid-cols-3 gap-3 rounded-[2rem] border border-white/70 bg-white/78 p-3 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur">
            {[
              { label: "Coffee", value: "Specialty" },
              { label: "Food", value: "Made Fresh" },
              { label: "Atmosphere", value: "All Day" }
            ].map((stat) => (
              <div key={stat.label} className="rounded-[1.5rem] bg-[color:var(--color-cream)] px-4 py-4 text-center">
                <p className="font-display text-2xl text-[color:var(--color-espresso)]">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.24em] text-[color:var(--color-muted)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -bottom-6 right-0 h-28 w-28 rounded-full bg-[color:var(--color-red)]/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white p-3 shadow-[0_28px_90px_rgba(15,23,42,0.12)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[linear-gradient(180deg,rgba(88,28,32,0.06),transparent)]">
              <Image
                src="/images/hero/cafe-hero.svg"
                alt="Illustrated Korean café interior with coffee and lounge seating"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-8 left-8 right-8 rounded-[1.75rem] border border-white/70 bg-white/82 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.1)] backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--color-muted)]">
                Since 1999
              </p>
              <p className="mt-3 font-display text-2xl text-[color:var(--color-espresso)]">
                Korean café culture, rooted in Carrollton.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
