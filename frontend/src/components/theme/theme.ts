export function getTheme(pathname: string) {
  if (pathname === "/cognitive-cyber-lab" || pathname.startsWith("/cognitive-cyber-lab/")) {
    return "engineering";
  }

  return "landing";
}
