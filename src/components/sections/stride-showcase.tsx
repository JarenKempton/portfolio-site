"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/shared/animated-section";
import { TechBadge } from "@/components/shared/tech-badge";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { strideInfo } from "@/lib/data";

export function StrideShowcase() {
  return (
    <section id="stride" className="dot-grid relative overflow-hidden py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <AnimatedSection>
          <div className="mb-4 flex justify-center">
            <Badge className="border-purple-500/30 bg-purple-500/10 text-purple-300 hover:bg-purple-500/20">
              Featured Project
            </Badge>
          </div>
          <h2 className="mb-2 text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-gradient">{strideInfo.name}</span>
          </h2>
          <p className="mx-auto mb-4 max-w-lg text-center text-lg text-muted-foreground">
            {strideInfo.tagline}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            {strideInfo.description}
          </p>
        </AnimatedSection>

        {/* App screenshot in browser frame */}
        <AnimatedSection delay={0.15}>
          <a
            href={strideInfo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/frame mx-auto mb-16 block max-w-4xl cursor-pointer overflow-hidden rounded-xl border border-border/50 bg-card shadow-2xl shadow-purple-500/5 transition-all hover:border-purple-500/30 hover:shadow-purple-500/10"
          >
            {/* Browser chrome */}
            <div className="flex items-center gap-1.5 border-b border-border/50 bg-card px-3 py-2 sm:gap-2 sm:px-4 sm:py-3">
              <div className="hidden gap-1.5 sm:flex">
                <div className="size-2.5 rounded-full bg-red-500/70" />
                <div className="size-2.5 rounded-full bg-yellow-500/70" />
                <div className="size-2.5 rounded-full bg-green-500/70" />
              </div>
              <div className="flex-1 rounded-md bg-muted/50 px-2 py-0.5 text-center text-[10px] text-muted-foreground transition-colors group-hover/frame:text-purple-300 sm:ml-2 sm:px-3 sm:py-1 sm:text-xs">
                stridetime.app
              </div>
            </div>
            {/* Screenshot */}
            <Image
              src="/stride-preview.png"
              alt="Stride app preview"
              width={1600}
              height={940}
              quality={100}
              className="block w-full transition-transform duration-300 group-hover/frame:scale-[1.02]"
              priority
            />
          </a>
        </AnimatedSection>

        {/* Tech stack */}
        <AnimatedSection delay={0.2}>
          <p className="mb-4 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Built with
          </p>
          <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
            {strideInfo.tech.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>

          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="rounded-full px-6">
              <a
                href={strideInfo.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 size-4" />
                Live Site
              </a>
            </Button>
            <Button variant="outline" asChild size="lg" className="rounded-full px-6">
              <a
                href={strideInfo.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 size-4" />
                GitHub
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
