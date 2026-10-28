"use client";

import { useEffect } from "react";
import { termSections } from "@/lib/sections";

const TOP_BAR = 56;

function navItems() {
  return Array.from(document.querySelectorAll<HTMLElement>("[data-nav]"));
}

function behavior(): ScrollBehavior {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
}

function currentIndex(items: HTMLElement[]) {
  const focused = document.activeElement?.closest<HTMLElement>("[data-nav]");
  return focused ? items.indexOf(focused) : -1;
}

function nextIndex(items: HTMLElement[], step: 1 | -1) {
  const current = currentIndex(items);
  if (current !== -1) return Math.min(Math.max(current + step, 0), items.length - 1);
  const tops = items.map((item) => item.getBoundingClientRect().top);
  if (step === 1) {
    const below = tops.findIndex((top) => top >= TOP_BAR);
    return below === -1 ? items.length - 1 : below;
  }
  const above = tops.findLastIndex((top) => top < window.innerHeight - TOP_BAR);
  return Math.max(above, 0);
}

function move(step: 1 | -1) {
  const items = navItems();
  if (!items.length) return;
  const item = items[nextIndex(items, step)];
  item.focus({ preventScroll: true });
  const tall = item.offsetHeight > window.innerHeight - TOP_BAR * 2;
  item.scrollIntoView({ block: tall ? "start" : "nearest", behavior: behavior() });
}

function jump(id: string) {
  document.getElementById(id)?.scrollIntoView({ block: "start", behavior: behavior() });
  history.replaceState(null, "", `#${id}`);
}

function isTyping(target: EventTarget | null) {
  return target instanceof HTMLElement && (target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName));
}

function handle(event: KeyboardEvent) {
  if (event.metaKey || event.ctrlKey || event.altKey || isTyping(event.target)) return;
  const key = event.key;
  if (key === "j" || key === "k") {
    move(key === "j" ? 1 : -1);
  } else if (/^[0-9]$/.test(key) && termSections[Number(key)]) {
    jump(termSections[Number(key)].id);
  } else if (key === "g") {
    window.scrollTo({ top: 0, behavior: behavior() });
  } else if (key === "G") {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: behavior() });
  } else if (key === "Enter" && event.target instanceof HTMLElement && event.target.hasAttribute("data-nav")) {
    event.target.querySelector("a")?.click();
  } else if (key === "Escape" && document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  } else {
    return;
  }
  event.preventDefault();
}

export function useKeys() {
  useEffect(() => {
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, []);
}
