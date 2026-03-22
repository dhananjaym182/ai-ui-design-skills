# AI UI Design Skills

[中文版](./README_zh.md) (Coming soon)

> **Production Ready** — Professional UI/UX design skills for AI coding assistants. Plug into your favorite AI coding tool and get structured, production-quality guidance for modern SaaS interfaces, design systems, and brand assets.

Development skills for AI coding agents. Plug into your favorite AI coding tool and get structured, production-quality guidance for UI/UX design, SaaS interfaces, typography systems, and brand asset generation.

## Skills

| Skill | Description |
|-------|-------------|
| `ui-ux-design-system` | Premium neutral-first UI/UX design system for product interfaces. Use for dashboards, settings screens, editors, forms, tables, modals, and interaction patterns. Includes design philosophy, tokens, spacing, component rules, and responsive layouts. |
| `saas-ui-ux-designer-with-flex` | Full-system SaaS UI/UX design workflow with advanced flex/grid layout patterns. Includes typography system, flexibility rules, page blueprints, and production-ready component systems. Perfect for complex SaaS interfaces with sophisticated layout requirements. |
| `saas-ui-ux-designer-skill-typography-flex` | Specialized typography and flexibility system for SaaS products. Focuses on type hierarchy, scale, weight, spacing, and responsive layout rules. Use when refining typography rhythm or implementing responsive text systems. |
| `saas-product-ui-system` | Complete product UI system with design philosophy, tokens, component rules, and AI product patterns. Use when building or refactoring entire product UI systems with consistent patterns across multiple pages. |
| `image-logo-icons` | Generate structured image prompts for brand visuals: logos, UI icons, favicons/PWA icons, featured blog images, and Open Graph social cards. Use when designing brand identity assets or creating reusable prompt templates for image generation models. |

## Installation

### Claude Code

```bash
claude plugin marketplace add https://github.com/dhananjaym182/ai-ui-design-skills
claude plugin install ai-ui-design-skills
```

### Cursor

```bash
git clone https://github.com/dhananjaym182/ai-ui-design-skills.git ~/.cursor/ai-ui-design-skills
```

Add to your Cursor settings — point the skills path to `~/.cursor/ai-ui-design-skills/skills/`.

### Codex

```bash
git clone https://github.com/dhananjaym182/ai-ui-design-skills.git ~/.codex/ai-ui-design-skills

mkdir -p ~/.agents/skills
ln -s ~/.codex/ai-ui-design-skills/skills ~/.agents/skills/ai-ui-design-skills
```

Restart Codex to discover the skills. See [`.codex/INSTALL.md`](.codex/INSTALL.md) for Windows instructions and details.

### OpenCode

```bash
git clone https://github.com/dhananjaym182/ai-ui-design-skills.git ~/.ai-ui-design-skills

mkdir -p ~/.config/opencode/skills
ln -s ~/.ai-ui-design-skills/skills/* ~/.config/opencode/skills/
```

Restart OpenCode to discover the skills. See [`.opencode/INSTALL.md`](.opencode/INSTALL.md) for details.

### Windsurf

```bash
git clone https://github.com/dhananjaym182/ai-ui-design-skills.git ~/.windsurf/ai-ui-design-skills

mkdir -p ~/.windsurf/skills
ln -s ~/.windsurf/ai-ui-design-skills/skills/* ~/.windsurf/skills/
```

Restart Windsurf to discover the skills. See [`.windsurf/INSTALL.md`](.windsurf/INSTALL.md) for details.

## Design Philosophy

All skills follow these principles:

1. **Neutral-first surfaces** — Calm, premium aesthetic
2. **System-driven** — Reusable components over one-off styles
3. **Production-ready** — Real states (empty, loading, error)
4. **Responsive by default** — Mobile, tablet, desktop layouts
5. **Semantic colors** — Color only for status and meaning
6. **Typography hierarchy** — Clear visual hierarchy through type
7. **Accessibility** — WCAG-compliant patterns

## Usage Examples

### Design a Settings Page

```
Use ui-ux-design-system to design a settings page with user profile, notification preferences, and billing sections.
```

The AI will automatically apply:
- Neutral-first color palette
- Premium SaaS product tone
- Proper hierarchy and spacing
- Reusable component patterns
- Dark/light mode parity
- Responsive layout rules

### Create Brand Assets

```
Use image-logo-icons to create a logo for "DataFlow" - a data analytics SaaS platform.
Style: modern minimalist, primary color: blue, mood: professional and trustworthy
```

The AI will generate:
- Structured image prompt
- Render settings
- Variation ideas

### Build Complex Layouts

```
Use saas-ui-ux-designer-with-flex to design a dashboard with metrics cards, data tables, and action panels using flex/grid layouts.
```

The AI will apply:
- Advanced flex/grid patterns
- Typography system
- Responsive behavior
- Component composition rules

## Skill Structure

Each skill contains:
- `SKILL.md` — Main skill definition with workflow and usage instructions
- `agents/` — Specialized agent configurations (if applicable)
- `references/` — Detailed reference documentation and design system specs
- `assets/` — Token files, CSS templates, and other reusable assets

## Contributing

Contributions are welcome! To add or improve a skill:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with your AI coding assistant
5. Submit a pull request

## License

[MIT](./LICENSE)

## Related Resources

- [Claude Code Documentation](https://docs.anthropic.com/claude/docs)
- [Cursor Documentation](https://cursor.sh/docs)
- [Windsurf Documentation](https://windsurf.ai/docs)
- [OpenCode Documentation](https://opencode.ai/docs)

---

**Made with ❤️ for AI-powered design workflows**
