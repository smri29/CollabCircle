"use client";

import { usePathname } from "next/navigation";
import { CognitiveCyberHeader } from "./cognitive-cyber-header";
import { EngineeringHeader } from "./engineering-header";
import { ResearchHeader } from "./research-header";
import { SiteHeader } from "./site-header";

function isResearchRoute(pathname: string) {
  return pathname === "/research-lab" || pathname.startsWith("/research-lab/");
}

function isEngineeringRoute(pathname: string) {
  return pathname === "/engineering-hub" || pathname.startsWith("/engineering-hub/");
}

function isCognitiveCyberRoute(pathname: string) {
  return pathname === "/cognitive-cyber-lab" || pathname.startsWith("/cognitive-cyber-lab/");
}

export function HeaderSwitcher() {
  const pathname = usePathname();

  if (isResearchRoute(pathname)) {
    return <ResearchHeader />;
  }

  if (isEngineeringRoute(pathname)) {
    return <EngineeringHeader />;
  }

  if (isCognitiveCyberRoute(pathname)) {
    return <CognitiveCyberHeader />;
  }

  return <SiteHeader />;
}
