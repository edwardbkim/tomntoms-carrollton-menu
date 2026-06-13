export type MenuTag =
  | "Customer Favorite"
  | "New"
  | "Hot/Iced"
  | "Iced Only"
  | "Caution Hot";

export type MenuPrice =
  | {
      label: "T" | "G" | "V" | "Single" | "8 pc" | "12 pc";
      amount: string;
    }
  | {
      label: string;
      amount: string;
    };

export type MenuItem = {
  id: string;
  name: string;
  category: string;
  description?: string;
  korean?: string;
  prices: MenuPrice[];
  tags?: MenuTag[];
  imagePlaceholder?: boolean;
};

export type MenuCategory = {
  id: string;
  name: string;
  note?: string;
  items: MenuItem[];
};

export const locationInfo = {
  name: "Tom N Tom's Coffee & Eatery",
  city: "Carrollton, TX",
  address: "2625 Old Denton Rd #406, Carrollton, TX 75007",
  phone: "(972) 446-6633",
  hours: [
    { days: "Monday", time: "9 am – 10 pm" },
    { days: "Tuesday", time: "9 am – 10 pm" },
    { days: "Wednesday", time: "9 am – 10 pm" },
    { days: "Thursday", time: "9 am – 10 pm" },
    { days: "Friday", time: "9 am – 11 pm" },
    { days: "Saturday", time: "9 am – 11 pm" },
    { days: "Sunday", time: "9 am – 10 pm" },
  ],
  instagramUrl: "https://www.instagram.com/tomntomscarrollton/",
  orderUrl: "https://order.peblla.com/tomntomscoffeecarrollton/order?sid=1242716167369096704",
};

const sizePrices = (t: string, g?: string, v?: string): MenuPrice[] =>
  [
    { label: "T", amount: t },
    g ? { label: "G", amount: g } : undefined,
    v ? { label: "V", amount: v } : undefined,
  ].filter(Boolean) as MenuPrice[];

const gvPrices = (g: string, v: string): MenuPrice[] => [
  { label: "G", amount: g },
  { label: "V", amount: v },
];

const singlePrice = (amount: string): MenuPrice[] => [
  { label: "Single", amount },
];

export const menuCategories: MenuCategory[] = [
  {
    id: "coffee-espresso",
    name: "Coffee & Espresso",
    note: "Available hot and iced",
    items: [
      { id: "brewed-coffee", name: "Brewed Coffee", category: "Coffee & Espresso", prices: sizePrices("4.25", "4.55", "4.85"), tags: ["Hot/Iced"] },
      { id: "americano", name: "Americano", category: "Coffee & Espresso", prices: sizePrices("4.65", "5.25", "5.75"), tags: ["Customer Favorite", "Hot/Iced"] },
      { id: "cafe-latte", name: "Cafe Latte", category: "Coffee & Espresso", prices: sizePrices("5.85", "6.35", "6.75"), tags: ["Hot/Iced"] },
      { id: "flavored-latte", name: "Flavored Latte", category: "Coffee & Espresso", description: "Vanilla, hazelnut, or caramel.", prices: sizePrices("6.15", "6.75", "7.05"), tags: ["Customer Favorite", "Hot/Iced"] },
      { id: "cappuccino", name: "Cappuccino", category: "Coffee & Espresso", prices: sizePrices("5.95", "6.45", "6.85"), tags: ["Hot/Iced"] },
      { id: "caramel-macchiato", name: "Caramel Macchiato", category: "Coffee & Espresso", prices: sizePrices("6.65", "7.25", "7.65"), tags: ["Customer Favorite", "Hot/Iced"] },
      { id: "cafe-mocha", name: "Cafe Mocha", category: "Coffee & Espresso", prices: sizePrices("6.25", "6.75", "7.05"), tags: ["Hot/Iced"] },
      { id: "white-mocha", name: "White Mocha", category: "Coffee & Espresso", prices: sizePrices("6.55", "6.95", "7.55"), tags: ["Hot/Iced"] },
      { id: "cinnamon-mocha", name: "Cinnamon Mocha", category: "Coffee & Espresso", prices: sizePrices("6.55", "6.95", "7.55"), tags: ["Hot/Iced"] },
      { id: "mint-mocha", name: "Mint Mocha", category: "Coffee & Espresso", prices: sizePrices("6.55", "6.95", "7.55"), tags: ["Hot/Iced"] },
      // TODO: Confirm sizes for this two-price iced-only row from the source MP4.
      { id: "dalgona-latte", name: "Dalgona Latte", category: "Coffee & Espresso", prices: gvPrices("7.15", "7.65"), tags: ["Customer Favorite", "Iced Only"] },
      { id: "rose-latte", name: "Rose Latte", category: "Coffee & Espresso", prices: singlePrice("6.90"), tags: ["Hot/Iced"] },
      { id: "espresso", name: "Espresso", category: "Coffee & Espresso", description: "Macchiato or con panna.", prices: sizePrices("4.25"), tags: ["Hot/Iced"] },
    ],
  },
  {
    id: "single-origin",
    name: "Single Origin",
    note: "Available hot and iced",
    items: [
      { id: "ethiopia-natural", name: "Ethiopia Natural", category: "Single Origin", prices: singlePrice("6.15"), tags: ["Customer Favorite", "Hot/Iced"] },
      { id: "guatemala-antigua", name: "Guatemala Antigua", category: "Single Origin", prices: singlePrice("6.15"), tags: ["Customer Favorite", "Hot/Iced"] },
    ],
  },
  {
    id: "tea",
    name: "Tea",
    note: "Available hot and iced",
    items: [
      { id: "herb-tea", name: "Herb Tea", category: "Tea", description: "Chamomile or peppermint.", prices: sizePrices("4.35", "4.75", "5.15"), tags: ["Hot/Iced"] },
      { id: "black-tea", name: "Black Tea", category: "Tea", description: "Earl Grey or English Breakfast.", prices: sizePrices("4.35", "4.75", "5.15"), tags: ["Hot/Iced"] },
      { id: "green-tea", name: "Green Tea", category: "Tea", description: "Jasmine or Japanese Sencha.", prices: sizePrices("4.35", "4.75", "5.15"), tags: ["Hot/Iced"] },
      { id: "citron-tea", name: "Citron Tea", category: "Tea", korean: "유자차", prices: sizePrices("5.45", "5.85", "6.25"), tags: ["Customer Favorite", "Hot/Iced"] },
    ],
  },
  {
    id: "specialty-drinks",
    name: "Specialty Drinks",
    items: [
      // TODO: Confirm whether Specialty Drinks are sold only in G/V sizes.
      { id: "ube-matcha-latte", name: "Ube Matcha Latte", category: "Specialty Drinks", prices: gvPrices("7.50", "7.99"), tags: ["New", "Customer Favorite"] },
      { id: "matcha-mango-latte", name: "Matcha Mango Latte", category: "Specialty Drinks", prices: gvPrices("7.50", "7.99"), tags: ["New", "Customer Favorite"] },
      { id: "green-tea-strawberry-latte", name: "Green Tea Strawberry Latte", category: "Specialty Drinks", prices: gvPrices("8.39", "9.39"), tags: ["New", "Customer Favorite"] },
      { id: "strawberry-latte", name: "Strawberry Latte", category: "Specialty Drinks", prices: gvPrices("6.65", "7.15"), tags: ["New", "Customer Favorite"] },
    ],
  },
  {
    id: "beverages",
    name: "Beverages",
    note: "Available hot and iced",
    items: [
      { id: "green-tea-latte", name: "Green Tea Latte", category: "Beverages", prices: sizePrices("6.15", "6.55", "6.95"), tags: ["Customer Favorite", "Hot/Iced"] },
      { id: "milk-tea-latte", name: "Milk Tea Latte", category: "Beverages", prices: sizePrices("6.15", "6.55", "6.95"), tags: ["Hot/Iced"] },
      { id: "sweet-potato-latte", name: "Sweet Potato Latte", category: "Beverages", prices: sizePrices("6.05", "6.35", "6.75"), tags: ["Hot/Iced"] },
      { id: "taro-latte", name: "Taro Latte", category: "Beverages", prices: sizePrices("6.05", "6.35", "6.75"), tags: ["Hot/Iced"] },
      { id: "spicy-chai-latte", name: "Spicy Chai Latte", category: "Beverages", prices: sizePrices("6.05", "6.35", "6.75"), tags: ["Hot/Iced"] },
      { id: "hot-choco", name: "Hot Choco", category: "Beverages", prices: sizePrices("5.45", "5.75", "6.15"), tags: ["Hot/Iced"] },
      { id: "white-choco", name: "White Choco", category: "Beverages", prices: sizePrices("5.55", "5.85", "6.25"), tags: ["Hot/Iced"] },
      { id: "cinnamon-choco", name: "Cinnamon Choco", category: "Beverages", prices: sizePrices("5.85", "6.15", "6.55"), tags: ["Hot/Iced"] },
      { id: "mint-choco", name: "Mint Choco", category: "Beverages", prices: sizePrices("6.05", "6.35", "6.75"), tags: ["Hot/Iced"] },
    ],
  },
  {
    id: "espresso-tomnccino",
    name: "Espresso Tomnccino",
    note: "Available iced only",
    items: [
      { id: "coffee-tomnccino", name: "Coffee Tomnccino", category: "Espresso Tomnccino", prices: sizePrices("6.35", "6.85", "7.25"), tags: ["Iced Only"] },
      { id: "vanilla-tomnccino", name: "Vanilla Tomnccino", category: "Espresso Tomnccino", prices: sizePrices("6.85", "7.35", "7.75"), tags: ["Iced Only"] },
      { id: "caramel-tomnccino", name: "Caramel Tomnccino", category: "Espresso Tomnccino", prices: sizePrices("6.85", "7.35", "7.75"), tags: ["Iced Only"] },
      { id: "mocha-tomnccino", name: "Mocha Tomnccino", category: "Espresso Tomnccino", prices: sizePrices("6.85", "7.35", "7.75"), tags: ["Customer Favorite", "Iced Only"] },
      { id: "cinnamon-mocha-tomnccino", name: "Cinnamon Mocha Tomnccino", category: "Espresso Tomnccino", prices: sizePrices("6.85", "7.35", "7.75"), tags: ["Iced Only"] },
      { id: "mint-mocha-tomnccino", name: "Mint Mocha Tomnccino", category: "Espresso Tomnccino", prices: sizePrices("6.95", "7.45", "7.85"), tags: ["Iced Only"] },
    ],
  },
  {
    id: "tomnccino",
    name: "Tomnccino",
    note: "Blended, available iced only",
    items: [
      { id: "oreo-tomnccino", name: "Oreo Tomnccino", category: "Tomnccino", prices: sizePrices("7.05", "7.55", "7.95"), tags: ["Customer Favorite", "Iced Only"] },
      { id: "green-tea-tomnccino", name: "Green Tea Tomnccino", category: "Tomnccino", prices: sizePrices("6.65", "7.25", "7.65"), tags: ["Iced Only"] },
      { id: "javachip-tomnccino", name: "Javachip Tomnccino", category: "Tomnccino", prices: sizePrices("6.65", "7.25", "7.65"), tags: ["Customer Favorite", "Iced Only"] },
      { id: "cinnamon-chocolate-tomnccino", name: "Cinnamon Chocolate Tomnccino", category: "Tomnccino", prices: sizePrices("6.65", "7.25", "7.65"), tags: ["Iced Only"] },
      { id: "mint-chocolate-tomnccino", name: "Mint Chocolate Tomnccino", category: "Tomnccino", prices: sizePrices("6.65", "7.25", "7.65"), tags: ["Iced Only"] },
      { id: "walnut-tomnccino", name: "Walnut Tomnccino", category: "Tomnccino", prices: sizePrices("7.05", "7.55", "7.95"), tags: ["Customer Favorite", "Iced Only"] },
    ],
  },
  {
    id: "smoothies",
    name: "Smoothies",
    note: "Blended",
    items: [
      { id: "smoothie", name: "Smoothie", category: "Smoothies", description: "Strawberry, kiwi, or mango.", prices: sizePrices("6.45", "7.15", "7.55"), tags: ["Hot/Iced"] },
      { id: "real-fruit-smoothie", name: "Real Fruit Smoothie", category: "Smoothies", korean: "생과일", description: "Mango, strawberry, banana, kiwi, peach, or strawberry-banana.", prices: singlePrice("8.35"), tags: ["Customer Favorite"] },
      { id: "plain-yogurt-smoothie", name: "Plain Yogurt Smoothie", category: "Smoothies", prices: sizePrices("6.95", "7.35", "7.75"), tags: ["Customer Favorite"] },
      // TODO: Screenshot shows one clear Black Sesame price; confirm if G/V prices exist.
      { id: "black-sesame-smoothie", name: "Black Sesame Smoothie", category: "Smoothies", prices: sizePrices("7.45"), tags: [] },
    ],
  },
  {
    id: "iced-beverages",
    name: "Iced Beverages",
    note: "Available iced only",
    items: [
      { id: "italian-soda", name: "Italian Soda", category: "Iced Beverages", description: "Passion fruit, blackberry, or raspberry.", prices: sizePrices("5.25", "5.85", "6.35"), tags: ["Customer Favorite", "Iced Only"] },
      { id: "iced-tea", name: "Iced Tea", category: "Iced Beverages", description: "Peach or pomegranate.", prices: sizePrices("5.25", "5.85", "6.35"), tags: ["Iced Only"] },
      // TODO: Confirm sizes for the two-price lemonade rows.
      { id: "strawberry-lemonade", name: "Strawberry Lemonade", category: "Iced Beverages", prices: gvPrices("6.45", "6.85"), tags: ["Iced Only"] },
      { id: "blue-lemonade", name: "Blue Lemonade", category: "Iced Beverages", prices: gvPrices("6.55", "6.95"), tags: ["Iced Only"] },
      { id: "grapefruit-ade", name: "Grapefruit Ade", category: "Iced Beverages", prices: sizePrices("5.55", "6.05", "6.45"), tags: ["Iced Only"] },
      { id: "calamansi-ade", name: "Calamansi-Ade", category: "Iced Beverages", prices: singlePrice("6.70"), tags: ["Iced Only"] },
      // TODO: Confirm sizes for the two-price ade row.
      { id: "strawberry-ade", name: "Strawberry Ade", category: "Iced Beverages", prices: gvPrices("6.15", "6.65"), tags: ["Iced Only"] },
      { id: "misugaru", name: "Misugaru", category: "Iced Beverages", korean: "미숫가루", prices: singlePrice("7.49"), tags: ["Iced Only"] },
    ],
  },
  {
    id: "pretzel",
    name: "Pretzel",
    note: "Caution hot",
    items: [
      { id: "plain-pretzel", name: "Plain Pretzel", category: "Pretzel", prices: singlePrice("6.45"), tags: ["Caution Hot"] },
      { id: "original-pretzel", name: "Original Pretzel", category: "Pretzel", prices: singlePrice("6.55"), tags: ["Customer Favorite", "Caution Hot"] },
      { id: "tomndog", name: "Tomndog", category: "Pretzel", prices: singlePrice("7.25"), tags: ["Caution Hot"] },
      { id: "italian-pretzel", name: "Italian Pretzel", category: "Pretzel", description: "Pepperoni, corn, deli, hot, Hawaiian, sweet potato, buldak spicy chicken, or bulgogi.", prices: singlePrice("8.95"), tags: ["Customer Favorite", "Caution Hot"] },
    ],
  },
  {
    id: "belgian-waffle",
    name: "Belgian Waffle",
    items: [
      { id: "strawberry-whip-waffle", name: "Strawberry/Whip Belgian Waffle", category: "Belgian Waffle", prices: singlePrice("8.99"), tags: ["Customer Favorite"] },
      { id: "nutella-banana-waffle", name: "Nutella/Banana Belgian Waffle", category: "Belgian Waffle", prices: singlePrice("8.99") },
      { id: "tiramisu-waffle", name: "Tiramisu Belgian Waffle", category: "Belgian Waffle", prices: singlePrice("8.99") },
      { id: "blueberry-cream-cheese-waffle", name: "Blueberry/Cream Cheese Belgian Waffle", category: "Belgian Waffle", prices: singlePrice("8.99"), tags: ["Customer Favorite"] },
      { id: "ice-cream-waffle", name: "Ice Cream Belgian Waffle", category: "Belgian Waffle", prices: singlePrice("7.99") },
      { id: "chicken-waffle", name: "Chicken Waffle", category: "Belgian Waffle", prices: singlePrice("14.99") },
    ],
  },
  {
    id: "waffle",
    name: "Waffle",
    note: "Mini fish shaped waffle. Caution hot",
    items: [
      { id: "red-bean-custard-waffle", name: "Red Bean, Custard Waffle", category: "Waffle", prices: [{ label: "12 pc", amount: "12.95" }, { label: "8 pc", amount: "9.75" }], tags: ["Customer Favorite", "Caution Hot"] },
      { id: "nutella-taro-waffle", name: "Nutella, Taro Waffle", category: "Waffle", prices: [{ label: "12 pc", amount: "14.50" }, { label: "8 pc", amount: "10.75" }], tags: ["Customer Favorite", "Caution Hot"] },
    ],
  },
  {
    id: "bread",
    name: "Bread",
    note: "Caution hot",
    items: [
      { id: "caramel-cinnamon-bread", name: "Caramel Cinnamon Bread", category: "Bread", prices: singlePrice("11.95"), tags: ["Caution Hot"] },
      { id: "garlic-butter-bread", name: "Garlic Butter Bread", category: "Bread", prices: singlePrice("11.95"), tags: ["Caution Hot"] },
      { id: "choco-butter-bread", name: "Choco Butter Bread", category: "Bread", prices: singlePrice("11.95"), tags: ["Caution Hot"] },
      { id: "mix-cheese-bread", name: "Mix Cheese Bread", category: "Bread", prices: singlePrice("11.95"), tags: ["Caution Hot"] },
      { id: "honey-walnut-bread", name: "Honey Walnut Bread", category: "Bread", prices: singlePrice("11.95"), tags: ["Customer Favorite", "Caution Hot"] },
    ],
  },
  {
    id: "pizza",
    name: "Pizza",
    note: "Caution hot",
    items: [
      { id: "tortilla-pizza", name: "Tortilla Pizza", category: "Pizza", prices: singlePrice("8.95"), tags: ["Caution Hot"] },
      { id: "pepperoni-pizza", name: "Pepperoni Pizza", category: "Pizza", prices: singlePrice("8.95"), tags: ["Caution Hot"] },
      { id: "sweet-potato-pizza", name: "Sweet Potato Pizza", category: "Pizza", korean: "고구마", prices: singlePrice("8.95"), tags: ["Customer Favorite", "Caution Hot"] },
      { id: "hawaiian-pizza", name: "Hawaiian Pizza", category: "Pizza", prices: singlePrice("8.95"), tags: ["Caution Hot"] },
    ],
  },
  {
    id: "milk-snowflakes-bingsu",
    name: "Milk Snowflakes / Bingsu",
    items: [
      { id: "original-milk-snowflake", name: "Original Milk Snowflake", category: "Milk Snowflakes / Bingsu", korean: "눈꽃빙수", prices: singlePrice("15.95"), tags: ["Customer Favorite"] },
      { id: "green-tea-milk-snowflake", name: "Green Tea Milk Snowflake", category: "Milk Snowflakes / Bingsu", prices: singlePrice("15.95"), tags: ["Customer Favorite"] },
      { id: "mango-milk-snowflake", name: "Mango Milk Snowflake", category: "Milk Snowflakes / Bingsu", prices: singlePrice("15.95"), tags: ["Customer Favorite"] },
      { id: "strawberry-milk-snowflake", name: "Strawberry Milk Snowflake", category: "Milk Snowflakes / Bingsu", prices: singlePrice("15.95"), tags: ["Customer Favorite"] },
      { id: "caramel-milk-snowflake", name: "Caramel Milk Snowflake", category: "Milk Snowflakes / Bingsu", prices: singlePrice("16.95"), tags: ["Customer Favorite"] },
    ],
  },
];

export const favoriteItems = menuCategories
  .flatMap((category) => category.items)
  .filter((item) => item.tags?.includes("Customer Favorite"));
