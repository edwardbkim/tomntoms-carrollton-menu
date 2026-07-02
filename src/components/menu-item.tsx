import { MenuItem as MenuItemType } from "@/data/menu";
import { formatPrice } from "@/lib/utils";

type MenuItemProps = {
  item: MenuItemType;
};

export function MenuItem({ item }: MenuItemProps) {
  return (
    <article className="grid gap-3 border-b border-[color:var(--color-border)] py-5 sm:grid-cols-[1fr_auto] sm:items-start">
      <div className="pr-2">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-lg font-semibold text-[color:var(--color-text)]">{item.name}</h3>
          {item.featured ? (
            <span className="rounded-full bg-[color:var(--color-cream)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-burgundy)]">
              Signature
            </span>
          ) : null}
        </div>
        {item.description ? (
          <p className="mt-2 max-w-2xl text-sm leading-7 text-[color:var(--color-muted)]">
            {item.description}
          </p>
        ) : null}
      </div>
      <div className="min-w-[10rem] text-left sm:text-right">
        {item.sizes ? (
          <dl className="grid grid-cols-[auto_auto] gap-x-4 gap-y-1 text-sm">
            {Object.entries(item.sizes).map(([size, price]) => (
              <div key={`${item.name}-${size}`} className="contents">
                <dt className="font-medium uppercase tracking-[0.16em] text-[color:var(--color-muted)]">
                  {size}
                </dt>
                <dd className="font-semibold text-[color:var(--color-text)]">{formatPrice(price)}</dd>
              </div>
            ))}
          </dl>
        ) : item.price ? (
          <p className="text-lg font-semibold text-[color:var(--color-text)]">{formatPrice(item.price)}</p>
        ) : null}
      </div>
    </article>
  );
}
