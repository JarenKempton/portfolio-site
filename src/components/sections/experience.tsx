"use client";

import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { TechBadge } from "@/components/shared/tech-badge";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <AnimatedSection>
          <SectionHeading
            title="Experience"
            subtitle="Where I've worked and what I've done."
          />
        </AnimatedSection>

        {/* Mobile: spaced stacked list. Desktop: centered timeline. */}
        <div className="relative">
          {/* Timeline line — tablet+ only */}
          <div className="absolute left-4 top-0 hidden h-full w-px sm:block md:left-1/2 md:-translate-x-px">
            <div className="h-full w-full bg-gradient-to-b from-purple-500/50 via-border to-blue-500/50" />
          </div>

          <div className="flex flex-col gap-6 sm:gap-0">
            {experiences.map((exp, i) => (
              <AnimatedSection key={`${exp.company}-${exp.roles[0].period}`} delay={0.1 + i * 0.08}>
                <div
                  className={`relative sm:mb-8 sm:last:mb-0 sm:pl-12 md:w-1/2 md:pl-0 ${
                    i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"
                  }`}
                >
                  {/* Timeline dot — tablet */}
                  <div className="absolute left-2.5 top-1.5 hidden size-3 rounded-full border-2 border-purple-400 bg-background shadow-[0_0_8px_oklch(0.70_0.15_270_/_30%)] sm:block md:hidden" />

                  {/* Timeline dot — desktop, alternating sides */}
                  {i % 2 === 0 ? (
                    <div className="absolute right-0 top-1.5 hidden size-3 rounded-full border-2 border-purple-400 bg-background shadow-[0_0_8px_oklch(0.70_0.15_270_/_30%)] md:block md:translate-x-1/2" />
                  ) : (
                    <div className="absolute left-0 top-1.5 hidden size-3 rounded-full border-2 border-purple-400 bg-background shadow-[0_0_8px_oklch(0.70_0.15_270_/_30%)] md:block md:-translate-x-1/2" />
                  )}

                  <div className="card-glow rounded-lg border border-border/50 bg-card/50 p-5 backdrop-blur-sm">
                    <div className="mb-1 flex flex-wrap items-center gap-2">
                      {exp.url ? (
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base font-semibold underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary/60 sm:text-lg"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        <h3 className="text-base font-semibold sm:text-lg">{exp.company}</h3>
                      )}
                      {exp.note && (
                        <span className="text-xs text-muted-foreground">{exp.note}</span>
                      )}
                      {exp.current && (
                        <span className="rounded-full border border-green-500/30 bg-green-500/10 px-2 py-0.5 text-[10px] font-medium text-green-400 sm:text-xs">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="mb-3 space-y-0.5">
                      {exp.roles.map((role) => (
                        <div
                          key={role.title}
                          className="flex flex-wrap items-baseline justify-between gap-x-3 text-sm"
                        >
                          <span className="font-medium text-primary/80">{role.title}</span>
                          <span className="text-xs text-muted-foreground">{role.period}</span>
                        </div>
                      ))}
                    </div>
                    <ul className="mb-3 list-disc space-y-1.5 pl-4 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {exp.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                    {exp.tech.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tech.map((tech) => (
                          <TechBadge key={tech} name={tech} className="px-2 py-1 text-xs" />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
