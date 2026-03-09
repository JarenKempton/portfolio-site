import { Separator } from "@/components/ui/separator";
import { personalInfo } from "@/lib/data";

export function Footer() {
  return (
    <footer className="pb-8 pt-4">
      <div className="container mx-auto max-w-6xl px-4">
        <Separator className="mb-8" />
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}</p>
        </div>
      </div>
    </footer>
  );
}
