import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { OffTheClock } from "@/components/sections/off-the-clock";
import { Principles } from "@/components/sections/principles";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Shell } from "@/components/term/shell";

export default function Home() {
  return (
    <Shell>
      <Hero />
      <Principles />
      <About />
      <OffTheClock />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </Shell>
  );
}
