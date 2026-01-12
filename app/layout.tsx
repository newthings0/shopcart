import { ReactNode } from "react";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import localFont from "next/font/local";
import { Toaster } from "sonner";
import { UserDataProvider } from "@/contexts/UserDataContext";
import PremiumFloatingButton from "@/components/PremiumFloatingButton";
import "./globals.css";

const poppins = localFont({
  src: "./fonts/Poppins.woff2",
  variable: "--font-poppins",
  weight: "400",
  preload: false,
});
const raleway = localFont({
  src: "./fonts/Raleway.woff2",
  variable: "--font-raleway",
  weight: "100 900",
});

const opensans = localFont({
  src: "./fonts/Open Sans.woff2",
  variable: "--font-open-sans",
  weight: "100 800",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shopcartpro.reactbd.org"),
  title: {
    template: "%s | ShopCart - Premium Online Shopping",
    default: "ShopCart - Your Trusted Online Shopping Destination",
  },
  description:
    "Discover amazing products at ShopCart, your trusted online shopping destination for quality items and exceptional customer service. Shop electronics, fashion, home goods and more with fast delivery.",
  keywords: [
    "online shopping",
    "e-commerce",
    "buy online",
    "shop online",
    "electronics",
    "fashion",
    "home goods",
    "deals",
    "discounts",
    "ShopCart",
  ],
  authors: [{ name: "ShopCart" }],
  creator: "ShopCart",
  publisher: "ShopCart",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shopcartpro.reactbd.org",
    siteName: "ShopCart",
    title: "ShopCart - Your Trusted Online Shopping Destination",
    description:
      "Discover amazing products at ShopCart, your trusted online shopping destination for quality items and exceptional customer service.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ShopCart Online Store",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShopCart - Your Trusted Online Shopping Destination",
    description:
      "Discover amazing products at ShopCart, your trusted online shopping destination for quality items and exceptional customer service.",
    images: ["/og-image.jpg"],
    creator: "@shopcart",
  },
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
  verification: {
    google: "your-google-verification-code",
    // Add other verification codes as needed
  },
  alternates: {
    canonical: "https://shopcartpro.reactbd.org",
  },
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${poppins.variable} ${raleway.variable} ${opensans.variable} antialiased`}
        >
          <UserDataProvider>{children}</UserDataProvider>
          <PremiumFloatingButton />
          <Toaster
            position="bottom-right"
            richColors
            closeButton
            toastOptions={{
              style: {
                background: "#ffffff",
                color: "#1f2937",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                fontSize: "14px",
              },
              className: "sonner-toast",
            }}
          />
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
