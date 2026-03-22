# Prompt Templates

Use these templates to build final prompts. Replace placeholders with user values. Keep constraint lines intact unless the user explicitly asks to relax them.

## 1) `site_logo`

```
A minimalist {{style}} logo for "{{brand_name}}", a {{niche}} SaaS platform.
Symbol concept: {{icon_concept}}. Use simple geometry and intentional negative space to express {{mood}}.
Color palette: {{primary_color}} with {{neutral_color}}.
Typography: {{font_tone}} wordmark with high legibility.
Style: Flat design, vector-clean, white background.
Constraints: NO gradients, NO shadows, NO photographic elements, NO mockup scenes.
Aspect ratio: 1:1, centered composition, generous clear space.
Output quality: Professional, scalable, and recognizable at 16px favicon size.
```

## 2) `ui_icon`

```
A single {{icon_style}} style icon representing "{{icon_name}}" for {{size_context}} use.
Purpose: {{icon_purpose}}.
Build with simple geometric forms and consistent optical balance.
Pixel-perfect at 24x24px with {{stroke_weight}} uniform stroke and {{corner_style}} corners.
Color: {{primary_color}} on transparent background.
Style reference: Lucide/Heroicons-inspired, clean and modern.
Constraints: NO text, NO decorative noise, NO drop shadows.
Composition: centered in a 24x24 artboard with 2px padding.
Output quality: consistent with a professional SaaS design system.
```

## 3) `featured_blog_image`

```
A {{image_style}} featured image for a blog article titled "{{article_title}}".
Topic keywords: {{keywords}}.
Visual concept: {{visual_metaphor}} with {{focal_subject}} as the focal element.
Color palette: dominant {{primary_color}}, supported by deep navy and clean white.
Composition: rule of thirds; subject on the left third with breathing space on the right for text overlay.
Style: modern editorial, clean, suitable for a SaaS content platform.
Constraints: NO stock-photo cliches (no handshakes, no lightbulbs), NO text baked into the image.
Aspect ratio: 16:9 (1792x1024px).
Quality target: high detail, realistic lighting, subtle depth of field.
```

## 4) `social_og_image`

```
A professional Open Graph social share image (1200x630px) for "{{brand_name}}".
Background: {{bg_style}} base with subtle {{primary_color}} accent in the top-right quadrant.
Visual hierarchy:
- Large bold title text: "{{page_title}}" in white.
- Smaller supporting tagline below: "{{tagline}}".
Brand placement:
- Small logo placeholder at {{logo_position}}.
- Domain text "{{domain_text}}" at bottom-right in muted tone.
Style reference: premium SaaS marketing asset similar in polish to modern product-led brands.
Layout: clean grid, generous whitespace, no clutter.
Aspect ratio: 1200x630px, optimized for Twitter/X and Facebook previews.
```

## 5) `favicon_app_icon`

```
A favicon/app icon featuring "{{brand_symbol}}" as the core symbol.
Background: {{shape}} shape filled with {{primary_color}}.
Symbol: bold {{secondary_color}} (or white fallback) "{{brand_symbol}}" with high contrast and crisp edges.
Style: flat design, no gradients, no shadows.
Legibility targets: instantly recognizable at 16px, 32px, 180px, and 512px.
Composition: centered with equal padding on all sides ({{padding_ratio}} of canvas).
Background/export context: white background for clean ICO/PNG conversion.
```

## Normalization Rules

Apply these rules before returning:
1. Remove placeholder tokens that were not supplied; replace with defaults.
2. Keep unit notation explicit (`px`, aspect ratio).
3. Keep negative constraints (`NO ...`) as uppercase.
4. Ensure each final prompt is one coherent block, not fragmented bullets.
