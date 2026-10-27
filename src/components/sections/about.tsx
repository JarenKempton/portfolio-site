import { Section } from "@/components/term/section";
import { aboutBio, stats } from "@/lib/data";

export function About() {
  return (
    <Section id="about" label="About" cmd="cat about.md">
      <div className="max-w-[72ch] space-y-4 leading-relaxed text-fg-dim">
        <p className="font-bold text-blue"># About</p>
        {aboutBio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <p className="mb-3 mt-10 text-sm text-muted">## by the numbers</p>
      <ul data-nav tabIndex={-1} className="grid border border-line sm:grid-cols-3">
        {stats.map((stat) => (
          <li key={stat.label} className="border-line px-4 py-3 not-last:border-b sm:not-last:border-b-0 sm:not-last:border-r">
            <p className="text-2xl font-bold text-green">{stat.value}</p>
            <p className="mt-1 text-sm leading-snug text-fg-dim">{stat.label}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
