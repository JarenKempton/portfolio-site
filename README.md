# jarenkempton.dev

Personal site. Next.js 16, Tailwind 4, framer-motion.

```bash
npm install
npm run dev
```

## Content

All copy lives in `src/lib/`; components only render it.

| File | What's in it |
| --- | --- |
| `src/lib/projects.ts` | Projects |
| `src/lib/data.ts` | Name, links, bio, stats, experience, skills, nav |
| `public/resume.pdf` | Export of the resume Google Doc |

### Adding a project

Append an entry to `projects` in `src/lib/projects.ts`:

```ts
{
  slug: "my-thing",
  title: "My Thing",
  tagline: "One line on what it does.",
  description: "Two or three sentences on how it works and why it exists.",
  tech: ["TypeScript", "SQLite"],
  year: 2026,
  status: "Active",
  github: "https://github.com/JarenKempton/my-thing",
  featured: true,
},
```

`featured: true` puts it in the main grid; leave it off to list it under "More projects". `url` and `github` are optional, so omit them for private work. `builtOn: { name, url }` credits the upstream project it extends.

### Grouping projects into a story

`stories` in the same file pairs a short write-up with the projects it explains (by `slug`). A project listed in a story shows up there instead of the main grid. Tech names with an icon in `src/components/shared/tech-icon.tsx` get one; any other name renders as plain text.
