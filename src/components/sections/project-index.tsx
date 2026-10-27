import { projects } from "@/lib/data";
import { ProjectStatus } from "./project-status";

export function ProjectIndex() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <caption className="sr-only">All projects</caption>
        <thead className="text-muted">
          <tr>
            <th className="pr-4 font-normal">status</th>
            <th className="pr-4 font-normal">year</th>
            <th className="pr-4 font-normal">name</th>
            <th className="hidden font-normal md:table-cell">summary</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.slug} className="align-top">
              <td className="whitespace-nowrap pr-4">
                <ProjectStatus status={project.status} />
              </td>
              <td className="pr-4 text-muted">{project.year}</td>
              <td className="whitespace-nowrap pr-4">
                <a href={`#project-${project.slug}`} className="font-bold text-blue hover:underline">
                  {project.slug}/
                </a>
              </td>
              <td className="hidden text-fg-dim md:table-cell">{project.tagline}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-2 text-sm text-muted">total {projects.length}</p>
    </div>
  );
}
