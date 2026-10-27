export { projects, featuredProjects, moreProjects } from "./projects";
export type { Project } from "./projects";

export const personalInfo = {
  name: "Jaren Kempton",
  title: "Senior Full Stack Engineer",
  focus: "Developer Platform / AI Tooling",
  tagline:
    "I build the platforms, MCP servers and CI guardrails that let AI agents do useful work in real codebases.",
  email: "hello@jarenkempton.dev",
  github: "https://github.com/jarenkempton",
  linkedin: "https://www.linkedin.com/in/jaren-kempton/",
  resumeUrl: "/resume.pdf",
  location: "Queen Creek, AZ",
} as const;

export const aboutBio = [
  "Most of my work sits underneath other people's work: the knowledge service agents search, the conventions CI enforces, the component library every app shares. I like making a messy system smaller and easier to change, and I measure whether it actually got better.",
  "I started in a 1.2M-line PHP codebase, helping move it to TypeScript and getting tests into a team that had none. These days I spend a lot of time on retrieval quality and on keeping AI-assisted code close to the design it was meant to follow.",
  "Outside of work I build small local-first tools for things that bug me, like where my AI usage goes, what my coding agents load, and a switch on my desk that clocks me in.",
];

export const principles = [
  {
    title: "Boring on purpose",
    body: "Simple designs that do exactly what you expect. If it needs a diagram to explain, it isn't finished.",
  },
  {
    title: "Use what already exists",
    body: "Most problems already have a good tool. I'd rather wire the existing one up well than rebuild it worse.",
  },
  {
    title: "Throwaway code, bombproof product",
    body: "Agents are great at writing long-running evals and test harnesses nobody ships. That temporary code is how the code that does ship gets to be boring.",
  },
] as const;

export interface Role {
  title: string;
  period: string;
}

export interface Experience {
  company: string;
  roles: Role[];
  note?: string;
  highlights: string[];
  tech: string[];
  current?: boolean;
  url?: string;
}

export const experiences: Experience[] = [
  {
    company: "Symphosize",
    roles: [{ title: "Technical Consultant", period: "Jun 2026 — Present" }],
    note: "Part-time",
    current: true,
    highlights: [
      "Interviewed everyone in product and engineering to map friction in the product pipeline, then drafted solutions and drove them into general adoption.",
      "Own architecture and the MCP layer for the resulting pipeline app. Brought a fast-growing codebase back under control, consolidating 5 backend layers into 1 and deleting 60k+ lines without pausing feature delivery.",
      "Encoded the architecture into CI-enforced conventions and automated sweeps, so AI-assisted feature work lands close to the target design without manual guidance, at ~20 merged PRs a day.",
      "Own the company knowledge service that serves docs, code, Jira and business metrics to AI agents over MCP. Cut search p95 4× (27.6 s → 6.7 s), then designed a BM25 + vector + reranking pipeline benchmarked at ~70% better ranking on held-out real queries.",
      "Built a retrieval eval from 1,500+ logged production queries with a held-out split and bootstrap confidence intervals. It caught the live vector index returning only 37% of true neighbors and ruled out a larger embedding model whose gain wasn't significant.",
    ],
    tech: ["TypeScript", "MCP", "PostgreSQL", "GitHub Actions"],
  },
  {
    company: "SalesAi",
    roles: [{ title: "Full Stack Developer", period: "Feb 2026 — Oct 2026" }],
    url: "https://salesai.com",
    highlights: [
      "Built the shared React component library for every frontend app, kept in sync with the design team's Figma system so the product ships one consistent UI.",
      "Hardened credential storage across 3 services and every environment with zero downtime.",
      "Expanded a voice-only sales platform to SMS for every customer and added Commio as a second phone provider, opening the platform to customers already committed to it.",
    ],
    tech: ["React", "TypeScript", "Storybook", "Figma"],
  },
  {
    company: "The Church of Jesus Christ of Latter-day Saints",
    roles: [
      { title: "Missionary", period: "Oct 2023 — Oct 2025" },
      { title: "Technology Specialist", period: "Sep 2024 — Oct 2025" },
    ],
    highlights: [
      "Automated processing of 100+ weekly emails and texts with Google Apps Script.",
      "Maintained Rust software analyzing 1,000+ records weekly, and supported 150+ volunteers.",
    ],
    tech: ["Rust", "Google Apps Script"],
  },
  {
    company: "Symphosize",
    roles: [
      { title: "Junior Developer", period: "May 2022 — Oct 2023" },
      { title: "Developer Intern", period: "May 2021 — Jul 2021" },
    ],
    highlights: [
      "Worked heavily in the legacy CakePHP platform while helping build its TypeScript replacement in React/Next.js and NestJS GraphQL.",
      "Helped introduce TDD in an Agile team, raising test coverage in a 1.2M-line codebase from 0% to 24%.",
    ],
    tech: ["CakePHP", "React", "Next.js", "NestJS", "GraphQL", "Jest"],
  },
];

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "AI & agent tooling",
    skills: ["Claude Code", "MCP servers", "Agent guardrails", "Hybrid RAG", "Retrieval evals"],
  },
  {
    name: "Developer platform",
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

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;
