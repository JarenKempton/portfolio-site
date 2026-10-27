"use client";

import { Statusline } from "./statusline";
import { Tabline } from "./tabline";
import { useKeys } from "./use-keys";
import { useScrollState } from "./use-scroll-state";

export function Shell({ children }: { children: React.ReactNode }) {
  const { active, percent } = useScrollState();
  useKeys();
  return (
    <>
      <Tabline active={active} />
      <main className="mx-auto max-w-[110ch] px-4 pb-16 pt-12 sm:px-6">{children}</main>
      <Statusline active={active} percent={percent} />
      <div aria-hidden className="scanlines" />
    </>
  );
}
