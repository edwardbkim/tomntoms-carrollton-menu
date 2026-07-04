"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { menuCategories } from "@/data/menu";
import { useScrollspy } from "@/hooks/use-scrollspy";
import { cn } from "@/lib/utils";

const slugs = menuCategories.map((c) => c.slug) as string[];

export function CategoryChipBar() {
  const activeSlug = useScrollspy(slugs, 120);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chip = barRef.current?.querySelector(
      `[data-slug="${activeSlug}"]`
    ) as HTMLElement | null;
    chip?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [activeSlug]);

  return (
    <div className="sticky top-[76px] z-30 -mx-4 border-b border-[color:var(--color-border)] bg-[#FAF5EC]/95 backdrop-blur sm:-mx-6 lg:hidden">
      <div
        ref={barRef}
        className="flex gap-1.5 overflow-x-auto px-4 py-2.5 [scrollbar-width:none] sm:px-6"
      >
        {menuCategories.map((cat) => (
          <Link
            key={cat.slug}
            href={`#${cat.slug}`}
            data-slug={cat.slug}
            className={cn(
              "inline-flex shrink-0 items-center rounded-full px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors duration-150",
              activeSlug === cat.slug
                ? "bg-[color:var(--color-red)] !text-[#ffffff]"
                : "bg-[color:var(--color-cream-alt)] text-[color:var(--color-muted)] hover:bg-[color:var(--color-latte)] hover:text-[color:var(--color-espresso)]"
            )}
          >
            {cat.category}
          </Link>
        ))}
      </div>
    </div>
  );
}
