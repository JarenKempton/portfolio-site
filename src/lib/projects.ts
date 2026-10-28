export interface Upstream {
  name: string;
  url: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  year: number;
  status: "Live" | "Active" | "In development" | "Retired" | "Client work";
  url?: string;
  github?: string;
  builtOn?: Upstream[];
  supersededBy?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "quench",
    title: "Quench",
    tagline: "See what your coding agents load, what it costs, and where they go wrong.",
    description:
      "Reads the session history Claude Code, Codex and Pi already keep on disk and reports how much context each session starts with, how it grows, which models and effort levels you use, and how each run went. Ships as a single binary for Linux and macOS. Nothing leaves your machine unless you opt in.",
    tech: ["TypeScript", "Bun", "SQLite"],
    year: 2026,
    status: "Active",
    github: "https://github.com/JarenKempton/quench",
    featured: true,
  },
  {
    slug: "burn",
    title: "Burn",
    tagline: "Local-first usage and quota history for the AI tools you already pay for.",
    description:
      "One executable that runs as a server or a collector. Collectors on each machine gather quota windows, token use, credits and inference speed from Claude Code, Codex, OpenRouter and LM Studio, and report to a server that keeps the history in SQLite. Enrollment is a browser-approved device flow, and provider credentials never leave the machine that collected them.",
    tech: ["TypeScript", "Hono", "SQLite", "Tailscale"],
    year: 2026,
    status: "Retired",
    github: "https://github.com/JarenKempton/burn",
    supersededBy: "cliproxy-dashboard",
    featured: true,
  },
  {
    slug: "interlock",
    title: "Interlock",
    tagline: "Claim a ticket, get a worktree, hand it to an agent.",
    description:
      "A CLI that claims a Jira ticket, prepares its Git worktree and returns what a T3 Code thread needs to launch an agent lane on it. Credentials live in the OS keychain, and a doctor command names exactly which sign-in, permission or push access is missing.",
    tech: ["TypeScript", "Bun", "Jira"],
    year: 2026,
    status: "In development",
    github: "https://github.com/JarenKempton/interlock",
    featured: true,
  },
  {
    slug: "time-switch",
    title: "Time Switch",
    tagline: "A physical switch on my desk that clocks me in and out.",
    description:
      "A three-position switch wired to an ESP32-C3: left and right start a work session for one of two companies, middle stops it. A Cloudflare Workers dashboard updates live and keeps hours and pay-period history behind Cloudflare Access.",
    tech: ["C", "ESP32", "TypeScript", "Cloudflare Workers"],
    year: 2026,
    status: "Live",
    github: "https://github.com/JarenKempton/time-switch",
    featured: true,
  },
  {
    slug: "cliproxy-dashboard",
    title: "CLIProxy Dashboard",
    tagline: "A better management UI for CLIProxyAPI, plus the usage history it doesn't keep.",
    description:
      "Quota windows on a timeline with pace against the reset, cost and tokens by provider, model, machine and key, OAuth account management, client key setup, and a config editor that shows a diff and snapshots the previous file on every save.",
    tech: ["TypeScript", "React", "Hono", "Vite", "Docker"],
    year: 2026,
    status: "Active",
    github: "https://github.com/JarenKempton/cliproxy-dashboard",
    builtOn: [{ name: "CLIProxyAPI", url: "https://github.com/router-for-me/CLIProxyAPI" }],
  },
  {
    slug: "garm-dashboard",
    title: "GARM Dashboard",
    tagline: "Which PR is that self-hosted runner working on, and is it slower than usual?",
    description:
      "A read-only dashboard that joins GARM's pools and runners with the GitHub Actions API: live runs grouped by PR with each job against its usual duration, plus 24h/7d/30d stats for queue wait, p50/p90 workflow time, boot time per pool, and the slowest and failing jobs.",
    tech: ["TypeScript", "React", "Hono", "SQLite", "GitHub Actions"],
    year: 2026,
    status: "Active",
    github: "https://github.com/JarenKempton/garm-dashboard",
    builtOn: [{ name: "GARM", url: "https://github.com/cloudbase/garm" }],
  },
  {
    slug: "bluebubbles-gpui",
    title: "BlueBubbles GPUI",
    tagline: "iMessage on Linux, as a native desktop app.",
    description:
      "A native desktop client for a BlueBubbles iMessage server, written in Rust with GPUI. Built in a day.",
    tech: ["Rust", "GPUI"],
    year: 2026,
    status: "Active",
    github: "https://github.com/JarenKempton/bluebubbles-gpui",
    builtOn: [
      { name: "BlueBubbles", url: "https://bluebubbles.app" },
      { name: "GPUI", url: "https://www.gpui.rs" },
    ],
  },
  {
    slug: "mtb-suspension",
    title: "MTB Suspension Repair",
    tagline: "Business site for a mountain bike suspension service.",
    description:
      "Service and pricing information for a local suspension repair shop, built to turn visits into booked repairs.",
    tech: ["React", "Tailwind CSS"],
    year: 2025,
    status: "Client work",
    url: "https://www.mtbsuspensionrepair.com",
  },
];

export function projectsBySlug(slugs: string[]) {
  return slugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is Project => project !== undefined);
}
