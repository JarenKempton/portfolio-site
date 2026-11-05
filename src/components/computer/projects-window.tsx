import { featuredProjects, moreProjects } from "@/lib/data";
import { ProjectEntry } from "./project-entry";

function SubHeading({ children }: { children: string }) {
  return (
    <h3 className="mb-3 flex items-center gap-3 font-chrome text-2xl">
      {children}
      <span className="h-px flex-1 bg-black" aria-hidden="true" />
    </h3>
  );
}

export function ProjectsWindow() {
  return (
    <div className="space-y-7 p-4 sm:p-5">
      <section>
        <SubHeading>Featured</SubHeading>
        <ul className="grid gap-4 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <li key={project.slug}>
              <ProjectEntry project={project} />
            </li>
          ))}
        </ul>
      </section>
      {moreProjects.length > 0 && (
        <section>
          <SubHeading>More projects</SubHeading>
          <ul className="grid gap-4">
            {moreProjects.map((project) => (
              <li key={project.slug}>
                <ProjectEntry project={project} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
