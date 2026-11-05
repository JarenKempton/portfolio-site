export { projects } from "./projects";
export type { Project, Upstream } from "./projects";
export { stories, storyProjects, featuredProjects, moreProjects } from "./stories";
export type { Story } from "./stories";

export const personalInfo = {
  name: "Jaren Kempton",
  title: "Senior Full Stack Engineer",
  focus: "Developer Experience, Platform & AI Tooling",
  tagline:
    "I build the platforms, MCP servers and CI guardrails that let AI agents do useful work in real codebases.",
  email: "hello@jarenkempton.dev",
  github: "https://github.com/jarenkempton",
  linkedin: "https://www.linkedin.com/in/jaren-kempton/",
  resumeUrl: "/resume.pdf",
  location: "Queen Creek, AZ",
} as const;

export const aboutBio = [
  "Most of my work sits underneath other people's work: the knowledge service agents search, the conventions CI enforces, a shared component library. I like making a messy system smaller and easier to change, and I measure whether it actually got better.",
  "Lately that mostly means AI agents: giving them good context to search, conventions CI can enforce, and evals that show whether a change actually helped. The same things make a codebase easier for the people working in it.",
];

export const principles = [
  {
    title: "Boring on purpose",
    body: "Hard problems are fine. Code that needs deep knowledge of the whole system to change safely, or has side effects nobody would expect, isn't. When I find that, I look for a way to simplify the core structure instead of adding another workaround.",
  },
  {
    title: "Don't reinvent the wheel",
    body: "I'd rather write a small thing than add a dependency for it, because every dependency is something outside my control that can break. But when an open-source standard can replace a pile of custom code and make it consistent, that's the one I pick.",
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
    url: "https://symphosize.com",
    note: "Part-time",
    current: true,
    highlights: [
      "Interviewed every developer, designer, and product and project manager, and analyzed 12 months of Jira and deploy data, to find why the product shipped slowly and with bugs: context was lost between product, design and engineering, with no QA gate.",
      "Co-designed with the CEO and architected the cross-functional product pipeline built to fix it: locked scope and decisions, public questions with owner-locked answers, and QA gates from epic to release; 21 projects launched through it. Leading the backend re-architecture, consolidating logic from edge functions, raw SQL and route handlers into one typed action layer (283 actions across 18 domains) that serves the UI, API and MCP tools with permissions defined once, plus release-time migrations and a 201-test harness.",
      "Created and solely own the company knowledge service that answers code, business-logic and customer questions for agents over MCP. Gave an AI agent a sandbox, held-out evals and dedicated compute to optimize search on its own: it cut p95 latency 4x (27.6 s → 6.7 s) and built a hybrid search with ~70% better ranking on labeled real queries, shadow-tested beside production for 5 days before cutover.",
      "Encoded the architecture as CI-enforced conventions and moved heavy CI to self-hosted runners; authored or merged ~30 PRs per weekday (690 in 30 days), mostly AI-assisted.",
      "Sole creator of a durable Temporal workflow that turns Sentry errors into reviewed fix PRs and reviews non-engineers' PRs against the architecture to prevent sprawl; auto-merge of validated fixes is in testing.",
    ],
    tech: ["TypeScript", "MCP", "PostgreSQL", "Drizzle", "Temporal", "GitHub Actions"],
  },
  {
    company: "SalesAi",
    roles: [{ title: "Full Stack Developer", period: "Feb 2026 — Oct 2026" }],
    url: "https://salesai.com",
    highlights: [
      "Consolidated duplicated frontend and admin components into one React 19 / Base UI library (40+ components) realigned to the Figma design system; built a Figma export plugin and token generator, and prototyped drift checks and design-to-code PR sync.",
      "Hardened security by migrating Twilio credentials to AES-256-GCM encrypted storage across 3 services and 5 environments via dual writes and verified backfill.",
      "Added SMS to a voice-first workflow builder; built setup, number management and rollout for Commio as a second phone provider.",
    ],
    tech: ["React", "TypeScript", "Base UI", "Storybook", "Figma"],
  },
  {
    company: "The Church of Jesus Christ of Latter-day Saints",
    roles: [
      { title: "Full-time Volunteer Missionary", period: "Oct 2023 — Oct 2025" },
      { title: "Technology Specialist", period: "Sep 2024 — Oct 2025" },
    ],
    highlights: [
      "Hand-built, before AI tools, a TypeScript and Google Maps API tool on Apps Script that planned the mission president's interviews every 6 weeks with the least travel, routing companionships with cars to pick up those without.",
      "Supported 150+ missionaries' phones, including a mission-wide SIM card swap and short-notice repairs; maintained Rust software analyzing 1,000+ records weekly and automated 100+ weekly emails and texts.",
    ],
    tech: ["TypeScript", "Google Maps API", "Google Apps Script", "Rust"],
  },
  {
    company: "ResponsiBid",
    url: "https://responsibid.com",
    roles: [
      { title: "Junior Developer", period: "May 2022 — Oct 2023" },
      { title: "Developer Intern", period: "May 2021 — Jul 2021" },
    ],
    highlights: [
      "Worked in the legacy PHP (CakePHP) and MySQL platform, including production migrations and debugging, while helping build its TypeScript replacement in React/Next.js and NestJS GraphQL.",
      "Helped introduce TDD in an Agile team, raising test coverage in a 1.2M-line codebase from 0% to 24%.",
    ],
    tech: ["CakePHP", "MySQL", "React", "Next.js", "NestJS", "GraphQL"],
  },
];

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "AI & agents",
    skills: ["MCP (Model Context Protocol) servers", "AI agents", "LLM tool calling", "Agent and retrieval evals", "Hybrid RAG (BM25 + vector + reranking)", "Agent guardrails", "Claude Code", "Hermes"],
  },
  {
    name: "Developer platform",
    skills: ["CI/CD", "GitHub Actions", "Self-hosted runners", "Internal tools", "Docker", "GCP", "Cloudflare Workers", "Vercel", "Temporal", "Playwright", "Vitest", "TDD", "Observability (Sentry, Datadog)"],
  },
  {
    name: "Backend",
    skills: ["TypeScript", "JavaScript", "Node.js", "Bun", "Hono", "NestJS", "REST APIs", "GraphQL", "tRPC", "Event-driven systems", "Message queues", "Webhooks", "Background jobs", "PostgreSQL", "MySQL", "SQL", "Supabase", "Drizzle"],
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js", "HTML/CSS", "Tailwind CSS", "Storybook", "Design systems", "Base UI", "MUI"],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Stories", href: "#stories" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;
