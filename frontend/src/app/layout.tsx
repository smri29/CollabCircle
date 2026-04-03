import type { Metadata } from "next";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="landing" suppressHydrationWarning>
      <body className={`${jakarta.variable} ${sora.variable}`}>
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
