import { Badge } from "@/components/ui/badge";
import { TechIcon } from "@/components/shared/tech-icon";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
  className?: string;
}

export function TechBadge({ name, className }: TechBadgeProps) {
  return (
    <Badge
      variant="secondary"
      className={cn(
        "gap-2 px-3 py-1.5 text-sm font-medium",
        className
      )}
    >
      <TechIcon name={name} size={18} />
      {name}
    </Badge>
  );
}
