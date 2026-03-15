"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function getTheme(pathname: string) {
  if (pathname === "/engineering-hub") {
    return "engineering";
  }

  if (
    pathname === "/research-lab" ||
    pathname === "/about" ||
    pathname === "/research" ||
    pathname === "/publications" ||
    pathname === "/team" ||
    pathname === "/contact"
  ) {
    return "research";
  }

  return "landing";
}

export function RouteTheme() {
  const pathname = usePathname();

  useEffect(() => {
    document.body.dataset.theme = getTheme(pathname);

    return () => {
      delete document.body.dataset.theme;
    };
  }, [pathname]);

  return null;
}
