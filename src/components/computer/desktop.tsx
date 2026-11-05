
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { personalInfo, projects } from "@/lib/data";
import { AboutWindow } from "./about-window";
import { ContactWindow } from "./contact-window";
import { ExperienceWindow } from "./experience-window";
import { ProjectsWindow } from "./projects-window";
import { SkillsWindow } from "./skills-window";
import { WelcomeWindow } from "./welcome-window";
import { DesktopIcons } from "./desktop-icons";
import { Menubar } from "./menubar";
import { useViewport } from "./use-viewport";
import { WindowFrame } from "./window-frame";
import { OpenWindowContext } from "./window-link";
import {
  MOBILE_MAX,
  clampPlacement,
  defaultOpen,
  defaultPlacement,
  initialOrder,
  isWindowId,
  windowSpecs,
  windowWidth,
  type Placement,
  type WindowId,
} from "./windows";

type Flags = Partial<Record<WindowId, boolean>>;

const contents: Record<WindowId, ReactNode> = {
  hero: <WelcomeWindow />,
  about: <AboutWindow />,
  projects: <ProjectsWindow />,
  experience: <ExperienceWindow />,
  skills: <SkillsWindow />,
  contact: <ContactWindow />,
};

const statusLines: Partial<Record<WindowId, string>> = {
  projects: `${projects.length} items`,
};

export function Desktop() {
  const viewport = useViewport();
  const mobile = viewport.width < MOBILE_MAX;
  const [openFlags, setOpenFlags] = useState<Flags>({});
  const [shadeFlags, setShadeFlags] = useState<Flags>({});
  const [moved, setMoved] = useState<Partial<Record<WindowId, Placement>>>({});
  const [order, setOrder] = useState<WindowId[]>(initialOrder);
  const [focusRequest, setFocusRequest] = useState<{ id: WindowId; count: number } | null>(null);
  const frames = useRef<Partial<Record<WindowId, HTMLElement | null>>>({});

  const isOpen = (id: WindowId) => openFlags[id] ?? (mobile || defaultOpen.includes(id));
  const activeId = [...order].reverse().find(isOpen);

  const bringToFront = useCallback((id: WindowId) => {
    setOrder((current) =>
      current[current.length - 1] === id ? current : [...current.filter((item) => item !== id), id],
    );
  }, []);

  const openWindow = useCallback(
    (id: WindowId) => {
      setOpenFlags((flags) => ({ ...flags, [id]: true }));
      setShadeFlags((flags) => ({ ...flags, [id]: false }));
      bringToFront(id);
      setFocusRequest((request) => ({ id, count: (request?.count ?? 0) + 1 }));
    },
    [bringToFront],
  );

  useEffect(() => {
    if (!focusRequest) return;
    const frame = frames.current[focusRequest.id];
    const stacked = window.innerWidth < MOBILE_MAX;
    frame?.focus({ preventScroll: !stacked });
    if (!stacked || !frame) return;
    frame.scrollIntoView({ block: "start" });
    document.fonts.ready.then(() => frame.scrollIntoView({ block: "start" }));
  }, [focusRequest]);

  useEffect(() => {
    const fromHash = () => {
      const id = window.location.hash.slice(1);
      if (isWindowId(id)) openWindow(id);
    };
    const frame = requestAnimationFrame(fromHash);
    window.addEventListener("hashchange", fromHash);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", fromHash);
    };
  }, [openWindow]);

  const closeWindow = (id: WindowId) => {
    setOpenFlags((flags) => ({ ...flags, [id]: false }));
    document.getElementById(`icon-${id}`)?.focus();
  };

  return (
    <OpenWindowContext.Provider value={openWindow}>
      <div className="desktop-bg relative min-h-dvh md:h-dvh md:overflow-hidden md:rounded-t-[10px]">
        <a
          href="#windows"
          className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-9 focus:z-[1100] focus:bg-white focus:px-3 focus:py-1 focus:font-chrome focus:text-xl"
        >
          Skip to windows
        </a>
        <Menubar />
        <DesktopIcons />
        <main id="windows" tabIndex={-1} className="flex flex-col gap-5 px-3 pb-6 outline-none md:pointer-events-none md:absolute md:inset-0 md:p-0 md:*:pointer-events-auto">
          {windowSpecs.map((spec) => {
            const width = windowWidth(spec, viewport.width);
            const placement = clampPlacement(
              moved[spec.id] ?? defaultPlacement(spec.id, viewport.width, viewport.height),
              width,
              viewport.width,
              viewport.height,
            );
            return (
              <WindowFrame
                key={spec.id}
                spec={spec}
                open={isOpen(spec.id)}
                active={mobile || activeId === spec.id}
                shaded={shadeFlags[spec.id] ?? false}
                draggable={!mobile}
                placement={placement}
                width={width}
                zIndex={10 + order.indexOf(spec.id)}
                status={statusLines[spec.id]}
                register={(element) => {
                  frames.current[spec.id] = element;
                }}
                onFront={() => bringToFront(spec.id)}
                onMove={(next) =>
                  setMoved((current) => ({
                    ...current,
                    [spec.id]: clampPlacement(next, width, viewport.width, viewport.height),
                  }))
                }
                onClose={() => closeWindow(spec.id)}
                onShade={() =>
                  setShadeFlags((flags) => ({ ...flags, [spec.id]: !(flags[spec.id] ?? false) }))
                }
              >
                {contents[spec.id]}
              </WindowFrame>
            );
          })}
        </main>
        <footer className="px-3 pb-4 text-center font-chrome text-lg text-white md:absolute md:bottom-2 md:right-4 md:w-[104px] md:p-0 md:text-right md:leading-tight">
          &copy; {new Date().getFullYear()} {personalInfo.name}
        </footer>
      </div>
    </OpenWindowContext.Provider>
  );
}
