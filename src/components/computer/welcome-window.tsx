import { personalInfo } from "@/lib/data";
import { WindowLink } from "./window-link";

export function WelcomeWindow() {
  return (
    <div className="p-5 sm:p-6">
      <p className="inline-block bg-black px-2 font-chrome text-xl leading-7 text-white">
        {personalInfo.focus}
      </p>
      <h1 className="mt-4 font-pixel text-[28px] font-bold leading-[1.1] sm:text-[34px]">
        {personalInfo.name}
      </h1>
      <p className="mt-1 font-chrome text-2xl text-neutral-700">{personalInfo.title}</p>
      <hr className="etched my-4" />
      <p className="text-lg leading-relaxed">{personalInfo.tagline}</p>
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <WindowLink to="projects" className="mac-btn mac-btn-default">
          Open Projects
        </WindowLink>
        <WindowLink to="contact" className="mac-btn">
          Get in Touch
        </WindowLink>
      </div>
      <p className="mt-5 flex gap-5 font-chrome text-xl">
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-link">
          GitHub ↗
        </a>
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-link">
          LinkedIn ↗
        </a>
      </p>
    </div>
  );
}
