"use client";
import Link from "next/link";
import { menuCategories } from "@/data/menu";
import { useScrollspy } from "@/hooks/use-scrollspy";
import { cn } from "@/lib/utils";

const slugs = menuCategories.map((c) => c.slug) as string[];

export function CategoryRail() {
  const activeSlug = useScrollspy(slugs, 120);

  return (
    <nav
      aria-label="Menu categories"
      className="sticky top-24 hidden h-[calc(100vh-6rem)] w-52 shrink-0 flex-col gap-0.5 overflow-y-auto py-2 lg:flex"
    >
      {menuCategories.map((cat) => (
        <Link
          key={cat.slug}
          href={`#${cat.slug}`}
          className={cn(
            "rounded-xl px-4 py-2.5 text-sm font-medium transition-colors duration-150",
            activeSlug === cat.slug
              ? "border-l-[3px] border-[color:var(--color-red)] pl-[13px] !text-[color:var(--color-red)]"
              : "border-l-[3px] border-transparent !text-[color:var(--color-muted)] hover:bg-[color:var(--color-cream-alt)] hover:!text-[color:var(--color-red)]"
          )}
        >
          {cat.category}
        </Link>
      ))}
    </nav>
  );
}
