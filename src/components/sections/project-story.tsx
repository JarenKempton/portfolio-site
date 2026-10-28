import { Prompt } from "@/components/term/prompt";
import { storyProjects, type ProjectStory as Story } from "@/lib/data";
import { ProjectPanel } from "./project-panel";

export function ProjectStory({ story }: { story: Story }) {
  return (
    <article id={`story-${story.slug}`} className="mt-12">
      <p className="mb-6 break-all">
        <Prompt cwd="~/projects" cmd={`cat stories/${story.slug}.md`} />
      </p>
      <div className="border-l-2 border-magenta pl-4 sm:pl-6">
        <div data-nav tabIndex={-1} className="-ml-2 border border-transparent px-2 py-1">
          <h3 className="text-lg font-bold leading-snug text-fg sm:text-xl">
            <span aria-hidden className="text-blue"># </span>
            {story.title}
          </h3>
          <div className="mt-3 max-w-[72ch] space-y-3 leading-relaxed text-fg-dim">
            {story.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="mt-10 grid gap-x-6 gap-y-10 md:grid-cols-2">
          {storyProjects(story).map((project) => (
            <ProjectPanel key={project.slug} project={project} level="h4" />
          ))}
        </div>
      </div>
    </article>
  );
}
