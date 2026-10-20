// ── Personal Info ──────────────────────────────────────────────
export const personalInfo = {
 name: "Jaren Kempton",
 title: "Senior Full Stack Engineer, Developer Platform / AI Tooling",
 tagline: "Building the systems that let AI expand what a team can ship, quickly and safely.",
 email: "hello@jarenkempton.dev",
 github: "https://github.com/jarenkempton",
 linkedin: "https://www.linkedin.com/in/jaren-kempton/",
 resumeUrl: "/resume.pdf",
 location: "Queen Creek, AZ",
} as const;

export const aboutBio =
 "I'm a full stack engineer who builds the systems that let AI expand what a team can ship, quickly and safely. Lately that means owning architecture and MCP tooling for an AI-assisted product pipeline, encoding conventions into CI so agent-written code lands close to the target design, and running a company knowledge service that serves docs, code, Jira and metrics to AI agents. I genuinely enjoy understanding how things work under the hood, and most of my work comes down to simplifying things and making people's lives a little easier.";

export const stats = [
 { label: "Years Experience", value: "3+" },
 { label: "Frameworks Used", value: "10+" },
] as const;

// ── Experience ─────────────────────────────────────────────────
export interface Experience {
 title: string;
 company: string;
 period: string;
 description: string;
 tech: string[];
 current?: boolean;
 url?: string;
}

export const experiences: Experience[] = [
 {
  title: "Technical Consultant (Part-time)",
  company: "Symphosize",
  period: "Jun 2026 — Present",
  description:
   "Interviewed everyone in product and engineering to map friction in the product pipeline, then drafted solutions and drove them into general adoption. Own architecture and the MCP layer for the resulting pipeline app, consolidating 5 backend layers into 1 and deleting 60k+ lines, with CI-enforced conventions so AI-assisted work lands close to the target design at ~20 merged PRs a day. Own the company knowledge service: cut search p95 4x, then designed a BM25 + vector + Jev reranking pipeline benchmarked at ~70% better ranking on held-out real queries.",
  tech: ["TypeScript", "Hono", "PostgreSQL", "MCP", "Jev", "GitHub Actions", "Vercel"],
  current: true,
 },
 {
  title: "Full Stack Developer",
  company: "SalesAi",
  period: "Feb 2026 — Oct 2026",
  description:
   "Built the shared React component library for all frontend apps, kept in sync with the design team's Figma system. Hardened credential storage across 3 services and every environment with zero downtime. Expanded a voice-only sales platform to SMS for every customer and added Commio as a second phone provider.",
  tech: ["React", "Next.js", "TypeScript", "Storybook", "Figma", "Datadog"],
  url: "https://salesai.com"
 },
 {
  title: "Missionary · Technology Specialist",
  company: "The Church of Jesus Christ of Latter-day Saints",
  period: "Oct 2023 — Oct 2025",
  description:
   "Served as Technology Specialist from Sep 2024. Learned Rust and maintained mission statistics software analyzing 1,000+ records weekly. Automated processing of 100+ weekly emails and texts with Google Apps Script. Served as primary tech support for 150+ volunteers.",
  tech: ["Rust", "Google Apps Script"],
 },
 {
  title: "Junior Developer",
  company: "Symphosize",
  period: "May 2022 — Oct 2023",
  description:
   "Worked heavily in the legacy PHP (CakePHP) platform while helping build its TypeScript replacement in React/Next.js and NestJS GraphQL. Helped introduce TDD in an Agile team, raising test coverage in a 1.2M-line codebase from 0% to 24%.",
  tech: ["Next.js", "React", "NestJS", "Jest", "Prisma", "GraphQL", "TypeScript", "GitHub", "Jira"],
  url: "https://responsibid.com"
},
 {
  title: "Developer Intern",
  company: "Symphosize",
  period: "May 2021 — Jul 2021",
  description:
   "Worked on a large legacy CakePHP application, fixing bugs and contributing to incremental feature updates. Improved code readability and documentation across multiple modules.",
  tech: ["CakePHP", "JavaScript", "Git", "Bitbucket"],
  url: "https://responsibid.com"
},
 {
  title: "Self-Taught Developer",
  company: "Independent",
  period: "2020 — 2021",
  description:
   "Discovered a passion for building things with code. Spent time learning vanilla JavaScript, HTML/CSS, Python, Java, and Arduino C++ through personal projects and experimentation — building everything from web pages to hardware prototypes.",
  tech: ["JavaScript", "HTML/CSS", "Python", "Java", "Arduino", "C++"],
},
];

// ── Other Projects ─────────────────────────────────────────────
export interface Project {
 title: string;
 description: string;
 tech: string[];
 url?: string;
 github?: string;
}

export const otherProjects: Project[] = [
 {
  title: "Parallax Effect",
  description:
   "An interactive web experience showcasing parallax scrolling techniques with layered depth effects and smooth animations, powered by dynamically generated content.",
  tech: ["React", "FakerJS", "Vercel"],
  url: "https://parallax-effect-three.vercel.app",
  github: "https://github.com/JarenKempton/parallax-effect",
 },
 {
  title: "MTB Suspension Repairs",
  description:
   "A business website for a mountain bike suspension repair service. Clean design focused on conversions and service information.",
  tech: ["React", "Tailwind CSS"],
  url: "https://www.mtbsuspensionrepair.com",
  github: "https://github.com/JarenKempton/MTB-Suspension",
 },
];

// ── Skills ─────────────────────────────────────────────────────
export interface SkillCategory {
 name: string;
 skills: string[];
}

export const skillCategories: SkillCategory[] = [
 {
  name: "AI & Agent Tooling",
  skills: ["Claude Code", "Hermes", "MCP servers", "Jev", "Agent guardrails", "Hybrid RAG"],
 },
 {
  name: "Developer Platform",
  skills: ["GitHub Actions", "CI/CD gating", "Playwright", "Vitest", "Docker", "Sentry", "Datadog"],
 },
 {
  name: "Backend",
  skills: ["TypeScript", "Node.js", "Hono", "NestJS", "PostgreSQL", "Supabase", "Drizzle", "tRPC"],
 },
 {
  name: "Frontend",
  skills: ["React", "Next.js", "Tailwind CSS", "Base UI", "MUI", "Storybook"],
 },
];

// ── Navigation ─────────────────────────────────────────────────
export const navLinks = [
 { label: "About", href: "#about" },
 { label: "Projects", href: "#projects" },
 { label: "Experience", href: "#experience" },
 { label: "Skills", href: "#skills" },
 { label: "Contact", href: "#contact" },
] as const;
