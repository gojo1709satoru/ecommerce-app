import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ARAVINDA AGENCIES | Stationery, School, Office, Navy & Coast Guard Supplies",
  description:
    "ARAVINDA AGENCIES is your one-stop shop for Stationery, School & Office Supplies, Art & Craft, Sports & Games, Gifts, Daily Essentials and Navy & Coast Guard Uniform Accessories.",
  keywords: [
    "ARAVINDA AGENCIES",
    "stationery shop",
    "school supplies",
    "office supplies",
    "navy uniform accessories",
    "coast guard accessories",
    "art and craft supplies",
  ],
  openGraph: {
    title: "ARAVINDA AGENCIES - Everything You Need Under One Roof",
    description:
      "Stationery • School Supplies • Office Essentials • Art & Craft • Sports • Gifts • Navy & Coast Guard Accessories",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-navy"
        >
          Skip to main content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
