import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { OrbitAssistant } from "@/components/orbit/orbit-assistant";
import { RouteTheme } from "@/components/theme/route-theme";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "CollabCircle",
    template: "%s | CollabCircle",
  },
  description: "A future-ready organization shaped around research, engineering, and long-term impact.",
  icons: {
    icon: "/New%20Logo/CollabCircle.png",
    shortcut: "/New%20Logo/CollabCircle.png",
    apple: "/New%20Logo/CollabCircle.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      data-theme="landing"
      suppressHydrationWarning
    >
      <head>
        <Script id="strip-extension-body-attrs" strategy="beforeInteractive">
          {`
            document.documentElement.removeAttribute("data-new-gr-c-s-check-loaded");
            document.documentElement.removeAttribute("data-gr-ext-installed");
            if (document.body) {
              document.body.removeAttribute("data-new-gr-c-s-check-loaded");
              document.body.removeAttribute("data-gr-ext-installed");
            }
          `}
        </Script>
      </head>
      <body className={`${manrope.variable} ${cormorant.variable}`} suppressHydrationWarning>
        <RouteTheme />
        <div className="siteShell">
          <div aria-hidden="true" className="siteBgMedia">
            <video
              autoPlay
              className="siteBgVideo"
              loop
              muted
              playsInline
              preload="auto"
            >
              <source
                src="/BG%20Video/CollabCircle%20Background%20Video.mp4"
                type="video/mp4"
              />
            </video>
            <div className="siteBgOverlay" />
          </div>
          <SiteHeader />
          <main className="siteMain">{children}</main>
          <SiteFooter />
          <OrbitAssistant />
        </div>
      </body>
    </html>
  );
}
