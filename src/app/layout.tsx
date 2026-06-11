import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tom N Tom's Coffee & Eatery Carrollton Menu",
  description:
    "Mobile QR menu for Tom N Tom's Coffee & Eatery in Carrollton, TX.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
