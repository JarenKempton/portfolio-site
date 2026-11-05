
import { createContext, useContext, type ReactNode } from "react";
import type { WindowId } from "./windows";

export const OpenWindowContext = createContext<(id: WindowId) => void>(() => {});

interface WindowLinkProps {
  to: WindowId;
  className?: string;
  id?: string;
  children: ReactNode;
}

export function WindowLink({ to, className, id, children }: WindowLinkProps) {
  const open = useContext(OpenWindowContext);
  return (
    <a
      id={id}
      href={`#${to}`}
      className={className}
      onClick={(event) => {
        event.preventDefault();
        history.replaceState(null, "", `#${to}`);
        open(to);
      }}
    >
      {children}
    </a>
  );
}
