# ChurchTech Academy Presentation

This project is a presentation-style website for a school proposal about **ChurchTech Academy**, a ministry nonprofit concept focused on equipping churches with technology and production training for live services.

The presentation is built as a lightweight static web project using HTML, CSS, and JavaScript.

## Purpose

The main deliverable is a live presentation webpage that can be opened locally in a browser and presented in class.

The design direction is:

- dark blue theme
- futuristic and technology-forward
- clean and minimal
- spiritually aligned and ministry appropriate
- presentation-first, not website-navigation-first

## Main Files

- [index.html](C:/Users/mrd98/OneDrive/Documents/Slides/ChurchTech/index.html): main presentation structure
- [styles.css](C:/Users/mrd98/OneDrive/Documents/Slides/ChurchTech/styles.css): visual design, layout, and animations
- [script.js](C:/Users/mrd98/OneDrive/Documents/Slides/ChurchTech/script.js): slide navigation and fullscreen behavior
- [ministry purposal.md](C:/Users/mrd98/OneDrive/Documents/Slides/ChurchTech/documentation/ministry%20purposal.md): original ministry content source used to build the presentation
- [PROJECT_NOTES.md](C:/Users/mrd98/OneDrive/Documents/Slides/ChurchTech/PROJECT_NOTES.md): working context and design decisions for future edits

## How To Open The Presentation

Open [index.html](C:/Users/mrd98/OneDrive/Documents/Slides/ChurchTech/index.html) in a browser.

Presentation controls:

- `Next` / `Previous` buttons
- keyboard arrow keys
- `Page Up` / `Page Down`
- `F` for fullscreen

## GitHub Pages Hosting

This repo now includes a GitHub Actions workflow at [.github/workflows/deploy-pages.yml](C:/Users/mrd98/OneDrive/Documents/Slides/ChurchTech/.github/workflows/deploy-pages.yml) to deploy the presentation to GitHub Pages.

To enable it in GitHub:

1. Open the repository `Settings` tab.
2. Go to `Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.
4. Push or merge the workflow to `main`.

After that, every push to `main` will publish the static presentation site automatically.

## Git Workflow

Recommended workflow when moving between computers:

1. `git pull` before starting work.
2. Make changes locally.
3. Test the presentation in a browser.
4. Update [PROJECT_NOTES.md](C:/Users/mrd98/OneDrive/Documents/Slides/ChurchTech/PROJECT_NOTES.md) if design decisions or priorities changed.
5. `git add .`
6. `git commit -m "Clear message here"`
7. `git push`

## Scope

This repo currently tracks the core presentation source only.

Generated examples and exports are intentionally ignored:

- `submission-examples/`

## Notes For Future Contributors

Before making changes:

1. Read [ministry purposal.md](C:/Users/mrd98/OneDrive/Documents/Slides/ChurchTech/documentation/ministry%20purposal.md)
2. Read [PROJECT_NOTES.md](C:/Users/mrd98/OneDrive/Documents/Slides/ChurchTech/PROJECT_NOTES.md)
3. Preserve the visual direction unless there is a clear reason to change it

The project should stay simple to run: no build step, no framework, no package install required.

Presentation-fit guidance:

- Treat desktop presentation view as a no-scroll baseline.
- Do not assume a slide can safely scroll to reveal hidden content during live presentation.
- If a slide starts feeling crowded, prefer splitting content across slides, shortening copy, tightening spacing, or simplifying supporting visuals.
- Keep compositions visually aligned and as symmetrical as practical.
- Elements do not need to be identical in size, but they should share consistent alignment, balanced spacing, and intentional visual relationships.
