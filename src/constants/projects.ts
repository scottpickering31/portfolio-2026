import type { Project } from "../types/Projects";

export const projects: Project[] = [
  {
    name: "MarketTaxPro",
    role: "Full Stack SaaS Platform",
    summary:
      "A marketplace sync engine for online sellers that pulls large volumes of transactions and turns them into tax ready financial insight.",
    imageSrc: "public/market-tax-pro.png",
    imageAlt: "MarketTaxPro dashboard screenshot",
    imageOrientation: "landscape",
    stack: ["Next.js", "TypeScript", "Supabase", "OAuth 2.0 + PKCE"],
    highlights: [
      "Secure eBay OAuth integration with token refresh automation",
      "Background syncing for a full tax year of orders, fees, and payouts",
      "Normalized schema optimized for high volume multi tenant data",
    ],
    accent: "from-cyan-400 to-sky-400",
    status: "SaaS",
    live_href: "https://markettaxpro.com",
    source_href: "https://github.com/scottpickering31/markettaxpro",
    readme_href:
      "https://github.com/scottpickering31/markettaxpro/blob/main/README.md",
  },
  {
    name: "G.R.A.C.E",
    role: "Mobile First Health Platform",
    summary:
      "A guided healthcare tracking app for caregivers with structured logging, insights, and a scalable architecture for future medical expansion.",
    imageSrc: "public/g.r.a.c.e.png",
    imageAlt: "G.R.A.C.E mobile app screenshot",
    imageOrientation: "portrait",
    stack: ["React Native", "Expo", "Supabase Auth", "TanStack Query"],
    highlights: [
      "Deep link aware auth flows for cold and hot app starts",
      "Multi step onboarding with schema driven validation",
      "Video enabled seizure logging and profile aware caching strategy",
    ],
    accent: "from-amber-300 to-orange-400",
    status: "HealthTech",
    live_href: "https://markettaxpro.com",
    source_href: "https://github.com/scottpickering31/G.R.A.C.E",
    readme_href:
      "https://github.com/scottpickering31/G.R.A.C.E/blob/main/README.md",
  },
  {
    name: "Company Registry Lite",
    role: "Data Search Platform",
    summary:
      "A lightweight registry interface backed by a clean REST architecture focused on fast filtering, stable modeling, and clear UX.",
    imageSrc: "public/company-registry-lite.png",
    imageAlt: "Company Registry Lite application screenshot",
    imageOrientation: "landscape",
    stack: ["NextJS", "Node.js", "Express", "PostgreSQL"],
    highlights: [
      "REST API with structured retrieval and filtering endpoints",
      "Relational schema design with environment based architecture",
      "Performance focused query optimization and resilient error handling",
    ],
    accent: "from-emerald-300 to-teal-400",
    status: "Data Platform",
    live_href: "https://company-registry-lite.vercel.app",
    source_href: "https://github.com/scottpickering31/company-registry-lite",
    readme_href:
      "https://github.com/scottpickering31/company-registry-lite/blob/main/README.md",
  },
];
