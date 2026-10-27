import { Section } from "@/components/term/section";
import { skillCategories } from "@/lib/data";

export function Skills() {
  return (
    <Section id="skills" label="Skills" cmd="tree ~/skills">
      <p className="font-bold text-blue">skills/</p>
      <ul>
        {skillCategories.map((category, i) => {
          const last = i === skillCategories.length - 1;
          return (
            <li key={category.name} data-nav tabIndex={-1} className="relative grid grid-cols-[4ch_1fr] border border-transparent py-1">
              <span aria-hidden className="text-muted">{last ? "└──" : "├──"}</span>
              {!last && <span aria-hidden className="absolute bottom-0 left-[0.3em] top-[2em] w-px bg-muted/60" />}
              <div>
                <h3 className="font-bold text-blue">{category.name}/</h3>
                <ul className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-fg-dim">
                  {category.skills.map((skill) => (
                    <li key={skill} className="whitespace-nowrap">{skill}</li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
      <p className="mt-4 text-sm text-muted">
        {skillCategories.length} directories, {skillCategories.reduce((sum, c) => sum + c.skills.length, 0)} files
      </p>
    </Section>
  );
}
