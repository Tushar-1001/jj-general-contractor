import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BUSINESS_INFO } from "@/data/business";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "JJ General Contractor | Irving, TX Remodeling & Home Renovations",
    template: "%s | JJ General Contractor — Irving, TX",
  },
  description:
    "4.9-star rated General Contractor in Irving, TX (80+ Google Reviews). Bathroom & kitchen remodeling, Wedi waterproofing, custom doors, trim carpentry, and home repairs across DFW.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: BUSINESS_INFO.name,
  telephone: BUSINESS_INFO.phoneRaw,
  address: {
    "@type": "PostalAddress",
    streetAddress: "3517 Esplendor Ave",
    addressLocality: "Irving",
    addressRegion: "TX",
    postalCode: "75062",
    addressCountry: "US",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: BUSINESS_INFO.rating,
    reviewCount: BUSINESS_INFO.totalReviews,
  },
  url: BUSINESS_INFO.googleMapsUrl,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-[#faf9f6] text-zinc-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
