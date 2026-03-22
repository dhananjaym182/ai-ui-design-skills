# Page blueprints

## Shared page rules
Apply these rules across public and internal pages:
- define the dominant action or takeaway first
- define the main heading and support copy hierarchy second
- bound long copy with readable max widths
- allow layouts to stack before text becomes cramped
- keep public pages more spacious than internal pages
- make side content visually secondary unless it carries the main job to be done

## Public pages

### 1. Landing page
Purpose: explain the product fast, build trust, and move the user to trial, demo, or signup.

Recommended order:
1. announcement bar (optional)
2. site header
3. hero
4. social proof row
5. primary feature section
6. product tour section
7. integrations or ecosystem section
8. use cases by role or team
9. testimonials or customer proof
10. pricing preview or plan comparison teaser
11. FAQ
12. final CTA
13. footer

Hero blueprint:
- small eyebrow for category or proof
- headline with one clear outcome
- supporting paragraph no longer than 2 to 3 sentences
- primary CTA
- optional secondary CTA
- product screenshot or simple product montage
- optional trust note below CTA

Typography rules:
- use fluid display size for the headline if needed
- keep support copy bounded to roughly 50 to 65ch
- eyebrow should be quieter than the real heading
- CTA labels should remain compact and verb-first

Flexibility rules:
- hero should be single column by default on narrow screens
- split hero only when both copy and media can breathe
- CTA row must wrap or stack gracefully
- screenshot/media should scale without forcing copy too narrow
- section spacing can use clamp-based fluid values

### 2. Pricing page
Purpose: reduce uncertainty and help buyers self-select.

Required blocks:
- headline and short pricing philosophy line
- billing toggle if useful
- 3 to 4 plan cards max in the first comparison block
- detailed feature comparison table if needed
- FAQ focused on billing, users, support, compliance, and cancellation
- enterprise or sales CTA

Layout tips:
- recommended plan gets the strongest emphasis
- keep comparison rows grouped by theme
- avoid giant walls of tiny checkmarks with no grouping

Typography rules:
- pricing number is the primary focal point inside each card
- billing cadence and notes remain readable but secondary
- tiny legal copy should still be legible

Flexibility rules:
- pricing cards should stack on narrow screens
- card widths should be flexible rather than fixed device targets
- comparison tables need a narrow-screen fallback

### 3. Features page
Purpose: show capability depth without making the page feel like documentation.

Blocks:
- simple hero
- feature index / jump nav (optional)
- grouped features by workflow
- proof screenshots
- role-based examples
- CTA band

Typography rules:
- use clear section headers for grouping
- supporting copy should be concise and benefit-led
- avoid repeating giant headlines for every feature block

Flexibility rules:
- use repeatable content modules that auto-fit on wide/narrow ranges
- screenshots should never force unreadably narrow text columns

### 4. Docs article page
Purpose: help the user solve one problem quickly.

Blocks:
- header with docs nav and search
- left sidebar nav
- article body
- right rail table of contents on large screens
- previous / next links
- feedback widget

Rules:
- keep article width readable
- code and callouts need distinct inset surfaces
- heading rhythm matters more than decoration

Typography rules:
- article headings should clearly step down
- paragraph measure should stay around 60 to 72ch
- code needs obvious monospace contrast without overwhelming the page

Flexibility rules:
- side rail table of contents is optional below larger widths
- code blocks may scroll horizontally, but prose should not
- nav and content should reflow into a simpler single-column arrangement on smaller screens

### 5. Blog index
Purpose: discovery and credibility.

Blocks:
- page header
- featured article
- filter or category controls if needed
- article grid or list
- newsletter CTA if relevant

Typography rules:
- article titles should be clearly stronger than metadata
- excerpts should remain concise

Flexibility rules:
- list/grid pattern should auto-fit rather than snap awkwardly
- metadata rows can wrap on smaller widths

### 6. Login / signup / reset password
Purpose: one task, minimal distraction.

Blocks:
- brand mark
- headline
- form
- social or SSO options if available
- trust and legal line
- link to alternate auth action

Rules:
- keep width narrow
- avoid marketing overload
- error messages stay close to fields

Typography rules:
- title should be calm and obvious
- helper and legal copy should be secondary but readable

Flexibility rules:
- form width should stay comfortable across narrow to medium widths
- buttons can stack full-width on small screens

### 7. Security or trust page
Purpose: reassure enterprise buyers.

Blocks:
- proof strip with certifications or commitments
- security sections grouped by theme
- FAQ
- contact security or sales CTA

Typography rules:
- use direct, sober language
- avoid over-styled display type

Flexibility rules:
- grouped sections should remain scannable when stacked
- proof strips should wrap instead of shrinking into clutter

## Internal product pages

### 1. Dashboard home
Purpose: orient the user and surface the most important signals.

Blocks:
1. page header with title, scope switcher, and primary action
2. filters / date range / saved views
3. main KPI row
4. primary chart or trend panel
5. secondary panels
6. recent activity or tasks
7. table or list for detail drill-down

Rules:
- one dominant insight is better than many equal widgets
- charts go near the top when trend comprehension matters
- tables belong lower unless the product is table-first

Typography rules:
- KPI values should dominate by size before weight
- labels and deltas should be quieter but readable
- page title should not compete with the top metric row

Flexibility rules:
- KPI rows should wrap naturally
- main and secondary panels should use flexible bases, not rigid widths
- charts need bounded heights
- wide desktop screens should still feel structured, not stretched

### 2. List / index page
Purpose: scan, filter, sort, and act on multiple entities.

Blocks:
- page header
- filter bar
- bulk action area when selection exists
- table or card list
- pagination or infinite load pattern

Rules:
- selection states must be obvious
- filters should collapse cleanly on small screens
- empty filtered state must offer reset or next-step action

Typography rules:
- table headers should be stronger than row metadata
- filters and bulk actions should not visually overpower the data

Flexibility rules:
- filter bars should wrap or collapse intelligently
- list density can change, but text should stay readable
- define card fallback or key-column fallback for narrow widths

### 3. Detail page
Purpose: understand one record deeply and take contextual actions.

Blocks:
- breadcrumb if truly needed
- title row with status and actions
- summary section
- tabs or anchored sections
- activity log / related entities / timeline
- metadata side rail when useful

Rules:
- keep destructive actions away from common actions
- make status visible near the title
- the top of the page should answer who/what/when immediately

Typography rules:
- title row should clearly separate title, status, and metadata
- supporting summaries should stay concise

Flexibility rules:
- side rails can drop below main content on smaller screens
- action rows should wrap before truncating critical labels

### 4. Settings area
Purpose: low-stress configuration.

Patterns:
- side nav for settings categories
- content pane with grouped cards or form sections
- save pattern should be consistent within the page

Rules:
- do not mix wizard behavior with normal settings behavior
- clarify whether changes save instantly or require confirmation

Typography rules:
- titles, section labels, and helper text need predictable rhythm
- helper copy should support, not flood the page

Flexibility rules:
- two-column field groups should stack when fields get cramped
- settings nav may convert to a simpler list or dropdown on smaller screens

### 5. Billing page
Purpose: plan clarity and account confidence.

Blocks:
- current plan summary
- usage and overage data
- payment method
- invoices
- seat or member billing controls
- upgrade and cancellation actions

Rules:
- use calm surfaces and direct language
- highlight consequences before destructive subscription changes

Typography rules:
- plan name, price, and renewal state should be obvious first
- usage notes must remain readable at smaller sizes

Flexibility rules:
- summary modules should stack cleanly
- invoice tables need narrow-screen handling

### 6. Team / members page
Purpose: invite, manage roles, and audit access.

Blocks:
- member table or list
- role badges
- invite CTA
- pending invites
- role descriptions or permissions matrix link

Rules:
- role differences should be easy to compare
- dangerous permissions need clear labels

Typography rules:
- member identity, role, and status need clear differentiation
- invite/help copy should stay concise

Flexibility rules:
- tables or member rows should adapt to smaller widths without hiding the most important identity/status information

### 7. Onboarding flow
Purpose: get to first value quickly.

Blocks:
- progress indicator
- one focused step
- supporting explanation
- primary action
- optional skip when safe

Rules:
- avoid long setup forms on the first step
- celebrate completion lightly, then direct the user into real product value

Typography rules:
- one primary instruction per step
- support text explains why the step matters

Flexibility rules:
- step content should remain vertically comfortable on narrow screens
- progress indicators should simplify rather than crowd the header

### 8. Search / command palette
Purpose: fast navigation and power-user actions.

Blocks:
- input field
- grouped result sections
- optional recent items
- keyboard hint labels

Rules:
- search results should show category context
- keyboard support is essential

Typography rules:
- result title stronger than category/meta information
- keyboard hints quiet but readable

Flexibility rules:
- command palette width should match content complexity
- on small screens, full-width sheet patterns can be more usable than centered floating boxes

### 9. Notifications / inbox
Purpose: triage and action.

Blocks:
- filter tabs
- list grouped by recency
- read/unread treatment
- direct actions when possible

Rules:
- keep the visual system quieter than marketing cards
- unread state should not rely only on color

Typography rules:
- title, snippet, timestamp, and status each need their own clear priority

Flexibility rules:
- rows can grow vertically for longer snippets on smaller screens
- actions should not collide with content when space tightens
