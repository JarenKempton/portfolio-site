import { ExtLink } from "@/components/term/ext-link";
import { Panel } from "@/components/term/panel";
import { TechList } from "@/components/term/tech-list";
import type { Project } from "@/lib/data";
import { ProjectStatus } from "./project-status";

interface ProjectPanelProps {
  project: Project;
  level?: "h3" | "h4";
}

export function ProjectPanel({ project, level }: ProjectPanelProps) {
  return (
    <Panel
      id={`project-${project.slug}`}
      level={level}
      title={project.title}
      meta={
        <>
          <ProjectStatus status={project.status} /> <span className="text-muted">{project.year}</span>
        </>
      }
    >
      <p className="font-bold leading-relaxed text-fg">{project.tagline}</p>
      <p className="mt-2 leading-relaxed text-fg-dim">{project.description}</p>
      <div className="mt-auto space-y-3 pt-4">
        <TechList tech={project.tech} />
        {(project.github || project.url || project.builtOn) && (
          <p className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
            {project.github && (
              <ExtLink href={project.github} label={`${project.title} on GitHub`}>
                github ↗
              </ExtLink>
            )}
            {project.url && (
              <ExtLink href={project.url} label={`${project.title} live site`}>
                live site ↗
              </ExtLink>
            )}
            {project.builtOn && (
              <span className="text-muted">
                built on{" "}
                <ExtLink href={project.builtOn.url} label={`Built on ${project.builtOn.name}`}>
                  {project.builtOn.name} ↗
                </ExtLink>
              </span>
            )}
          </p>
        )}
      </div>
    </Panel>
  );
}
