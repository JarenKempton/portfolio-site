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

export function initTerminal() {
  const nav = document.querySelector<HTMLElement>("[data-tabs]")!;
  const tabs = Array.from(nav.querySelectorAll<HTMLAnchorElement>("a"));
  const file = document.querySelector<HTMLElement>("[data-status-file]")!;
  const section = document.querySelector<HTMLElement>("[data-status-section]")!;
  const scroll = document.querySelector<HTMLElement>("[data-status-scroll]")!;

  function handle(event: KeyboardEvent) {
    if (event.metaKey || event.ctrlKey || event.altKey || isTyping(event.target)) return;
    const key = event.key;
    if (key === "j" || key === "k") {
      move(key === "j" ? 1 : -1);
    } else if (/^[0-9]$/.test(key) && tabs[Number(key)]) {
      jump(tabs[Number(key)].hash.slice(1));
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

  let frame = 0;
  function measure() {
    frame = 0;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const atEnd = window.scrollY >= max - 2;
    const line = window.innerHeight * 0.35;
    const index = tabs.reduce((found, tab, i) => {
      const el = document.getElementById(tab.hash.slice(1));
      return el && el.getBoundingClientRect().top <= line ? i : found;
    }, 0);
    const active = atEnd ? tabs.length - 1 : index;
    const percent = max > 0 ? Math.round((window.scrollY / max) * 100) : 100;
    tabs.forEach((tab, i) => {
      if (i === active) tab.setAttribute("aria-current", "location");
      else tab.removeAttribute("aria-current");
    });
    file.textContent = tabs[active].dataset.file!;
    section.textContent = `${active + 1}/${tabs.length}`;
    scroll.textContent = percent === 0 ? "Top" : percent === 100 ? "Bot" : `${percent}%`;
    const tab = tabs[active];
    const left = tab.offsetLeft - nav.offsetLeft;
    if (left < nav.scrollLeft || left + tab.offsetWidth > nav.scrollLeft + nav.clientWidth) {
      nav.scrollLeft = left - (nav.clientWidth - tab.offsetWidth) / 2;
    }
  }

  function schedule() {
    if (!frame) frame = requestAnimationFrame(measure);
  }

  schedule();
  window.addEventListener("keydown", handle);
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
  window.addEventListener("load", schedule, { once: true });
  document.fonts.ready.then(schedule);
}
