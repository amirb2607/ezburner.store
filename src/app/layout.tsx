import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ezburner.store — Disposable Email Alias Domain",
  description: "ezburner.store is a dedicated domain used for generating temporary and disposable email aliases. Built for privacy-focused communication.",
  keywords: ["ezburner", "burner email", "temporary email", "disposable alias", "privacy email", "email forwarding"],
  metadataBase: new URL("https://ezburner.store"),
  openGraph: {
    title: "ezburner.store — Temporary Email Alias Domain",
    description: "Create disposable email aliases with ezburner.store. Fast, private, and untracked.",
    url: "https://ezburner.store",
    siteName: "ezburner.store",
    type: "website",
  },
  robots: "index, follow",
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
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
