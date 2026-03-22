# Installing AI UI Design Skills for Codex

Enable AI UI Design Skills in Codex via native skill discovery. Just clone and symlink.

## Prerequisites

- Git

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/dhananjaym182/ai-ui-design-skills.git ~/.codex/ai-ui-design-skills
   ```

2. **Create the skills symlink:**
   ```bash
   mkdir -p ~/.agents/skills
   ln -s ~/.codex/ai-ui-design-skills/skills ~/.agents/skills/ai-ui-design-skills
   ```

   **Windows (PowerShell):**
   ```powershell
   New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.agents\skills"
   cmd /c mklink /J "$env:USERPROFILE\.agents\skills\ai-ui-design-skills" "$env:USERPROFILE\.codex\ai-ui-design-skills\skills"
   ```

3. **Restart Codex** (quit and relaunch the CLI) to discover the skills.

## Available Skills

- **ui-ux-design-system** — Premium neutral-first UI/UX design system for product interfaces
- **saas-ui-ux-designer-with-flex** — Full-system SaaS UI/UX workflow with flex/grid layout patterns
- **saas-ui-ux-designer-skill-typography-flex** — Typography and flexibility system for SaaS products
- **saas-product-ui-system** — Complete product UI system with design philosophy and tokens
- **image-logo-icons** — Generate structured image prompts for brand visuals and assets

## Verify

```bash
ls -la ~/.agents/skills/ai-ui-design-skills
```

You should see a symlink (or junction on Windows) pointing to your ai-ui-design-skills skills directory.

## Updating

```bash
cd ~/.codex/ai-ui-design-skills && git pull
```

Skills update instantly through the symlink.

## Uninstalling

```bash
rm ~/.agents/skills/ai-ui-design-skills
```

Optionally delete the clone: `rm -rf ~/.codex/ai-ui-design-skills`.
