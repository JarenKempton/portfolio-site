import { skillCategories } from "@/lib/data";

export function SkillsWindow() {
  return (
    <div className="grid gap-5 bg-platinum p-4 sm:grid-cols-2 sm:p-5">
      {skillCategories.map((category) => (
        <fieldset key={category.name} className="group-box px-3 pb-3 pt-1">
          <legend className="px-1 font-chrome text-xl">{category.name}</legend>
          <ul className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <li key={skill} className="chip bg-white">
                {skill}
              </li>
            ))}
          </ul>
        </fieldset>
      ))}
    </div>
  );
}
