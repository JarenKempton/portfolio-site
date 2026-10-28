"use client";

import { useEffect, useState } from "react";
import { termSections } from "@/lib/sections";

export function useScrollState() {
  const [active, setActive] = useState(0);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const atEnd = window.scrollY >= max - 2;
      const line = window.innerHeight * 0.35;
      const index = termSections.reduce((found, section, i) => {
        const el = document.getElementById(section.id);
        return el && el.getBoundingClientRect().top <= line ? i : found;
      }, 0);
      setActive(atEnd ? termSections.length - 1 : index);
      setPercent(max > 0 ? Math.round((window.scrollY / max) * 100) : 100);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return { active, percent };
}
