"use client";

import { usePathname } from "next/navigation";
import { EngineeringHeader } from "./engineering-header";
import { ResearchHeader } from "./research-header";
import { SiteHeader } from "./site-header";

function isResearchRoute(pathname: string) {
  return pathname === "/research-lab" || pathname.startsWith("/research-lab/");
}

function isEngineeringRoute(pathname: string) {
  return pathname === "/engineering-hub" || pathname.startsWith("/engineering-hub/");
}

export function HeaderSwitcher() {
  const pathname = usePathname();

  if (isResearchRoute(pathname)) {
    return <ResearchHeader />;
  }

  if (isEngineeringRoute(pathname)) {
    return <EngineeringHeader />;
  }

  return <SiteHeader />;
}
