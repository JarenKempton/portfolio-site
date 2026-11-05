import { personalInfo } from "@/lib/data";
import { PixelIcon } from "./pixel-icon";
import { WindowLink } from "./window-link";
import { windowSpecs } from "./windows";

const iconClass =
  "desk-icon flex w-[92px] flex-col items-center gap-1 text-center font-chrome text-[19px] leading-tight";

export function DesktopIcons() {
  return (
    <nav
      aria-label="Desktop"
      className="grid grid-cols-4 justify-items-center gap-x-2 gap-y-4 px-3 py-5 md:absolute md:right-5 md:top-12 md:z-0 md:flex md:flex-col md:gap-5 md:p-0"
    >
      {windowSpecs.map((spec) => (
        <WindowLink key={spec.id} to={spec.id} id={`icon-${spec.id}`} className={iconClass}>
          <PixelIcon name={spec.icon} size={40} />
          <span className="desk-label">{spec.label}</span>
        </WindowLink>
      ))}
      <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" className={iconClass}>
        <PixelIcon name="pdf" size={40} />
        <span className="desk-label">Resume.pdf</span>
      </a>
    </nav>
  );
}
