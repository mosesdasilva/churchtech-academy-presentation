# Option 2 Prototype (Desktop Slides + Mobile Flow)

This prototype keeps the original desktop presentation behavior and introduces a mobile-first flow mode in the same codebase.

## How to run

Open `prototypes/option2/index.html` directly in a browser.

## Prototype intent

- Desktop (`>980px`): classic slide deck navigation (dots, previous/next, fullscreen)
- Mobile (`<=980px`): touch-friendly continuous flow with:
  - sticky mode indicator (`Mobile Flow`)
  - horizontal section jump chips
  - card-like section framing for readability
  - automatic current-section highlighting while scrolling

## Notes

- Root project files remain unchanged for this prototype path.
- This is a UX spike to evaluate direction before merging any behavior into the main presentation.
- Trigger note: this file can be updated to force a prototype deployment run on GitHub Actions.
