import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { OrbitAssistant } from "@/components/orbit/orbit-assistant";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CollabCircle",
    template: "%s | CollabCircle",
  },
  description: "Collaborative ML and DL research, designed for publication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${fraunces.variable}`}>
        <div className="siteShell">
          <SiteHeader />
          <main className="siteMain">{children}</main>
          <SiteFooter />
          <OrbitAssistant />
        </div>
      </body>
    </html>
  );
}
