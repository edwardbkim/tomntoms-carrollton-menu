import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://tomntomscarrollton.com"),
  title: site.seo.title,
  description: site.seo.description,
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    type: "website",
    url: "https://tomntomscarrollton.com",
    siteName: site.name,
    images: [
      {
        url: site.seo.ogImage,
        width: 1200,
        height: 630,
        alt: `${site.name} hero`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
    images: [site.seo.ogImage]
  },
  alternates: {
    canonical: "https://tomntomscarrollton.com"
  },
  keywords: [
    "Korean cafe",
    "Korean bakery",
    "coffee shop",
    "espresso",
    "Carrollton Texas cafe",
    "Tom N Toms",
    "snow flakes",
    "specialty coffee"
  ],
  authors: [{ name: site.name }]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: site.name,
    description: site.description,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip
    },
    url: "https://tomntomscarrollton.com",
    sameAs: [site.instagram],
    hasMap: site.mapsLink
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&display=swap"
        />
      </head>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="relative min-h-screen overflow-x-hidden bg-[color:var(--color-cream)] text-[color:var(--color-espresso)]">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top_left,rgba(88,28,32,0.06),transparent_38%)]" />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
