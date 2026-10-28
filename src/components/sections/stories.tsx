"use client";

import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectCard } from "@/components/shared/project-card";
import { stories, storyProjects } from "@/lib/data";

export function Stories() {
  return (
    <section id="stories" className="relative overflow-hidden py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <AnimatedSection>
          <SectionHeading
            title="Stories"
            subtitle="Real problems I ran into, and what I built about them."
          />
        </AnimatedSection>

        <div className="space-y-16">
          {stories.map((story) => (
            <AnimatedSection key={story.slug}>
              <h3 className="mb-4 text-xl font-semibold">{story.title}</h3>
              <dl className="mb-6 grid max-w-3xl gap-3 text-muted-foreground sm:grid-cols-[6rem_1fr]">
                <dt className="text-sm font-semibold uppercase tracking-wider text-primary/80">Problem</dt>
                <dd>{story.problem}</dd>
                <dt className="text-sm font-semibold uppercase tracking-wider text-primary/80">What I did</dt>
                <dd>{story.solution}</dd>
                {story.links && (
                  <>
                    <dt className="text-sm font-semibold uppercase tracking-wider text-primary/80">See also</dt>
                    <dd className="flex flex-wrap gap-3">
                      {story.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline underline-offset-4 hover:text-foreground"
                        >
                          {link.name}
                        </a>
                      ))}
                    </dd>
                  </>
                )}
              </dl>
              <div className="grid gap-6 md:grid-cols-2">
                {storyProjects(story).map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
