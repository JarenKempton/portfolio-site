export interface TermSection {
  id: string;
  label: string;
  file: string;
}

export const termSections: TermSection[] = [
  { id: "hero", label: "home", file: "~/whoami" },
  { id: "principles", label: "principles", file: "~/principles.md" },
  { id: "about", label: "about", file: "~/about.md" },
  { id: "off-the-clock", label: "off-the-clock", file: "~/.offtheclock" },
  { id: "projects", label: "projects", file: "~/projects/" },
  { id: "experience", label: "experience", file: "~/experience.log" },
  { id: "skills", label: "skills", file: "~/skills/" },
  { id: "contact", label: "contact", file: "~/contact.txt" },
];
