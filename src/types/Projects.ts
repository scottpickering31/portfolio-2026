export type Project = {
  name: string;
  role: string;
  summary: string;
  imageSrc: string;
  imageAlt: string;
  imageOrientation: "landscape" | "portrait";
  stack: string[];
  highlights: string[];
  accent: string;
  status: string;
  live_href: string;
  source_href: string;
  readme_href: string;
};
