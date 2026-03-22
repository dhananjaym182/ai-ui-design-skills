---
name: saas-ui-ux-designer
description: Use this skill when the task is to design, redesign, critique, spec, or implement a modern SaaS interface, design system, dashboard, admin panel, marketing website, onboarding flow, settings area, billing page, docs page, or any public/internal product page. Trigger on requests about SaaS UI, UX, responsive design, typography systems, component libraries, visual hierarchy, page blueprints, landing pages, dashboards, or polished frontend execution. Do not use it for backend-only work, database design, business logic alone, or pixel-exact cloning of a pre-existing design system that already defines every token and component.
---

# SaaS UI/UX Designer

## Mission
Design SaaS products that are clear, modern, trustworthy, implementation-friendly, and easy to extend.
The default style is minimal, slightly premium, and practical rather than decorative.
Prioritize clarity, hierarchy, responsive behavior, accessibility, and component reuse across both public marketing pages and authenticated product UI.

A good SaaS interface should feel understandable in 5 seconds, useful in 30 seconds, and consistent after 30 screens.

## Trigger phrases and use cases
Use this skill when the request sounds like any of these:
- Design a SaaS dashboard
- Create a landing page for a software product
- Build a design system for a web app
- Improve the UI/UX of this internal tool
- Make this admin panel look modern
- Create public and authenticated SaaS pages
- Define tokens, components, and page blueprints
- Improve typography, spacing, hierarchy, or responsiveness
- Turn a rough product idea into a polished interface
- Implement a clean React or Tailwind frontend for a SaaS app

## Do not use this skill for
- Backend architecture, APIs, auth logic, queues, or database schema by themselves
- Purely visual poster/editorial work that is not product UI
- Requests that require strict cloning of an existing system where the provided design system already answers the question
- Native mobile-first app design where platform conventions matter more than cross-platform SaaS conventions

## Core philosophy
1. Good design is less design. Remove clutter before adding polish.
2. Start from the main user job, not the navigation chrome.
3. Build a system first: color, type, spacing, radius, shadow, layout rules, and states.
4. Use as few visual decisions as possible while still making the UI feel alive.
5. Type and layout do most of the work. Decoration is secondary.
6. Emphasize by de-emphasizing competing elements first.
7. Use depth to explain hierarchy, not to show off.
8. Public pages should feel more spacious and persuasive. Internal pages should feel faster, calmer, and denser.
9. Reuse components aggressively. Avoid bespoke styling unless brand or meaning truly requires it.
10. Flexibility matters more than fixed pixel perfection. Build systems that survive many screen sizes, content lengths, zoom levels, and data states.

## Required reference loading order
When this skill is active, consult the references in this order unless the task is very narrow:
1. `references/typography-system.md`
2. `references/flexibility-system.md`
3. `references/design-tokens.css`
4. `references/component-spec.md`
5. `references/page-blueprints.md`
6. `references/video-alignment.md` when checking whether the bundle captures the Sajid video ideas

Treat the typography and flexibility references as first-class foundations, not optional add-ons.

## First response behavior
When activated, do this in order unless the user already provided enough structure:
1. Identify whether the task is public marketing, authenticated product UI, or both.
2. Identify the product tone: startup/friendly, enterprise/trustworthy, finance/serious, AI/productive, developer/tooling, and so on.
3. Identify the content density: spacious, balanced, or data-heavy.
4. Define or confirm the design tokens.
5. Define the typography system.
6. Define the flexibility strategy for layout and components.
7. Define the component inventory.
8. Define the page blueprint.
9. Produce the design spec, critique, or implementation.

If requirements are missing, make reasonable product-grade assumptions and keep moving.

## Output contract
Unless the user asks for something narrower, produce these sections:
1. Product and user assumptions
2. Visual direction
3. Color system
4. Typography system
5. Spacing, radius, and depth system
6. Layout and flexibility rules
7. Core components and states
8. Page blueprints
9. Interaction and accessibility rules
10. Implementation notes

If the user asks for code, convert the system into semantic HTML/CSS or the requested stack.
If the stack is not specified, prefer React + Tailwind + CSS variables.
Use mobile-first styles.
Use semantic token names over raw colors and magic numbers.

## Color system
Read `references/design-tokens.css` before implementing.
Treat those values as the default base theme.
Only change them when:
- the user already has a brand palette
- the domain needs a different trust signal
- contrast or accessibility would suffer
- the UI is intentionally playful, editorial, or heavily branded rather than SaaS-like

### Color rules
Use only these color families by default:
- Neutral: backgrounds, surfaces, text, borders
- Brand: key actions, selected states, active nav, links, highlighted charts
- Semantic: success, warning, danger, info

Do not invent extra accent colors unless the interface clearly needs them.
Most of the UI should live on neutral surfaces.
Do not color-code everything.

Use layered surfaces:
- canvas: app/page background
- subtle: section background or muted band
- surface: default card or panel
- elevated: dialog, popover, selected tab, floating surface
- inset: table wells, chart wells, progress tracks, nested containers

### Color handling rules
- Prefer HSL or OKLCH style thinking so lightness is easy to control.
- Hierarchy often comes more from lightness contrast than from hue changes.
- To emphasize one thing, often lower the prominence of surrounding text before making the target louder.
- App UIs should typically use 3 text tones: primary, secondary, tertiary. Add inverse only for dark surfaces.
- Marketing pages can add a subtle gradient field or glow, but dense product UI should stay calmer.
- Borders should usually be weaker than text and stronger than shadows.
- If two adjacent surfaces already separate clearly in tone, skip the border.

## Typography system
Read `references/typography-system.md`.
Typography is a primary hierarchy tool, not styling garnish.
For most SaaS interfaces, typography does more work than illustration.

### Typography principles
1. Use four levers to build hierarchy: size, weight, color, spacing.
2. Use fewer sizes than you think.
3. Large headlines should rely on size first, not extreme weight.
4. Small text needs more line-height than large text.
5. Use secondary text color before dropping font size.
6. Use `rem`, not `px`, for resilient scaling.
7. Keep semantic document structure and visual hierarchy aligned where possible, but do not confuse HTML heading level with visual size.
8. Review typography in context. A size is never correct in isolation.
9. Use line-height as part of the spacing rhythm between text elements.
10. Marketing pages can use fluid display sizes. Internal app UI should mostly stay on a restrained step scale.

### Default type families
- Primary UI font: Inter
- Optional secondary display font for marketing hero only: DM Sans or Lexend
- Monospace for code or machine data only

### Default static step scale
Use a restrained base scale:
- 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 48 / 60

### Default weight scale
- 400 regular
- 500 medium
- 600 semibold
- 700 bold for display emphasis only

Do not use a forest of weights.
A good SaaS system usually survives on 400, 500, 600, and occasional 700.

### Default role mapping
- Display / hero: fluid size, tight line-height, slight negative tracking
- Page title: 30 to 36px equivalent
- Section title: 20 to 24px equivalent
- Card title: 16 to 18px equivalent
- Body: 14 to 16px equivalent
- Label: 12 to 14px equivalent with strong contrast
- Caption/helper: 12 to 14px equivalent with softer contrast
- Numeric metric: title size with calmer weight than you expect

### Tracking rules
- Large display text can use slight negative letter-spacing
- Standard body copy should stay near normal tracking
- Small labels, overlines, and all-caps chips can use slight positive tracking
- Avoid aggressive tracking for normal paragraph copy

### Line-length rules
- Long-form or docs prose: 60 to 72ch
- Marketing supporting copy: 50 to 65ch
- Tight form descriptions or settings text: 45 to 60ch
- Do not let long paragraphs stretch across very wide monitors

## Spacing system
Use a 4px / 0.25rem scale:
0.25, 0.5, 0.75, 1, 1.25, 1.5, 2, 2.5, 3, 4, 5, 6 rem

### Spacing heuristics
- 0.5rem: tightly related text or icon-to-label
- 0.75rem to 1rem: control internals, list rows, chip gaps
- 1rem: common padding and card internals
- 1.5rem to 2rem: separation between distinct groups
- 3rem to 6rem: section spacing on marketing pages

Always keep outer padding larger than inner element gaps.
Vertical rhythm should come from both stack spacing and text line-height.
Start a layout slightly too spacious, then compress only if density truly helps.

## Radius system
Use a tight modern radius scale:
- 6px small inputs and badges
- 10px buttons and compact cards
- 14px standard cards and panels
- 18px large panels and marketing modules
- 24px dialogs or feature spotlights when the tone is softer/friendlier

Do not mix too many radii in one interface.

## Depth system
Read `references/design-tokens.css` for the actual values.
Use only these depth modes:
- none
- soft
- medium
- strong
- inset

### Depth rules
- Light mode can use subtle drop shadows plus clean borders.
- Dark mode should rely more on layered backgrounds, top highlights, and restrained shadows.
- Use stronger depth for selection, focus, floating surfaces, and primary CTAs.
- Do not give every card the same shadow.
- Tables and dense data zones usually want inset surfaces or almost-flat surfaces, not loud elevation.

## Density modes
Support three density modes.

### Comfortable
Use for landing pages, onboarding, settings, and empty states.
- card padding 24 to 32px
- control height 44 to 48px
- generous section spacing

### Balanced
Default for most product screens.
- card padding 20 to 24px
- control height 40 to 44px
- table row height 44 to 52px

### Compact
Use only for data-heavy admin views or analyst tools.
- card padding 16 to 20px
- control height 36 to 40px
- table row height 36 to 44px

Never let compact mode feel cramped.
Reduce padding before shrinking type.

## Flexibility system
Read `references/flexibility-system.md`.
Flexibility means components and layouts can adapt within safe rules.
It does not mean every screen becomes visually random.

### Flexibility principles
1. Prefer content-driven breakpoints, not device mythology.
2. Stack before shrinking text.
3. Wrap before forcing overflow.
4. Use `min-width: 0` on flex children that contain text.
5. Use `clamp()` for fluid display sizes and sectional spacing, not every tiny measurement.
6. Use `flex` and `grid` primitives that can grow and shrink.
7. Cap line lengths and container widths on large screens.
8. Stress-test long labels, large data, empty states, zoom, and localization.
9. Reduce complexity in the layout before reducing readability.
10. One good responsive pattern is better than five brittle breakpoints.

### Default layout ranges
- Max readable text width: 60 to 72ch
- Max main content width for marketing: 1200 to 1280px
- Max app shell width: full bleed with constrained inner containers
- Use 12-column grids on desktop when they genuinely help composition
- Collapse to single column on small screens
- Prefer stacking before shrinking type

### Responsive heuristics
- Mobile: single column, obvious safe CTA placement, avoid dense split panes
- Tablet: two-column only when scanning improves
- Desktop: use whitespace for hierarchy, not just more columns
- Wide screens: cap content width; do not let dashboards stretch forever
- Hero sections: fluid type is allowed; body copy stays bounded
- Tables: show key columns first or transform to cards; do not cram desktop tables into phones

### Recommended flexible patterns
Use these patterns often:
- `flex: 1 1 18rem` style card widths for dashboard side-by-side areas
- `repeat(auto-fit, minmax(min(18rem, 100%), 1fr))` for resilient card grids
- `repeat(auto-fit, minmax(min(22rem, 100%), 1fr))` for larger feature or pricing modules
- `clamp(1rem, 2vw, 2rem)` style gutters for outer padding
- `clamp(2.5rem, 6vw, 6rem)` style section spacing for public pages

## Component system
Read `references/component-spec.md`.
Every component spec should define:
- purpose
- variants
- sizes
- states
- icon rules
- typography slots
- accessibility requirements
- flexibility behavior
- when not to use it

Required base components:
- button
- icon button
- text input
- textarea
- select / combobox
- checkbox
- radio / segmented control
- switch
- badge
- tabs
- breadcrumb
- pagination
- card
- modal / dialog
- drawer
- dropdown menu
- tooltip
- toast
- table
- empty state
- skeleton
- stat card
- chart container
- side navigation
- top bar
- command/search bar
- pricing card
- testimonial card
- FAQ accordion
- feature grid item

## Public page guidance
Read `references/page-blueprints.md`.
Public SaaS pages must sell clarity, trust, and momentum.

### Home / landing page
Use this general order:
1. announcement or trust strip if useful
2. header
3. hero with one clear value proposition and one primary CTA
4. social proof or customer logos
5. core feature blocks
6. product tour or screenshots
7. use cases or role-based sections
8. testimonials
9. pricing teaser or comparison
10. FAQ
11. final CTA
12. footer

Rules:
- One hero headline, one supporting paragraph, one primary CTA, one secondary CTA max.
- Avoid crowded hero art.
- Use screenshots that show real product structure, not abstract decoration.
- Keep each section answerable by a user question.
- Let hero headlines breathe, but keep supporting copy measurable and bounded.
- CTA rows should stack cleanly on narrow screens.

### Pricing page
Must include:
- monthly/yearly toggle if relevant
- 3 to 4 tiers max in the first comparison row
- one clearly recommended plan
- concise feature groupings
- FAQ for billing, seats, cancellation, security, and support
- enterprise CTA when appropriate

Rules:
- recommended plan gets the strongest emphasis, not the loudest chaos
- feature lists should wrap cleanly and avoid uneven card heights where possible
- small print must remain legible

### Docs / blog / changelog
Prioritize scanning:
- strong search
- sticky sidebar or in-page table of contents where useful
- code blocks or examples with enough contrast
- clear heading rhythm
- quiet metadata
- bounded line length

### Auth pages
- Keep them calm and narrow
- One task per screen
- Support SSO clearly
- Use trust cues but avoid full marketing noise
- Error/help text should sit close to the field
- Do not overuse illustration or decoration

## Internal product guidance
Internal pages must optimize orientation, speed, and confidence.

### App shell
Use:
- left sidebar for primary navigation on desktop when the app is navigation-heavy
- top bar for search, quick actions, workspace switcher, notifications, and profile
- page header for title, filters, and primary actions
- persistent breadcrumb only when hierarchy is genuinely deep

### Dashboard
Typical structure:
1. title row
2. filter/date range row
3. key metrics
4. primary chart or activity trend
5. secondary cards
6. tables / recent activity / tasks

Rules:
- use one main insight block, not six equally loud stat cards
- tables and charts should not compete for top emphasis
- selected filters and time range must be obvious
- flex and grid layouts should wrap naturally before anything becomes unreadable

### Data tables
- sticky header when helpful
- row hover only subtle
- zebra striping only when it truly improves scan
- bulk actions appear only when rows are selected
- always provide loading, empty, filtered-empty, and error states
- on mobile, convert to cards or prioritized columns; do not cram a desktop table

### Detail pages
Pattern:
- summary card or page header
- tabs for subsections
- side rail for metadata or quick actions when useful
- activity log / audit trail lower on the page
- destructive actions isolated

### Settings
Make settings boring in the good way:
- low drama
- high clarity
- strong defaults
- consistent save behavior
- predictable spacing and type rhythm

### Billing
Need:
- current plan
- usage
- invoice history
- payment method
- seat management
- upgrade/downgrade cues
- cancellation flow with plain consequences

### Onboarding
- show progress
- one decision per step
- celebrate completion lightly
- do not front-load every optional setup
- pair setup with immediate first value

## Interaction rules
- Hover is a hint, not the primary communication channel.
- Focus-visible must be obvious and accessible.
- Disabled states should still be legible.
- Loading states should preserve layout.
- Empty states should explain what to do next.
- Destructive flows need confirmation only when the action is hard to undo.
- Microcopy should be direct, short, and useful.
- Make long labels wrap gracefully before truncating them.

## Motion rules
Default durations:
- 120ms for tiny feedback
- 160 to 200ms for controls
- 240ms for panels/dialogs

Use ease-out for entry and ease-in for exit.
Do not animate large layout shifts unless the interaction truly benefits.
Public pages can use more expressive motion than internal product UIs.

## Accessibility rules
- Meet WCAG contrast expectations.
- Minimum 44x44px tap target for touch-first controls when practical.
- Never remove focus outlines without a better replacement.
- Use visible labels for important inputs.
- Do not rely on color alone for state.
- Provide keyboard access for dialogs, menus, tabs, and tables where relevant.
- Use semantic HTML before ARIA.
- Chart information must also be available in text or tooltips.
- Error messages must say what happened and how to fix it.
- Respect zoom and font-size overrides.
- Do not solve responsive problems by shrinking body copy too far.

## Chart guidance
- One accent color for the primary series
- Neutral secondary series
- Avoid rainbow palettes
- Keep grid lines subtle
- Put the legend close to the data
- Put key summary numbers above the chart
- Use line/area charts for trends, bars for comparisons, tables for exact values

## Content rules
Buttons:
- Use verb-first labels such as `Create workspace`, `Invite member`, `Start free trial`
- Avoid vague CTA text like `Submit` unless context is extremely obvious

Headlines:
- Public pages: benefit-first
- Product pages: action- or context-first
- Prefer one strong claim over several weak ones

Descriptions:
- One idea per sentence
- Prefer specific outcomes over buzzwords
- Use secondary color before using tiny type

## Anti-patterns
Do not:
- center long paragraphs
- use more than one dominant CTA per section
- mix too many radii
- use random spacing values
- make every card elevated
- put loud gradients behind dense data
- use low-contrast placeholder text as the only label
- fill dashboards with equal-emphasis widgets
- use decorative icons where labels are clearer
- overuse colored badges
- hard-code widths that break on translation or zoom
- create a separate brittle layout for every device width
- shrink type to rescue a broken layout when stacking or wrapping would solve it better

## Implementation preferences
If building code:
1. Create tokens first
2. Create type roles and text utilities second
3. Create primitives third
4. Create composed components fourth
5. Create page sections fifth
6. Assemble full pages last

Preferred frontend defaults:
- semantic HTML
- CSS variables for tokens
- reusable component variants
- mobile-first breakpoints
- dark mode support where appropriate
- clamp only where fluid sizing is truly useful
- flexible grid/flex primitives instead of rigid magic widths

### CSS preferences
Prefer these patterns:
- CSS variables for design tokens
- `min-width: 0` on flex children containing text
- `grid-template-columns: repeat(auto-fit, minmax(min(...), 1fr))` for resilient grids
- `flex-wrap: wrap` for dashboard rows and split layouts
- `max-width` for long text blocks
- `clamp()` for hero type, hero media sizing, and large sectional spacing

Use caution with:
- too many breakpoint-only overrides
- fixed heights on cards containing dynamic content
- giant shadows in dense data views
- long transition durations

## Deliverable templates

### If the user asks for a design brief
Return:
- style direction
- token summary
- typography summary
- flexibility strategy
- component inventory
- page blueprint
- rationale

### If the user asks for implementation
Return:
- token file
- type utilities or roles
- primitive components
- composed sections
- page assembly
- notes on accessibility and responsiveness

### If the user asks for redesign
Return:
- current problems
- retained strengths
- new hierarchy
- updated tokens and type system
- updated layout/flexibility rules
- migration plan

### If the user asks for critique
Return:
- what is working
- what is hurting hierarchy
- what is hurting trust
- what is hurting responsiveness/flexibility
- what to change first

## Final self-check
Before finishing, verify:
- Is the interface scannable in 5 seconds?
- Is there one obvious primary action?
- Are spacing values consistent?
- Are surface layers clear?
- Is the typography using size, weight, color, and spacing intentionally?
- Are long labels, large data, and empty states handled cleanly?
- Does the responsive layout preserve hierarchy?
- Does the design stay strong from narrow mobile widths to large desktop widths?
- Do public and internal pages feel related but appropriately different?
- Can another engineer extend this system without guessing?

## Fast review checklist for typography and flexibility
When the user specifically cares about typography or responsiveness, audit these items explicitly:

### Typography audit
- Are there too many font sizes?
- Are headings getting hierarchy from size before weight?
- Is secondary text being used instead of unnecessary tiny text?
- Is line-height appropriate for the text size?
- Is body copy still readable at a glance?
- Are labels, helper text, and data values clearly differentiated?
- Is the type system consistent across marketing and app screens?

### Flexibility audit
- Does the layout wrap before it breaks?
- Are there rigid widths that should become flexible bases?
- Are grids using resilient minimums?
- Does the page still work at 200 percent zoom?
- Does copy stay bounded on wide screens?
- Do tables have a small-screen fallback?
- Are component states robust for long strings and localization?
