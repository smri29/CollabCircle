"use client";

import { useLayoutEffect } from "react";
import { getTheme } from "./theme";

export function RouteTheme() {
  useLayoutEffect(() => {
    document.documentElement.dataset.theme = getTheme();
  }, []);

  return null;
}
