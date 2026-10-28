import { ExtLink } from "@/components/term/ext-link";
import { TechList } from "@/components/term/tech-list";
import type { Experience } from "@/lib/data";

export function ExperienceEntry({ entry }: { entry: Experience }) {
  return (
    <li className="relative pl-6 sm:pl-8">
      <span aria-hidden className={`absolute left-0 top-0 leading-[inherit] ${entry.current ? "text-green" : "text-blue"}`}>
        ●
      </span>
      <article data-nav tabIndex={-1} className="-ml-2 border border-transparent px-2 pb-2">
        <h3 className="flex flex-wrap items-baseline gap-x-3 font-bold text-fg">
          {entry.url ? <ExtLink href={entry.url}>{entry.company}</ExtLink> : entry.company}
          {entry.current && (
            <span className="text-sm font-normal">
              <span className="text-muted">(</span>
              <span className="text-cyan">HEAD -&gt; current</span>
              <span className="text-muted">)</span>
            </span>
          )}
          {entry.note && <span className="text-sm font-normal text-orange">{entry.note}</span>}
        </h3>
        <ul className="mt-1 max-w-[80ch]">
          {entry.roles.map((role) => (
            <li key={role.title} className="flex flex-wrap justify-between gap-x-4 text-fg-dim">
              <span>{role.title}</span>
              <span className="text-sm text-yellow">{role.period}</span>
            </li>
          ))}
        </ul>
        <ul className="mt-3 max-w-[80ch] space-y-2 leading-relaxed text-fg-dim">
          {entry.highlights.map((highlight) => (
            <li key={highlight} className="grid grid-cols-[2ch_1fr]">
              <span aria-hidden className="text-green">+</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
        <div className="mt-3">
          <TechList tech={entry.tech} />
        </div>
      </article>
    </li>
  );
}
