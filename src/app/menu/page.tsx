import Link from "next/link";
import { MenuCategory } from "@/components/menu-category";
import { SectionHeading } from "@/components/section-heading";
import { menuCategories } from "@/data/menu";

export const metadata = {
  title: "Menu | Tom N Toms Cafe",
  description: "Browse the full Tom N Toms Cafe menu with coffee, signature drinks, bakery, and made-to-order food."
};

export default function MenuPage() {
  return (
    <div className="px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24 lg:pt-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Full Menu"
          title="Built to be readable at a glance."
          description="Clear category jumps, aligned pricing, and structured groupings make the menu easy to browse on a phone or in line at the counter."
        />

        <nav
          aria-label="Menu categories"
          className="sticky top-24 z-20 mt-8 overflow-x-auto rounded-full border border-[color:var(--color-border)] bg-white/92 p-2 shadow-[0_16px_40px_rgba(15,23,42,0.06)] backdrop-blur"
        >
          <div className="flex min-w-max gap-2">
            {menuCategories.map((category) => (
              <Link
                key={category.slug}
                href={`#${category.slug}`}
                className="inline-flex min-h-11 items-center rounded-full px-4 text-sm font-semibold text-[color:var(--color-text)] transition hover:bg-[color:var(--color-cream)] hover:text-[color:var(--color-burgundy)]"
              >
                {category.category}
              </Link>
            ))}
          </div>
        </nav>

        <div className="mt-8 grid gap-6">
          {menuCategories.map((category) => (
            <MenuCategory key={category.slug} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}
