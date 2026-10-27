import { Section } from "@/components/term/section";
import { experiences } from "@/lib/data";
import { ExperienceEntry } from "./experience-entry";

export function Experience() {
  return (
    <Section id="experience" label="Experience" cmd="git log --graph career">
      <ol className="relative space-y-10 before:absolute before:bottom-2 before:left-[0.3em] before:top-6 before:w-px before:bg-line">
        {experiences.map((entry) => (
          <ExperienceEntry key={`${entry.company}-${entry.roles[0].period}`} entry={entry} />
        ))}
      </ol>
    </Section>
  );
}
