"use client";

import { useEffect, useRef } from "react";
import { termSections } from "@/lib/sections";

export function Tabline({ active }: { active: number }) {
  const nav = useRef<HTMLElement>(null);

  useEffect(() => {
    const bar = nav.current;
    const tab = bar?.querySelector<HTMLElement>('[aria-current="location"]');
    if (!bar || !tab) return;
    const left = tab.offsetLeft - bar.offsetLeft;
    if (left < bar.scrollLeft || left + tab.offsetWidth > bar.scrollLeft + bar.clientWidth) {
      bar.scrollLeft = left - (bar.clientWidth - tab.offsetWidth) / 2;
    }
  }, [active]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-bg-dark/95 backdrop-blur">
      <nav ref={nav} aria-label="Sections" className="no-scrollbar mx-auto flex max-w-[110ch] items-stretch overflow-x-auto text-sm leading-9">
        <span className="hidden shrink-0 bg-green px-3 font-bold text-bg-dark sm:block">jk</span>
        {termSections.map((section, i) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            aria-current={i === active ? "location" : undefined}
            className={`shrink-0 px-3 transition-colors ${
              i === active ? "bg-blue font-bold text-bg-dark" : "text-fg-dim hover:bg-bg-hl hover:text-fg"
            }`}
          >
            <span className={i === active ? "" : "text-yellow"}>{i}</span>:{section.label}
            {i === active && "*"}
          </a>
        ))}
        <span className="ml-auto hidden shrink-0 px-3 text-muted md:block">jarenkempton.dev</span>
      </nav>
    </header>
  );
}
