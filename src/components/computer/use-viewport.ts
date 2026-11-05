import { useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  window.addEventListener("resize", onChange);
  return () => window.removeEventListener("resize", onChange);
}

function snapshot() {
  return `${window.innerWidth}x${window.innerHeight}`;
}

function serverSnapshot() {
  return "1440x900";
}

export function useViewport() {
  const [width, height] = useSyncExternalStore(subscribe, snapshot, serverSnapshot)
    .split("x")
    .map(Number);
  return { width, height };
}
