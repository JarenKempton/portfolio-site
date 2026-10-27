interface PanelProps {
  id?: string;
  title: React.ReactNode;
  meta?: React.ReactNode;
  children: React.ReactNode;
}

export function Panel({ id, title, meta, children }: PanelProps) {
  return (
    <article
      id={id}
      data-nav
      tabIndex={-1}
      className="relative flex flex-col border border-line px-4 pb-4 pt-5 transition-colors hover:border-muted sm:px-5"
    >
      <header className="absolute -top-[0.85em] left-3 right-3 flex items-center justify-between gap-2 leading-normal">
        <h3 className="truncate bg-bg px-1 font-bold text-fg">
          <span className="text-muted">┤ </span>
          {title}
          <span className="text-muted"> ├</span>
        </h3>
        {meta && <span className="shrink-0 bg-bg px-1 text-sm">{meta}</span>}
      </header>
      {children}
    </article>
  );
}
