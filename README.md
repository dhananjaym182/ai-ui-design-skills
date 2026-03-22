# AI UI Design Skills

A collection of production-ready AI skills for designing modern SaaS interfaces, brand assets, and design systems. Compatible with Claude Code, Cursor, Windsurf, and other AI coding assistants.

## 📦 Skills Included

### 1. **ui-ux-design-system**
Premium neutral-first UI/UX design system for product interfaces. Use for dashboards, settings screens, editors, forms, tables, modals, and interaction patterns.

**Use when:** Designing or reviewing pages, components, or making design decisions about hierarchy, tokens, spacing, and cross-page consistency.

### 2. **saas-ui-ux-designer-with-flex**
Full-system SaaS UI/UX design workflow with advanced flex/grid layout patterns. Includes typography system, flexibility rules, and page blueprints.

**Use when:** Building complex SaaS interfaces with sophisticated layout requirements, responsive behavior, and production-ready component systems.

### 3. **saas-ui-ux-designer-skill-typography-flex**
Specialized typography and flexibility system for SaaS products. Focuses on type hierarchy, scale, weight, spacing, and responsive layout rules.

**Use when:** Refining typography rhythm, improving readability, or implementing responsive text systems.

### 4. **saas-product-ui-system**
Complete product UI system with design philosophy, tokens, component rules, and AI product patterns.

**Use when:** Building or refactoring entire product UI systems with consistent patterns across multiple pages.

### 5. **image-logo-icons**
Generate structured image prompts for brand visuals: logos, UI icons, favicons/PWA icons, featured blog images, and Open Graph social cards.

**Use when:** Designing brand identity assets, social preview graphics, or creating reusable prompt templates for image generation models.

## 🚀 Installation

### For Claude Code

```bash
# Copy skills to Claude Code skills directory
cp -r ui-ux-design-system ~/.claude/skills/
cp -r saas-ui-ux-designer-with-flex ~/.claude/skills/
cp -r saas-ui-ux-designer-skill-typography-flex ~/.claude/skills/
cp -r saas-product-ui-system ~/.claude/skills/
cp -r image-logo-icons ~/.claude/skills/
```

### For Cursor

```bash
# Copy skills to Cursor skills directory
cp -r ui-ux-design-system ~/.cursor/skills/
cp -r saas-ui-ux-designer-with-flex ~/.cursor/skills/
cp -r saas-ui-ux-designer-skill-typography-flex ~/.cursor/skills/
cp -r saas-product-ui-system ~/.cursor/skills/
cp -r image-logo-icons ~/.cursor/skills/
```

### For Windsurf

```bash
# Copy skills to Windsurf skills directory
cp -r ui-ux-design-system ~/.windsurf/skills/
cp -r saas-ui-ux-designer-with-flex ~/.windsurf/skills/
cp -r saas-ui-ux-designer-skill-typography-flex ~/.windsurf/skills/
cp -r saas-product-ui-system ~/.windsurf/skills/
cp -r image-logo-icons ~/.windsurf/skills/
```

### For Other AI Coding Tools

Most AI coding assistants support custom skills/prompts. Check your tool's documentation for the skills directory location and copy the folders there.

## 📖 Usage

Each skill contains:
- `SKILL.md` - Main skill definition with workflow and usage instructions
- `agents/` - Specialized agent configurations (if applicable)
- `references/` - Detailed reference documentation and design system specs
- `assets/` - Token files, CSS templates, and other reusable assets

### Example: Using ui-ux-design-system

```
Design a settings page for a SaaS dashboard with user profile, notification preferences, and billing sections.
```

The AI will automatically apply:
- Neutral-first color palette
- Premium SaaS product tone
- Proper hierarchy and spacing
- Reusable component patterns
- Dark/light mode parity
- Responsive layout rules

### Example: Using image-logo-icons

```
Create a logo for "DataFlow" - a data analytics SaaS platform.
Style: modern minimalist, primary color: blue, mood: professional and trustworthy
```

The AI will generate:
- Structured image prompt
- Render settings
- Variation ideas

## 🎨 Design Philosophy

All skills follow these principles:

1. **Neutral-first surfaces** - Calm, premium aesthetic
2. **System-driven** - Reusable components over one-off styles
3. **Production-ready** - Real states (empty, loading, error)
4. **Responsive by default** - Mobile, tablet, desktop layouts
5. **Semantic colors** - Color only for status and meaning
6. **Typography hierarchy** - Clear visual hierarchy through type
7. **Accessibility** - WCAG-compliant patterns

## 🛠️ Customization

Each skill can be customized by editing:
- Design tokens in `assets/` or `references/`
- Component rules in `references/`
- Workflow steps in `SKILL.md`

## 📝 Skill Structure

```
skill-name/
├── SKILL.md              # Main skill definition
├── agents/               # Agent configurations
│   └── *.md
├── references/           # Reference documentation
│   ├── design-system-skills.md
│   ├── typography-system.md
│   └── ...
└── assets/              # Reusable assets
    ├── default-tokens.css
    └── ...
```

## 🤝 Contributing

Contributions are welcome! To add or improve a skill:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with your AI coding assistant
5. Submit a pull request

## 📄 License

MIT License - feel free to use these skills in your projects.

## 🔗 Related Resources

- [Claude Code Documentation](https://docs.anthropic.com/claude/docs)
- [Cursor Documentation](https://cursor.sh/docs)
- [Windsurf Documentation](https://windsurf.ai/docs)

## 💡 Tips

- Start with `ui-ux-design-system` for general UI work
- Use `saas-ui-ux-designer-with-flex` for complex layouts
- Use `image-logo-icons` for brand asset generation
- Combine skills for comprehensive design workflows

## 🐛 Issues & Support

If you encounter issues or have questions:
1. Check the skill's `SKILL.md` for usage instructions
2. Review the `references/` documentation
3. Open an issue on GitHub

---

**Made with ❤️ for AI-powered design workflows**
