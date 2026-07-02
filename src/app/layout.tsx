import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://tomntomscafe.vercel.app"),
  title: site.seo.title,
  description: site.seo.description,
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    type: "website",
    url: "https://tomntomscafe.vercel.app",
    siteName: site.name,
    images: [
      {
        url: site.seo.ogImage,
        width: 1200,
        height: 630,
        alt: `${site.name} cafe interior hero`
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
    canonical: "https://tomntomscafe.vercel.app"
  },
  keywords: ["cafe", "coffee shop", "espresso", "Indianapolis cafe", "Tom N Toms", "modern cafe"],
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
    url: "https://tomntomscafe.vercel.app",
    sameAs: [site.instagram],
    hasMap: site.mapsLink
  };

  return (
    <html lang="en">
      <body className="font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="relative min-h-screen overflow-x-hidden bg-[color:var(--color-cream)] text-[color:var(--color-text)]">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top_left,rgba(107,23,23,0.08),transparent_38%),radial-gradient(circle_at_top_right,rgba(11,79,58,0.08),transparent_34%)]" />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
