export type ProductFeature = {
  title: string;
  description?: string;
};

export type Product = {
  slug: string;
  name: string;
  eyebrow: string;
  tagline: string;
  overview: string;
  audience: string;
  status: string;
  liveUrl: string;
  imagePaths: string[];
  highlights: string[];
  features: ProductFeature[];
  privacyNote: string;
  scopeNote?: string;
  methodology?: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    slug: "collabscan",
    name: "CollabScan",
    eyebrow: "Privacy-first QR utility",
    tagline: "Generate, download, and scan QR codes privately in your browser.",
    overview:
      "CollabScan is a free, static QR utility for turning URLs or text into high-resolution QR codes and decoding QR codes from a live camera or local image.",
    audience: "Individuals, teams, event organizers, and anyone who needs fast QR workflows.",
    status: "Live",
    liveUrl: "https://collabscan.vercel.app/",
    imagePaths: [
      "/Products/CollabScan/CollabScan01.PNG",
      "/Products/CollabScan/CollabScan02.PNG",
    ],
    highlights: [
      "Generate QR codes from URLs or plain text.",
      "Download clean PNG or JPG exports.",
      "Scan with a live camera or a local image.",
      "No accounts, quotas, saved history, or analytics.",
    ],
    features: [
      { title: "High-resolution generation", description: "Create dependable QR output with high error correction." },
      { title: "Flexible scanning", description: "Decode PNG, JPG, WebP, and GIF files up to 10 MB or use a device camera." },
      { title: "Readable Wi-Fi results", description: "View network details clearly while masking passwords until they are requested." },
      { title: "Safe result handling", description: "Decoded content is displayed without executing it; HTTP(S) links open only after interaction." },
    ],
    privacyNote:
      "Generation and decoding happen on the user's device. QR contents, uploaded images, Wi-Fi credentials, and camera frames are not sent to CollabCircle.",
  },
  {
    slug: "shieldcircle",
    name: "ShieldCircle",
    eyebrow: "HTTP security header scanner",
    tagline: "Know what protects your website.",
    overview:
      "ShieldCircle is a browser-based HTTP Security Header and Threat Scanner that evaluates a public website response and presents a score, grade, evidence, and remediation guidance.",
    audience: "Website owners, developers, security engineers, and teams reviewing web deployment posture.",
    status: "Live",
    liveUrl: "https://shieldcircle.vercel.app/",
    imagePaths: [
      "/Products/ShieldCircle/shieldcircle01.PNG",
      "/Products/ShieldCircle/shieldcircle02.PNG",
    ],
    highlights: [
      "Scan public HTTP and HTTPS responses.",
      "Receive a 0–100 score and A+–F grade.",
      "Review evidence, confidence, severity, and remediation guidance.",
      "Export JSON, copy summaries, print reports, and compare locally.",
    ],
    features: [
      { title: "Weighted security checks", description: "Six OWASP-aligned controls cover CSP, HSTS, framing, MIME sniffing, referrer policy, and permissions policy." },
      { title: "Context-aware CSP analysis", description: "Evaluates nonces, hashes, strict-dynamic, Trusted Types, reporting, and multiple policies." },
      { title: "Response context", description: "Shows redirect chains and supplemental TLS, cookie, HTTPS, CORS, and mixed-content observations." },
      { title: "Operational safeguards", description: "Includes rate limiting, request IDs, hashed target identifiers, hardened headers, and deployment health monitoring." },
    ],
    privacyNote:
      "ShieldCircle does not require accounts or a scan-history database. It uses a server route to inspect public responses because browsers cannot directly bypass CORS restrictions.",
    scopeNote:
      "A report describes signals observed in one HTTP response. It does not prove that a website is secure, confirm exploitability, certify compliance, or replace a penetration test. Scan only systems you own or are authorized to assess.",
    methodology: [
      { label: "CSP", value: "30 points" },
      { label: "HSTS", value: "20 points" },
      { label: "Frame protection", value: "15 points" },
      { label: "MIME protection", value: "15 points" },
      { label: "Referrer policy", value: "10 points" },
      { label: "Permissions policy", value: "10 points" },
    ],
  },
  {
    slug: "devkitcircle",
    name: "DevKitCircle",
    eyebrow: "Private developer workspace",
    tagline: "Private developer tools that run in your browser.",
    overview:
      "DevKitCircle is a privacy-first developer toolkit that combines conversion, encoding, cryptography, formatting, network inspection, data generation, image conversion, and searchable technical references in one responsive workspace.",
    audience: "Developers, system administrators, security engineers, technical writers, and DevOps teams.",
    status: "Live",
    liveUrl: "https://devkitcircle.vercel.app/",
    imagePaths: [
      "/Products/DevkitCircle/DevkitCircle01.PNG",
      "/Products/DevkitCircle/DevkitCircle02.PNG",
    ],
    highlights: [
      "33 browser-based utilities in one workspace.",
      "No tool-data uploads, database, analytics, or telemetry pipeline.",
      "Responsive PWA with bundled references and assets.",
      "Local processing for tokens, keys, files, code, and configuration.",
    ],
    features: [
      { title: "Converters and formatters", description: "Work with JSON, YAML, TOML, ENV, CSV, dates, images, compression, JSON, and SQL locally." },
      { title: "Security and crypto", description: "Use JWT debugging, hashing, encoding, HMAC, AES-GCM, PKCE, SRI, key generation, and PEM inspection." },
      { title: "Network and data tools", description: "Inspect URLs, cURL commands, HTTP statuses, IP/CIDR ranges, regexes, schemas, diffs, and structured text." },
      { title: "Reference books", description: "Search bundled Unicode, web, MIME, port, regex, Git, Docker, Kubernetes, and environment references." },
    ],
    privacyNote:
      "User-provided text, tokens, configuration, code, and files are processed in browser memory. There is no application-data API, upload service, remote transformation provider, analytics SDK, or telemetry pipeline.",
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
