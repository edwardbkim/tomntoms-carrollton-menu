import Link from "next/link";
import { ArrowRight, Clock3, MapPin, PhoneCall } from "lucide-react";
import { FeaturedCard } from "@/components/featured-card";
import { Hero } from "@/components/hero";
import { InfoStrip } from "@/components/info-strip";
import { SectionHeading } from "@/components/section-heading";
import { CTAButton } from "@/components/cta-button";
import { featuredMenuItems } from "@/data/menu";
import { fullAddress, site } from "@/data/site";
import { formatPrice } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Explore The Menu"
            title="Start with the categories guests come back for."
            description="Designed for quick scanning on mobile and effortless browsing in store, the menu prioritizes clarity without losing character."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {site.featuredCategories.map((category) => (
              <FeaturedCard
                key={category.title}
                title={category.title}
                description={category.description}
                href={category.href}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Signature Picks"
            title="A concise set of house favorites."
            description="Premium espresso, thoughtful specialty drinks, and food that supports long mornings, meetings, and work sessions."
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {featuredMenuItems.slice(0, 6).map((item) => (
              <article
                key={item.name}
                className="rounded-[2rem] border border-[color:var(--color-border)] bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.04)]"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-green)]">
                      {item.category}
                    </p>
                    <h3 className="mt-3 font-display text-3xl text-[color:var(--color-text)]">{item.name}</h3>
                  </div>
                  <span className="rounded-full bg-[color:var(--color-cream)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-burgundy)]">
                    Featured
                  </span>
                </div>
                {item.description ? (
                  <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">{item.description}</p>
                ) : null}
                <div className="mt-5 flex items-center justify-between gap-4">
                  <p className="text-sm font-medium text-[color:var(--color-muted)]">
                    {item.price
                      ? formatPrice(item.price)
                      : Object.entries(item.sizes ?? {})
                          .map(([size, price]) => `${size} ${formatPrice(price)}`)
                          .join(" / ")}
                  </p>
                  <Link
                    href={`/menu#${item.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-burgundy)]"
                  >
                    View Category
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="rounded-[2.5rem] border border-[color:var(--color-border)] bg-[linear-gradient(160deg,rgba(107,23,23,0.96),rgba(60,14,14,0.96))] p-8 text-white shadow-[0_26px_70px_rgba(107,23,23,0.24)] sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">Brand Story</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              Hospitality with the intimacy of a living room and the focus of a library.
            </h2>
          </div>
          <div>
            <SectionHeading
              eyebrow="The Cafe"
              title="Built for people who want more than a quick coffee stop."
              description={site.story}
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton href="/about">Read More</CTAButton>
              <CTAButton href={site.orderingLink} variant="secondary">
                Order Now
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="The Experience"
            title="Made for every pace of the day."
            description="From solo work sessions to casual meetings and quiet resets, the space is designed to feel warm, intentional, and easy to return to."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {site.experience.map((entry, index) => (
              <article
                key={entry.title}
                className="rounded-[2rem] border border-[color:var(--color-border)] bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.04)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--color-green)]">
                  0{index + 1}
                </p>
                <h3 className="mt-4 font-display text-3xl text-[color:var(--color-text)]">{entry.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">{entry.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <InfoStrip />

      <section className="px-4 pb-16 pt-6 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-[2.75rem] border border-[color:var(--color-border)] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.06)] lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-green)]">Plan Your Visit</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-[color:var(--color-text)] sm:text-5xl">
              Coffee worth visiting for, space worth staying in.
            </h2>
            <div className="mt-6 grid gap-4 text-sm leading-7 text-[color:var(--color-muted)] sm:grid-cols-3">
              <div className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 text-[color:var(--color-burgundy)]" />
                <span>{fullAddress}</span>
              </div>
              <div className="flex gap-3">
                <Clock3 className="mt-1 h-5 w-5 text-[color:var(--color-burgundy)]" />
                <span>Open daily with extended evening hours on Friday and Saturday.</span>
              </div>
              <div className="flex gap-3">
                <PhoneCall className="mt-1 h-5 w-5 text-[color:var(--color-burgundy)]" />
                <span>{site.phone}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <CTAButton href="/menu">View Menu</CTAButton>
            <CTAButton href={site.phoneHref} variant="secondary">
              Call Now
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
