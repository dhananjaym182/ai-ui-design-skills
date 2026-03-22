# Typography Flex Reference

## Core Idea

Use typography and layout as the primary hierarchy tools. Color and decoration should support the structure, not replace it.

## Typography Rules

- Keep the type scale tight.
- Use weight and spacing before adding more font sizes.
- Prefer:
  - `12px` to `13px` for metadata and overlines
  - `14px` for helper text and labels
  - `16px` for body copy and input text
  - `18px` to `20px` for section titles
  - `24px` to `32px` for page titles
- Use `500` for labels and controls.
- Use `600` for section titles.
- Use `700` only for strong emphasis.
- Body copy should usually be muted and have enough line height.

## Flex Layout Rules

Use flex when:

- laying out toolbars
- aligning form actions
- grouping metadata chips
- building stacked settings sections
- aligning left content and right utility actions

Defaults:

- `flex-col` on mobile first
- promote to `sm:flex-row` or `lg:flex-row` only when space is real
- use `items-start` unless controls truly share one baseline
- use `justify-between` only when both sides deserve equal importance

Avoid:

- forcing long text and action buttons into one tight row
- using `items-center` on blocks with multi-line text
- wide empty gaps created by `justify-between` on sparse layouts

## Grid Layout Rules

Use grid when:

- cards or settings blocks repeat
- two-column form groups are helpful
- summary cards need equal rhythm
- desktop lanes should collapse cleanly on mobile

Defaults:

- settings forms: `grid gap-4 md:grid-cols-2`
- summary cards: `grid gap-3 sm:grid-cols-2 xl:grid-cols-4`
- page lanes: `grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)]`

Avoid:

- dense three-column forms for complex settings
- mixing unrelated sections in one grid
- tiny cards that only hold two lines of text

## Card Composition

Cards should feel like one family:

- neutral or lightly tinted background
- visible border
- consistent radius
- consistent padding rhythm
- short, useful descriptions

Recommended composition:

1. overline or context label
2. card title
3. one-line or two-line description
4. primary controls
5. secondary helper copy

## Settings Page Recipe

Use this order:

1. page header
2. current-state summary
3. primary configuration lane
4. supporting or contextual lane
5. detail tables or provider lists

Every settings page should answer:

- what is active right now
- what can I change here
- what is primary vs optional
- what happens if I do nothing

## Action Priority

- One primary action per section.
- Save buttons should usually sit at the end of the section, not compete with every control.
- Upgrade or paywall CTAs should be visible but not louder than the section’s real primary action.

## Anti-Patterns

Avoid:

- stacked generic cards with no page-level summary
- equal visual weight across all sections
- too much helper text before the user sees the actual current state
- mixing settings, inventory, and runtime summary in one undifferentiated block
- overusing centered layouts on internal settings pages

## Quick Checklist

Before shipping:

- Is the current state obvious?
- Is the primary action obvious?
- Do the cards feel like one system?
- Does the page stay readable when sidebars open or collapse?
- Does the mobile layout stack cleanly without awkward empty space?
