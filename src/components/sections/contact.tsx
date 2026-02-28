"use client";

import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, FileText } from "lucide-react";
import { personalInfo } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <AnimatedSection>
          <SectionHeading
            title="Get in Touch"
            subtitle="I'm always open to new opportunities and interesting projects."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Button asChild size="lg" className="mb-8 rounded-full px-6">
            <a href={`mailto:${personalInfo.email}`}>
              <Mail className="mr-2 size-4" />
              {personalInfo.email}
            </a>
          </Button>

          <div className="flex items-center justify-center gap-4">
            {[
              { href: personalInfo.github, icon: Github, label: "GitHub" },
              { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: personalInfo.resumeUrl, icon: FileText, label: "Resume" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-border/50 bg-card/30 px-5 py-2.5 text-sm font-medium text-muted-foreground backdrop-blur-sm transition-all hover:border-primary/50 hover:text-foreground hover:shadow-[0_0_16px_oklch(0.70_0.15_270_/_15%)]"
              >
                <link.icon className="size-5" />
                {link.label}
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
