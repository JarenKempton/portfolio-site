import { navLinks, personalInfo } from "@/lib/data";
import { Clock } from "./clock";
import { WindowLink } from "./window-link";
import { isWindowId } from "./windows";

export function Menubar() {
  return (
    <header className="menubar sticky top-0 z-[1000] flex h-7 items-stretch font-chrome text-[21px] md:rounded-t-[10px]">
      <WindowLink to="hero" className="menu-item flex items-center md:rounded-tl-[10px]">
        <span className="font-pixel text-[15px] font-bold" aria-hidden="true">
          JK
        </span>
        <span className="sr-only">Read Me</span>
      </WindowLink>
      <span className="menu-item truncate font-bold">{personalInfo.name}</span>
      <nav aria-label="Sections" className="hidden md:flex">
        {navLinks.map((link) => {
          const target = link.href.slice(1);
          return isWindowId(target) ? (
            <WindowLink key={link.href} to={target} className="menu-item block">
              {link.label}
            </WindowLink>
          ) : null;
        })}
      </nav>
      <div className="ml-auto flex">
        <a href="/" className="menu-item block">
          ← Terminal
        </a>
        <a href={personalInfo.resumeUrl} className="menu-item hidden lg:block" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
        <Clock />
      </div>
    </header>
  );
}
