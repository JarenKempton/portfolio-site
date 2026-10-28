import { ExtLink } from "@/components/term/ext-link";
import { projects } from "@/lib/data";

interface SuccessorLinkProps {
  slug: string;
  compact?: boolean;
  className?: string;
}

export function SuccessorLink({ slug, compact, className = "" }: SuccessorLinkProps) {
  const successor = projects.find((project) => project.slug === slug);
  if (!successor) return null;
  const href = `#project-${successor.slug}`;
  if (compact) {
    return (
      <span className={`whitespace-nowrap text-muted ${className}`}>
        {"-> "}
        <a href={href} className="text-cyan hover:underline">
          {successor.slug}/
        </a>
      </span>
    );
  }
  return (
    <p className="text-sm text-fg-dim">
      <span aria-hidden className="text-green">↳ </span>
      lives on in <ExtLink href={href}>{successor.title}</ExtLink>
    </p>
  );
}
