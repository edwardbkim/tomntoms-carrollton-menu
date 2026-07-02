import Image from "next/image";
import { CTAButton } from "@/components/cta-button";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/data/site";

export const metadata = {
  title: "About | Tom N Toms Cafe",
  description: "Learn about the Tom N Toms Cafe story, atmosphere, and community-centered approach."
};

export default function AboutPage() {
  return (
    <div className="px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24 lg:pt-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white p-3 shadow-[0_28px_90px_rgba(15,23,42,0.12)]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/gallery/about-space.svg"
              alt="Stylized cafe interior seating area"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <SectionHeading
            eyebrow="About Us"
            title="A premium cafe shaped around comfort, quality, and community."
            description={site.story}
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {[
              {
                title: "Coffee First",
                body: "We focus on refined espresso, balanced signatures, and consistency that feels polished rather than precious."
              },
              {
                title: "Made To Order",
                body: "Our food menu supports a full cafe visit, from quick breakfast stops to long lunch meetings."
              },
              {
                title: "Room To Stay",
                body: "The atmosphere is designed to feel layered and warm, with space to work, study, meet, or unwind."
              },
              {
                title: "Community Minded",
                body: "We create opportunities for local vendors and prioritize thoughtful neighborhood partnerships where possible."
              }
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-[color:var(--color-border)] bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.04)]"
              >
                <h3 className="font-display text-3xl text-[color:var(--color-text)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">{item.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="/visit">Visit Us</CTAButton>
            <CTAButton href="/menu" variant="secondary">
              Explore Menu
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
}
