import { Section } from "@/components/term/section";
import { principles } from "@/lib/data";

export function Principles() {
  return (
    <Section id="principles" label="How I work" cmd="cat principles.md">
      <p className="mb-6 font-bold text-blue"># How I work</p>
      <ol className="space-y-4">
        {principles.map((principle, i) => (
          <li
            key={principle.title}
            data-nav
            tabIndex={-1}
            className="grid grid-cols-[3.5ch_1fr] gap-x-2 border border-transparent border-l-line py-2 pl-3 pr-2 sm:grid-cols-[4ch_1fr] sm:pl-4"
          >
            <span aria-hidden className="pt-0.5 text-yellow">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3 className="text-lg font-bold leading-snug text-fg sm:text-xl">{principle.title}</h3>
              <p className="mt-1 max-w-[64ch] leading-relaxed text-fg-dim">{principle.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
