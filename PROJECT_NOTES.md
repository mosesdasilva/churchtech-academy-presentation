# Project Notes

## Project Summary

This project is a live presentation webpage for a school proposal about **ChurchTech Academy**.

ChurchTech Academy is presented as a ministry nonprofit concept that equips churches with accessible, free, and spiritually aligned technology and production training for live services.

## Current Design Direction

The presentation should feel:

- dark blue
- futuristic
- minimal
- clean
- presentation focused
- polished, but not corporate
- technical, but still ministry appropriate

Avoid:

- generic business slideshow styling
- purple-heavy themes
- random stock-photo-heavy design
- cluttered layouts
- anything that feels too casual or playful

## Visual Decisions Already Made

- The presentation is built as a fullscreen slide-style webpage.
- The layout uses one section per slide.
- Navigation is controlled with buttons, keyboard keys, and fullscreen support.
- The design uses glassy panels, blue glow effects, subtle grid backgrounds, and strong typography.
- The Vision slide intentionally avoids literal photography.
- The Vision panel now uses an abstract diagram with three connected circles:
  - `Train`
  - `Strengthen`
  - `Reach`

## Presentation Layout Rules

- Desktop presentation view should be treated as a no-scroll baseline.
- Slides should fit within the viewport during live presentation at the intended desktop/fullscreen baseline, rather than depending on vertical scrolling.
- This is a design target for the chosen presentation baseline, not a universal guarantee across every screen size, browser chrome size, zoom level, or font-rendering environment.
- If a slide feels crowded, prefer one of these fixes before allowing scroll:
  1. shorten copy
  2. reduce internal spacing
  3. simplify or resize supporting visuals
  4. split the content into an additional slide
- Dense slides can be used carefully, but they should still feel presentation-ready and should not require the presenter to scroll.
- Center slide content vertically when the composition benefits from it, especially when a slide has been tightened and no longer needs top alignment.
- Use top alignment only when it materially improves fit or readability.
- Use the Step 7 `Scope and Reach` slide as a vertical-fit guardrail for dense two-column operational slides because it currently fits the desktop presentation baseline cleanly without crowding the dot navigation.
- For Step 6, Step 7, Step 8, and similar future slides, shorten the main title first before shrinking body copy; overly verbal titles consume too much height and are usually the first cause of overflow.
- If a slide starts approaching the bottom controls, treat that as a hard warning sign and tighten the heading footprint, panel padding, or content grouping before allowing any overlap risk.

## Alignment And Symmetry Guidance

- Favor symmetrical placement and balanced compositions whenever possible.
- Not every element needs to be the exact same size, but nearby elements should align intentionally with each other.
- When positioning panels, diagrams, cards, or metric groups, use consistent edges, shared centerlines, or evenly distributed spacing.
- When calculating percentages, widths, offsets, or node positions, prefer values that create a clear visual rhythm and balanced relationships across the slide.
- Avoid layouts that feel accidentally shifted, unevenly weighted, or loosely placed.
- If asymmetry is used, it should feel deliberate and still anchor to a readable alignment system.

## Current Slide Structure

1. Opening
   ChurchTech Academy overview and core need

2. Vision / Mission
   Vision on the left, mission on the right

3. Prayer Foundation
   Prayer statement and ministry framing

4. Core Values
   Accessibility, excellence, empowerment, Kingdom impact

5. Biblical Principles
   Stewardship, order that serves edification, equipping the saints, excellence with humility

6. External Environmental Scan
   Training needs by church size

7. Scope and Reach
   Geographic opportunity and team advantage, with an abstract reach-network visual to support the scale metrics

8. Goals
   Five ministry goals: accessibility, excellence, empowerment, Kingdom impact, prayer

9. Objectives
   Condensed implementation objectives grouped under each ministry goal

10. Programs And Curricula
   Core program areas: audio, video and broadcast, lighting, worship ministry, leadership and team management

11. Training Pathways
   Training levels and supporting programs

12. Method And Material
   Teaching methods, facilities, equipment, and supporting delivery resources

13. Organization And Administration
   Reporting structure, key roles, and the Step 7 organizational chart

14. Evaluation
   Review cadence, evaluation tools, participants, and core evaluative questions from Step 8

15. Revised Needs
   Step 9 revision logic with concise hypothetical examples for course-format changes and multilingual expansion

16. Closing Summary
   Final proposal summary and restated impact

## Content Source

The presentation content is based on [ministry purposal.md](C:/Users/mrd98/OneDrive/Documents/Slides/ChurchTech/documentation/ministry%20purposal.md).

If new slides or wording are added, they should remain aligned with that document unless the user explicitly wants a rewrite.

## Technical Notes

- This is a static project with no build step.
- Main entry point: [index.html](C:/Users/mrd98/OneDrive/Documents/Slides/ChurchTech/index.html)
- Styling: [styles.css](C:/Users/mrd98/OneDrive/Documents/Slides/ChurchTech/styles.css)
- Interaction: [script.js](C:/Users/mrd98/OneDrive/Documents/Slides/ChurchTech/script.js)
- GitHub Pages deployment is handled by [.github/workflows/deploy-pages.yml](C:/Users/mrd98/OneDrive/Documents/Slides/ChurchTech/.github/workflows/deploy-pages.yml), which publishes the repo as a static site on pushes to `main`
- Ignored generated outputs: `submission-examples/`

## Recommended Cross-Computer Workflow

On any machine:

1. `git pull`
2. Read [PROJECT_NOTES.md](C:/Users/mrd98/OneDrive/Documents/Slides/ChurchTech/PROJECT_NOTES.md)
3. Continue work
4. Test in a browser
5. Update these notes if major design/content decisions changed
6. Commit and push

## Pending Improvement Ideas

- Continue refining spacing and balance on the Vision / Mission slide
- Consider adding subtle iconography where empty areas need structure
- Keep checking that slides feel presentation-ready on both desktop and laptop screens
- Keep checking slide symmetry, alignment rhythm, and balanced spacing whenever panels or diagrams are repositioned
- If needed later, create a cleaner print/export version separate from the live presentation

## Recent Decisions

- The Step 3 and Step 4 slides now use content labels in the eyebrow area: `Goals` and `Objectives`
- The Scope and Reach slide now fills the lower-left panel area with an abstract network-style visual instead of leaving open empty space
- The Vision and Goals slides now use a dense-slide treatment so they top-align and scroll within the viewport instead of clipping on some Mac browser sizes
- A new Step 5 `Programs And Curricula` slide now extends the same panel-and-card design language instead of introducing a separate layout style
- Step 5 is now split across two slides so the curriculum overview and training pathways are easier to present live
- Desktop presentation view now targets no-scroll slides, with Vision and Goals tightened first; full no-scroll behavior should be treated as a baseline-size target rather than a universal guarantee across every screen and zoom level
- The Programs slide now leads directly with the core-area cards, and the Vision and Goals slides are explicitly centered again within the no-scroll desktop presentation baseline
- Future layout edits should preserve symmetry and alignment discipline across cards, panels, diagrams, and percentage-based positioning so slides feel balanced instead of loosely placed
- The source proposal document now includes completed `Method and Material` and `Organization and Administration` sections from the updated ministry proposal content, replacing the older placeholder assignment notes
- The source proposal document now explicitly states the Step 7 reporting flow: `Founding Director` over `Operations Administrator`, with `Production Team`, `Church Partnerships and Marketing`, and `Volunteer / Support Roles` coordinated under the `Operations Administrator` at the same level
- The presentation now includes dedicated Step 6 and Step 7 slides so `Method and Material` and `Organization and Administration` are represented in the live deck instead of only in the source proposal
- The Step 7 slide now uses the manually added [chart_step_7.png](C:/Users/mrd98/OneDrive/Documents/Slides/ChurchTech/documentation/chart_step_7.png) asset, and the source proposal should reference that same image to keep the documentation and presentation aligned
- The source proposal document now includes a completed Step 8 `Evaluation` section that answers the transcript prompts and the repo step checklist for timing, cadence, tools, participants, reporting, and evaluative questions
- The source proposal document now includes a completed Step 9 `Revised Needs` section with hypothetical revision examples tied to evaluation outcomes, platform structure, and multilingual expansion
- The presentation now includes a dedicated Step 8 `Evaluation` slide that uses the same panel-and-card visual language as Steps 6 and 7 so the review process is represented in the live deck before the closing summary
- The presentation now includes a dedicated Step 9 `Revised Needs` slide between Evaluation and Closing, using the same guardrail layout while shortening the examples so they remain readable in live presentation view
- The Option 2 desktop-plus-mobile-flow prototype has been adopted as the primary root presentation implementation, including mobile section chips, active-section tracking, and mode labeling while preserving desktop slide controls
- Step 6, Step 7, and Step 8 now use a reusable slide-size guardrail based on the Step 7 `Scope and Reach` footprint: tighter section headings, smaller title scale, and reduced internal spacing to protect no-scroll presentation fit
- The ministry proposal wording should stay aligned with a free ministry model, so terms like `subscribers`, `subscription systems`, and `customer communication` should be avoided in favor of ministry-oriented participant and support language
- Supporting programs should no longer use the old onboarding/pathways wording; the current direction is live discussion and Q&A livestream support aligned with the Step 6 teaching-method slide
- The repo now includes a GitHub Actions workflow for GitHub Pages hosting so the presentation can be published directly from the `main` branch without adding a build step
- The curriculum wording now treats the leadership core area as `Leadership And Team Management`, and the top training level is now `Team Leader` to emphasize ministry team oversight rather than a generic leadership tier

## If A New Codex Session Picks This Up

Read these files first:

1. [README.md](C:/Users/mrd98/OneDrive/Documents/Slides/ChurchTech/README.md)
2. [PROJECT_NOTES.md](C:/Users/mrd98/OneDrive/Documents/Slides/ChurchTech/PROJECT_NOTES.md)
3. [ministry purposal.md](C:/Users/mrd98/OneDrive/Documents/Slides/ChurchTech/documentation/ministry%20purposal.md)

Then inspect:

1. [index.html](C:/Users/mrd98/OneDrive/Documents/Slides/ChurchTech/index.html)
2. [styles.css](C:/Users/mrd98/OneDrive/Documents/Slides/ChurchTech/styles.css)
3. [script.js](C:/Users/mrd98/OneDrive/Documents/Slides/ChurchTech/script.js)

Goal for future edits:

Preserve the current presentation concept and extend it carefully instead of redesigning it from scratch.

For layout decisions, prioritize:

1. no-scroll presentation fit at the chosen desktop baseline
2. strong alignment and practical symmetry
3. readability before adding more content
