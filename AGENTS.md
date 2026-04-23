# AGENTS.md

## Project

This repository contains a static HTML/CSS/JS presentation website for a school ministry nonprofit proposal called **ChurchTech Academy**.

## Read First

Before making changes, read these files in order:

1. [README.md](C:/Users/mrd98/OneDrive/Documents/Slides/ChurchTech/README.md)
2. [PROJECT_NOTES.md](C:/Users/mrd98/OneDrive/Documents/Slides/ChurchTech/PROJECT_NOTES.md)
3. [ministry purposal.md](C:/Users/mrd98/OneDrive/Documents/Slides/ChurchTech/documentation/ministry%20purposal.md)

Then inspect:

1. [index.html](C:/Users/mrd98/OneDrive/Documents/Slides/ChurchTech/index.html)
2. [styles.css](C:/Users/mrd98/OneDrive/Documents/Slides/ChurchTech/styles.css)
3. [script.js](C:/Users/mrd98/OneDrive/Documents/Slides/ChurchTech/script.js)

## Project Goals

- Preserve the project as a presentation-style webpage.
- Keep the project simple to run with no build step.
- Maintain a polished classroom-presentation quality.
- Prefer iterative improvements over broad redesigns.

## Design Direction

Maintain this visual direction unless explicitly told otherwise:

- dark blue thematic palette
- futuristic and technical look
- minimal and clean composition
- ministry-appropriate tone
- strong readability for live presentation use

## Design Constraints

- Avoid stock-photo-heavy layouts unless explicitly requested.
- Prefer abstract diagrams, subtle iconography, grids, glow, and geometric structure.
- Do not introduce generic corporate slide styling.
- Do not shift the visual direction toward playful, casual, or cluttered UI.
- Preserve the current presentation concept instead of replacing it.

## Technical Constraints

- This is a static site.
- Main entry point: [index.html](C:/Users/mrd98/OneDrive/Documents/Slides/ChurchTech/index.html)
- Styling: [styles.css](C:/Users/mrd98/OneDrive/Documents/Slides/ChurchTech/styles.css)
- Interaction: [script.js](C:/Users/mrd98/OneDrive/Documents/Slides/ChurchTech/script.js)
- No framework or package install should be required.
- Keep edits compatible across Windows and macOS.

## Workflow

When working on this repo:

1. Pull latest changes first.
2. Read the project context files.
3. Make focused edits.
4. Test the presentation in a browser.
5. Update [PROJECT_NOTES.md](C:/Users/mrd98/OneDrive/Documents/Slides/ChurchTech/PROJECT_NOTES.md) if decisions or priorities changed.
6. Commit with a clear message.
7. Push changes.

Development process expectations:

- At the beginning of each work session, sync the repo with the latest changes from GitHub before making edits.
- Keep [AGENTS.md](C:/Users/mrd98/OneDrive/Documents/Slides/ChurchTech/AGENTS.md), [PROJECT_NOTES.md](C:/Users/mrd98/OneDrive/Documents/Slides/ChurchTech/PROJECT_NOTES.md), and the source proposal document aligned as the project evolves so workflow instructions, content decisions, and presentation source stay consistent.
- Work in small, reviewable commits throughout development instead of saving everything for one large commit.
- Prefer TDD where practical: make the expected behavior clear first, implement the change, then verify it.
- Follow XP-style development habits: small increments, fast feedback, continuous refactoring only when needed, and keeping the system working at each step.
- Treat continuous integration as part of the workflow mindset: changes should stay easy to verify, integrate, and ship without large risky batches.
- If a change becomes too large to review comfortably, split it into smaller steps before continuing.

## Editing Guidance

- Prefer small, targeted edits over large rewrites.
- Preserve slide structure unless a structural change is requested.
- Keep content aligned with [ministry purposal.md](C:/Users/mrd98/OneDrive/Documents/Slides/ChurchTech/documentation/ministry%20purposal.md) unless the user asks for rewriting.
- If adding visual elements, ensure they support the message and do not create clutter.
- If a section has too much empty space, prefer structured visual systems over random filler.

## Done Criteria

A change is complete when:

- the presentation still opens directly in a browser
- the slide remains visually consistent with the existing deck
- content remains readable in presentation view
- project notes are updated if the design direction or decisions changed
