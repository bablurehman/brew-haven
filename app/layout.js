import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/ui/FloatingActions";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://cafe-brew-haven.vercel.app"),

  title: {
    default: "Brew Haven | Premium Coffee & Artisan Café",
    template: "%s | Brew Haven",
  },

  description:
    "Discover handcrafted coffee, artisan pastries, and a warm café experience at Brew Haven. Premium ingredients, expertly crafted beverages, and unforgettable moments.",

  keywords: [
    "Brew Haven",
    "coffee shop",
    "artisan coffee",
    "specialty coffee",
    "premium cafe",
    "coffee house",
    "espresso",
    "latte",
    "fresh pastries",
    "best cafe",
    "coffee near me",
    "artisan bakery",
    "cafe in Kurseong",
  ],

  authors: [{ name: "Brew Haven" }],
  creator: "Brew Haven",
  publisher: "Brew Haven",

  category: "Food & Beverage",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Brew Haven | Premium Coffee & Artisan Café",

    description:
      "Experience handcrafted coffee, artisan pastries, and exceptional hospitality in a warm and inviting atmosphere.",

    url: "https://cafe-brew-haven.vercel.app",

    siteName: "Brew Haven",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brew Haven Coffee Shop",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Brew Haven | Premium Coffee & Artisan Café",

    description:
      "Handcrafted coffee, artisan pastries, and memorable café experiences.",

    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "/",
  },
};

export const viewport = {
  themeColor: "#d97706",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#faf8f5] text-neutral-900">
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CafeOrCoffeeShop",

              name: "Brew Haven",

              url: "https://cafe-brew-haven.vercel.app",

              image: "https://cafe-brew-haven.vercel.app/og-image.jpg",

              telephone: "+918372992290",

              priceRange: "$$",

              servesCuisine: [
                "Coffee",
                "Bakery",
                "Desserts",
                "Cafe",
              ],

              address: {
                "@type": "PostalAddress",
                streetAddress: "Hill Cart Road",
                addressLocality: "Kurseong",
                addressRegion: "West Bengal",
                postalCode: "734203",
                addressCountry: "IN",
              },

              openingHours: [
                "Mo-Fr 07:00-21:00",
                "Sa 08:00-22:00",
                "Su 08:00-20:00",
              ],
            }),
          }}
        />

        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}