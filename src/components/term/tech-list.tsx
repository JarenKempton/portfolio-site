export function TechList({ tech }: { tech: string[] }) {
  return (
    <ul aria-label="Tech" className="flex flex-wrap gap-x-2 gap-y-1 text-sm text-magenta">
      {tech.map((name) => (
        <li key={name} className="whitespace-nowrap">
          <span className="text-muted">[</span>
          {name}
          <span className="text-muted">]</span>
        </li>
      ))}
    </ul>
  );
}
