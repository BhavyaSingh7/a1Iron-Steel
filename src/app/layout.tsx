import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "A1 Iron & Steel - Premium Steel Manufacturing in Rwanda | Building a Sustainable Future",
  description:
    "A1 Iron & Steel is Rwanda's leading manufacturer of high-quality iron and steel products. We specialize in sustainable manufacturing with a commitment to planting 100,000 trees. Serving East Africa with premium steel solutions, quality assurance, and environmental stewardship.",
  keywords:
    "steel manufacturing, iron products, Rwanda steel, East Africa steel, sustainable manufacturing, steel construction, metal fabrication, A1 Iron Steel",
  openGraph: {
    title: "A1 Iron & Steel - Premium Steel Manufacturing in Rwanda",
    description:
      "Leading manufacturer of high-quality iron and steel products with sustainable practices. Building Rwanda's future with strength and environmental responsibility.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ErrorBoundary>{children}</ErrorBoundary>
      </body>
    </html>
  );
}
