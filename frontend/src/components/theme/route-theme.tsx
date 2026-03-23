"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { getTheme } from "./theme";

export function RouteTheme() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = getTheme(pathname);
  }, [pathname]);

  return null;
}
