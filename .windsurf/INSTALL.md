# Installing AI UI Design Skills for Windsurf

## Prerequisites

- [Windsurf](https://windsurf.ai) installed

## Installation

### macOS / Linux

```bash
git clone https://github.com/dhananjaym182/ai-ui-design-skills.git ~/.windsurf/ai-ui-design-skills

mkdir -p ~/.windsurf/skills
ln -s ~/.windsurf/ai-ui-design-skills/skills/* ~/.windsurf/skills/
```

### Windows (PowerShell)

```powershell
git clone https://github.com/dhananjaym182/ai-ui-design-skills.git "$env:USERPROFILE\.windsurf\ai-ui-design-skills"

New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.windsurf\skills"
Get-ChildItem "$env:USERPROFILE\.windsurf\ai-ui-design-skills\skills" -Directory | ForEach-Object {
    New-Item -ItemType SymbolicLink -Path "$env:USERPROFILE\.windsurf\skills\$($_.Name)" -Target $_.FullName
}
```

> **Note:** Creating symbolic links on Windows may require administrator privileges or Developer Mode enabled.

Restart Windsurf to discover the skills.

## Available Skills

- **ui-ux-design-system** — Premium neutral-first UI/UX design system for product interfaces
- **saas-ui-ux-designer-with-flex** — Full-system SaaS UI/UX workflow with flex/grid layout patterns
- **saas-ui-ux-designer-skill-typography-flex** — Typography and flexibility system for SaaS products
- **saas-product-ui-system** — Complete product UI system with design philosophy and tokens
- **image-logo-icons** — Generate structured image prompts for brand visuals and assets

## Updating

```bash
cd ~/.windsurf/ai-ui-design-skills && git pull
```

Symlinks will automatically point to the updated content — no need to re-link.

## Uninstalling

### macOS / Linux

```bash
rm -rf ~/.windsurf/skills
rm -rf ~/.windsurf/ai-ui-design-skills
```

### Windows (PowerShell)

```powershell
Remove-Item -Recurse -Force "$env:USERPROFILE\.windsurf\skills"
Remove-Item -Recurse -Force "$env:USERPROFILE\.windsurf\ai-ui-design-skills"
```

## Troubleshooting

### Skills not found

1. Verify symlinks exist: `ls -la ~/.windsurf/skills/`
2. Each skill folder should contain a `SKILL.md` file
3. Restart Windsurf after installation

## Getting Help

- Report issues: https://github.com/dhananjaym182/ai-ui-design-skills/issues
