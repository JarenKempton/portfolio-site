const palette: Record<string, string> = {
  k: "#000",
  w: "#fff",
  g: "#c4c4c4",
  d: "#7a7a7a",
  f: "#9c9cff",
  F: "#6b6bd6",
  n: "#9a6233",
  y: "#f2c230",
  r: "#d42a2a",
  b: "#3a5bd9",
  t: "#5fd3c8",
};

const bitmaps = {
  computer: [
    "................",
    "...kkkkkkkkkk...",
    "...kggggggggkd..",
    "...kgkkkkkkgkd..",
    "...kgkttttkgkd..",
    "...kgktkkkkgkd..",
    "...kgkttttkgkd..",
    "...kgkkkkkkgkd..",
    "...kggggggggkd..",
    "...kggggkkkgkd..",
    "...kggggggggkd..",
    "...kkkkkkkkkkd..",
    "..kggggggggggk..",
    "..kgkkkkkkkkgk..",
    "..kggggggggggk..",
    "..kkkkkkkkkkkk..",
  ],
  document: [
    "..kkkkkkkkk.....",
    "..kwwwwwwwkk....",
    "..kwwwwwwwkwk...",
    "..kwkkkkwwkkkk..",
    "..kwwwwwwwwwwkd.",
    "..kwkkkkkkkkwkd.",
    "..kwwwwwwwwwwkd.",
    "..kwkkkkkkwkwkd.",
    "..kwwwwwwwwwwkd.",
    "..kwkkkkkkkkwkd.",
    "..kwwwwwwwwwwkd.",
    "..kwkkkkkwwwwkd.",
    "..kwwwwwwwwwwkd.",
    "..kwwwwwwwwwwkd.",
    "..kkkkkkkkkkkkd.",
    "...ddddddddddddd",
  ],
  folder: [
    "................",
    "................",
    ".kkkkkk.........",
    "kffffffk........",
    "kffffffkkkkkkkk.",
    "kwwwwwwwwwwwwwwk",
    "kffffffffffffffk",
    "kffffffffffffffk",
    "kffffffffffffffk",
    "kffffffffffffffk",
    "kffffffffffffffk",
    "kffffffffffffffk",
    "kFFFFFFFFFFFFFFk",
    "kkkkkkkkkkkkkkkk",
    ".ddddddddddddddd",
    "................",
  ],
  briefcase: [
    "................",
    "................",
    ".....kkkkkk.....",
    ".....k....k.....",
    ".....k....k.....",
    ".kkkkkkkkkkkkkk.",
    ".knnnnnnnnnnnnkd",
    ".knnnnnnnnnnnnkd",
    ".knnnnnkknnnnnkd",
    ".kkkkkkyykkkkkkd",
    ".knnnnnkknnnnnkd",
    ".knnnnnnnnnnnnkd",
    ".knnnnnnnnnnnnkd",
    ".kkkkkkkkkkkkkkd",
    "..dddddddddddddd",
    "................",
  ],
  sliders: [
    "................",
    ".kkkkkkkkkkkkkk.",
    ".kggggggggggggkd",
    ".kgggkggggkgggkd",
    ".kggkkkgggkgggkd",
    ".kggkrkgggkgggkd",
    ".kggkkkgggkggkkd",
    ".kgggkggggkggkbd",
    ".kgggkgggkkkgkkd",
    ".kgggkgggkykggkd",
    ".kgggkgggkkkggkd",
    ".kgggkggggkgggkd",
    ".kggggggggggggkd",
    ".kkkkkkkkkkkkkkd",
    "..dddddddddddddd",
    "................",
  ],
  envelope: [
    "................",
    "................",
    "................",
    "kkkkkkkkkkkkkkkk",
    "kkwwwwwwwwwwwwkk",
    "kwkwwwwwwwwwwkwk",
    "kwwkwwwwwwwwkwwk",
    "kwwwkwwwwwwkwwwk",
    "kwwwwkkwwkkwwwwk",
    "kwwwwwwkkwwwwwwk",
    "kwwwwwwwwwwwwwwk",
    "kwwwwwwwwwwwwwwk",
    "kkkkkkkkkkkkkkkk",
    ".ddddddddddddddd",
    "................",
    "................",
  ],
  pdf: [
    "..kkkkkkkkk.....",
    "..kwwwwwwwkk....",
    "..kwwwwwwwkwk...",
    "..kwkkkkwwkkkk..",
    "..kwwwwwwwwwwkd.",
    "..kwkkkkkkkkwkd.",
    "..kwwwwwwwwwwkd.",
    "..krrrrrrrrrrkd.",
    "..krwrwrwrrwrkd.",
    "..krrrrrrrrrrkd.",
    "..kwwwwwwwwwwkd.",
    "..kwkkkkkkkkwkd.",
    "..kwwwwwwwwwwkd.",
    "..kwkkkkkwwwwkd.",
    "..kkkkkkkkkkkkd.",
    "...ddddddddddddd",
  ],
} satisfies Record<string, string[]>;

export type IconName = keyof typeof bitmaps;

function runs(rows: string[]) {
  return rows.flatMap((row, y) => {
    const cells: { x: number; y: number; w: number; fill: string }[] = [];
    let x = 0;
    while (x < row.length) {
      const key = row[x];
      let end = x;
      while (row[end] === key) end++;
      if (palette[key]) cells.push({ x, y, w: end - x, fill: palette[key] });
      x = end;
    }
    return cells;
  });
}

export function PixelIcon({ name, size = 32 }: { name: IconName; size?: number }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      shapeRendering="crispEdges"
      aria-hidden="true"
      focusable="false"
    >
      {runs(bitmaps[name]).map((cell) => (
        <rect
          key={`${cell.x}-${cell.y}`}
          x={cell.x}
          y={cell.y}
          width={cell.w}
          height={1}
          fill={cell.fill}
        />
      ))}
    </svg>
  );
}
