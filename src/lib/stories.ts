import { projects, projectsBySlug, type Upstream } from "./projects";

export interface Story {
  slug: string;
  title: string;
  problem: string;
  solution: string;
  projectSlugs: string[];
  links?: Upstream[];
}

export const stories: Story[] = [
  {
    slug: "agents-on-my-hardware",
    title: "Running agent workloads on my own hardware",
    problem:
      "Heavy PR traffic and a lot of parallel agent runs made GitHub Actions minutes expensive.",
    solution:
      "I moved the heavy jobs onto computers I already had. GARM runs the self-hosted runners and CLIProxyAPI lets agents on every machine share the same subscriptions. Both already did the hard part well, so I built the dashboards they were missing: which PR a runner is working on, what usage costs, and what's slow.",
    projectSlugs: ["garm-dashboard", "cliproxy-dashboard"],
  },
  {
    slug: "ai-usage",
    title: "Seeing where my AI usage goes",
    problem:
      "With agents running across several tools and machines, I couldn't tell how close I was to my limits or why one session cost far more than another.",
    solution:
      "Burn collected quota windows and token use from every tool on every machine and kept the history locally. Once all my machines ran through CLIProxyAPI, I ported Burn's usage history into the CLIProxy Dashboard and retired it. Quench reads the session logs agents already write and shows what each session loads and where runs go wrong.",
    projectSlugs: ["burn", "quench"],
  },
  {
    slug: "imessage-on-linux",
    title: "iMessage on Linux",
    problem: "I daily-drive Linux on Omarchy, and iMessage only runs on Apple devices.",
    solution:
      "BlueBubbles already bridges iMessage from a Mac, so I built the native desktop client I wanted on top of it with GPUI, in a day.",
    projectSlugs: ["bluebubbles-gpui"],
    links: [{ name: "Omarchy", url: "https://github.com/basecamp/omarchy" }],
  },
  {
    slug: "time-switch",
    title: "Clocking in with a switch",
    problem:
      "I split my time between two companies, and remembering to start and stop the right timer got old fast.",
    solution:
      "I had an ESP32 and a three-position switch lying around, so I wired them up: left or right clocks me in for a company, middle clocks me out. Each flip sends an event to a Cloudflare Worker, which hosts the dashboard and keeps my session history in D1. A Durable Object handles the real-time side, so the dashboard updates live on my phone and computer the moment the switch moves. If I forget to clock out, I fix it from wherever I am, and I can edit history or whole pay periods when I need to.",
    projectSlugs: ["time-switch"],
  },
];

export function storyProjects(story: Story) {
  return projectsBySlug(story.projectSlugs);
}

const storySlugs = new Set(stories.flatMap((story) => story.projectSlugs));

export const featuredProjects = projects.filter(
  (project) => project.featured && !storySlugs.has(project.slug),
);
export const moreProjects = projects.filter(
  (project) => !project.featured && !storySlugs.has(project.slug),
);
