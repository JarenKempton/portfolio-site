const CLICKS = 5;
const WINDOW_MS = 2000;

export function initComputerEgg() {
  const photo = document.querySelector<HTMLElement>("[data-computer-egg]");
  if (!photo) return;
  let clicks: number[] = [];
  photo.addEventListener("click", () => {
    const now = performance.now();
    clicks = [...clicks.filter((at) => now - at < WINDOW_MS), now];
    if (clicks.length >= CLICKS) window.location.assign("/computer");
  });
}
