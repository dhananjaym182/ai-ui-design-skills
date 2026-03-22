# Typography system

This reference captures the typography ideas the bundle should apply by default.
Use it whenever the task involves hierarchy, readability, component text roles, landing page copy blocks, dashboards, docs, or any design system work.

## Why typography matters so much in SaaS
Most product screens are made mostly of text, controls, numbers, and a few icons.
That means typography does most of the heavy lifting for:
- hierarchy
- scanning speed
- trust
- density management
- comprehension
- accessibility

If you remove font styling from a good product UI, the entire interface becomes harder to read and harder to trust.

## The four primary levers
Build hierarchy with these levers, in this order:
1. Size
2. Weight
3. Color
4. Spacing

A strong type system rarely needs more than those four variables.
Avoid solving hierarchy with decorative effects first.

## Primary rule: emphasize by de-emphasizing
Do not only ask, "How do I make this headline louder?"
Also ask, "How do I make the surrounding text quieter?"

Examples:
- use softer secondary text next to a primary metric
- reduce the weight of body copy instead of increasing every heading to bold
- increase spacing around a key message so it breathes
- keep support text less contrasty than titles

This usually creates cleaner hierarchy than stacking bold, huge, saturated text everywhere.

## Keep the type scale small and intentional
For product UI, a restrained scale usually beats a mathematically fancy scale.
Default step list:
- 12
- 14
- 16
- 18
- 20
- 24
- 30
- 36
- 48
- 60

Use even fewer sizes on authenticated product screens than on marketing pages.
Internal app screens often succeed with:
- 12
- 14
- 16
- 18
- 24
- 30

## Base sizing guidance
- Default body copy: 16px equivalent for balanced SaaS UI
- Dense product UI can use 14px body copy if contrast and line-height are strong
- Do not use 12px as normal body text
- 12px is for captions, metadata, helper text, small labels, or compact data contexts only

## Use rem instead of px
Prefer `rem` for font sizing so user zoom and accessibility settings work naturally.
If users increase text size, the system should remain coherent.

Good:
- `1rem`
- `0.875rem`
- `1.25rem`

Use px only when the user specifically asks for a pixel-based token table or needs exact translation from an existing system.

## Visual hierarchy is not identical to document structure
HTML heading levels describe document structure.
Visual styles describe user attention.
Often they align, but not always.

Rules:
- preserve semantic heading order for accessibility and structure
- style headings based on the visual needs of the screen
- do not use one giant H1 style just because the HTML tag is `h1`
- do not use `div` soup when semantic headings and lists would help

## Font family defaults
### Primary UI font
Use Inter by default.
Why:
- readable at small sizes
- widely available
- works well for SaaS dashboards, forms, and dense admin surfaces

### Optional marketing display font
Use a second font only when it adds a clear brand benefit.
Safe options:
- DM Sans
- Lexend

Keep it to hero/display use only.
Body and app UI should usually stay on the primary UI font.

### Monospace
Use a monospace font only for:
- code
- ids
- tokens
- structured logs
- machine-generated values where alignment matters

Do not use monospace for general SaaS body copy.

## Weight rules
Stay disciplined with weight.
Recommended defaults:
- 400 regular
- 500 medium
- 600 semibold
- 700 bold only where strong emphasis is needed

Guidelines:
- body copy: 400 or 500 depending on font and context
- labels: 500 to 600
- section headings: 600
- hero/display: 600 or 700
- avoid 800/900 unless the brand really needs it

Large headlines should get their authority from size first.
Do not make every heading extra bold.

## Color rules for text
Treat text color as a hierarchy tool.
Default text tiers:
- primary text
- secondary text
- tertiary text
- inverse text for dark or accent surfaces

Use brand color sparingly for:
- links
- selected states
- anchor emphasis when appropriate

Do not color entire paragraphs in accent color just to create hierarchy.
Lightness contrast is often enough.

## Line-height rules
Line-height is part readability, part spacing system.
It is not an afterthought.

Recommended ranges:
- display: 0.95 to 1.1
- large headings: 1.05 to 1.2
- section titles: 1.15 to 1.3
- body copy: 1.45 to 1.6
- small text and helper text: 1.4 to 1.6

Rules:
- larger text can use tighter line-height
- smaller text usually needs more line-height
- long paragraphs need more generous line-height than short labels
- avoid line-height so tight that ascenders/descenders collide visually

## Line-height as vertical rhythm
Use line-height as part of the stack spacing between text elements.
That means:
- text elements already carry internal vertical rhythm
- do not manually jam tiny margins everywhere after defining good line-height
- stack text blocks with purpose rather than arbitrary micro-gaps

A useful mental model:
- line-height is the first layer of spacing
- stack spacing is the second layer

## Tracking rules
Letter-spacing should be subtle.

Recommended defaults:
- display/hero: -0.03em to -0.01em
- titles/headings: -0.02em to 0
- body: 0
- small all-caps labels/overlines: 0.03em to 0.08em

Avoid:
- aggressive negative tracking on small sizes
- positive tracking on normal paragraphs
- all-caps without extra tracking and good spacing

## Measure and line length
Use bounded measure for readability.
Suggested maximums:
- long-form prose: 60 to 72ch
- marketing support copy: 50 to 65ch
- settings/help text: 45 to 60ch
- narrow UI cards: whatever the card naturally allows, but avoid one-line walls by using better card widths

Do not let body copy stretch edge to edge on wide screens.

## Role-based type system
A practical SaaS type system should include roles, not just scale steps.

### Recommended roles
#### Display / Hero
Use for the main landing page message or major campaign headers.
- fluid size allowed
- tight line-height
- slight negative tracking
- usually semibold or bold

#### Page title
Use for dashboard pages, settings categories, detail page titles.
- strong but not theatrical
- typically 30 to 36px equivalent
- semibold

#### Section title
Use for card groups, page sections, pricing sections, docs subsections.
- 20 to 24px equivalent
- semibold

#### Card title
Use inside stat cards, feature cards, settings cards, table widgets.
- 16 to 18px equivalent
- medium or semibold

#### Body
Default descriptive text.
- 14 to 16px equivalent
- regular or medium
- secondary tone when appropriate

#### Label
Use for form labels, control labels, and data labels.
- 12 to 14px equivalent
- medium or semibold
- high contrast

#### Helper / Caption
Use for field hints, timestamps, metadata, passive explanatory text.
- 12 to 14px equivalent
- regular or medium
- secondary or tertiary color

#### Overline / Eyebrow
Use sparingly above heroes, section headers, or grouped cards.
- small
- medium or semibold
- positive tracking is allowed
- should not become louder than the real title

#### Metric / Value
Use for KPIs, usage numbers, revenue, counts, and large numerical signals.
- may share size with titles or display
- does not need the boldest weight in the system
- surrounding labels should be quieter

## Separate marketing and app rules
### Marketing typography
Allowed:
- fluid hero sizes
- a bit more contrast between display and body
- a second display font if brand justifies it
- slightly looser section spacing
- balanced headline wrapping where supported

### App typography
Prefer:
- fewer sizes
- more disciplined line lengths
- tighter but still readable density
- stronger consistency across cards/tables/forms
- almost no decorative font experimentation

## Fluid typography guidance
Fluid type is useful for:
- hero headlines
- major landing page callouts
- perhaps a few marquee metrics

Fluid type is usually not necessary for:
- form labels
- input text
- table text
- dense dashboard cards
- settings pages

Use `clamp()` mainly for display layers.
Example pattern:

```css
font-size: clamp(2.5rem, 5vw, 4.5rem);
```

Do not turn the whole type system into fluid math unless there is a clear benefit.

## Practical hierarchy recipes
### Recipe 1: Section heading block
- eyebrow: 12px, medium, tertiary/brand, positive tracking
- heading: 24px, semibold, primary
- supporting copy: 16px, regular, secondary
- gap between eyebrow and heading: small
- gap between heading and copy: moderate

### Recipe 2: Dashboard stat card
- label: 12 to 14px, medium, secondary
- value: 24 to 36px, medium or semibold, primary
- delta/helper: 12 to 14px, medium, semantic or secondary
- spacing should make the value feel dominant without shouting

### Recipe 3: Form field cluster
- label: 14px, medium, primary
- helper: 12 to 14px, regular, secondary
- input text: 14 to 16px, regular or medium
- error text: 12 to 14px, medium, danger

## Anti-patterns
Do not:
- create hierarchy with color alone
- use too many font sizes in one viewport
- make every heading bold and black
- use tiny text to solve density problems
- center long paragraphs
- let paragraphs span the full width of wide containers
- use all caps for large amounts of content
- make muted text so faint that it becomes inaccessible

## Accessibility notes
- body text contrast should comfortably pass WCAG contrast requirements
- `rem`-based sizing helps respect user preferences
- semantic heading order matters
- tiny text is not a substitute for good layout
- text should survive 200 percent zoom without collapsing the interface

## Suggested defaults
If the user gives no typography direction, use this default system:
- font family: Inter
- display sizes: `clamp()` for hero only
- body: 1rem
- dense body: 0.875rem only if the app is genuinely dense
- weights: 400, 500, 600, 700
- text colors: primary, secondary, tertiary, inverse
- leading: 1.05 to 1.2 for display, 1.45 to 1.6 for body, 1.4 to 1.6 for small text
- tracking: slight negative for display, neutral for body, slight positive for overlines/all caps

## Quick typography checklist
Before shipping, ask:
- are there too many text sizes?
- is the main title obvious immediately?
- are helper and metadata texts quieter but still readable?
- does line-height match the text size?
- is body copy readable on a laptop and a phone?
- are long paragraphs bounded?
- are numerical values and labels clearly differentiated?
- could the system be extended to 20 more screens without improvising new text styles?
