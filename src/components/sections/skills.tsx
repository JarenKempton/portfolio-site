"use client";

import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { TechBadge } from "@/components/shared/tech-badge";
import { skillCategories } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="dot-grid relative overflow-hidden py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <AnimatedSection>
          <SectionHeading
            title="Skills"
            subtitle="Technologies and practices I work with."
          />
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, i) => (
            <AnimatedSection key={category.name} delay={0.1 + i * 0.1}>
              <div className="card-glow h-full rounded-lg border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary/80">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <TechBadge key={skill} name={skill} className="text-sm" />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
