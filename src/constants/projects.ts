import type { Project } from "../types/Projects";
import resellicoImg from "../assets/resellico.png";
import graceImg from "../assets/g.r.a.c.e.png";
import companyRegistryLiteImg from "../assets/company-registry-lite.png";

export const projects: Project[] = [
  {
    name: "G.R.A.C.E",
    role: "Mobile First Health Platform",
    summary:
      "A guided healthcare tracking app for caregivers with structured logging, insights, and a scalable architecture for future medical expansion.",
    imageSrc: graceImg,
    imageAlt: "G.R.A.C.E mobile app screenshot",
    imageOrientation: "portrait",
    stack: ["React Native", "Expo", "Supabase Auth", "TanStack Query"],
    highlights: [
      "Deep link aware auth flows for cold and hot app starts",
      "Multi step onboarding with schema driven validation",
      "Linked health data for insights and analytics",
    ],
    accent: "from-amber-300 to-orange-400",
    status: "HealthTech",
    live_href: "https://play.google.com/store/apps?hl=en_GB",
    source_href: "https://github.com/scottpickering31/G.R.A.C.E",
    readme_href:
      "https://github.com/scottpickering31/G.R.A.C.E/blob/main/README.md",
  },
  {
    name: "Resellico",
    role: "Full Stack SaaS Platform",
    summary:
      "A marketplace sync engine for online sellers that allows users to generate listings cross-platform for multiple marketplaces, track sales, and manage inventory.",
    imageSrc: resellicoImg,
    imageAlt: "Resellico dashboard screenshot",
    imageOrientation: "landscape",
    stack: ["Next.js", "TypeScript", "Supabase", "OAuth 2.0 + PKCE"],
    highlights: [
      "Secure Marketplace OAuth integration with token refresh automation",
      "Multi-marketplace listing sync and inventory management",
      "Optional AI generated product descriptions and images",
    ],
    accent: "from-cyan-400 to-sky-400",
    status: "SaaS",
    live_href: "https://resellico.com",
    source_href: "https://github.com/scottpickering31",
    readme_href: "https://github.com/scottpickering31",
  },
  {
    name: "Company Registry Lite",
    role: "Data Search Platform",
    summary:
      "A lightweight registry interface backed by a clean REST architecture focused on fast filtering, stable modeling, and clear UX.",
    imageSrc: companyRegistryLiteImg,
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
