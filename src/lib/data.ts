import { LucideIcon } from "lucide-react";

// ── Personal Info ──────────────────────────────────────────────
export const personalInfo = {
 name: "Jaren Kempton",
 title: "Senior Full Stack Engineer",
 focus: "Developer Experience, Platform & AI Tooling",
 email: "hello@jarenkempton.dev",
 github: "https://github.com/jarenkempton",
 linkedin: "https://www.linkedin.com/in/jaren-kempton/",
 resumeUrl: "/resume.pdf",
 location: "Queen Creek, AZ",
} as const;

export const aboutBio =
 "I'm a full stack developer who genuinely enjoys understanding how things work under the hood. Whether it's a new framework, a tricky bug, or an entirely unfamiliar problem — I like digging in and figuring it out. Most of my work comes down to finding ways to simplify things and make people's lives a little easier, whether that's through the tools I build or the code I write.";

export const stats = [
 { label: "Years Experience", value: "3+" },
 { label: "Frameworks Used", value: "10+" },
] as const;

// ── Experience ─────────────────────────────────────────────────
export interface Experience {
 title: string;
 company: string;
 period: string;
 highlights: string[];
 tech: string[];
 current?: boolean;
 url?: string;
}

export const experiences: Experience[] = [
 {
  title: "Technical Consultant (Part-time)",
  company: "Symphosize",
  period: "Jun 2026 — Present",
  highlights: [
   "Interviewed every developer, designer, and product and project manager, and analyzed 12 months of Jira and deploy data, to find why the product shipped slowly and with bugs: context was lost between product, design and engineering, with no QA gate.",
   "Co-designed with the CEO and architected the cross-functional product pipeline built to fix it: locked scope and decisions, public questions with owner-locked answers, and QA gates from epic to release; 21 projects launched through it. Leading the backend re-architecture, consolidating logic from edge functions, raw SQL and route handlers into one typed action layer (283 actions across 18 domains) that serves the UI, API and MCP tools with permissions defined once, plus release-time migrations and a 201-test harness.",
   "Created and solely own the company knowledge service that answers code, business-logic and customer questions for agents over MCP. Gave an AI agent a sandbox, held-out evals and dedicated compute to optimize search on its own: it cut p95 latency 4x (27.6 s → 6.7 s) and built a hybrid search with ~70% better ranking on labeled real queries, shadow-tested beside production for 5 days before cutover.",
   "Encoded the architecture as CI-enforced conventions and moved heavy CI to self-hosted runners; authored or merged ~30 PRs per weekday (690 in 30 days), mostly AI-assisted.",
   "Sole creator of a durable Temporal workflow that turns Sentry errors into reviewed fix PRs and reviews non-engineers' PRs against the architecture to prevent sprawl; auto-merge of validated fixes is in testing.",
  ],
  tech: ["TypeScript", "PostgreSQL", "Supabase", "Drizzle", "MCP", "Temporal", "Sentry", "GitHub Actions"],
  current: true,
 },
 {
  title: "Full Stack Developer",
  company: "SalesAi",
  period: "Feb 2026 — Oct 2026",
  highlights: [
   "Consolidated duplicated frontend and admin components into one React 19 / Base UI library (40+ components) realigned to the Figma design system; built a Figma export plugin and token generator, and prototyped drift checks and design-to-code PR sync.",
   "Hardened security by migrating Twilio credentials to AES-256-GCM encrypted storage across 3 services and 5 environments via dual writes and verified backfill.",
   "Added SMS to a voice-first workflow builder; built setup, number management and rollout for Commio as a second phone provider.",
  ],
  tech: ["React", "Base UI", "Storybook", "Figma", "TypeScript", "GCP"],
  url: "https://salesai.com",
 },
 {
  title: "Full-time Volunteer Missionary · Technology Specialist (Sep 2024 — Oct 2025)",
  company: "The Church of Jesus Christ of Latter-day Saints",
  period: "Oct 2023 — Oct 2025",
  highlights: [
   "Automated processing of 100+ weekly emails and texts with Google Apps Script.",
   "Maintained Rust software analyzing 1,000+ records weekly, and supported 150+ volunteers.",
  ],
  tech: ["Rust", "Google Apps Script"],
 },
 {
  title: "Junior Developer (Developer Intern, May 2021 — Jul 2021)",
  company: "ResponsiBid",
  period: "May 2022 — Oct 2023",
  highlights: [
   "Worked in the legacy PHP (CakePHP) and MySQL platform, including production migrations and debugging, while helping build its TypeScript replacement in React/Next.js and NestJS GraphQL.",
   "Helped introduce TDD in an Agile team, raising test coverage in a 1.2M-line codebase from 0% to 24%.",
  ],
  tech: ["CakePHP", "MySQL", "TypeScript", "React", "Next.js", "NestJS", "GraphQL"],
  url: "https://responsibid.com",
 },
];

// ── Stride Showcase ────────────────────────────────────────────
export interface StrideFeature {
 icon: LucideIcon;
 title: string;
 description: string;
}

export const strideInfo = {
 name: "Stride",
 tagline: "Master your productivity.",
 description:
  "Stride is an intelligent task management system that helps teams and individuals achieve their goals with precision and clarity. Featuring personal analytics, focus tools, and ML-powered team insights — all in one platform.",
 url: "https://stridetime.app",
 github: "https://github.com/orgs/StrideTime",
 tech: ["React", "Tauri", "TypeScript", "Drizzle", "PowerSync", "Supabase", "PostgreSQL", "SQLite"],
} as const;

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
  title: "interlock",
  description:
   "TypeScript/Bun CLI that claims unblocked Jira tickets and prepares each as an isolated AI-agent lane (Git worktree on a local or remote host); Linear, GitHub Issues and Docker Sandbox support in progress.",
  tech: ["TypeScript", "Bun", "Git", "Jira"],
  github: "https://github.com/JarenKempton/interlock",
 },
 {
  title: "quench",
  description:
   "Profiles coding-agent sessions to show why agents get corrected, ranks bloated or conflicting instructions and skills, and scans session history and local files for leaked secrets, including files npm worms target.",
  tech: ["TypeScript", "Claude Code"],
  github: "https://github.com/JarenKempton/quench",
 },
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
  name: "AI & Agents",
  skills: ["MCP (Model Context Protocol) servers", "AI agents", "LLM tool calling", "Agent and retrieval evals", "Hybrid RAG (BM25 + vector + reranking)", "Agent guardrails", "Claude Code", "Hermes"],
 },
 {
  name: "Developer Platform",
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

// ── Navigation ─────────────────────────────────────────────────
export const navLinks = [
 { label: "About", href: "#about" },
 { label: "Projects", href: "#stride" },
 { label: "Experience", href: "#experience" },
 { label: "Skills", href: "#skills" },
 { label: "Contact", href: "#contact" },
] as const;
