import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { CTAButton } from "@/components/cta-button";
import { SectionHeading } from "@/components/section-heading";
import { fullAddress, site } from "@/data/site";

export const metadata = {
  title: "Contact | Tom N Toms Cafe",
  description: "Contact Tom N Toms Cafe for questions, partnerships, catering inquiries, or general information."
};

export default function ContactPage() {
  return (
    <div className="px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24 lg:pt-12">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Reach out for inquiries, partnerships, or planning ahead."
            description="The form below is ready to connect to your preferred inbox workflow. Until then, guests can still call, email, or visit directly."
          />
          <div className="mt-8 space-y-5 rounded-[2rem] border border-[color:var(--color-border)] bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.04)] sm:p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-green)]">Phone</p>
              <Link href={site.phoneHref} className="mt-2 block text-lg font-semibold text-[color:var(--color-text)]">
                {site.phone}
              </Link>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-green)]">Email</p>
              <Link href={`mailto:${site.email}`} className="mt-2 block text-lg font-semibold text-[color:var(--color-text)]">
                {site.email}
              </Link>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-green)]">Visit</p>
              <p className="mt-2 text-lg font-semibold text-[color:var(--color-text)]">{fullAddress}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CTAButton href={site.phoneHref}>Call Now</CTAButton>
              <CTAButton href="/visit" variant="secondary">
                Visit Us
              </CTAButton>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
