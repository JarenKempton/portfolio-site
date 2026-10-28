import { Prompt } from "./prompt";

interface SectionProps {
  id: string;
  label: string;
  cmd: string;
  children: React.ReactNode;
}

export function Section({ id, label, cmd, children }: SectionProps) {
  return (
    <section id={id} aria-label={label} className="border-t border-dashed border-line py-12 md:py-16">
      <h2 className="mb-6 font-normal">
        <Prompt cmd={cmd} />
      </h2>
      {children}
    </section>
  );
}
