interface ExtLinkProps {
  href: string;
  children: React.ReactNode;
  label?: string;
}

export function ExtLink({ href, children, label }: ExtLinkProps) {
  const external = /^https?:/.test(href);
  return (
    <a
      href={href}
      aria-label={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="text-cyan underline decoration-line underline-offset-4 transition-colors hover:bg-cyan hover:text-bg-dark hover:decoration-cyan"
    >
      {children}
    </a>
  );
}
