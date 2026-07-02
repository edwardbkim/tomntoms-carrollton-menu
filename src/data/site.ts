export type HoursEntry = {
  day: string;
  open: string;
  close: string;
};

export const site = {
  name: "Tom N Toms Cafe",
  shortName: "Tom N Toms",
  tagline: "Premium coffee, warm food, and a living-room atmosphere for the everyday rhythm of the neighborhood.",
  description:
    "Tom N Toms Cafe is a premium, modern cafe built for slow mornings, focused afternoons, and easy evenings with coffee, made-to-order food, and a warm community atmosphere.",
  address: {
    street: "1458 Market Street",
    city: "Indianapolis",
    state: "IN",
    zip: "46204"
  },
  phone: "(317) 555-0148",
  phoneHref: "tel:+13175550148",
  email: "hello@tomntomscafe.com",
  instagram: "https://instagram.com/tomntomscafe",
  orderingLink: "https://order.example.com/tomntomscafe",
  mapsLink: "https://maps.google.com/?q=1458+Market+Street+Indianapolis+IN+46204",
  mapsEmbedLink: "https://www.google.com/maps?q=1458+Market+Street+Indianapolis+IN+46204&output=embed",
  hero: {
    eyebrow: "Modern Korean Cafe",
    headline: "A refined neighborhood cafe for coffee, conversation, and calm.",
    subheadline:
      "Thoughtful espresso, made-to-order bites, and a warm atmosphere designed for studying, meetings, quiet work, and slow catch-ups."
  },
  story:
    "Tom N Toms is a premium, comfortable cafe that blends high-quality coffee, made-to-order food, and a relaxing environment that feels like a living room, library, and warm den. It is designed for studying, meetings, working, or unwinding, while creating space for local vendors and supporting the community through thoughtful sourcing and hospitality.",
  hours: [
    { day: "Monday", open: "7:00 AM", close: "8:00 PM" },
    { day: "Tuesday", open: "7:00 AM", close: "8:00 PM" },
    { day: "Wednesday", open: "7:00 AM", close: "8:00 PM" },
    { day: "Thursday", open: "7:00 AM", close: "8:00 PM" },
    { day: "Friday", open: "7:00 AM", close: "9:00 PM" },
    { day: "Saturday", open: "8:00 AM", close: "9:00 PM" },
    { day: "Sunday", open: "8:00 AM", close: "6:00 PM" }
  ],
  experience: [
    {
      title: "Dine In",
      description: "Settle into layered seating, warm light, and room to linger over handcrafted drinks and fresh food."
    },
    {
      title: "Study",
      description: "Quiet corners, dependable Wi-Fi, and generous tables support long focus sessions without feeling clinical."
    },
    {
      title: "Meet",
      description: "A polished but relaxed backdrop for team check-ins, client coffee, and neighborhood conversations."
    },
    {
      title: "Relax",
      description: "Come for a reset: soft music, inviting textures, and a calm, elevated pace from morning through evening."
    }
  ],
  featuredCategories: [
    {
      title: "Coffee & Espresso",
      description: "Classic espresso drinks with a smooth, premium profile.",
      href: "/menu#coffee-espresso"
    },
    {
      title: "Signature Drinks",
      description: "House favorites with a modern Korean cafe sensibility.",
      href: "/menu#signature-drinks"
    },
    {
      title: "Toasts & Sandwiches",
      description: "Made-to-order food designed to pair with long cafe stays.",
      href: "/menu#toasts-sandwiches"
    }
  ],
  seo: {
    title: "Tom N Toms Cafe | Premium Coffee, Food, and Community",
    description:
      "Discover Tom N Toms Cafe: a premium modern cafe with coffee, espresso, fresh food, comfortable seating, and a warm community atmosphere.",
    ogImage: "/images/hero/og-cafe.svg"
  }
};

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;

export const businessLinks = {
  menu: "/menu",
  visit: "/visit",
  about: "/about",
  contact: "/contact"
};
