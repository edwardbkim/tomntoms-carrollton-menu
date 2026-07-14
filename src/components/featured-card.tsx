import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type FeaturedCardProps = {
  title: string;
  description: string;
  href: string;
  image: string;
  alt: string;
};

export function FeaturedCard({ title, description, href, image, alt }: FeaturedCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-[2rem] border border-[color:var(--color-border)] bg-white shadow-[0_18px_45px_rgba(15,23,42,0.04)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(15,23,42,0.08)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition duration-200 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex items-start justify-between gap-4 p-6">
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
