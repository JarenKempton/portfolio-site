import { termSections } from "@/lib/sections";

const hints = [
  ["j/k", "move"],
  [`1-${termSections.length - 1}`, "jump"],
  ["g/G", "top/end"],
  ["⏎", "open"],
];

interface StatuslineProps {
  active: number;
  percent: number;
}

export function Statusline({ active, percent }: StatuslineProps) {
  const section = termSections[active];
  return (
    <footer
      aria-label="Status"
      className="fixed inset-x-0 bottom-0 z-40 flex items-stretch border-t border-line bg-bg-dark text-xs leading-7 sm:text-sm"
    >
      <span className="shrink-0 bg-blue px-3 font-bold text-bg-dark">NORMAL</span>
      <span className="shrink-0 bg-bg-hl px-3 text-fg">{section.file}</span>
      <ul aria-label="Keyboard shortcuts" className="hidden min-w-0 flex-1 items-center gap-4 overflow-hidden px-4 text-muted lg:flex">
        {hints.map(([key, action]) => (
          <li key={key} className="whitespace-nowrap">
            <kbd className="font-mono text-yellow">{key}</kbd> {action}
          </li>
        ))}
      </ul>
      <span className="ml-auto shrink-0 px-3 text-muted">
        {active + 1}/{termSections.length}
      </span>
      <span className="w-[6ch] shrink-0 bg-bg-hl text-center text-fg" aria-label="Scroll position">
        {percent === 0 ? "Top" : percent === 100 ? "Bot" : `${percent}%`}
      </span>
    </footer>
  );
}
