
import { useRef, type CSSProperties, type ReactNode } from "react";
import type { Placement, WindowSpec } from "./windows";

interface WindowFrameProps {
  spec: WindowSpec;
  open: boolean;
  active: boolean;
  shaded: boolean;
  draggable: boolean;
  placement: Placement;
  width: number;
  zIndex: number;
  status?: ReactNode;
  children: ReactNode;
  register: (element: HTMLElement | null) => void;
  onFront: () => void;
  onMove: (placement: Placement) => void;
  onClose: () => void;
  onShade: () => void;
}

export function WindowFrame({
  spec,
  open,
  active,
  shaded,
  draggable,
  placement,
  width,
  zIndex,
  status,
  children,
  register,
  onFront,
  onMove,
  onClose,
  onShade,
}: WindowFrameProps) {
  const grab = useRef<Placement | null>(null);
  const titleId = `${spec.id}-title`;
  const paneId = `${spec.id}-pane`;

  const style = {
    "--w": `${width}px`,
    "--y": `${placement.y}px`,
    left: placement.x,
    top: placement.y,
    zIndex,
  } as CSSProperties;

  return (
    <section
      id={spec.id}
      ref={register}
      hidden={!open}
      tabIndex={-1}
      aria-labelledby={titleId}
      data-active={active}
      style={style}
      className="win flex w-full flex-col md:absolute md:max-h-[calc(100dvh-var(--y)-14px)] md:w-[var(--w)]"
      onPointerDownCapture={onFront}
      onFocusCapture={onFront}
    >
      <div
        className={`win-title ${draggable ? "cursor-grab active:cursor-grabbing" : ""}`}
        onPointerDown={(event) => {
          if (!draggable || event.button !== 0) return;
          if ((event.target as HTMLElement).closest("button")) return;
          grab.current = { x: event.clientX - placement.x, y: event.clientY - placement.y };
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          if (!grab.current) return;
          onMove({ x: event.clientX - grab.current.x, y: event.clientY - grab.current.y });
        }}
        onPointerUp={() => {
          grab.current = null;
        }}
        onPointerCancel={() => {
          grab.current = null;
        }}
      >
        <button
          type="button"
          className="win-box"
          aria-label={`Close ${spec.title}`}
          onClick={onClose}
        />
        <span className="win-stripes" aria-hidden="true" />
        <h2
          id={titleId}
          className="truncate px-1 font-chrome text-[21px] leading-none text-black"
        >
          {spec.title}
        </h2>
        <span className="win-stripes" aria-hidden="true" />
        <button
          type="button"
          className="win-box grid place-items-center"
          aria-label={shaded ? `Expand ${spec.title}` : `Collapse ${spec.title}`}
          aria-expanded={!shaded}
          aria-controls={paneId}
          onClick={onShade}
        >
          <span className="block h-[5px] w-[9px] border-y border-black" aria-hidden="true" />
        </button>
      </div>
      {status && !shaded && (
        <p className="win-status font-chrome text-lg leading-6 text-black">{status}</p>
      )}
      <div
        id={paneId}
        hidden={shaded}
        className="win-pane on-white min-h-0 flex-1 overflow-auto"
      >
        {children}
      </div>
    </section>
  );
}
