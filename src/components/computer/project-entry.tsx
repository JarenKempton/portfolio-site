import type { Project } from "@/lib/data";
import { PixelIcon } from "./pixel-icon";
import { TechChips } from "./tech-chips";

export function ProjectEntry({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col gap-3 border border-black bg-white p-4 shadow-[3px_3px_0_#000]">
      <header className="flex items-start gap-3">
        <PixelIcon name={project.featured ? "folder" : "document"} size={32} />
        <div className="min-w-0 flex-1">
          <h4 className="font-pixel text-base font-bold leading-tight">{project.title}</h4>
          <p className="font-chrome text-lg leading-tight text-neutral-600">
            {project.year} · {project.status}
          </p>
        </div>
      </header>
      <p className="font-bold leading-snug">{project.tagline}</p>
      <p className="text-[15px] leading-relaxed text-neutral-800">{project.description}</p>
      <div className="mt-auto flex flex-col gap-3 pt-1">
        <TechChips items={project.tech} label={`${project.title} tech`} />
        {(project.github || project.url) && (
          <p className="flex flex-wrap gap-3">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="mac-btn text-lg">
                GitHub ↗<span className="sr-only"> {project.title}</span>
              </a>
            )}
            {project.url && (
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="mac-btn text-lg">
                Visit site ↗<span className="sr-only"> {project.title}</span>
              </a>
            )}
          </p>
        )}
      </div>
    </article>
  );
}
