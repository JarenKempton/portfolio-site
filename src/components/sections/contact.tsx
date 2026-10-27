import { ExtLink } from "@/components/term/ext-link";
import { Prompt } from "@/components/term/prompt";
import { Section } from "@/components/term/section";
import { personalInfo } from "@/lib/data";

const bare = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

const links = [
  { key: "email", href: `mailto:${personalInfo.email}`, text: personalInfo.email },
  { key: "github", href: personalInfo.github, text: bare(personalInfo.github) },
  { key: "linkedin", href: personalInfo.linkedin, text: bare(personalInfo.linkedin) },
  { key: "resume", href: personalInfo.resumeUrl, text: "resume.pdf" },
];

export function Contact() {
  return (
    <Section id="contact" label="Contact" cmd="cat contact.txt">
      <dl data-nav tabIndex={-1} className="max-w-[72ch] border border-line px-4 py-3 sm:px-5">
        {links.map((link) => (
          <div key={link.key} className="grid grid-cols-[9ch_1fr] py-0.5">
            <dt className="text-yellow">{link.key}</dt>
            <dd className="min-w-0 break-words">
              <ExtLink href={link.href}>{link.text}</ExtLink>
            </dd>
          </div>
        ))}
        <div className="grid grid-cols-[9ch_1fr] py-0.5">
          <dt className="text-yellow">location</dt>
          <dd className="text-fg-dim">{personalInfo.location}</dd>
        </div>
      </dl>
      <p className="mt-8">
        <Prompt cursor />
      </p>
      <p className="mt-10 text-sm text-muted">
        &copy; {new Date().getFullYear()} {personalInfo.name}
      </p>
    </Section>
  );
}
