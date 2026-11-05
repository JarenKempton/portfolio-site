import type { IconName } from "./pixel-icon";

export type WindowId = "hero" | "about" | "projects" | "experience" | "skills" | "contact";

export interface WindowSpec {
  id: WindowId;
  title: string;
  label: string;
  icon: IconName;
  width: number;
}

export interface Placement {
  x: number;
  y: number;
}

export const MOBILE_MAX = 768;
export const MENUBAR_HEIGHT = 28;
const ICON_COLUMN = 128;

export const windowSpecs: WindowSpec[] = [
  { id: "hero", title: "Read Me", label: "Read Me", icon: "computer", width: 480 },
  { id: "about", title: "About.txt", label: "About.txt", icon: "document", width: 540 },
  { id: "projects", title: "Projects", label: "Projects", icon: "folder", width: 760 },
  { id: "experience", title: "Experience", label: "Experience", icon: "briefcase", width: 660 },
  { id: "skills", title: "Skills", label: "Skills", icon: "sliders", width: 520 },
  { id: "contact", title: "Contact", label: "Contact", icon: "envelope", width: 420 },
];

export const defaultOpen: WindowId[] = ["hero", "about", "projects"];

export const initialOrder: WindowId[] = ["contact", "skills", "experience", "about", "projects", "hero"];

export function isWindowId(value: string): value is WindowId {
  return windowSpecs.some((spec) => spec.id === value);
}

export function windowWidth(spec: WindowSpec, viewportWidth: number) {
  return Math.min(spec.width, viewportWidth - ICON_COLUMN - 24);
}

const anchors: Record<WindowId, (area: number, height: number) => Placement> = {
  hero: () => ({ x: 24, y: 48 }),
  about: (_area, height) => ({ x: 56, y: Math.min(460, height - 260) }),
  projects: (area) => ({ x: area - 760, y: 64 }),
  experience: (area) => ({ x: area / 2 - 300, y: 76 }),
  skills: (area) => ({ x: area / 2 - 180, y: 120 }),
  contact: (area) => ({ x: area / 2 - 60, y: 164 }),
};

export function defaultPlacement(id: WindowId, width: number, height: number): Placement {
  return anchors[id](width - ICON_COLUMN, height);
}

export function clampPlacement(
  placement: Placement,
  windowW: number,
  viewportWidth: number,
  viewportHeight: number,
): Placement {
  const grip = 96;
  return {
    x: Math.round(Math.min(Math.max(placement.x, grip - windowW), viewportWidth - grip)),
    y: Math.round(Math.min(Math.max(placement.y, MENUBAR_HEIGHT + 4), viewportHeight - 32)),
  };
}
