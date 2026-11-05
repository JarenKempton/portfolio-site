
import { useSyncExternalStore } from "react";

function subscribe(onTick: () => void) {
  const timer = setInterval(onTick, 1000);
  return () => clearInterval(timer);
}

function now() {
  const date = new Date();
  const day = date.toLocaleDateString("en-US", { weekday: "short" });
  const time = date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
  return `${day}|${time}`;
}

export function Clock() {
  const [day, time] = useSyncExternalStore(subscribe, now, () => "|").split("|");
  return (
    <span className="menu-item tabular-nums">
      <span className="hidden sm:inline">{day} </span>
      {time}
    </span>
  );
}
