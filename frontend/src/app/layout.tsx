import type { Metadata } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import { HeaderSwitcher } from "@/components/layout/header-switcher";
import { SiteFooter } from "@/components/layout/site-footer";
import { OrbitAssistant } from "@/components/orbit/orbit-assistant";
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
  icons: {
    icon: "/CollabCircle%20Logo.svg",
    shortcut: "/CollabCircle%20Logo.svg",
    apple: "/CollabCircle%20Logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="landing" suppressHydrationWarning>
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
      <body className={`${jakarta.variable} ${sora.variable}`} suppressHydrationWarning>
        <div className="siteShell">
          <HeaderSwitcher />
          <main className="siteMain">{children}</main>
          <SiteFooter />
          <OrbitAssistant />
        </div>
      </body>
    </html>
  );
}
