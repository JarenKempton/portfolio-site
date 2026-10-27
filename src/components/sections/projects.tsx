import { Prompt } from "@/components/term/prompt";
import { Section } from "@/components/term/section";
import { featuredProjects, moreProjects } from "@/lib/data";
import { ProjectIndex } from "./project-index";
import { ProjectPanel } from "./project-panel";

export function Projects() {
  return (
    <Section id="projects" label="Projects" cmd="ls -l ~/projects">
      <ProjectIndex />

      <p className="mb-8 mt-10">
        <Prompt cwd="~/projects" cmd="cat featured/*" />
      </p>
      <div className="grid gap-x-6 gap-y-10 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectPanel key={project.slug} project={project} />
        ))}
      </div>

      {moreProjects.length > 0 && (
        <>
          <h3 className="mb-8 mt-12 font-normal">
            <span className="sr-only">More projects: </span>
            <Prompt cwd="~/projects" cmd="cat more/*" />
          </h3>
          <div className="grid gap-x-6 gap-y-10 md:grid-cols-2">
            {moreProjects.map((project) => (
              <ProjectPanel key={project.slug} project={project} />
            ))}
          </div>
        </>
      )}
    </Section>
  );
}
