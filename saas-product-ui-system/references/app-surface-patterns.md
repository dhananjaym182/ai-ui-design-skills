# App Surface Patterns

Use this file when working in a SaaS application with both customer-facing product UI and internal operational screens. These patterns are intended to keep the interface calm, modern, and easy to extend.

## Global Shell

- The shell should feel stable: sidebar, top bar, and page canvas should act like infrastructure, not content.
- Avoid stacking extra full-page backgrounds on top of an existing layout shell unless the page is intentionally special.
- Keep header action groups compact and aligned; do not let icons, avatars, or toggles overlap.
- In collapsed sidebar mode, icons should become compact square targets with centered alignment.
- Collapsed navigation should expand before revealing secondary content such as submenus or nested settings.

## Page Density by Surface Type

### Comfortable

Use for:
- onboarding
- empty states
- marketing or trust-heavy screens
- first-run setup

Characteristics:
- larger section spacing
- bigger cards and softer pacing
- more explanatory copy when necessary

### Balanced

Use for:
- most dashboards
- settings
- editors
- AI/runtime setup screens

Characteristics:
- medium card padding
- concise helper copy
- compact summaries with clear supporting panels

### Compact

Use for:
- admin pages
- provider inventories
- audit or ops views
- dense tables and reporting screens

Characteristics:
- less storytelling
- shorter intros
- tighter action bars
- tables or lists take priority over decorative summary blocks

## Settings Pages

- Show the current active state before asking the user to configure it.
- Group related settings by subsystem rather than by isolated form field.
- Use short helper text. If a paragraph is doing layout work, the hierarchy is wrong.
- Primary and fallback routes should appear near the top of the section, not hidden after provider details.
- Make locked or plan-gated options obvious and actionable.

## Admin and Runtime Pages

- Use a compact operational tone.
- Keep overview metrics short and directly useful.
- Tables, inventories, provider cards, filters, and status should dominate the page.
- Avoid oversized summary hero blocks on admin surfaces.
- Expansion panels should reveal operational detail quickly without a large visual detour.
- Health, fallback, default route, enabled state, and error state should be visible before deep expansion.

## Editors and Builders

- Start with context: what the user is creating, editing, or configuring.
- Surface the current brief, state, or destination early.
- Keep the main canvas primary and supporting controls secondary.
- Right rails should support the workflow, not compete with the editor.
- Action bars should stay readable and compact. Avoid splitting status across too many floating widgets.

## AI and Provider Configuration Screens

- Show the effective route first: primary, fallback, and current availability.
- Present configuration before provider inventory details.
- Separate user-controlled preferences from admin-managed infrastructure.
- For provider lists, emphasize status, availability, role, and quick actions over long descriptions.
- Use plan messaging sparingly and turn it into a clear CTA rather than verbose explanations.

## Tables and Data Views

- Tables should stay inside the viewport and scroll within their own container when needed.
- Avoid giant empty vertical space for short datasets.
- Keep filters and bulk actions close to the table, not far above it.
- In admin surfaces, prefer tighter row heights and shorter explanatory text.
- Use badges and secondary text to compress metadata without making rows noisy.

## Cards and Panels

- Cards on the same page should feel like one family.
- Use fewer card styles, not more.
- Summary cards should be compact and scannable.
- Working panels should be larger and calmer than metadata cards.
- Supporting panels should look secondary through spacing and text treatment, not loud color.

## Dialogs and Drawers

- Use dialogs for focused confirmation or compact forms.
- Use drawers when the task benefits from preserving page context.
- Structure overlays into clear sections: state, main form or action, secondary details.
- Avoid long introductions inside overlays.

## Copy and Messaging

- Prefer labels, short descriptions, and state badges over explanatory paragraphs.
- Keep settings copy instructional, not promotional.
- Error text should say what failed and what the next action is.
- Empty states should guide the next action without adding product marketing tone.

## Responsive Behavior

- On smaller widths, stack before shrinking type.
- Action groups should wrap cleanly rather than force overflow.
- Side panels should drop below the main content before the main content becomes cramped.
- Tables should preserve readability through horizontal scrolling, not by collapsing into unreadable cells.

## Final Check

- Is the current state visible early?
- Is the page density right for the surface type?
- Does the main working area dominate the page?
- Are supporting details visually secondary?
- Is operational UI concise enough for repeat use?
