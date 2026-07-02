import Image from "next/image";
import { MenuItem as MenuItemType } from "@/data/menu";
import { formatPrice } from "@/lib/utils";

export function MenuItem({ item }: { item: MenuItemType }) {
  return (
    <article className="flex gap-3 border-b border-[color:var(--color-border)] py-5 sm:gap-4">
      {item.image ? (
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl sm:h-20 sm:w-20">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(min-width: 640px) 80px, 64px"
            className="object-cover"
          />
        </div>
      ) : null}

      <div className="flex min-w-0 flex-1 items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base font-semibold leading-snug text-[color:var(--color-text)] sm:text-lg">
              {item.name}
            </h3>
            {item.featured ? (
              <span className="rounded-full bg-[color:var(--color-cream)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-burgundy)]">
                Signature
              </span>
            ) : null}
          </div>
          {item.description ? (
            <p className="mt-1.5 max-w-2xl text-sm leading-6 text-[color:var(--color-muted)]">
              {item.description}
            </p>
          ) : null}
        </div>

        <div className="shrink-0 pt-0.5 text-right">
          {item.sizes ? (
            <dl className="grid grid-cols-[auto_auto] gap-x-3 gap-y-1 text-sm">
              {Object.entries(item.sizes).map(([size, price]) => (
                <div key={`${item.name}-${size}`} className="contents">
                  <dt className="font-medium uppercase tracking-[0.16em] text-[color:var(--color-muted)]">
                    {size}
                  </dt>
                  <dd className="font-semibold text-[color:var(--color-text)]">
                    {formatPrice(price)}
                  </dd>
                </div>
              ))}
            </dl>
          ) : item.price ? (
            <p className="text-base font-semibold text-[color:var(--color-text)] sm:text-lg">
              {formatPrice(item.price)}
            </p>
          ) : null}
        </div>
      </div>
    </article>
  );
}
