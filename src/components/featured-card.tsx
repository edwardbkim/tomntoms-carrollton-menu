import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type FeaturedCardProps = {
  title: string;
  description: string;
  href: string;
};

export function FeaturedCard({ title, description, href }: FeaturedCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-[2rem] border border-[color:var(--color-border)] bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(15,23,42,0.08)]"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-display text-2xl text-[color:var(--color-espresso)]">{title}</p>
          <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">{description}</p>
        </div>
        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-cream)] text-[color:var(--color-red)] transition group-hover:bg-[color:var(--color-red)] group-hover:text-white">
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </div>
    </Link>
  );
}
