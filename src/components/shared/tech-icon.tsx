import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiSqlite,
  SiPrisma,
  SiVercel,
  SiDocker,
  SiAmazonwebservices,
  SiGit,
  SiFigma,
  SiLinux,
  SiFramer,
  SiHtml5,
  SiCss3,
  SiGraphql,
  SiGithub,
  SiElectron,
  SiSupabase,
  SiExpress,
  SiNestjs,
  SiJira,
  SiMui,
  SiRust,
  SiPhp,
  SiBitbucket,
  SiTauri,
  SiArduino,
  SiCplusplus,
  SiGoogleappsscript,
  SiDrizzle,
  SiJest,
  SiShadcnui,
  SiChakraui,
  SiReacthookform,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { type IconType } from "react-icons";

interface TechIconEntry {
  icon: IconType;
  color: string;
}

const techIconMap: Record<string, TechIconEntry> = {
  "React":               { icon: SiReact,              color: "#61DAFB" },
  "Next.js":             { icon: SiNextdotjs,          color: "#ffffff" },
  "TypeScript":          { icon: SiTypescript,          color: "#3178C6" },
  "JavaScript":          { icon: SiJavascript,          color: "#F7DF1E" },
  "Tailwind CSS":        { icon: SiTailwindcss,         color: "#06B6D4" },
  "Node.js":             { icon: SiNodedotjs,           color: "#5FA04E" },
  "Python":              { icon: SiPython,              color: "#3776AB" },
  "PostgreSQL":          { icon: SiPostgresql,          color: "#4169E1" },
  "MongoDB":             { icon: SiMongodb,             color: "#47A248" },
  "MySQL":               { icon: SiMysql,               color: "#4479A1" },
  "SQLite":              { icon: SiSqlite,              color: "#003B57" },
  "Prisma":              { icon: SiPrisma,              color: "#ffffff" },
  "Vercel":              { icon: SiVercel,              color: "#ffffff" },
  "Docker":              { icon: SiDocker,              color: "#2496ED" },
  "AWS":                 { icon: SiAmazonwebservices,   color: "#FF9900" },
  "Git":                 { icon: SiGit,                 color: "#F05032" },
  "Figma":               { icon: SiFigma,               color: "#F24E1E" },
  "Linux":               { icon: SiLinux,               color: "#FCC624" },
  "Framer Motion":       { icon: SiFramer,              color: "#0055FF" },
  "HTML/CSS":            { icon: SiHtml5,               color: "#E34F26" },
  "HTML":                { icon: SiHtml5,               color: "#E34F26" },
  "CSS":                 { icon: SiCss3,                color: "#1572B6" },
  "GraphQL":             { icon: SiGraphql,             color: "#E10098" },
  "GitHub":              { icon: SiGithub,              color: "#ffffff" },
  "Electron":            { icon: SiElectron,            color: "#47848F" },
  "Supabase":            { icon: SiSupabase,            color: "#3FCF8E" },
  "Express":             { icon: SiExpress,             color: "#ffffff" },
  "NestJS":              { icon: SiNestjs,              color: "#E0234E" },
  "Jira":                { icon: SiJira,                color: "#0052CC" },
  "MUI":                 { icon: SiMui,                 color: "#007FFF" },
  "Rust":                { icon: SiRust,                color: "#ffffff" },
  "CakePHP":             { icon: SiPhp,                 color: "#777BB4" },
  "Bitbucket":           { icon: SiBitbucket,           color: "#0052CC" },
  "Tauri":               { icon: SiTauri,               color: "#FFC131" },
  "Arduino":             { icon: SiArduino,             color: "#00878F" },
  "C++":                 { icon: SiCplusplus,           color: "#00599C" },
  "Java":                { icon: DiJava,                color: "#ED8B00" },
  "Google Apps Script":  { icon: SiGoogleappsscript,    color: "#4285F4" },
  "Drizzle":             { icon: SiDrizzle,             color: "#C5F74F" },
  "Jest":                { icon: SiJest,                color: "#C21325" },
  "shadcn/ui":           { icon: SiShadcnui,            color: "#ffffff" },
  "Chakra UI":           { icon: SiChakraui,            color: "#319795" },
  "React Hook Form":     { icon: SiReacthookform,       color: "#EC5990" },
};

// Custom SVG icons for brands not in react-icons
function PowerSyncIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 70 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M68.3875 25.6594L60.2117 11.8629C59.2046 10.1633 57.344 9.1167 55.3298 9.1167H46.9058C46.1825 9.1167 45.7302 9.87957 46.0919 10.4901L47.9203 13.5763C48.2564 14.1424 48.8764 14.4915 49.5474 14.4915H53.229C54.5716 14.4915 55.8122 15.1896 56.4838 16.3225L62.5595 26.5752C63.2311 27.7081 63.2311 29.1037 62.5595 30.2366L56.4838 40.4893C55.8129 41.6222 54.5716 42.3204 53.229 42.3204H41.0777C39.7351 42.3204 38.4945 41.6222 37.8229 40.4893L24.6813 18.313C24.3196 17.7025 24.7719 16.9402 25.4952 16.9402H29.1761C29.8994 16.9402 30.3516 16.1774 29.99 15.5675L28.1616 12.4813C27.8254 11.9152 27.2055 11.5661 26.5338 11.5661H18.5828C17.9112 11.5661 17.2912 11.9152 16.9551 12.4813L12.9796 19.1903C12.6441 19.7564 12.6441 20.4546 12.9796 21.0213L14.808 24.1075C15.1696 24.7174 16.0734 24.7174 16.4357 24.1075L18.2762 21.0017C18.6379 20.3918 19.5417 20.3918 19.9033 21.0017L34.095 44.9502C35.1021 46.6499 36.9627 47.6964 38.9776 47.6964H55.3291C57.3433 47.6964 59.2039 46.6492 60.2117 44.9502L68.3875 31.1538C69.3946 29.4541 69.3946 27.3603 68.3875 25.6613V25.6594Z" fill="url(#ps_g1)"/>
      <path d="M21.7933 34.935C21.4578 34.3683 20.8372 34.0198 20.1662 34.0198H16.4846C15.142 34.0198 13.9014 33.3217 13.2297 32.1888L7.15412 21.9361C6.48248 20.8032 6.48248 19.4075 7.15412 18.2747L13.2297 8.02196C13.9014 6.88909 15.142 6.19093 16.4846 6.19093H28.6365C29.9791 6.19093 31.2197 6.88909 31.8914 8.02196L45.033 30.1983C45.3946 30.8088 44.9424 31.571 44.2191 31.571H40.5382C39.8149 31.571 39.3626 32.3339 39.7243 32.9438L41.5527 36.03C41.8881 36.5967 42.5088 36.9452 43.1798 36.9452H51.1307C51.8024 36.9452 52.4224 36.5961 52.7578 36.03L56.7333 29.321C57.0695 28.7549 57.0695 28.0567 56.7333 27.49L54.9049 24.4038C54.5433 23.7939 53.6395 23.7939 53.2778 24.4038L51.4374 27.5102C51.0757 28.1201 50.1719 28.1201 49.8096 27.5102L35.6179 3.56238C34.6108 1.8634 32.7502 0.816162 30.736 0.816162H14.3845C12.3702 0.816162 10.5096 1.8634 9.50251 3.56238L1.32675 17.3588C0.31963 19.0578 0.31963 21.1516 1.32675 22.8513L9.50251 36.6477C10.5096 38.3474 12.3709 39.3939 14.3851 39.3939H22.8092C23.5325 39.3939 23.984 38.6311 23.623 38.0212L21.794 34.935H21.7933Z" fill="url(#ps_g2)"/>
      <defs>
        <linearGradient id="ps_g1" x1="17.4274" y1="11.6845" x2="63.6811" y2="39.0946" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0055FF"/>
          <stop offset="1" stopColor="#00D5FF"/>
        </linearGradient>
        <linearGradient id="ps_g2" x1="52.2868" y1="36.8262" x2="6.03308" y2="9.41672" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0055FF"/>
          <stop offset="1" stopColor="#AA00FF"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function ElectricSQLIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 150 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M127.992 62.1244C128.711 61.4029 129.683 61 130.692 61H191L105.008 147.089C104.289 147.811 103.317 148.213 102.308 148.213H42L127.992 62.1244Z" fill="#D0BCFF" transform="translate(-42,-61) scale(1)"/>
      <path d="M117.416 150.125C117.416 149.066 118.275 148.204 119.331 148.204H191L117.416 222V150.125Z" fill="#D0BCFF" transform="translate(-42,-61) scale(1)"/>
    </svg>
  );
}

// Custom SVG icon names
const customSvgIcons: Record<string, (props: { size?: number }) => React.JSX.Element> = {
  "PowerSync": PowerSyncIcon,
  "ElectricSQL": ElectricSQLIcon,
};

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

export function TechIcon({ name, size = 16, className }: TechIconProps) {
  // Check custom SVG icons first
  const CustomIcon = customSvgIcons[name];
  if (CustomIcon) {
    return (
      <span className={className} style={{ display: "inline-flex" }}>
        <CustomIcon size={size} />
      </span>
    );
  }

  const entry = techIconMap[name];
  if (!entry) return null;

  const Icon = entry.icon;
  return <Icon size={size} color={entry.color} className={className} />;
}

export function hasTechIcon(name: string): boolean {
  return name in techIconMap || name in customSvgIcons;
}
