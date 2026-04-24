export function getTheme(pathname: string) {
  if (pathname === "/engineering-hub" || pathname.startsWith("/engineering-hub/")) {
    return "engineering";
  }

  if (pathname === "/research-lab" || pathname.startsWith("/research-lab/")) {
    return "research";
  }

  return "landing";
}
