import { projects, projectsBySlug, type Upstream } from "./projects";

export interface TimelinePoint {
  date: string;
  event: string;
}

export interface Story {
  slug: string;
  title: string;
  problem: string;
  solution: string;
  projectSlugs: string[];
  links?: Upstream[];
  timeline: TimelinePoint[];
}

export const stories: Story[] = [
  {
    slug: "job-search-after-layoffs",
    title: "Job hunting with the people I was laid off with",
    problem:
      "I was part of a round of layoffs, and several of us kept in touch in a group chat. Everyone was juggling applications, recruiter emails and follow-ups, and it was hard to tell which replies belonged to which application or why some companies kept saying no.",
    solution:
      "I built Job Search for my own search. Cloudflare's Clef model answers fixed questions about a resume and a posting (skills, experience, related work, hard requirements), and fixed weights turn the answers into a 0–100 match score. A Grok routine runs daily to find new postings in areas that score well against my resume, and the breakdowns show where to bring the resume closer to the roles I want. I opened it up to the group: their AI assistant reconciles the inbox with the applications they've sent and logs each reply, the tracker flags follow-ups as they come due, and it shows which companies reject you most.",
    projectSlugs: ["job-search"],
    timeline: [
      { date: "2026-10-19", event: "first commit" },
      { date: "2026-10-19", event: "live in production" },
      { date: "now", event: "ongoing" },
    ],
  },
  {
    slug: "agents-on-my-hardware",
    title: "Running agent workloads on my own hardware",
    problem:
      "Heavy PR traffic and a lot of parallel agent runs made GitHub Actions minutes expensive.",
    solution:
      "I moved the heavy jobs onto computers I already had. GARM runs the self-hosted runners and CLIProxyAPI lets agents on every machine share the same subscriptions. Both already did the hard part well, so I built the dashboards they were missing: which PR a runner is working on, what usage costs, and what's slow.",
    projectSlugs: ["garm-dashboard", "cliproxy-dashboard"],
    timeline: [
      { date: "2026-09-25", event: "CLIProxy Dashboard first commit" },
      { date: "2026-10-12", event: "GARM Dashboard first commit" },
      { date: "2026-10-13", event: "both deployed on my own hardware" },
      { date: "now", event: "ongoing" },
    ],
  },
  {
    slug: "mission-interview-planning",
    title: "Planning the mission president's visits",
    problem:
      "For two years I served as a full-time volunteer missionary, in a mission of roughly 150–200 missionaries at a time. The mission is grouped into zones, each zone into a handful of districts, and each district into a handful of companionships, always two men or two women. Every 6 weeks, every companionship had to meet with the mission president, who traveled across the whole mission to see them. His time, the missionaries' time and the miles all mattered, and planning it by hand was chaotic.",
    solution:
      "As the mission's Technology Specialist, I built a planner in Google Apps Script to make that less chaotic. It pulled travel times between apartments and meeting houses from the Google Maps API and cached them as a graph, then planned each round so every companionship had the shortest trip to meet him and he wasn't jumping around the mission. Companionships with cars were planned to pick up companionships without one on the way, never mixing men and women. Apartments opened and closed every transfer, so it recalculated each 6-week cycle on a schedule; the meeting houses mostly stayed put, unless a more central one turned up. I wrote it in TypeScript, kept it in version control and deployed it to Apps Script, all by hand, before I used AI tools. Alongside it I maintained Rust software analyzing 1,000+ records weekly, automated 100+ weekly emails and texts, and kept 150+ missionaries' phones working, including a mission-wide SIM card swap.",
    projectSlugs: [],
    timeline: [
      { date: "2024-09", event: "started as Technology Specialist" },
      { date: "2025-10", event: "service ended" },
    ],
  },
  {
    slug: "ai-usage",
    title: "Seeing where my AI usage goes",
    problem:
      "With agents running across several tools and machines, I couldn't tell how close I was to my limits or why one session cost far more than another.",
    solution:
      "Burn collected quota windows and token use from every tool on every machine and kept the history locally. Once all my machines ran through CLIProxyAPI, I ported Burn's usage history into the CLIProxy Dashboard and retired it. Quench reads the session logs agents already write and shows what each session loads and where runs go wrong.",
    projectSlugs: ["burn", "quench"],
    timeline: [
      { date: "2026-07-16", event: "Quench first commit" },
      { date: "2026-08-28", event: "Burn first commit and v0.1.0" },
      { date: "2026-10-30", event: "Quench v0.1.0" },
      { date: "now", event: "ongoing" },
    ],
  },
  {
    slug: "time-switch",
    title: "Clocking in with a switch",
    problem:
      "I split my time between two companies, and remembering to start and stop the right timer got old fast.",
    solution:
      "I had an ESP32 and a three-position switch lying around, so I wired them up: left or right clocks me in for a company, middle clocks me out. Each flip sends an event to a Cloudflare Worker, which hosts the dashboard and keeps my session history in D1. A Durable Object handles the real-time side, so the dashboard updates live on my phone and computer the moment the switch moves. If I forget to clock out, I fix it from wherever I am, and I can edit history or whole pay periods when I need to.",
    projectSlugs: ["time-switch"],
    timeline: [
      { date: "2026-09-12", event: "first commit" },
      { date: "2026-09-14", event: "live in production" },
      { date: "now", event: "ongoing" },
    ],
  },
];

export function storyProjects(story: Story) {
  return projectsBySlug(story.projectSlugs);
}

const storySlugs = new Set(stories.flatMap((story) => story.projectSlugs));

export const featuredProjects = projects.filter((project) => project.featured);
export const moreProjects = projects.filter(
  (project) => !project.featured && !storySlugs.has(project.slug),
);
