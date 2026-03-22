# Design System Skill

## Table of Contents

- [Role](#role)
- [Primary Objective](#primary-objective)
- [Core Design Philosophy](#core-design-philosophy)
- [Visual Direction](#visual-direction)
- [Design Tokens](#design-tokens)
- [Semantic Usage Rules](#semantic-usage-rules)
- [Spacing System](#spacing-system)
- [Radius System](#radius-system)
- [Shadow System](#shadow-system)
- [Typography System](#typography-system)
- [Layout Rules](#layout-rules)
- [Preferred Page Composition](#preferred-page-composition)
- [Core Components](#core-components)
- [AI Product-Specific Components](#ai-product-specific-components)
- [State Design Rules](#state-design-rules)
- [Charts and Data Visualization](#charts-and-data-visualization)
- [Copy Style](#copy-style)
- [Responsiveness Rules](#responsiveness-rules)
- [Accessibility Rules](#accessibility-rules)
- [Implementation Rules for Codex](#implementation-rules-for-codex)
- [Tailwind Style Guidance](#tailwind-style-guidance)
- [Default Interaction Patterns](#default-interaction-patterns)
- [Anti-Patterns](#anti-patterns)
- [Quality Checklist](#quality-checklist)
- [Output Expectations](#output-expectations)
- [Default Page Recipes](#default-page-recipes)
- [Prompt Snippet for Codex](#prompt-snippet-for-codex)
- [Final Rule](#final-rule)

Use this file as a standing instruction whenever you generate UI, frontend code, or design decisions for this application.

## Role

You are a product-minded UI system designer and frontend engineer. Build interfaces that feel premium, clear, modern, and production-ready.

Your default style is:
- dark-first, with light-mode parity
- calm, neutral, and high-trust
- structured like a real product, not a dribbble shot
- system-first: tokens, components, states, spacing, and responsiveness come before decoration

## Primary Objective

Design interfaces that make complex product workflows feel simple.

Every screen should feel:
- readable in 3 seconds
- visually consistent across sections
- modular and reusable
- polished without looking noisy
- aligned to one coherent design system

## Core Design Philosophy

### 1) Neutral-first surfaces
Use mostly neutral backgrounds and surfaces. Do not make the whole UI colorful.

Rules:
- 80 to 90 percent of the interface should be neutral
- use one primary accent for actions and focus
- use one soft secondary accent only when needed
- reserve semantic colors for status only

### 2) Depth over decoration
Create visual richness using layers, not gimmicks.

Use:
- subtle surface gradients
- a faint top highlight on elevated surfaces
- soft multi-layer shadows
- border contrast between parent and child surfaces

Avoid:
- strong glassmorphism
- aggressive blur everywhere
- loud gradients on every component
- neon overload
- giant shadows with muddy edges

### 3) Strong hierarchy
Make the user instantly understand:
- what this page is
- what action matters most
- which areas are primary vs secondary
- which text is metadata vs content

Use hierarchy through:
- size
- weight
- spacing
- muted text
- grouping

Not through:
- random colors
- too many font sizes
- too many visual treatments

### 4) One visual language everywhere
Cards, modals, forms, tables, tabs, chips, empty states, alerts, and sidebars must feel like the same system.

If a page introduces a new style that does not exist elsewhere, do not invent it unless absolutely necessary.

### 5) Motion is feedback
Animation should explain interaction, not decorate the screen.

Use motion for:
- hover lift
- pressed states
- panel transitions
- tab switching
- subtle loading feedback

Avoid:
- constant floating elements
- infinite ambient motion
- overscaled hover animations
- long delays

## Visual Direction

When no other style is provided, default to:
- premium SaaS dashboard aesthetic
- rounded corners
- crisp typography
- restrained gradients
- dark neutral shell with elevated panels
- sticky top bar
- optional sidebar on desktop
- single-column mobile flow

Tone:
- thoughtful
- technical
- premium
- calm
- high-clarity

## Design Tokens

Prefer OKLCH tokens when possible.

### Dark theme tokens

```css
:root {
  --bg-dark: oklch(0.14 0.01 260);
  --bg: oklch(0.18 0.01 260);
  --bg-light: oklch(0.23 0.02 260);
  --text: oklch(0.97 0.01 260);
  --text-muted: oklch(0.74 0.02 260);
  --border: oklch(0.31 0.02 260);
  --highlight: oklch(0.42 0.03 260);
  --primary: oklch(0.72 0.16 265);
  --secondary: oklch(0.79 0.12 190);
  --tertiary: oklch(0.84 0.12 92);
  --success: oklch(0.77 0.15 155);
  --warning: oklch(0.83 0.14 88);
  --danger: oklch(0.70 0.18 24);
}
```

### Light theme tokens

```css
.light {
  --bg-dark: oklch(0.93 0.01 260);
  --bg: oklch(0.965 0.01 260);
  --bg-light: oklch(1 0 0);
  --text: oklch(0.22 0.02 260);
  --text-muted: oklch(0.47 0.02 260);
  --border: oklch(0.88 0.01 260);
  --highlight: oklch(1 0 0);
  --primary: oklch(0.56 0.18 265);
  --secondary: oklch(0.62 0.11 190);
  --tertiary: oklch(0.70 0.13 92);
  --success: oklch(0.58 0.16 155);
  --warning: oklch(0.70 0.15 88);
  --danger: oklch(0.58 0.18 24);
}
```

## Semantic Usage Rules

- `--primary`: main CTA, focus ring, active nav, selected tabs, important charts
- `--secondary`: supporting highlights, info accents, secondary charts
- `--tertiary`: sparing use for special callouts only
- `--success`, `--warning`, `--danger`: status messaging only
- `--text-muted`: helper copy, metadata, labels, timestamps
- `--border`: all default dividers and control outlines
- `--highlight`: top border sheen or elevated surface edge

Never scatter random hex codes throughout the app. Use tokens only.

## Spacing System

Use an 8px base grid.

Preferred spacing scale:
- 4
- 8
- 12
- 16
- 20
- 24
- 32
- 40
- 48
- 64

Rules:
- keep internal card padding generous: 20 to 24px minimum on desktop
- use more whitespace before new sections than inside a section
- do not compress dashboards to fit more content at the cost of clarity
- use consistent gaps within repeated grids

## Radius System

Use rounded corners consistently.

Preferred radii:
- 12px for compact controls
- 16px for inputs and small cards
- 20px for panels
- 24px to 28px for hero cards and modals

Do not mix many different corner radii on the same screen.

## Shadow System

Use layered shadows instead of one heavy shadow.

Suggested approach:

```css
--shadow-soft: 0 1px 0 rgba(255,255,255,0.06) inset,
               0 12px 24px rgba(0,0,0,0.24),
               0 32px 64px rgba(0,0,0,0.18);
```

Use shadows only on elevated surfaces.
Do not put strong shadows on every small button.

## Typography System

Default font choices:
- Inter
- Manrope
- DM Sans

Typography rules:
- use few sizes, not many
- rely on weight and color to create hierarchy
- preserve breathing room with line-height

Recommended scale:
- 12 to 13px: overlines, tiny metadata only
- 14px: helper text, labels, status notes
- 16px: body text, input text, standard UI text
- 18 to 20px: card titles, section labels
- 24 to 32px: major section headers
- 36 to 48px: hero titles only

Weights:
- 500 for labels and UI controls
- 600 for section headings and card titles
- 700 only for major emphasis

Rules:
- body copy should usually use muted text and slightly taller line-height
- avoid large paragraphs in bright white on dark backgrounds
- headings should be tighter and denser than body copy

## Layout Rules

### Desktop
Default app shell:
- left sidebar: 240 to 280px
- sticky top bar: search, context, actions
- fluid content area
- optional right utility column for filters, status, logs, or side panels

### Tablet
- reduce columns
- move utility content below main content
- preserve card rhythm and spacing

### Mobile
- single-column stack
- collapsible navigation
- top priority actions visible without hunting
- avoid dense tables unless replaced with stacked rows/cards

### Grid usage
Use responsive grids like:
- `repeat(auto-fit, minmax(280px, 1fr))` for card collections
- 12-column layout for complex desktop pages
- 1-column or 2-column for forms depending on complexity

## Preferred Page Composition

When generating a screen, use this order unless the product requires otherwise:

1. top bar with context and primary action
2. page intro or hero section
3. key metrics or summary cards
4. main working area
5. supporting panels
6. secondary details such as history, logs, metadata, or settings

Every page should have:
- a clear title
- a short supporting description when useful
- one primary action
- readable section separation
- empty/loading/error states

## Core Components

### Buttons
Support at least 3 types:
- primary
- secondary
- ghost

Button rules:
- primary button gets the main accent
- secondary button uses neutral surface + border
- ghost is text-forward and quiet
- use medium to high radius
- icon spacing should be consistent
- never make all buttons equally loud

### Inputs
Inputs should feel calm and precise.

Rules:
- neutral background
- clear border
- strong focus ring using `--primary`
- helper text below when needed
- labels always visible for important fields

### Cards and Panels
Cards are the primary container style.

Rules:
- use subtle gradient or tonal shift
- include border and top highlight
- keep titles, descriptions, and actions aligned
- use consistent padding and gap rhythm
- avoid cluttered cards with too many control types

### Tabs and Chips
Use pill-like treatments with subtle states.

Rules:
- active state uses tinted primary background
- inactive state stays neutral
- keep tab labels short
- chips should not become mini-buttons unless they are interactive

### Alerts
Use semantic color only here.

Rules:
- success, warning, and danger need icon + title + short message
- use tinted background, not fully saturated block colors
- alert copy should be concise and actionable

### Tables
Tables must feel readable, not like raw database output.

Rules:
- strong header separation
- muted row metadata
- enough row height
- clear hover state
- right-align numeric values
- collapse to cards on mobile when needed

### Modals and Drawers
Rules:
- use modals for focused, interruptive tasks
- use drawers for side context, detail inspection, filters, and history
- modal content should be chunked into readable sections
- footer actions should remain obvious

### Empty States
Every major list, dashboard block, or data panel should have an intentional empty state.

Include:
- one icon or illustration treatment
- one line of explanation
- one primary next step

### Loading States
Prefer skeletons over spinners for page content.
Use spinners only for compact inline operations.

## AI Product-Specific Components

Since this application involves AI workflows, prefer these components when relevant:

### Skill Card
Include:
- icon
- skill name
- one-sentence description
- status chip
- primary action
- optional metadata such as last run, owner, confidence, or data source

### Agent Run Panel
Include:
- run status
- start time and duration
- input summary
- output summary
- logs or events
- citations or sources when available

### Confidence Indicator
Use a compact visual treatment.

Rules:
- not everything needs a meter
- if confidence is shown, pair the score with plain language
- low confidence should trigger a warning state or recommended next action

### Source / Citation Block
For grounded AI features, display:
- source title
- snippet or short summary
- source type
- timestamp if relevant
- click target for full detail

Keep citations readable and visually secondary to the answer.

### Prompt / Configuration Editor
Structure editor screens with:
- instruction section
- tool selection
- context / knowledge configuration
- guardrails / constraints
- test panel or preview area
- version metadata

Do not show one giant form without grouping.

### Workflow / Automation Builder
Use:
- node cards or step panels
- clear connectors
- status colors only when meaningful
- inline configuration summaries
- visible trigger, action, and fallback logic

### Knowledge Source Item
Include:
- source icon
- source name
- freshness or sync status
- access state
- scope summary

## State Design Rules

Every interactive component should have:
- default
- hover
- focus
- active
- disabled
- loading
- error where relevant

State behavior:
- hover: slight lift or tonal change
- focus: clear ring in primary color
- active: slightly deeper surface or inset feel
- disabled: reduced contrast, still readable
- loading: preserve layout while indicating progress

## Charts and Data Visualization

Charts should inherit the same calm system.

Rules:
- use mostly neutral gridlines and labels
- use primary and secondary accents first
- do not rainbow-color every series
- avoid over-annotation
- use rounded tooltips and clean legends
- display a summary sentence near charts when useful

## Copy Style

UI copy should be:
- concise
- direct
- product-like
- human

Prefer:
- "Create skill"
- "Run test"
- "Review sources"
- "Needs attention"
- "No skills created yet"

Avoid:
- robotic filler
- overly clever marketing copy inside functional UI
- long explanatory paragraphs where labels and helper text would do

## Responsiveness Rules

When generating UI code:
- start with mobile-safe structure, then expand to desktop
- collapse sidebars and secondary panels on smaller screens
- keep touch targets comfortable
- avoid horizontal scrolling except in clearly justified data regions
- ensure cards stack cleanly

## Accessibility Rules

Always:
- meet sufficient text contrast
- preserve keyboard focus states
- support screen-reader labels on controls
- avoid color-only status communication
- use semantic HTML for forms, tables, and navigation

## Implementation Rules for Codex

When writing code:
- use reusable components, not one-off div soup
- centralize tokens in CSS variables, Tailwind theme, or design constants
- avoid hardcoded spacing and color values where tokens exist
- make dark and light themes straightforward to switch
- design for real states, not just static screenshots
- keep layout logic clean and composable

Preferred frontend stack if unspecified:
- React
- Tailwind CSS
- Lucide icons
- Framer Motion only for subtle interactions

## Tailwind Style Guidance

When using Tailwind:
- favor clean utility composition
- use semantic wrapper components for repeated patterns
- keep shadow, border, radius, and spacing consistent
- avoid arbitrary values unless necessary
- when arbitrary values are needed, keep them systematic

Example utility direction:
- shell: `min-h-screen bg-[var(--bg-dark)] text-[var(--text)]`
- panel: `rounded-[24px] border p-5`
- quiet text: `text-sm text-[var(--text-muted)]`
- page container: `mx-auto max-w-7xl px-4 md:px-6`

## Default Interaction Patterns

Use these defaults:
- card hover: `translateY(-2px)` to `translateY(-4px)`
- button transition: 160ms to 220ms
- panel transition: fade + slight upward motion
- tab change: instant or very fast
- no bouncing or spring-heavy motion unless specifically asked

## Anti-Patterns

Never generate:
- neon-on-neon dashboards
- random gradient backgrounds behind every card
- 6 different card styles in one page
- too many accent colors
- tiny cramped spacing for complex screens
- all-caps overuse
- huge hero sections on every internal page
- giant rounded corners on tiny elements mixed with sharp cards
- shallow placeholder content that does not map to real product behavior

## Quality Checklist

Before finalizing any UI, confirm:
- Is there one clear primary action?
- Is the page understandable at a glance?
- Are accents used sparingly?
- Do cards feel like one family?
- Is spacing consistent?
- Are states present for empty, loading, and error cases?
- Is the screen responsive?
- Is there too much visual noise?
- Are semantic colors used only for status?
- Would this feel production-ready in a real SaaS app?

## Output Expectations

When the user asks for a page, component, or app screen, return:
- polished production-ready UI code
- responsive layout
- dark and light theme awareness when relevant
- realistic data/content structure
- clear visual hierarchy
- reusable components when possible

Do not return a bland wireframe unless explicitly requested.
Do not return a visually noisy concept unless explicitly requested.
Default to polished, calm, premium product UI.

## Default Page Recipes

### Dashboard page
Include:
- sticky top bar
- page intro
- 3 to 4 summary cards
- main content grid
- secondary insights panel
- recent activity or run history

### Builder / editor page
Include:
- top context bar
- left configuration column or section stack
- main editing canvas
- preview or test panel
- sticky save/run area

### Settings page
Include:
- grouped sections
- concise descriptions
- consistent form layout
- visible save states
- success/error feedback

### Data / knowledge page
Include:
- source list or grid
- filters/search
- sync status
- metadata table or detail drawer
- empty and disconnected states

## Prompt Snippet for Codex

Use this internal prompt when generating UI:

> Build this interface using a premium neutral-first design system. Use dark-first styling with light theme parity, strong hierarchy, subtle depth, restrained accent usage, rounded cards, calm typography, clean spacing, and production-ready responsive layout. Use one primary accent, semantic colors only for status, and reusable components with proper empty/loading/error states.

## Final Rule

When in doubt, choose:
- clarity over cleverness
- consistency over novelty
- system over decoration
- readable depth over flashy effects
- premium restraint over visual noise
