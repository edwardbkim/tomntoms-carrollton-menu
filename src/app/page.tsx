"use client";

import { useMemo, useState } from "react";
import {
  favoriteItems,
  locationInfo,
  menuCategories,
  type MenuItem,
} from "@/data/menu";

const navItems = [
  { label: "Menu", href: "#menu", external: false },
  { label: "Order", href: locationInfo.orderUrl, external: true },
  { label: "Location", href: "#location", external: false },
  { label: "Instagram", href: locationInfo.instagramUrl, external: true },
];

function formatPrices(item: MenuItem) {
  return item.prices.map((price) => (
    <span className="price-pill" key={`${item.id}-${price.label}`}>
      <span>{price.label}</span>
      <strong>${price.amount}</strong>
    </span>
  ));
}

function MenuCard({ item, compact = false }: { item: MenuItem; compact?: boolean }) {
  return (
    <article className={`menu-card ${compact ? "menu-card-compact" : ""}`}>
      <div className="menu-card-main">
        <div>
          <p className="item-category">{item.category}</p>
          <h3>{item.name}</h3>
          {item.korean ? <p className="korean">{item.korean}</p> : null}
        </div>
        {item.imagePlaceholder ? <div className="image-slot" aria-hidden="true" /> : null}
      </div>
      {item.description ? <p className="description">{item.description}</p> : null}
      {item.tags?.length ? (
        <div className="tags">
          {item.tags.map((tag) => (
            <span key={`${item.id}-${tag}`}>{tag}</span>
          ))}
        </div>
      ) : null}
      <div className="prices">{formatPrices(item)}</div>
    </article>
  );
}

export default function Home() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const normalizedSearch = search.trim().toLowerCase();

  const itemMatches = (item: MenuItem, categoryId: string) => {
    const matchesCategory = activeCategory === "all" || categoryId === activeCategory;
    const searchable = [
      item.name,
      item.category,
      item.description,
      item.korean,
      ...(item.tags ?? []),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return matchesCategory && searchable.includes(normalizedSearch);
  };

  const filteredFavorites = useMemo(() => {
    const categoryByName = new Map(
      menuCategories.map((category) => [category.name, category.id]),
    );

    return favoriteItems.filter((item) =>
      itemMatches(item, categoryByName.get(item.category) ?? "all"),
    );
  }, [activeCategory, normalizedSearch]);

  const filteredCategories = useMemo(() => {
    return menuCategories
      .map((category) => {
        const items = category.items.filter((item) =>
          itemMatches(item, category.id),
        );

        return { ...category, items };
      })
      .filter((category) => category.items.length > 0);
  }, [activeCategory, normalizedSearch]);

  return (
    <main>
      <section className="hero">
        <div className="hero-inner">
          <p className="brand">Tom N Tom&apos;s Coffee & Eatery</p>
          <p className="location">{locationInfo.city}</p>
          <h1>Coffee, Bingsu, Waffles & Korean Caf&eacute; Favorites</h1>
          <p className="subtext">
            Browse customer favorites, drinks, desserts, and caf&eacute; classics.
          </p>
          <a
            className="order-btn"
            href={locationInfo.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Order Now &rarr;
          </a>
        </div>
      </section>

      <div className="sticky-tools" id="menu">
        <label className="search-label" htmlFor="menu-search">
          Search menu
        </label>
        <input
          id="menu-search"
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search drinks, waffles, bingsu..."
        />
        <p className="size-legend">
          <span>T</span> Tall &nbsp;·&nbsp; <span>G</span> Grande &nbsp;·&nbsp; <span>V</span> Venti
        </p>
        <div className="category-scroll" aria-label="Menu categories">
          <button
            className={activeCategory === "all" ? "active" : ""}
            onClick={() => setActiveCategory("all")}
            type="button"
          >
            All
          </button>
          {menuCategories.map((category) => (
            <button
              className={activeCategory === category.id ? "active" : ""}
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              type="button"
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <section className="content-section" id="favorites">
        <div className="section-heading">
          <p>Customer Picks</p>
          <h2>Favorites near the top</h2>
        </div>
        <div className="favorites-grid">
          {filteredFavorites.slice(0, 16).map((item) => (
            <MenuCard item={item} key={`favorite-${item.id}`} compact />
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p>Full Menu</p>
          <h2>{activeCategory === "all" ? "Browse by category" : "Filtered menu"}</h2>
        </div>
        {filteredCategories.length ? (
          filteredCategories.map((category) => (
            <section className="category-section" id={category.id} key={category.id}>
              <div className="category-heading">
                <h2>{category.name}</h2>
                {category.note ? <p>{category.note}</p> : null}
              </div>
              <div className="menu-grid">
                {category.items.map((item) => (
                  <MenuCard item={item} key={item.id} />
                ))}
              </div>
            </section>
          ))
        ) : (
          <p className="empty-state">No menu items match that search yet.</p>
        )}
      </section>

      <section className="location-section" id="location">
        <div>
          <p className="eyebrow">Visit Us</p>
          <h2>{locationInfo.name}</h2>
          <p>{locationInfo.city}</p>
        </div>
        <dl>
          <div>
            <dt>Address</dt>
            <dd>{locationInfo.address}</dd>
          </div>
          <div>
            <dt>Phone</dt>
            <dd>{locationInfo.phone}</dd>
          </div>
          <div>
            <dt>Hours</dt>
            <dd>{locationInfo.hours}</dd>
          </div>
        </dl>
      </section>

      <nav className="bottom-nav" aria-label="Quick links">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </main>
  );
}
