import { aboutBio, personalInfo } from "@/lib/data";

export function AboutWindow() {
  return (
    <div className="p-5 sm:p-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <img
          src="/headshot-1bit.png"
          alt={personalInfo.name}
          width={160}
          height={160}
          className="pixelated shrink-0 self-center border border-black shadow-[3px_3px_0_#000] sm:self-start"
        />
        <div className="space-y-4 text-[17px] leading-relaxed">
          {aboutBio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
