---
name: saas-product-ui-system
description: Canonical SaaS product UI skill for designing, reviewing, or implementing calm, premium, production-ready interfaces across dashboards, settings, admin/runtime screens, editors, builders, tables, forms, drawers, sidebars, and related public surfaces. Use when you need strong hierarchy, reusable tokens, typography, responsive layout rules, component consistency, and app-surface patterns rather than decorative one-off design.
---

# SaaS Product UI System

## Overview

Use this skill as the default UI/UX and frontend-design workflow for serious SaaS product work. It combines the cleaner design-system language of `ui-ux-design-system` with the stronger workflow, typography, flexibility, and page-composition guidance from `saas-ui-ux-designer-with-flex`.

## Use This Skill To

- design or redesign dashboards, settings pages, admin panels, runtime/provider screens, editors, builders, billing, security, and data-heavy list/detail pages
- refactor noisy UI into one coherent product system
- decide layout hierarchy before styling
- improve typography, density, spacing, and responsive behavior
- implement or review frontend code that should feel product-grade and reusable
- choose the right composition for cards, tables, filters, side panels, drawers, dialogs, and summary strips

## Do Not Use This Skill For

- backend-only work with no UI or product-surface impact
- purely decorative concept art or poster-style design
- strict pixel cloning of a design system that already defines every token and component
- native mobile UI where platform conventions matter more than SaaS web patterns

## Workflow

1. Classify the surface:
   - public marketing or trust page
   - authenticated product workspace
   - admin or operations page
   - settings or runtime configuration
   - editor, builder, or writing workspace
2. Define the user goal, current state, and primary action.
3. Choose density before layout:
   - comfortable for onboarding, empty states, and trust-heavy surfaces
   - balanced for most product pages
   - compact for admin, reporting, and data-heavy operational views
4. Structure the screen before styling:
   - context row or page intro
   - current-state summary
   - main working area
   - supporting panels or side rails
   - secondary details
5. Choose layout primitives deliberately:
   - flex for aligned actions, rows, toolbars, filters, and control groups
   - grid for summaries, card collections, split lanes, and multi-column forms
6. Apply the design system, typography, component, and page-pattern references.
7. Produce implementation or critique with real states, responsive behavior, and clear hierarchy.

## Defaults

- Neutral-first surfaces
- Premium SaaS product tone
- Dark-first with light-mode parity
- One clear primary action per section
- Balanced density by default
- Typography and spacing carry hierarchy
- Semantic colors only for status, focus, and key actions
- Existing product patterns override invention when working in an established app

## Reference Loading Order

Load only what the task needs. For broad page work, use this order:

1. [references/product-ui-principles.md](references/product-ui-principles.md)
   Core philosophy, tokens, layout rules, AI-product patterns, state rules, responsiveness, and accessibility.
2. [references/app-surface-patterns.md](references/app-surface-patterns.md)
   App-oriented guidance for settings, admin, runtime, editors, tables, shell behavior, and density choices.
3. [references/typography-system.md](references/typography-system.md)
   Typography hierarchy, scale, weight, line-height, and readability rules.
4. [references/layout-flexibility.md](references/layout-flexibility.md)
   Responsive layout, flex/grid strategy, breakpoints, overflow handling, and stress-test rules.
5. [references/component-spec.md](references/component-spec.md)
   Shared component behavior and expectations for buttons, inputs, navigation, overlays, tables, and feedback states.
6. [references/page-blueprints.md](references/page-blueprints.md)
   Composition patterns for public pages and internal product surfaces.
7. [references/design-tokens.css](references/design-tokens.css)
   Concrete token values when implementation needs a ready CSS variable base.

Use [assets/default-product-tokens.css](assets/default-product-tokens.css) when a task needs a starter token file instead of conceptual guidance alone.

## Output Contract

Unless the user asks for something narrower, produce:

1. Product and user assumptions
2. Surface type and density mode
3. Visual direction
4. Layout structure
5. Typography and token decisions
6. Component and state decisions
7. Responsive and accessibility notes
8. Implementation notes or critique findings

If the user asks for code:
- follow the existing stack and patterns first
- use semantic tokens and reusable components
- keep markup production-ready and workflow-oriented

If the user asks for critique:
- identify hierarchy, density, state, and responsiveness gaps first
- recommend structural fixes before decorative changes

## Constraints

- Prefer existing product patterns and tokens when working inside an established app.
- Do not introduce decorative styles that break the system just to make one page feel unique.
- Keep admin and settings surfaces operational, not presentation-heavy.
- Keep copy short on settings and runtime pages; the UI should explain itself structurally.
- Build real empty, loading, error, disabled, and selected states where relevant.
- Avoid noisy gradients, scattered accent colors, and one-off visual treatments.
