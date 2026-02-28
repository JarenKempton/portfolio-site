import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TechBadge } from "@/components/shared/tech-badge";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="card-glow group flex h-full flex-col border-border/50 bg-card/50 backdrop-blur-sm transition-colors hover:border-primary/30">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <CardTitle className="text-xl">{project.title}</CardTitle>
            <CardDescription className="mt-1.5 text-sm leading-relaxed">
              {project.description}
            </CardDescription>
          </div>
          <div className="flex shrink-0 gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-9 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground hover:shadow-[0_0_12px_oklch(0.70_0.15_270_/_15%)]"
                aria-label={`${project.title} on GitHub`}
              >
                <Github className="size-4" />
              </a>
            )}
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-9 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground hover:shadow-[0_0_12px_oklch(0.70_0.15_270_/_15%)]"
                aria-label={`${project.title} live site`}
              >
                <ExternalLink className="size-4" />
              </a>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="mt-auto">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
