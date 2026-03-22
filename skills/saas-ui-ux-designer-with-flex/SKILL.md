---
name: saas-ui-ux-designer-with-flex
description: Full-system SaaS UI/UX design workflow for product interfaces that should feel premium, calm, structured, responsive, and production-ready. Use when designing or refactoring dashboards, settings pages, editors, builders, forms, tables, modals, drawers, sidebars, and runtime configuration screens. Also use when deciding layout hierarchy, typography, spacing, neutral surface treatment, card composition, flex/grid structure, dark/light parity, and reusable system patterns across a SaaS app.
---

# SaaS UI UX Designer With Flex

## Overview

Use this skill to design real SaaS product UI with a system-first approach. It is for application surfaces and workflow-heavy pages, not decorative concept work.

## Workflow

1. Define the user goal, the current state the page must show, and the single primary action.
2. Choose the structure before styling:
   - page intro
   - current-state summary
   - main configuration or working area
   - supporting panels
   - secondary details
3. Build the layout with flex or grid based on content behavior:
   - flex for aligned controls, toolbars, settings rows, action groups
   - grid for repeated cards, summary tiles, split lanes, and multi-column forms
4. Apply the full design system from [references/saas-ux-design-system-skills.md](references/saas-ux-design-system-skills.md).
5. Keep typography, spacing, surfaces, and states consistent across the full page.
6. Final-check:
   - hierarchy is obvious at a glance
   - accents are restrained
   - cards feel like one family
   - empty/loading/error states exist where needed
   - mobile layout stacks cleanly

## Defaults

- Neutral-first surfaces
- Premium SaaS product tone
- Dark-first with light-mode parity
- One clear primary action per section
- Reusable components over one-off markup
- Typography and spacing carry hierarchy
- Flex/grid structure chosen deliberately, not by habit
- Semantic colors only for status

## Use This Skill To

- design internal product pages, dashboards, settings screens, editors, and builders
- review or refactor noisy UI into one coherent product system
- decide page hierarchy, card composition, panel structure, and control density
- improve typography rhythm, layout alignment, and visual consistency
- choose when to use cards, tabs, chips, forms, tables, drawers, and sidebars

## References

Read these references as needed, in this order for broad UI work:

1. [references/saas-ux-design-system-skills.md](references/saas-ux-design-system-skills.md)
   Full product UI system, philosophy, tokens, component rules, responsiveness, and defaults.
2. [references/typography-system.md](references/typography-system.md)
   Typography hierarchy, scale, weight, spacing, and SaaS readability rules.
3. [references/flexibility-system.md](references/flexibility-system.md)
   Flexibility and responsive-layout rules for resilient SaaS UI.
4. [references/design-tokens.css](references/design-tokens.css)
   Concrete token defaults for color, type, spacing, radius, and depth.
5. [references/component-spec.md](references/component-spec.md)
   Shared component rules and expectations for buttons, inputs, navigation, tables, and more.
6. [references/page-blueprints.md](references/page-blueprints.md)
   Page-level composition patterns for landing pages, pricing, features, docs, dashboards, builders, settings, and data views.
7. [references/video-alignment.md](references/video-alignment.md)
   Notes showing how the bundle aligns with the original typography/flexibility direction.

Use [assets/default-saas-tokens.css](assets/default-saas-tokens.css) when the task needs a ready token starter file rather than only conceptual guidance.

## Constraints

- Prefer existing product patterns and tokens when working inside an established app.
- Do not invent decorative styles that break the system just to make one screen feel different.
- Avoid loud color, visual noise, and concept-art styling unless explicitly requested.
- Keep output production-ready and workflow-oriented.
