import Link from "next/link";
import { MapPin, Clock3, Phone } from "lucide-react";
import { fullAddress, site } from "@/data/site";
import { CTAButton } from "./cta-button";

export function InfoStrip() {
  const todayHours = site.hours[0];

  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 rounded-[2.5rem] border border-[color:var(--color-border)] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] lg:grid-cols-[repeat(3,1fr)_auto] lg:items-center lg:p-8">
        <div className="flex gap-4">
          <span className="mt-1 flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--color-cream)] text-[color:var(--color-red)]">
            <Clock3 className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-muted)]">
              Hours
            </p>
            <p className="mt-2 text-lg font-semibold text-[color:var(--color-espresso)]">
              {todayHours.day} {todayHours.open} – {todayHours.close}
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <span className="mt-1 flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--color-cream)] text-[color:var(--color-red)]">
            <MapPin className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-muted)]">
              Address
            </p>
            <p className="mt-2 text-lg font-semibold text-[color:var(--color-espresso)]">
              {fullAddress}
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <span className="mt-1 flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--color-cream)] text-[color:var(--color-red)]">
            <Phone className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-muted)]">
              Phone
            </p>
            <Link
              href={site.phoneHref}
              className="mt-2 block text-lg font-semibold text-[color:var(--color-espresso)]"
            >
              {site.phone}
            </Link>
          </div>
        </div>
        <CTAButton href="/visit" className="w-full lg:w-auto">
          Visit Us
        </CTAButton>
      </div>
    </section>
  );
}
