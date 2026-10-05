# Portfolio copy

Source of truth for the text on kiri231.com. The HTML reads from here and from projects/.

## Voice

- First person.
- Problem before technology.
- One sentence per idea.
- Metrics only where they add something.
- Every project uses the same fields. **The hard part** is optional: if there isn't a real one, leave it out.

## Home

- **Name:** Christian Nogueras
- **Headline:** Full-stack engineer. Lately, tooling that lets AI agents drive real systems.
- **Intro:** I build web products end to end: React and TypeScript in the browser, Python, Node, and .NET behind it. My latest work gives AI agents a safe way into an existing platform.
- **Button:** See my work

## Profile

- **Bio:** I've shipped software for six years, from fraud detection at a startup to compliance platforms and enterprise workflow tools.

### Experience

- **Akcelita**, Software Engineer, 2024 to 2026. Built a self-describing MCP server that lets AI agents create schemas, forms, and workflows on an enterprise automation platform.
- **Company Sage**, Software Engineer, 2023 to 2024. Migrated a business-formation platform from Django and Vue to Nest and Next while customers kept using it.
- **Optic Power (Snappt)**, Software Engineer, 2019 to 2023. Built fraud-detection features that grew from zero to 2,500 daily users.

## Work

One file per project in [`projects/`](projects/). Adding a project means adding a file. The site reads the folder at build time.

Frontmatter:

- `name`
- `order`: position on the Work page.
- `oneliner`: what it is and who it's for, in one sentence.
- `stack`: list of technologies. The tech filter uses it.
- `code`: repo URL, or `private`.
- `links`: optional list of `{ label, url }` (demo, workshop).
- `note`: optional caveat shown next to the links.

Body sections:

- `## Problem`: what hurt, in two sentences at most.
- `## What I built`: what it does, in first person.
- `## The hard part`: optional. Leave it out if there isn't a real one.

## Contact

- **Headline:** Let's talk.
- **Availability:** Open to full-time roles and select contract work.
- **Body:** Email me or download my resume.
- **Links:** Email · Resume (kiri231.com/resume.pdf) · GitHub · LinkedIn

## Footer

Christian Nogueras · Puerto Rico
