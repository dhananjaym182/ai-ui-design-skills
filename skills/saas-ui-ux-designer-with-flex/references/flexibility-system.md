# Flexibility system

This reference captures the flexibility and responsive design ideas the bundle should apply by default.
Use it whenever the task involves responsive layouts, grids, dashboards, landing pages, cards, breakpoints, fluid sizing, or resilient component behavior.

## What flexibility means here
Flexibility is the ability of a layout or component to adapt across:
- narrow phones
- tablets
- laptops
- large desktop screens
- user zoom
- large text settings
- long content strings
- localization
- empty, loading, and error states

Flexibility is not the same as unrestricted freedom.
A good system gives components room to adapt while keeping hierarchy and readability stable.

## Core idea: one system, many widths
Do not design a separate disconnected UI for every device width.
Instead, define a few robust primitives that can scale from small to large screens.

Examples:
- flexible grid minimums instead of many card-specific widths
- stack-then-split layouts instead of a dozen breakpoint rewrites
- max-width for readable text rather than full-bleed prose
- fluid hero type but static app body type

## Breakpoints should follow content, not mythology
Avoid designing around device brand categories.
Use breakpoints when the content or layout actually needs a structural change.

Default rem-based checkpoints if you need a base ladder:
- 30rem: very narrow mobile range
- 48rem: tablet and small laptop crossover
- 64rem: medium desktop range
- 80rem: wide desktop range
- 96rem: extra wide cap range

But prefer fewer breakpoints when the layout can already solve itself with flexible CSS.

## Prefer flexible primitives first
Before adding a media query, see whether one of these solves the problem:
- `flex-wrap`
- `flex: grow shrink basis`
- `minmax()`
- `auto-fit`
- `min()`
- `max()`
- `clamp()`
- `max-width`
- `min-width: 0`

These often create more resilient layouts than stacking breakpoint overrides.

## The stack before shrink rule
When a layout gets tight:
1. stack columns before shrinking body text
2. reduce decorative whitespace before reducing readability
3. wrap controls before truncating essential labels
4. simplify layout regions before inventing edge-case hacks

Never rescue a broken layout by making normal text tiny.

## Use flexbox for flexible zones
Flexbox is excellent for:
- toolbar rows
- dashboard split panels
- header controls
- card rows that can wrap
- side-by-side content blocks that collapse naturally

Useful pattern:

```css
.main-layout {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

main {
  flex: 3 1 20rem;
}

.stats,
.sidebar-panel {
  flex: 1 1 18rem;
}
```

Why it works:
- elements can grow when there is room
- elements can shrink when needed
- basis values protect minimum readable width
- wrapping avoids overflow and crushed columns

## Use grid for repeatable cards and modules
Grid is excellent for:
- feature cards
- pricing cards
- integration lists
- stat grids
- gallery-like repeatable modules

Reliable pattern:

```css
.cards-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(min(18rem, 100%), 1fr));
}
```

This pattern:
- respects narrow screens
- prevents cards from overflowing their container
- creates multiple columns only when there is real room
- avoids brittle column-count rules

Use a larger minimum for bigger modules:

```css
grid-template-columns: repeat(auto-fit, minmax(min(22rem, 100%), 1fr));
```

## Why `min(18rem, 100%)` is useful
It tells the card:
- try to be at least 18rem wide
- but if the container is narrower, do not overflow it

This is a strong default for SaaS cards because it behaves well on both small and medium screens.

## Use clamp for big flexible moments
Use `clamp()` where fluid behavior genuinely improves the UI.
Best use cases:
- hero headings
- hero media width/height ranges
- major section spacing on marketing pages
- outer gutters on fluid layouts

Examples:

```css
font-size: clamp(2.5rem, 5vw, 4.5rem);
padding-inline: clamp(1rem, 2vw, 2rem);
padding-block: clamp(3rem, 7vw, 6rem);
```

Do not apply `clamp()` everywhere just because it exists.
Forms, table text, and dense internal product UI usually want a more stable step system.

## Bound content on large screens
A layout that works on mobile can still fail on a 4K monitor.
Bound important regions with max-width.

Good defaults:
- marketing container: around 1200 to 1280px
- app shell inner width: capped when helpful
- docs/article text: 60 to 72ch
- support copy blocks: 50 to 65ch

Wide screens should feel spacious, not loose and unfocused.

## Let whitespace create hierarchy on desktop
When more screen width appears, do not only add more columns.
Also use space to clarify structure:
- larger separation between page groups
- more breathing room around hero copy and screenshots
- stronger left/right rhythm between main and secondary content
- better use of inset panels for data zones

Desktop is not permission to make every surface wider.

## Flexible sidebars
Desktop sidebars can be sticky.
Small-screen sidebars should usually become:
- a drawer
- an overlay panel
- a collapsed nav group

Do not leave a permanently open full-height sidebar stealing the best screen space on narrow screens.

## Flexible tables
Tables are where many responsive designs fail.

Rules:
- keep desktop tables desktop-friendly
- on small screens, prioritize key columns or switch to stacked cards
- do not cram 8 columns into a phone viewport
- selection, status, and row actions should remain understandable
- sticky headers help long tables on desktop and tablet

## Flexibility inside components
Every component should answer:
- what happens if the label is long?
- what happens if the user zooms to 200 percent?
- what happens if there is no icon?
- what happens if helper text wraps to two lines?
- what happens if the data value is unexpectedly long?

A component is not truly ready until it survives those cases.

## Long strings and localization
Design for text expansion.
Common cases:
- German or Finnish text becomes longer
- enterprise feature names are wordy
- user-generated content is unpredictable
- currencies and percentages vary in width

Rules:
- allow wrapping where possible
- keep card titles to 2 or 3 lines before truncation
- reserve truncation for non-critical repeated contexts like dense tables
- avoid hard-coded fixed heights that assume English copy lengths

## `min-width: 0` matters in flex layouts
In flex containers, text blocks often overflow because the child cannot shrink.
Use `min-width: 0` on the text-containing child so wrapping can happen.

This is a small implementation detail with a big payoff for resilient SaaS layouts.

## Flexible marketing page patterns
### Hero
- single column by default on narrow screens
- split layout only when both copy and media can breathe
- fluid display size allowed
- body copy remains bounded
- CTA row wraps or stacks cleanly

### Feature grid
- cards should auto-fit rather than rely on hard-coded counts
- copy should stay concise and not create random card heights when possible
- screenshots should scale with bounded aspect behavior

### Pricing
- cards should stack on narrow screens
- small print must remain readable
- featured plan should stay distinct without breaking layout rhythm

## Flexible dashboard patterns
### Split analytics layout
Common robust pattern:
- a main panel with greater basis and growth
- 1 or 2 side panels with smaller bases
- wrapping allowed

### Stat grids
- use repeatable auto-fit grid patterns
- do not shrink stat cards below a comfortable readable width
- keep one dominant stat louder than the rest if needed

### Filter/tool rows
- wrap chips and controls
- keep the primary action visible
- use segmented controls only when labels stay short

## Flexible form patterns
- labels should wrap before inputs become unusable
- related fields can sit side-by-side only when each remains comfortable
- on smaller widths, stack fields rather than compressing them into tiny controls
- helper text and error messages must fit without colliding with neighboring fields

## Density and flexibility must work together
Dense does not mean rigid.
A compact admin surface should still:
- wrap toolbars
- bound tables
- preserve readable text
- allow filters to collapse or stack
- show good empty/loading/error states

## Stress-test scenarios
Always sanity check against these:
- 320px wide viewport
- 768px tablet-ish width
- 1280px laptop width
- very wide desktop screen
- 200 percent browser zoom
- long translated labels
- data-heavy table
- empty state
- loading skeleton
- error banner plus form fields

## Anti-patterns
Do not:
- define fixed card widths everywhere
- write a new layout for every common device width
- keep sidebars permanently open on narrow layouts
- use fixed heights for dynamic text content
- let body copy span giant wide lines
- use truncation as the first response to layout problems
- solve responsive issues by dropping text below comfortable reading size

## Default recommendations when the user gives no responsive direction
Use this base strategy:
- mobile-first CSS
- bounded content containers
- fluid hero typography only where it helps
- flexible split layouts with `flex-wrap`
- repeatable card grids with `auto-fit` and `minmax(min(...), 1fr)`
- tables that collapse to key-column or card patterns on small screens
- spacing that grows with `clamp()` on public pages and stays more step-based in app UI

## Quick flexibility checklist
Before shipping, ask:
- does the layout wrap before it breaks?
- are there unnecessary rigid widths?
- does copy stay readable on very wide screens?
- do cards have good minimum widths?
- do tables have a narrow-screen fallback?
- do CTAs remain obvious on mobile?
- do components survive long labels and zoom?
- is the number of breakpoint overrides reasonable?
