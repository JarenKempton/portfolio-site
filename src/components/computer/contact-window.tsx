import { personalInfo } from "@/lib/data";
import { PixelIcon } from "./pixel-icon";

const links = [
  { label: "GitHub", href: personalInfo.github },
  { label: "LinkedIn", href: personalInfo.linkedin },
  { label: "Resume (PDF)", href: personalInfo.resumeUrl },
];

export function ContactWindow() {
  return (
    <div className="flex gap-4 p-5 sm:p-6">
      <div className="shrink-0">
        <PixelIcon name="envelope" size={48} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-chrome text-xl text-neutral-600">{personalInfo.location}</p>
        <a
          href={`mailto:${personalInfo.email}`}
          className="mac-btn mac-btn-default mt-3 max-w-full break-all"
        >
          {personalInfo.email}
        </a>
        <ul className="mt-5 flex flex-wrap gap-3">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="mac-btn">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
