import Image from "next/image";
import Link from "next/link";
import { Apple, ArrowRight, Play, Smartphone } from "lucide-react";
import { site } from "@/data/site";

export function DownloadApp() {
  const { app } = site;

  if (!app.enabled) return null;

  const hasStoreLinks = Boolean(app.iosLink || app.androidLink);

  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 rounded-[2.5rem] border border-[color:var(--color-border)] bg-[linear-gradient(160deg,rgba(107,23,23,0.96),rgba(60,14,14,0.96))] p-8 text-white shadow-[0_26px_70px_rgba(107,23,23,0.24)] sm:p-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              <Smartphone className="h-4 w-4" />
              {app.name}
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">{app.headline}</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/80">{app.description}</p>

            {app.promo.enabled ? (
              <div className="mt-6 inline-flex flex-wrap items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur">
                <span className="rounded-lg bg-white px-3 py-1 font-display text-lg tracking-[0.18em] text-[color:var(--color-red)]">
                  {app.promo.code}
                </span>
                <span className="text-sm font-medium text-white/90">{app.promo.offer}</span>
              </div>
            ) : null}

            {hasStoreLinks ? (
              <div className="mt-7 flex flex-wrap gap-3">
                {app.iosLink ? (
                  <a
                    href={app.iosLink}
                    className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[color:var(--color-red)] transition duration-200 hover:-translate-y-0.5"
                  >
                    <Apple className="h-5 w-5" />
                    App Store
                  </a>
                ) : null}
                {app.androidLink ? (
                  <a
                    href={app.androidLink}
                    className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:bg-white/20"
                  >
                    <Play className="h-5 w-5" />
                    Google Play
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>

          {app.qrImage ? (
            <div className="flex justify-center lg:justify-end">
              <div className="rounded-3xl bg-white p-4 shadow-[0_18px_45px_rgba(0,0,0,0.2)]">
                <div className="relative h-40 w-40">
                  <Image
                    src={app.qrImage}
                    alt={`Scan to download the ${app.name} app`}
                    fill
                    sizes="160px"
                    className="object-contain"
                  />
                </div>
                <p className="mt-2 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-red)]">
                  Scan to download
                </p>
              </div>
            </div>
          ) : null}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-[2rem] border border-[color:var(--color-border)] bg-white px-6 py-5 shadow-[0_18px_45px_rgba(15,23,42,0.04)] sm:px-8">
          <p className="text-sm leading-7 text-[color:var(--color-muted)]">
            Rather order without the app? Order ahead online in a couple of taps.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <a
              href={site.orderingLink}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[color:var(--color-red)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#ffffff] shadow-[0_16px_40px_rgba(88,28,32,0.24)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[color:var(--color-red-hover)]"
            >
              Order Now
            </a>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-burgundy)]"
            >
              Learn More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
