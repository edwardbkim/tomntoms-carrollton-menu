export type HoursEntry = {
  day: string;
  open: string;
  close: string;
};

export const site = {
  name: "Tom N Tom's",
  shortName: "Tom N Tom's",
  tagline: "Korean café & bakery in Carrollton",
  description:
    "Tom N Tom's is a Korean café and bakery in Carrollton, TX — specialty coffee, handcrafted drinks, fresh bakery, waffles, snow flakes, and made-to-order food.",
  address: {
    street: "2625 Old Denton Rd, Ste 406",
    city: "Carrollton",
    state: "TX",
    zip: "75007"
  },
  phone: "(972) 446-6633",
  phoneHref: "tel:+19724466633",
  email: "admin@tomntomscarrollton.com",
  instagram: "https://instagram.com/tomntomscarrollton",
  orderingLink: "https://tomntomscoffeetx.pebla.com",
  mapsLink: "https://maps.google.com/?q=2625+Old+Denton+Rd+Ste+406+Carrollton+TX+75007",
  mapsEmbedLink:
    "https://www.google.com/maps?q=2625+Old+Denton+Rd+Ste+406+Carrollton+TX+75007&output=embed",
  hero: {
    eyebrow: "Korean Café & Bakery",
    headline: "Korean café & bakery in Carrollton",
    subheadline:
      "Specialty coffee, handcrafted drinks, fresh bakery, snow flakes, waffles, and made-to-order food."
  },
  story:
    "Tom N Tom's is a Korean specialty café and bakery in Carrollton, TX. Since 1999, Tom N Toms has served premium espresso, handcrafted beverages, and fresh baked goods rooted in Korean café culture.",
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
      description:
        "Two floors of seating, warm brick walls, and room to linger over handcrafted drinks and fresh food."
    },
    {
      title: "Study",
      description:
        "Quiet corners, dependable Wi-Fi, and generous tables support long focus sessions."
    },
    {
      title: "Meet",
      description: "A relaxed backdrop for team check-ins, client coffee, and neighborhood conversations."
    },
    {
      title: "Relax",
      description: "Come for a reset: soft music, warm textures, and a calm pace from morning through evening."
    }
  ],
  featuredCategories: [
    {
      title: "Coffee & Espresso",
      description: "Signature espresso drinks with a smooth, premium profile.",
      href: "/menu#coffee-espresso"
    },
    {
      title: "Specialty Drinks",
      description: "House favorites with a modern Korean café sensibility.",
      href: "/menu#specialty-drinks"
    },
    {
      title: "Snow Flakes",
      description: "Korean shaved ice with seasonal toppings and house sauces.",
      href: "/menu#snow-flakes"
    }
  ],
  seo: {
    title: "Tom N Tom's Carrollton | Korean Café & Bakery",
    description:
      "Tom N Tom's Carrollton — Korean specialty café and bakery. Espresso, handcrafted drinks, snow flakes, waffles, pretzels, fresh bakery, and made-to-order food. Order online.",
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
