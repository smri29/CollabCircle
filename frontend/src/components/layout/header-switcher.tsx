"use client";

import { usePathname } from "next/navigation";
import { ResearchHeader } from "./research-header";
import { SiteHeader } from "./site-header";

function isResearchRoute(pathname: string) {
  return pathname === "/research-lab" || pathname.startsWith("/research-lab/");
}

export function HeaderSwitcher() {
  const pathname = usePathname();

  if (isResearchRoute(pathname)) {
    return <ResearchHeader />;
  }

  return <SiteHeader />;
}
