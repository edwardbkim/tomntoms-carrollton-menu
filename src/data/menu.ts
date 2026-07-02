export type MenuItem = {
  name: string;
  description?: string;
  price?: number;
  sizes?: Record<string, number>;
  featured?: boolean;
};

export type MenuCategory = {
  category: string;
  slug: string;
  description: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    category: "Coffee & Espresso",
    slug: "coffee-espresso",
    description: "Core espresso drinks with balanced flavor, clean milk texture, and straightforward pricing.",
    items: [
      { name: "Americano", sizes: { T: 4.25, G: 4.75, V: 5.25 }, featured: true },
      { name: "Cafe Latte", sizes: { T: 5.85, G: 6.35, V: 6.75 }, description: "Velvety milk and espresso with a smooth finish.", featured: true },
      { name: "Cappuccino", sizes: { T: 5.55, G: 6.05 }, description: "Airy foam and rich espresso." },
      { name: "Vanilla Latte", sizes: { T: 6.15, G: 6.65, V: 7.05 } },
      { name: "Caramel Macchiato", sizes: { T: 6.35, G: 6.85, V: 7.25 } },
      { name: "Mocha", sizes: { T: 6.25, G: 6.75, V: 7.15 } }
    ]
  },
  {
    category: "Signature Drinks",
    slug: "signature-drinks",
    description: "House favorites that bring sweetness, depth, and a polished cafe identity.",
    items: [
      { name: "Honey Butter Latte", sizes: { T: 6.45, G: 6.95, V: 7.35 }, description: "A rich, lightly savory signature with caramel warmth.", featured: true },
      { name: "Black Sugar Oat Latte", sizes: { T: 6.65, G: 7.15 }, description: "Molasses depth with a soft oat finish.", featured: true },
      { name: "Seoul Mocha Cream", sizes: { G: 7.45, V: 7.95 }, description: "Chocolate espresso topped with a smooth cream cap." },
      { name: "Matcha Cloud", sizes: { G: 6.95, V: 7.45 }, description: "Ceremonial-style matcha with gently sweet cream." }
    ]
  },
  {
    category: "Tea & Refreshers",
    slug: "tea-refreshers",
    description: "Clean, bright options for slow mornings and lighter afternoons.",
    items: [
      { name: "Earl Grey Tea", price: 4.5 },
      { name: "Citron Ginger Tea", price: 5.25, description: "Comforting citrus and ginger with a house-made feel." },
      { name: "Hibiscus Refresher", price: 5.95 },
      { name: "Yuzu Sparkling Ade", price: 6.25, featured: true }
    ]
  },
  {
    category: "Bakery",
    slug: "bakery",
    description: "Simple cafe staples, baked for everyday pairings.",
    items: [
      { name: "Butter Croissant", price: 4.25 },
      { name: "Almond Croissant", price: 4.95 },
      { name: "Blueberry Muffin", price: 4.5 },
      { name: "Pain au Chocolat", price: 4.95 }
    ]
  },
  {
    category: "Toasts & Sandwiches",
    slug: "toasts-sandwiches",
    description: "Warm, satisfying food meant for meetings, study sessions, and lunch breaks.",
    items: [
      { name: "Avocado Toast", price: 9.95, description: "Sourdough, chili flakes, herbs, and lemon." },
      { name: "Bulgogi Melt", price: 12.5, description: "Savory beef, melted cheese, and onion jam.", featured: true },
      { name: "Turkey Pesto Sandwich", price: 11.95 },
      { name: "Tomato Mozzarella Panini", price: 10.95 }
    ]
  },
  {
    category: "Desserts",
    slug: "desserts",
    description: "A small dessert menu with clean presentation and rich flavor.",
    items: [
      { name: "Tiramisu Slice", price: 7.25 },
      { name: "Basque Cheesecake", price: 7.95, featured: true },
      { name: "Chocolate Tart", price: 7.5 }
    ]
  }
];

export const featuredMenuItems = menuCategories.flatMap((category) =>
  category.items
    .filter((item) => item.featured)
    .map((item) => ({
      ...item,
      category: category.category,
      slug: category.slug
    }))
);
