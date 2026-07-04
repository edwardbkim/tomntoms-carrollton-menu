import { MenuCategory as MenuCategoryType } from "@/data/menu";
import { MenuItem } from "./menu-item";
import { MinhwaBranch } from "./icons/minhwa-branch";
import { FadeIn } from "./fade-in";

type MenuCategoryProps = {
  category: MenuCategoryType;
};

export function MenuCategory({ category }: MenuCategoryProps) {
  const isMdProduct = category.slug === "md-product";

  return (
    <FadeIn>
      <section
        id={category.slug}
        className="scroll-mt-40 rounded-[2rem] border border-[color:var(--color-border)] bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.04)] sm:p-8 lg:scroll-mt-28"
      >
        <div className="mb-6 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--color-muted)]">
            Menu Category
          </p>
          <MinhwaBranch className="mt-2 mb-1 opacity-60" />
          <h2 className="mt-1 font-display text-3xl text-[color:var(--color-espresso)]">
            {category.category}
          </h2>
          <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">
            {category.description}
          </p>
        </div>
        <div>
          {category.items.map((item) => (
            <MenuItem key={item.name} item={item} blossomFallback={isMdProduct} />
          ))}
        </div>
      </section>
    </FadeIn>
  );
}
