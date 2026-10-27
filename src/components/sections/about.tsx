"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { aboutBio, offTheClock, principles } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <AnimatedSection>
          <SectionHeading
            title="About Me"
            subtitle="A bit about who I am and what I do."
          />
        </AnimatedSection>

        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <AnimatedSection delay={0.1}>
            <div className="group relative mx-auto aspect-square w-full max-w-[280px] md:mx-0">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-purple-500/30 to-blue-500/30 opacity-75 blur-sm transition-opacity group-hover:opacity-100" />
              <Image
                src="/headshot.jpg"
                alt="Jaren Kempton"
                width={280}
                height={280}
                className="relative rounded-2xl object-cover ring-1 ring-border/50"
                priority
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              {aboutBio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {principles.map((principle) => (
                <div
                  key={principle.title}
                  className="card-glow rounded-lg border border-border/50 bg-card/50 p-4 backdrop-blur-sm"
                >
                  <div className="text-sm font-semibold text-foreground">
                    {principle.title}
                  </div>
                  <div className="mt-1 text-xs leading-snug text-muted-foreground">
                    {principle.body}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="mb-3 mt-10 text-sm font-semibold uppercase tracking-wider text-primary/80">
              Off the clock
            </h3>
            <ul className="list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-muted-foreground">
              {offTheClock.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
