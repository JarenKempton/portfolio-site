import Image from "next/image";
import { ExtLink } from "@/components/term/ext-link";
import { Prompt } from "@/components/term/prompt";
import { personalInfo } from "@/lib/data";
import { termSections } from "@/lib/sections";

const facts = [
  ["role", personalInfo.title],
  ["focus", personalInfo.focus],
  ["location", personalInfo.location],
];

const palette = ["bg-red", "bg-orange", "bg-yellow", "bg-green", "bg-teal", "bg-cyan", "bg-blue", "bg-magenta"];

export function Hero() {
  return (
    <section id="hero" aria-label="Intro" className="flex min-h-[calc(100svh-5rem)] flex-col justify-center py-10">
      <div className="boot space-y-6">
        <div>
          <Prompt cmd="whoami" />
          <h1 className="mt-2 text-4xl font-bold leading-tight tracking-tight text-fg sm:text-6xl">
            {personalInfo.name}
          </h1>
          <p className="mt-4 max-w-[60ch] text-lg leading-relaxed text-fg-dim sm:text-xl">
            <span className="text-green">❯ </span>
            {personalInfo.tagline}
          </p>
        </div>

        <div>
          <Prompt cmd="neofetch" />
          <div className="mt-3 flex flex-col gap-5 sm:flex-row sm:items-start">
            <Image
              src="/headshot.jpg"
              alt={personalInfo.name}
              width={168}
              height={168}
              priority
              className="size-28 shrink-0 border border-line object-cover sm:size-40"
            />
            <div className="min-w-0 text-fg-dim">
              <p className="font-bold">
                <span className="text-blue">jaren</span>
                <span className="text-muted">@</span>
                <span className="text-blue">kempton</span>
              </p>
              <p aria-hidden className="text-muted">─────────────</p>
              <dl>
              {facts.map(([key, value]) => (
                <div key={key} className="grid grid-cols-[9ch_1fr]">
                  <dt className="text-yellow">{key}</dt>
                  <dd className="text-fg">{value}</dd>
                </div>
              ))}
              <div className="grid grid-cols-[9ch_1fr]">
                <dt className="text-yellow">email</dt>
                <dd className="truncate">
                  <ExtLink href={`mailto:${personalInfo.email}`}>{personalInfo.email}</ExtLink>
                </dd>
              </div>
              </dl>
              <p aria-hidden className="mt-3 flex">
                {palette.map((color) => (
                  <span key={color} className={`${color} h-4 w-6`} />
                ))}
              </p>
            </div>
          </div>
        </div>

        <nav aria-label="Jump to" className="flex flex-wrap gap-x-5 gap-y-2 text-fg-dim">
          {termSections.slice(1).map((section, i) => (
            <a key={section.id} href={`#${section.id}`} className="group whitespace-nowrap hover:text-fg">
              <span className="text-muted">[</span>
              <span className="text-yellow">{i + 1}</span>
              <span className="text-muted">]</span> <span className="group-hover:underline">{section.label}</span>
            </a>
          ))}
        </nav>

        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <ExtLink href={personalInfo.github}>github ↗</ExtLink>
          <ExtLink href={personalInfo.linkedin}>linkedin ↗</ExtLink>
          <ExtLink href={personalInfo.resumeUrl}>resume.pdf ↗</ExtLink>
        </div>

        <Prompt cursor />
      </div>
    </section>
  );
}
