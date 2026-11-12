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
  {
    slug: "tutorly",
    name: "Tutorly",
    eyebrow: "Multi-branch coaching management platform",
    tagline: "Run coaching centers with structured branch operations and intelligent student insights.",
    overview:
      "Tutorly is a multi-tenant Laravel and Livewire SaaS platform for managing coaching centers, branches, teachers, students, attendance, fees, certificates, exports, and guardian communication.",
    audience: "Coaching center owners, branch administrators, teachers, students, and academic operations teams.",
    status: "Live",
    liveUrl: "https://tutorly-uhxd.onrender.com/",
    imagePaths: [
      "/Products/Tutorly/Tutorly01.png",
      "/Products/Tutorly/Tutorly02.png",
    ],
    highlights: [
      "Support Super Admin, Branch Admin, Teacher, and Student roles.",
      "Enforce branch-level data isolation with a custom Eloquent BranchScope.",
      "Assess student risk using attendance and fee burden signals with AI and offline fallback logic.",
      "Broadcast real-time attendance updates and maintain WhatsApp delivery audit logs.",
    ],
    features: [
      { title: "Multi-tenant branch operations", description: "Manage a 13-table MySQL relational schema with migrated and seeded organization data." },
      { title: "AI student risk assessment", description: "Use Google Gemini to classify student risk as HIGH, MEDIUM, or LOW with recommendations, with a rule-based fallback." },
      { title: "Certificates and exports", description: "Generate PDF certificates with SHA-256 verification hashes and export operational data to Excel." },
      { title: "Real-time guardian alerts", description: "Broadcast attendance events over Laravel Reverb private channels and record WhatsApp notification delivery audits." },
    ],
    privacyNote:
      "Tutorly is an operational management platform with role-aware access controls and branch-level data boundaries.",
  },
  {
    slug: "dev-sync",
    name: "Dev-Sync",
    eyebrow: "Collaborative architecture diagram editor",
    tagline: "Design, annotate, and simulate system architecture together in real time.",
    overview:
      "Dev-Sync is a real-time multiplayer canvas for collaborative architecture diagrams, synchronized code authoring, and flow simulation through shareable canvas URLs.",
    audience: "Software teams, architects, developers, educators, and collaborators designing technical systems together.",
    status: "Live",
    liveUrl: "https://graph-architect.vercel.app/",
    imagePaths: [
      "/Products/Dev-Sync/DevSync01.png",
      "/Products/Dev-Sync/DevSync02.png",
    ],
    highlights: [
      "Synchronize cursors, nodes, edges, code changes, and flow simulations across collaborators.",
      "Persist canvas state to MongoDB on every change for session durability.",
      "Edit SQL, JSON, and TypeScript directly inside React Flow nodes with Monaco Editor.",
      "Join isolated Socket.io collaboration rooms through shareable canvas IDs without authentication.",
    ],
    features: [
      { title: "Real-time multiplayer canvas", description: "Use Socket.io room-based architecture to broadcast collaborative diagram and simulation events." },
      { title: "Embedded code authoring", description: "Add context-aware Monaco Editor instances to architecture nodes with syntax highlighting by node type." },
      { title: "Durable canvas sessions", description: "Persist collaborative canvas changes to MongoDB and synchronize state through a custom Zustand store." },
      { title: "Shareable collaboration model", description: "Generate unique canvas URLs that map collaborators into isolated sessions." },
    ],
    privacyNote:
      "Dev-Sync uses shared canvas sessions to synchronize collaboration state and code changes between connected users.",
  },
  {
    slug: "praniseba",
    name: "Praniseba",
    eyebrow: "Pet shop management system",
    tagline: "Coordinate pet shop operations, customers, orders, and appointments securely.",
    overview:
      "Praniseba is a full-stack pet shop operations platform with role-based access, analytics, email notifications, and a containerized CI/CD deployment workflow.",
    audience: "Pet shop owners, administrators, staff members, and teams managing pet retail operations.",
    status: "Live",
    liveUrl: "https://siyams-praniseba.vercel.app/",
    imagePaths: [
      "/Products/Praniseba/Pranisheba01.png",
      "/Products/Praniseba/Pranisheba02.png",
    ],
    highlights: [
      "Separate Admin and Staff permissions with protected account management.",
      "Secure authentication using JWT verification and bcrypt password hashing.",
      "Track pets, customers, orders, and appointments through a Recharts analytics dashboard.",
      "Use GitHub Actions, Docker, Vercel, Render, Express, and MongoDB in a multi-stage delivery pipeline.",
    ],
    features: [
      { title: "Role-based operations", description: "Provide Admin-only staff account management through an Express middleware layer." },
      { title: "Operational analytics", description: "Visualize live business activity across pets, customers, orders, and appointments." },
      { title: "Automated notifications", description: "Send operational email notifications through Nodemailer." },
      { title: "CI/CD and deployment", description: "Maintain CI, code quality, and Docker publishing workflows with GitHub Actions." },
    ],
    privacyNote:
      "Praniseba applies authenticated role-based access controls and centralized error handling across its management workflows.",
  },
  {
    slug: "debate-arena",
    name: "DebateArena",
    eyebrow: "AI-judged real-time debate platform",
    tagline: "Practice, compete, and improve arguments through real-time AI-assisted debates.",
    overview:
      "DebateArena is a real-time debate platform with matchmaking, turn-based debate rooms, Solo Practice Mode, contextual AI counterarguments, and automated argument scoring.",
    audience: "Debaters, students, educators, debate communities, and anyone practicing structured argumentation.",
    status: "Live",
    liveUrl: "https://debate-arena-mu.vercel.app/",
    imagePaths: [
      "/Products/DebateArena/Debate01.png",
      "/Products/DebateArena/Debate02.png",
    ],
    highlights: [
      "Manage matchmaking and debate rooms through WAITING, ONGOING, and COMPLETED states.",
      "Practice against an AI opponent without requiring another live participant.",
      "Generate contextual counterarguments using four-message conversation history.",
      "Score arguments from 1–100 across logic, evidence, relevance, and clarity.",
    ],
    features: [
      { title: "Real-time debate lifecycle", description: "Use Socket.IO to power matchmaking queues and turn-based room progression." },
      { title: "AI debate coaching", description: "Use Google Gemini for contextual counterarguments and structured argument quality scoring." },
      { title: "Secure full-stack architecture", description: "Combine JWT authentication, bcrypt hashing, rate limiting, MongoDB, and indexed debate transcripts." },
      { title: "Focused debate experience", description: "Use a Next.js route-group layout to isolate the full-viewport debate room from the main site shell." },
    ],
    privacyNote:
      "DebateArena stores authenticated debate activity and transcript data to support real-time rooms, scoring, and session continuity.",
  },
  {
    slug: "syntaxstate",
    name: "SyntaxState",
    eyebrow: "Real estate management system",
    tagline: "Connect sellers, buyers, and administrators through a secure property marketplace.",
    overview:
      "SyntaxState is a full-stack real estate marketplace where sellers submit properties, administrators approve listings, and buyers browse, save, and inquire about available properties.",
    audience: "Property buyers, sellers, real estate administrators, and agencies managing digital property listings.",
    status: "Live",
    liveUrl: "https://syntaxestate.vercel.app/",
    imagePaths: [
      "/Products/SyntaxState/Syntax01.png",
      "/Products/SyntaxState/Syntax02.png",
    ],
    highlights: [
      "Support Buyer, Seller, and Admin roles with protected workflows.",
      "Manage the seller submission, administrator approval, and public listing lifecycle.",
      "Provide property maps, inquiries, reviews, favorites, and image uploads.",
      "Deploy a decoupled React/Vite and Express/MongoDB architecture with Vercel and Render.",
    ],
    features: [
      { title: "Role-based marketplace", description: "Use JWT authentication, bcrypt password hashing, and role-based middleware for protected actions." },
      { title: "Listing approval workflow", description: "Move properties from seller submission through Admin approval to public availability." },
      { title: "Property interactions", description: "Support inquiries, reviews, favorites, interactive maps, and dual-mode inquiry flows." },
      { title: "Media and delivery stack", description: "Use Multer or Cloudinary for property images and Redux Toolkit with Framer Motion for the interface." },
    ],
    privacyNote:
      "SyntaxState protects marketplace actions through authenticated routes and records unauthorized access attempts in a security audit log.",
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
