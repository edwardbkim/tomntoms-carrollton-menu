import { MenuCategory } from "@/components/menu-category";
import { MenuHero } from "@/components/menu-hero";
import { CategoryRail } from "@/components/category-rail";
import { CategoryChipBar } from "@/components/category-chip-bar";
import { menuCategories } from "@/data/menu";

export const metadata = {
  title: "Menu | Tom N Tom's Carrollton",
  description:
    "Browse the full Tom N Tom's Carrollton menu — coffee, specialty drinks, snow flakes, waffles, pretzels, bakery, and made-to-order food."
};

export default function MenuPage() {
  return (
    <>
      <MenuHero />
      <div className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <CategoryChipBar />
          <div className="mt-6 flex gap-8 lg:mt-8 lg:gap-10">
            <CategoryRail />
            <div className="min-w-0 flex-1">
              <div className="grid gap-6">
                {menuCategories.map((category) => (
                  <MenuCategory key={category.slug} category={category} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
