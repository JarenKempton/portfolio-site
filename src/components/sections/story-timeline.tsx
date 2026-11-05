import type { TimelinePoint } from "@/lib/stories";

const nodes: Record<TimelinePoint["kind"], { glyph: string; color: string }> = {
  start: { glyph: "○", color: "text-blue" },
  ship: { glyph: "●", color: "text-green" },
  end: { glyph: "●", color: "text-muted" },
  now: { glyph: "◉", color: "text-teal" },
};

export function StoryTimeline({ timeline }: { timeline: TimelinePoint[] }) {
  return (
    <ol>
      {timeline.map((point, index) => {
        const node = nodes[point.kind];
        const isLast = index === timeline.length - 1;
        return (
          <li key={`${point.date}-${point.event}`} className="relative grid grid-cols-[2ch_10ch_1fr] gap-x-2 pb-1 last:pb-0">
            {!isLast && <span aria-hidden className="absolute -bottom-[0.45em] left-[1ch] top-[1.25em] border-l border-line" />}
            <span aria-hidden className={`text-center ${node.color}`}>{node.glyph}</span>
            <span className="text-muted">{point.date}</span>
            <span className={point.kind === "now" ? "text-teal" : "text-fg-dim"}>{point.event}</span>
          </li>
        );
      })}
    </ol>
  );
}
