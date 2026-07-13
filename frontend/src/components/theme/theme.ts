export function getTheme(pathname: string) {
  if (pathname === "/cognitive-cyber-lab" || pathname.startsWith("/cognitive-cyber-lab/")) {
    return "engineering";
  }

  if (pathname === "/engineering-hub" || pathname.startsWith("/engineering-hub/")) {
    return "engineering";
  }

  if (pathname === "/research-lab" || pathname.startsWith("/research-lab/")) {
    return "research";
  }

  return "landing";
}
