import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import Script from "next/script";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { OrbitAssistant } from "@/components/orbit/orbit-assistant";
import { RouteTheme } from "@/components/theme/route-theme";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CollabCircle",
    template: "%s | CollabCircle",
  },
  description: "A future-ready organization shaped around research, engineering, and long-term impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="landing" suppressHydrationWarning>
      <head>
        <Script
          id="route-theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(() => {
  const pathname = window.location.pathname;
  const theme = pathname === "/engineering-hub"
    ? "engineering"
    : (
        pathname === "/research-lab" ||
        pathname === "/about" ||
        pathname === "/research" ||
        pathname === "/publications" ||
        pathname === "/team" ||
        pathname === "/contact"
      )
      ? "research"
      : "landing";

  document.documentElement.dataset.theme = theme;
})();`,
          }}
        />
      </head>
      <body className={`${jakarta.variable} ${sora.variable}`}>
        <RouteTheme />
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
