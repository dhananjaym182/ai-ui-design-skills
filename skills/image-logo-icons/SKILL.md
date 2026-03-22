---
name: image-logo-icons
description: "Generate structured image prompts for brand visuals: logos, UI icons, favicons/PWA icons, featured blog images, and Open Graph social cards. Use when users ask to design or iterate brand identity assets, social preview graphics, or reusable prompt templates for image models."
---

# Image Logo Icons

Create production-ready prompts for brand and marketing images.

## Workflow

1. Classify request as one of:
   - `site_logo`
   - `ui_icon`
   - `featured_blog_image`
   - `social_og_image`
   - `favicon_app_icon`
2. Collect required fields from the input matrix below. Ask only for missing required fields.
3. Load the matching template from [references/templates.md](references/templates.md).
4. Apply global quality rules:
   - Keep one coherent visual language.
   - Keep output clean and uncluttered.
   - Avoid trademarked logo imitation or direct brand copying.
   - Prefer legibility at small sizes for logo/icon outputs.
5. Return results in this exact order:
   - `Final prompt:`
   - `Render settings:`
   - `Variation ideas:`

## Input Matrix

| Type | Required | Optional |
| --- | --- | --- |
| `site_logo` | `brand_name`, `niche`, `style`, `primary_color`, `mood` | `icon_concept`, `neutral_color`, `font_tone` |
| `ui_icon` | `icon_name`, `icon_purpose`, `icon_style`, `primary_color`, `size_context` | `stroke_weight`, `corner_style` |
| `featured_blog_image` | `article_title`, `keywords`, `primary_color`, `image_style`, `tone` | `visual_metaphor`, `focal_subject` |
| `social_og_image` | `brand_name`, `page_title`, `tagline`, `primary_color`, `bg_style` | `domain_text`, `logo_position` |
| `favicon_app_icon` | `brand_symbol`, `shape`, `primary_color`, `secondary_color` | `border_style`, `padding_ratio` |

## Defaults

Use defaults when optional fields are not provided:
- `neutral_color`: `slate gray`
- `font_tone`: `clean modern sans-serif`
- `stroke_weight`: `1.5px`
- `corner_style`: `slightly rounded`
- `visual_metaphor`: derive from title + keywords
- `focal_subject`: abstract symbol tied to keyword intent
- `domain_text`: include only if provided
- `logo_position`: `bottom-left`
- `border_style`: `none`
- `padding_ratio`: `12%`

## Multi-Asset Requests

If a user requests multiple assets in one turn:
1. Generate one prompt block per asset type.
2. Keep shared brand fields consistent (`brand_name`, palette, mood).
3. Vary only what each artifact needs (size, composition, style constraints).

## References

- Prompt templates: [references/templates.md](references/templates.md)
- Registry examples: [references/registry-snippets.ts](references/registry-snippets.ts)
