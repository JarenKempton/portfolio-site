"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { aboutBio, stats } from "@/lib/data";
import { GraduationCap } from "lucide-react";

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
            <p className="text-lg leading-relaxed text-muted-foreground">
              {aboutBio}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="card-glow flex-1 rounded-lg border border-border/50 bg-card/50 p-4 text-center backdrop-blur-sm"
                  style={{ minWidth: "140px" }}
                >
                  <div className="text-gradient text-2xl font-bold">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
              <div
                className="card-glow flex flex-1 items-center gap-3 rounded-lg border border-border/50 bg-card/50 p-4 backdrop-blur-sm"
                style={{ minWidth: "140px" }}
              >
                <GraduationCap className="size-6 shrink-0 text-purple-400" />
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    Computer Science
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Pursuing B.S. Degree
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
