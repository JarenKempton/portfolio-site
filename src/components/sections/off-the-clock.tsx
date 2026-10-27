import { Section } from "@/components/term/section";
import { offTheClock } from "@/lib/data";

export function OffTheClock() {
  return (
    <Section id="off-the-clock" label="Off the clock" cmd="cat -n ~/.offtheclock">
      <p className="mb-4 font-bold text-blue"># Off the clock</p>
      <ol className="max-w-[72ch] space-y-2">
        {offTheClock.map((note, i) => (
          <li
            key={note}
            data-nav
            tabIndex={-1}
            className="grid grid-cols-[3ch_1fr] gap-x-3 border border-transparent px-2 py-1 leading-relaxed -mx-2"
          >
            <span aria-hidden className="text-right text-muted">{i + 1}</span>
            <span className="text-fg-dim">{note}</span>
          </li>
        ))}
      </ol>
    </Section>
  );
}
