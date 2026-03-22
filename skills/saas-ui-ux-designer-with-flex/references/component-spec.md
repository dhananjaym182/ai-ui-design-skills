# Component spec

## Global component rules
- Keep the component library small, consistent, and easy to compose.
- Every component needs default, hover, active, focus-visible, disabled, loading, and error behavior when relevant.
- Icons support meaning but should not replace labels unless the action is universally known.
- Prefer semantic slots over deeply nested style overrides.
- For dense internal tools, reduce padding before reducing font size.
- Every component should define its typography slots and flexibility behavior.
- Every component should survive long labels, missing icons, zoom, and localization.

## Shared typography slots
Use these slots consistently across components:
- title: component headline or dominant value
- label: form/control label or small heading
- body: explanatory copy
- helper: passive support text
- meta: timestamp, count, or secondary signal
- value: KPI or key numeric output

Rules:
- label should usually be medium or semibold and primary contrast
- helper should be quieter than label but still readable
- value should usually get size before extra weight
- body should usually be regular or medium, never decorative

## Shared flexibility rules
Each component should answer:
- What happens if the content wraps to 2 or 3 lines?
- What is the minimum comfortable width?
- What happens at 200 percent zoom?
- What happens with no icon or no helper text?
- Does the component still work on touch and keyboard?

## Buttons
### Primary button
Use for the single most important action in a view.
- Variants: solid, soft
- Sizes: sm, md, lg
- Height: 36, 40, 46px
- Padding: horizontal padding larger than vertical padding
- Text slot: label text at 14 to 16px equivalent, medium or semibold
- States: hover darkens background, active compresses shadow slightly, focus-visible adds ring, disabled lowers contrast but stays legible
- Icon rule: icon size 16 to 18px and gap 8px
- Flexibility: allow button rows to wrap on small screens; do not force every CTA into one row
- Do not use: more than one dominant primary button in the same section

### Secondary button
Use for less important actions that still need clear affordance.
- Variant: outline or subtle surface fill
- Must never compete more than the primary button
- Flexibility: label can wrap only when the button is full-width or mobile-stacked; otherwise keep labels concise

### Ghost button
Use inside toolbars, tables, and compact card actions.
- Needs clear hover/focus styles so it does not disappear
- Flexibility: allow compact use in wrapped toolbar rows

### Destructive button
Use for delete, remove, revoke, cancel subscription, and similar actions.
- Pair with explicit labels
- Consider confirmation only when the action is hard to undo
- Keep destructive styling strong enough to notice, not theatrical

## Icon button
Use for compact toolbar or row actions.
- Sizes: 32, 36, 40px square
- Must always have accessible label text
- Do not place multiple unlabeled icon buttons in a row without tooltips or grouping
- Flexibility: preserve tap size even in compact density mode

## Inputs
### Text input
- Label above field by default
- Helper text below field when needed
- Leading icon only when it adds clarity
- Error text should explain the fix, not just say invalid
- Placeholder is example content, not a replacement for the label
- Typography: input text 14 to 16px equivalent; label slightly stronger than helper
- Flexibility: field width can grow, but text and helper must wrap cleanly

### Textarea
- Default to 4 to 6 rows
- Resize vertically where appropriate
- Use for longer text, notes, prompts, descriptions
- Flexibility: avoid fixed heights unless the content is intentionally bounded

### Select / combobox
- Use select for short fixed lists
- Use combobox for long lists or search-heavy lists
- Selected state must be obvious
- Keyboard support matters
- Flexibility: selected values may be long, so allow internal text truncation only when necessary and preserve full value access

### Checkbox
- Use for independent binary selections
- Group related options under a short field legend
- Typography: option labels should remain readable when multi-line
- Flexibility: preserve top alignment when labels wrap

### Radio / segmented control
- Radio for mutually exclusive decisions with short descriptions
- Segmented control for 2 to 4 short mutually exclusive options
- Selected state should be visibly elevated or filled
- Flexibility: if labels become long, switch from segmented control to radio list

### Switch
- Use for immediate on/off system state
- Avoid when confirmation or multi-step explanation is required
- Pair with a clear label and optional helper text

## Navigation
### Sidebar
- Desktop default for product UI when primary navigation is complex
- Primary nav at top, secondary/support items near bottom
- Active state should combine tone change with shape and maybe icon emphasis
- Keep icons consistent in style and weight
- Typography: nav labels should be concise and scannable
- Flexibility: on smaller screens, sidebar should collapse into drawer or overlay behavior

### Top bar
- Use for search, quick actions, environment switcher, notifications, and profile
- Avoid stuffing global filters here unless they affect most pages
- Flexibility: controls should wrap or collapse intelligently; search can reduce or disappear before the layout breaks

### Breadcrumbs
- Use only for deeper hierarchies
- Do not show breadcrumbs on every shallow page by default
- Flexibility: keep them scrollable or collapsible when paths get long

### Tabs
- Use for peer sections inside a page
- Selected tab should change both text and surface treatment
- Keep tab labels short
- Flexibility: switch to dropdown or segmented alternative when tab counts or label lengths become unwieldy

## Containers
### Card
- Default building block for stats, forms, summaries, and marketing modules
- Variants: flat, surface, elevated, inset
- A card should have one clear purpose
- Do not nest too many elevated cards inside elevated parents
- Typography: define title, body, meta, and action areas clearly
- Flexibility: cards should have sensible minimum widths and tolerate variable content height

### Stat card
- Needs title, value, supporting delta or context
- One stat card can be larger than the rest to create hierarchy
- Do not place too many equally loud stat cards in one row
- Typography: value dominates by size first, not extreme weight
- Flexibility: use repeatable auto-fit grids and protect minimum readable width

### Inset panel
- Good for tables, code blocks, progress tracks, and nested surfaces
- Prefer inset treatment over extra borders when density is high
- Flexibility: allow scrolling only when needed and preserve internal padding rhythm

## Overlay components
### Modal / dialog
- Use for focused tasks, confirmations, small forms
- Width should match task complexity, not fill the viewport by default
- Needs ESC, overlay click policy, focus trap, and return focus behavior
- Typography: title and supporting text should separate clearly
- Flexibility: full-height mobile sheet patterns often work better than tiny centered dialogs on narrow screens

### Drawer
- Use for contextual editing, filters, or secondary flows that benefit from preserving page context
- Better than modal for multi-step edits or wide forms
- Flexibility: allow narrower widths on desktop and full-height behavior on mobile when helpful

### Dropdown menu
- Use for compact action lists
- Keep items short and grouped
- Destructive items separated visually
- Flexibility: long item labels should wrap only if the menu width can support it; otherwise keep labels concise

### Tooltip
- Use for explanation, not critical information
- Never rely on tooltip only for touch users

### Toast
- Use for transient confirmation, not for critical errors that need action
- Include undo when useful
- Flexibility: stacked toasts should not cover primary controls on small screens

## Feedback states
### Badge
- Use for status or count
- Keep palette restrained
- Variants: neutral, accent, success, warning, danger
- Typography: small, medium-weight, concise
- Flexibility: badged content should wrap gracefully when paired with long labels

### Alert / inline message
- Use when the user should notice something and potentially act on it
- Must be more persistent than a toast
- Typography: title optional, body concise, action clear
- Flexibility: allow multi-line text and action wrapping on small screens

### Skeleton
- Match final layout shape closely
- Use for loading, especially in cards and tables
- Flexibility: preserve approximate final height so the page does not jump dramatically

### Empty state
- Must explain what is missing, why it matters, and the next best action
- Optional illustration only if it does not feel childish for the domain
- Typography: one strong title, one short supporting message, one clear CTA

## Data display
### Table
- Use for exact values, scanning, and bulk actions
- Must support loading, empty, filtered-empty, and error states
- Sticky header helps on long tables
- Row action reveal should not cause layout shift
- Mobile fallback should prioritize key columns or switch to stacked cards
- Typography: headers stronger than cell text, metadata quieter, numeric columns align thoughtfully
- Flexibility: define a small-screen strategy up front

### Chart container
- Always include title, time scope, and key numbers above or near the chart
- Use muted grid lines and keep color usage restrained
- Avoid decorative gradients that reduce readability
- Typography: key number and title should be readable without competing
- Flexibility: charts need bounded height ranges and readable legends; provide textual summaries for critical signals

## Marketing components
### Hero section
- One main message
- One primary CTA
- Optional secondary CTA
- Use real product visuals whenever possible
- Typography: fluid display okay, support copy bounded and calmer
- Flexibility: stack text and media naturally; CTA row wraps or stacks cleanly

### Feature grid item
- Structure: eyebrow or icon, title, short copy, optional proof point
- Keep copy concise and benefit-led
- Flexibility: use auto-fit grid patterns and avoid copy that creates chaotic height differences

### Pricing card
- Needs plan name, price, billing rhythm, best-fit label if relevant, core features, CTA
- One card may be recommended, but do not make the others feel broken
- Typography: price must dominate, but fine print must stay readable
- Flexibility: cards stack on smaller screens and feature lists should wrap cleanly

### Testimonial card
- Prefer real name, role, company, and believable quote length
- Face imagery can help trust when appropriate
- Flexibility: quote length should not destroy the surrounding rhythm; clamp excessive copy when needed and link to full case study if available

### FAQ accordion
- Use short questions and direct answers
- Keep legal or billing edge cases separate if they dominate the page
- Flexibility: answer blocks should preserve readable measure and not overflow narrow containers
