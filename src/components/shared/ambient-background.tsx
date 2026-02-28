export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="orb-1 absolute left-[18%] top-[22%] h-[800px] w-[800px] rounded-full bg-purple-500/10 blur-[160px]" />
      <div className="orb-2 absolute right-[18%] top-[32%] h-[750px] w-[750px] rounded-full bg-blue-500/10 blur-[160px]" />
    </div>
  );
}
