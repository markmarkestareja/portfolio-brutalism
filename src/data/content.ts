// All site content lives here. Text in [square brackets] is a placeholder to replace.

export const profile = {
  name: "Mark Estareja",
  firstName: "Mark",
  location: "Angeles City, PH",
  headline: ["Designer", "& Developer"],
  intro:
    "I design and build responsive, user-focused websites — turning business and client requirements into clean, functional code.",
  introShort: "I design and build responsive, user-focused websites with clean, functional code.",
  summary:
    "Web developer with a graphic design background — building company websites, dashboards and portfolios with React, Next.js and Tailwind CSS.",
  summaryShort: "Web developer & graphic designer based in Pampanga, Philippines.",
  bio: "I’m Mark — a Computer Science graduate and web developer from Pampanga, Philippines. I build fast, responsive websites with React and Next.js, and my background in graphic design and 3D printing lets me bring ideas to life both digitally and physically.",
  since: "2024",
  available: true,
  email: "mark.estareja.me@gmail.com",
  phone: { label: "+63 991 494 5150", href: "tel:+639914945150" },
  copyrightYear: "2026",
};

export const principles = ["Design First", "Clean Code", "Ship Fast"];

export const links = [
  { label: "GitHub Pages", href: "https://markmarkestareja.github.io" },
  { label: "Web Solution", href: "https://estarejawebsolution.com/" },
];

/** [Add your résumé URL, e.g. "/resume.pdf" in /public] */
export const resumeUrl = "#contact";

export const nav = [
  { label: "Work", href: "/#work", num: "01" },
  { label: "Services", href: "/#services", num: "02" },
  { label: "About", href: "/#about", num: "03" },
  { label: "Contact", href: "/#contact", num: "04" },
];

export type Project = {
  num: string;
  /** URL segment: /work/<slug> */
  slug: string;
  name: string;
  year: string;
  /** Shown under the name on cards, e.g. "Freelance / Company Website" */
  tags: string;
  stack: string[];
  role: string;
  liveUrl?: string;
  repoUrl?: string;
  summary: string;
  overview: string;
  challenge: string;
  approach: string[];
  outcome: string;
};

const caseStudyPlaceholders = {
  overview: "[What is this project, who is it for, and why does it exist? Two or three sentences.]",
  challenge: "[What did the client need, and what made it tricky?]",
  approach: [
    "[How you planned and designed it.]",
    "[The key technical decisions.]",
    "[How you built, tested and launched it.]",
  ],
  outcome: "[What changed after launch — real results only.]",
};

export const projects: Project[] = [
  {
    num: "01",
    slug: "cube-casa",
    name: "Cube Casa",
    year: "2025",
    tags: "Freelance / Company Website",
    stack: ["[Stack]"],
    role: "Freelance Web Developer",
    summary: "[One-sentence summary of the Cube Casa website.]",
    ...caseStudyPlaceholders,
  },
  {
    num: "02",
    slug: "heijun",
    name: "Heijun",
    year: "2025",
    tags: "Freelance / Company Website",
    stack: ["[Stack]"],
    role: "Freelance Web Developer",
    summary: "[One-sentence summary of the Heijun website.]",
    ...caseStudyPlaceholders,
  },
  {
    num: "03",
    slug: "froilans-portfolio",
    name: "Froilan’s Portfolio",
    year: "2025",
    tags: "Freelance / Portfolio Website",
    stack: ["[Stack]"],
    role: "Freelance Web Developer",
    summary: "[One-sentence summary of Froilan’s portfolio site.]",
    ...caseStudyPlaceholders,
  },
  {
    num: "04",
    slug: "sg-eco-industries",
    name: "SG Eco Industries",
    year: "2025",
    tags: "Company Profile / HTML · CSS · JS · PHP",
    stack: ["HTML", "CSS", "JavaScript", "PHP"],
    role: "Graphic / Web Designer",
    summary: "[One-sentence summary of the SG Eco Industries company profile site.]",
    ...caseStudyPlaceholders,
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const servicesIntro =
  "A logic-driven process, from blueprint to deploy — so every project ships with intent, not guesswork.";

export const services = [
  {
    title: "Web Development",
    body: "Responsive company websites, dashboards and portfolios built with React, Next.js and Tailwind CSS — optimized for performance, accessibility and on-page SEO.",
  },
  {
    title: "UI / UX Design",
    body: "Clean, user-focused interfaces designed in Figma and built as reusable components with shadcn/ui and Radix UI.",
  },
  {
    title: "WordPress & E-commerce",
    body: "WordPress and WooCommerce sites, with web hosting setup and deployment on Vercel.",
  },
  {
    title: "Graphic Design",
    body: "Marketing creatives, product mock-ups and catalog visuals — plus 3D-printed prototypes and AutoCAD booth designs.",
  },
];

export const tools = [
  "React", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind CSS", "shadcn/ui", "Radix UI",
  "Bootstrap", "WordPress", "WooCommerce", "MySQL", ".NET", "Figma", "GitHub", "Vercel", "AutoCAD",
];

export const experience = [
  { role: "Graphic / Web Designer", company: "SG Eco Industries Inc.", years: "2025 — Now" },
  { role: "Freelance Web Developer", company: "Self-employed", years: "2025 — Now" },
  { role: "3D Printing Operator", company: "Heinimex Corporation", years: "2024 — Now" },
  { role: "Student Intern", company: "DICT Region V, Sorsogon", years: "2024" },
  { role: "BS Computer Science", company: "Computer Communication Development Institute", years: "2020 — 2024" },
];
