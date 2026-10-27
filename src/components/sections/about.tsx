import { Section } from "@/components/term/section";
import { aboutBio } from "@/lib/data";

export function About() {
  return (
    <Section id="about" label="About" cmd="cat about.md">
      <div className="max-w-[72ch] space-y-4 leading-relaxed text-fg-dim">
        <p className="font-bold text-blue"># About</p>
        {aboutBio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
