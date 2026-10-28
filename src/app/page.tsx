import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Principles } from "@/components/sections/principles";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Stories } from "@/components/sections/stories";
import { Shell } from "@/components/term/shell";

export default function Home() {
  return (
    <Shell>
      <Hero />
      <Principles />
      <About />
      <Stories />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </Shell>
  );
}
