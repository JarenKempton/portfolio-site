import { experiences } from "@/lib/data";
import { TechChips } from "./tech-chips";

export function ExperienceWindow() {
  return (
    <ol className="divide-y divide-neutral-400 px-4 sm:px-6">
      {experiences.map((job) => (
        <li key={`${job.company}-${job.roles[0].period}`} className="py-6">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <h3 className="font-pixel text-lg font-bold leading-tight">
              {job.url ? (
                <a href={job.url} target="_blank" rel="noopener noreferrer" className="text-link">
                  {job.company}
                </a>
              ) : (
                job.company
              )}
            </h3>
            {job.current && (
              <span className="bg-hilite px-2 font-chrome text-lg leading-6 text-white">Current</span>
            )}
            {job.note && (
              <span className="border border-black px-2 font-chrome text-lg leading-6">{job.note}</span>
            )}
          </div>
          <ul className="mt-2 space-y-0.5">
            {job.roles.map((role) => (
              <li key={role.title} className="flex flex-wrap items-baseline gap-x-2 font-chrome text-xl">
                <span>{role.title}</span>
                <span className="hidden flex-1 border-b-2 border-dotted border-neutral-400 sm:block" aria-hidden="true" />
                <span className="text-neutral-600">{role.period}</span>
              </li>
            ))}
          </ul>
          <ul className="square-list mt-3 space-y-2 text-[15px] leading-relaxed">
            {job.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          <div className="mt-4">
            <TechChips items={job.tech} label={`${job.company} tech`} />
          </div>
        </li>
      ))}
    </ol>
  );
}
