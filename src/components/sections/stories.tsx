import { Section } from "@/components/term/section";
import { stories } from "@/lib/data";
import { StoryEntry } from "./story-entry";

export function Stories() {
  return (
    <Section id="stories" label="Stories" cmd="cat stories/*.md">
      <div className="space-y-16">
        {stories.map((story) => (
          <StoryEntry key={story.slug} story={story} />
        ))}
      </div>
    </Section>
  );
}
