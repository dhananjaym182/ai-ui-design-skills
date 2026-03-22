# Installation Guide

This guide covers installation for popular AI coding assistants.

## Claude Code

```bash
cd /home/dhan3713/ai-ui-design-skills

# Copy all skills
for skill in ui-ux-design-system saas-ui-ux-designer-with-flex saas-ui-ux-designer-skill-typography-flex saas-product-ui-system image-logo-icons; do
  cp -r "$skill" ~/.claude/skills/
done
```

## Cursor

```bash
cd /home/dhan3713/ai-ui-design-skills

# Copy all skills
for skill in ui-ux-design-system saas-ui-ux-designer-with-flex saas-ui-ux-designer-skill-typography-flex saas-product-ui-system image-logo-icons; do
  cp -r "$skill" ~/.cursor/skills/
done
```

## Windsurf

```bash
cd /home/dhan3713/ai-ui-design-skills

# Copy all skills
for skill in ui-ux-design-system saas-ui-ux-designer-with-flex saas-ui-ux-designer-skill-typography-flex saas-product-ui-system image-logo-icons; do
  cp -r "$skill" ~/.windsurf/skills/
done
```

## Cline (VS Code Extension)

```bash
cd /home/dhan3713/ai-ui-design-skills

# Copy all skills
for skill in ui-ux-design-system saas-ui-ux-designer-with-flex saas-ui-ux-designer-skill-typography-flex saas-product-ui-system image-logo-icons; do
  cp -r "$skill" ~/.vscode/extensions/cline/skills/
done
```

## Aider

```bash
cd /home/dhan3713/ai-ui-design-skills

# Copy all skills
for skill in ui-ux-design-system saas-ui-ux-designer-with-flex saas-ui-ux-designer-skill-typography-flex saas-product-ui-system image-logo-icons; do
  cp -r "$skill" ~/.aider/skills/
done
```

## Continue (VS Code Extension)

```bash
cd /home/dhan3713/ai-ui-design-skills

# Copy all skills
for skill in ui-ux-design-system saas-ui-ux-designer-with-flex saas-ui-ux-designer-skill-typography-flex saas-product-ui-system image-logo-icons; do
  cp -r "$skill" ~/.continue/skills/
done
```

## Generic Installation

If your AI coding tool isn't listed above:

1. Find your tool's skills/prompts directory (check documentation)
2. Copy the skill folders to that directory
3. Restart your AI assistant

```bash
# Replace <TOOL_SKILLS_DIR> with your tool's skills directory
cd /home/dhan3713/ai-ui-design-skills
cp -r ui-ux-design-system saas-ui-ux-designer-with-flex saas-ui-ux-designer-skill-typography-flex saas-product-ui-system image-logo-icons <TOOL_SKILLS_DIR>/
```

## Verification

After installation, verify the skills are available:

1. Open your AI coding assistant
2. Try invoking a skill (e.g., "Use ui-ux-design-system to design a settings page")
3. The AI should recognize and apply the skill

## Troubleshooting

**Skills not recognized:**
- Check the skills directory path for your tool
- Ensure `SKILL.md` files exist in each skill folder
- Restart your AI assistant

**Skills not working correctly:**
- Verify all files were copied (including `references/` and `assets/`)
- Check file permissions
- Review the skill's `SKILL.md` for usage instructions
