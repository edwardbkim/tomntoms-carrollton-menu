import Link from "next/link";
import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { CTAButton } from "@/components/cta-button";
import { SectionHeading } from "@/components/section-heading";
import { fullAddress, site } from "@/data/site";

export const metadata = {
  title: "Visit | Tom N Toms Cafe",
  description: "Find Tom N Toms Cafe hours, location, directions, and contact details."
};

export default function VisitPage() {
  return (
    <div className="px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24 lg:pt-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Visit"
          title="Everything you need for a quick stop or a long stay."
          description="Plan your visit, check hours, and head straight to the cafe with one tap."
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="rounded-[2rem] border border-[color:var(--color-border)] bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.04)] sm:p-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 text-[color:var(--color-burgundy)]" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-green)]">Address</p>
                  <p className="mt-2 text-lg font-semibold text-[color:var(--color-text)]">{fullAddress}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="mt-1 h-5 w-5 text-[color:var(--color-burgundy)]" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-green)]">Phone</p>
                  <Link href={site.phoneHref} className="mt-2 block text-lg font-semibold text-[color:var(--color-text)]">
                    {site.phone}
                  </Link>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="mt-1 h-5 w-5 text-[color:var(--color-burgundy)]" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-green)]">Email</p>
                  <Link href={`mailto:${site.email}`} className="mt-2 block text-lg font-semibold text-[color:var(--color-text)]">
                    {site.email}
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton href={site.mapsLink}>Open Maps</CTAButton>
              <CTAButton href={site.orderingLink} variant="secondary">
                Order Now
              </CTAButton>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[color:var(--color-border)] bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.04)] sm:p-8">
            <div className="flex items-center gap-3">
              <Clock3 className="h-5 w-5 text-[color:var(--color-burgundy)]" />
              <h2 className="font-display text-3xl text-[color:var(--color-text)]">Hours</h2>
            </div>
            <div className="mt-6 divide-y divide-[color:var(--color-border)]">
              {site.hours.map((entry) => (
                <div key={entry.day} className="flex items-center justify-between gap-4 py-4">
                  <p className="font-medium text-[color:var(--color-text)]">{entry.day}</p>
                  <p className="text-sm font-semibold text-[color:var(--color-muted)]">
                    {entry.open} - {entry.close}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-6 overflow-hidden rounded-[2.5rem] border border-[color:var(--color-border)] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
          <div className="flex items-center justify-between gap-4 border-b border-[color:var(--color-border)] px-6 py-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-green)]">Location Map</p>
              <h2 className="mt-2 font-display text-3xl text-[color:var(--color-text)]">Easy to find, easy to return to.</h2>
            </div>
            <Link
              href={site.mapsLink}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-burgundy)]"
            >
              Open in Maps
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative aspect-[16/9] bg-[linear-gradient(135deg,rgba(107,23,23,0.08),rgba(11,79,58,0.08))]">
            <iframe
              title={`${site.name} map`}
              src={site.mapsEmbedLink}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
