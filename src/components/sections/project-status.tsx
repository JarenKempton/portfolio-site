import type { Project } from "@/lib/data";

const colors: Record<Project["status"], string> = {
  Live: "text-green",
  Active: "text-teal",
  "In development": "text-yellow",
  Retired: "text-muted",
  "Client work": "text-magenta",
};

export function ProjectStatus({ status }: { status: Project["status"] }) {
  return <span className={colors[status]}>{status}</span>;
}
