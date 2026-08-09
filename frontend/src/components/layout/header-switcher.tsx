"use client";

import { usePathname } from "next/navigation";
import { CognitiveCyberHeader } from "./cognitive-cyber-header";
import { SiteHeader } from "./site-header";

function isCognitiveCyberRoute(pathname: string) {
  return pathname === "/cognitive-cyber-lab" || pathname.startsWith("/cognitive-cyber-lab/");
}

export function HeaderSwitcher() {
  const pathname = usePathname();

  if (isCognitiveCyberRoute(pathname)) {
    return <CognitiveCyberHeader />;
  }

  return <SiteHeader />;
}
