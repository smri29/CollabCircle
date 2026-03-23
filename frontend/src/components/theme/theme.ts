export function getTheme(pathname: string) {
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
