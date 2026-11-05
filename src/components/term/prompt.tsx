interface PromptProps {
  cmd?: string;
  cwd?: string;
  cursor?: boolean;
}

export function Prompt({ cmd, cwd = "~", cursor }: PromptProps) {
  return (
    <span className="break-words">
      <span className="text-green">jaren@kempton</span>
      <span className="text-muted">:</span>
      <span className="text-blue">{cwd}</span>
      <span className="text-muted">$ </span>
      {cmd && <span className="text-fg">{cmd}</span>}
      {cursor && <span aria-hidden className="cursor ml-1" />}
    </span>
  );
}
