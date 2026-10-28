"use client";

import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectCard } from "@/components/shared/project-card";
import { featuredProjects, moreProjects, stories, storyProjects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <AnimatedSection>
          <SectionHeading
            title="Projects"
            subtitle="Tools I built because I wanted them to exist."
          />
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <AnimatedSection key={project.slug} delay={0.1 + i * 0.1}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>

        {stories.map((story) => (
          <div key={story.slug} className="mt-16">
            <AnimatedSection>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary/80">
                {story.title}
              </h3>
              <div className="mb-6 max-w-3xl space-y-3 text-muted-foreground">
                {story.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </AnimatedSection>
            <div className="grid gap-6 md:grid-cols-2">
              {storyProjects(story).map((project, i) => (
                <AnimatedSection key={project.slug} delay={0.1 + i * 0.1}>
                  <ProjectCard project={project} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        ))}

        {moreProjects.length > 0 && (
          <>
            <AnimatedSection>
              <h3 className="mb-6 mt-16 text-sm font-semibold uppercase tracking-wider text-primary/80">
                More projects
              </h3>
            </AnimatedSection>
            <div className="grid gap-6 md:grid-cols-2">
              {moreProjects.map((project, i) => (
                <AnimatedSection key={project.slug} delay={0.1 + i * 0.1}>
                  <ProjectCard project={project} />
                </AnimatedSection>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
