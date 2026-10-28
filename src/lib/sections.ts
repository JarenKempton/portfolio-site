import { navLinks } from "./data";

export interface TermSection {
  id: string;
  label: string;
  file: string;
}

const files: Record<string, string> = {
  about: "~/about.md",
  stories: "~/stories/",
  projects: "~/projects/",
  experience: "~/experience.log",
  skills: "~/skills/",
  contact: "~/contact.txt",
};

export const termSections: TermSection[] = [
  { id: "hero", label: "home", file: "~/whoami" },
  { id: "principles", label: "principles", file: "~/principles.md" },
  ...navLinks.map((link) => {
    const id = link.href.slice(1);
    return { id, label: link.label.toLowerCase(), file: files[id] ?? `~/${id}` };
  }),
];
