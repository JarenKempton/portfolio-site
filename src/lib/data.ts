import { LucideIcon } from "lucide-react";

// ── Personal Info ──────────────────────────────────────────────
export const personalInfo = {
 name: "Jaren Kempton",
 title: "Full Stack Developer",
 email: "me@jarenkempton.dev",
 github: "https://github.com/jarenkempton",
 linkedin: "https://www.linkedin.com/in/jaren-kempton-70935b39a/",
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
 description: string;
 tech: string[];
 current?: boolean;
 url?: string;
}

export const experiences: Experience[] = [
 {
  title: "Engineer Intern",
  company: "SalesAi",
  period: "Feb 2026 — Present",
  description:
   "Working to make AI more accessible to businesses. Contributing to full-stack development of AI-powered tools that help businesses work smarter and close deals faster.",
  tech: [],
  current: true,
  url: "https://salesai.com"
 },
 {
  title: "Founder & Developer",
  company: "Stride",
  period: "Nov 2025 — Present",
  description:
   "Building an intelligent task management platform from the ground up. Designed and developed the full-stack architecture using Tauri for a native desktop experience with React, real-time sync via PowerSync and Supabase, and ML-powered team analytics.",
  tech: ["React", "Tailwind", "Tauri", "TypeScript", "Drizzle", "Supabase", "PostgreSQL"],
  current: true,
  url: "https://stridetime.app"
 },
 {
  title: "Mission Technology Specialist",
  company: "Volunteer",
  period: "Sep 2024 — Oct 2025",
  description:
   "Learned Rust and contributed to mission statistics software parsing 1,000+ records weekly. Built a centralized automation system in Apps Script replacing manual processing of 100+ weekly emails. Served as primary tech support for 150+ volunteers.",
  tech: ["Rust", "Google Apps Script"],
 },
 {
  title: "Junior Developer",
  company: "ResponsiBid",
  period: "May 2022 — Oct 2023",
  description:
   "Built and maintained customer-facing features in Next.js and React. Refactored legacy components into modern patterns, helped introduce TDD practices going from 0 to 24% coverage in a 1.2M line codebase, and implemented GraphQL API integrations using NestJS.",
  tech: ["Next.js", "React", "NestJS", "Jest", "Prisma", "GraphQL", "TypeScript", "GitHub", "Jira"],
  url: "https://responsibid.com"
},
 {
  title: "Software Engineering Intern",
  company: "ResponsiBid",
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
  name: "Frontend",
  skills: [
   "React",
   "Next.js",
   "JavaScript",
   "TypeScript",
   "HTML",
   "CSS",
   "Tailwind CSS",
   "MUI",
   "shadcn/ui",
   "Chakra UI",
   "React Hook Form",
  ],
 },
 {
  name: "Backend",
  skills: [
   "Express",
   "NestJS",
   "Drizzle",
   "Prisma",
   "MySQL",
   "PostgreSQL",
   "SQLite",
   "Supabase",
   "PowerSync",
   "ElectricSQL",
  ],
 },
 {
  name: "Tools & DevOps",
  skills: ["Git", "GitHub", "Jira", "Docker", "Vercel", "REST APIs", "GraphQL"],
 },
 {
  name: "Practices",
  skills: ["Debugging", "Agile Workflows", "Problem-Solving", "TDD"],
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
