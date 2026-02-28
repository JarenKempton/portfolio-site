"use client";

import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectCard } from "@/components/shared/project-card";
import { otherProjects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <AnimatedSection>
          <SectionHeading
            title="Other Projects"
            subtitle="A few more things I've built."
          />
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2">
          {otherProjects.map((project, i) => (
            <AnimatedSection key={project.title} delay={0.1 + i * 0.1}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
