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
| `src/lib/stories.ts` | Stories: problem, what you did, which projects |
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

`featured: true` puts it in the main grid; leave it off to list it under "More projects". `url` and `github` are optional, so omit them for private work. `builtOn: [{ name, url }]` credits the upstream projects it extends.

### Adding a story

Stories live in `src/lib/stories.ts`: a real problem, what you did about it, and the projects that came out of it (by `slug`). `links` adds related upstream projects. A project used in a story shows up there instead of the Projects grid.
