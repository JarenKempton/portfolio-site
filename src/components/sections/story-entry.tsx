import { ExtLink } from "@/components/term/ext-link";
import { storyProjects, type Story } from "@/lib/data";
import { ProjectPanel } from "./project-panel";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="sm:grid sm:grid-cols-[12ch_1fr] sm:gap-x-2">
      <dt className="text-sm text-yellow sm:pt-0.5">{label}</dt>
      <dd className="max-w-[68ch] leading-relaxed text-fg-dim">{children}</dd>
    </div>
  );
}

export function StoryEntry({ story }: { story: Story }) {
  const projects = storyProjects(story);
  return (
    <article id={`story-${story.slug}`} aria-labelledby={`story-${story.slug}-title`}>
      <p aria-hidden className="mb-4 truncate text-sm text-muted">
        ── {story.slug}.md ──
      </p>
      <div className="border-l-2 border-magenta pl-4 sm:pl-6">
        <div data-nav tabIndex={-1} className="-ml-2 border border-transparent px-2 py-1">
          <h3 id={`story-${story.slug}-title`} className="text-lg font-bold leading-snug text-fg sm:text-xl">
            <span aria-hidden className="text-blue"># </span>
            {story.title}
          </h3>
          <dl className="mt-4 space-y-3">
            <Field label="Problem">{story.problem}</Field>
            <Field label="What I did">{story.solution}</Field>
            {story.links && story.links.length > 0 && (
              <Field label="See also">
                <span className="flex flex-wrap gap-x-5">
                  {story.links.map((link) => (
                    <ExtLink key={link.url} href={link.url}>
                      {link.name} ↗
                    </ExtLink>
                  ))}
                </span>
              </Field>
            )}
          </dl>
        </div>
        {projects.length > 0 && (
          <div className="mt-10 grid gap-x-6 gap-y-10 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectPanel key={project.slug} project={project} level="h4" />
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
