# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the website for 电子科技大学成都学院开放原子开源社团 (CDUESTC OpenAtom Open Source Club). It's a static HTML site with no build tools or frameworks—pure HTML, CSS, and vanilla JavaScript.

## Commands

```bash
# Serve locally (any of these work)
python -m http.server 8080
open v4.html        # Direct browser open
npx serve           # If Node available
```

No tests, linting, or build commands exist. The project is pure static files.

## Architecture

### Version Branches
Each version is a separate branch and HTML file:
- `Version_0.1` → `初版示例.html` — Classic three-column layout with Shader background animation
- `Version_0.2` → `v2.html` — Full-screen immersive design with scroll animations
- `Version_0.3` → `v3.html` — System-level light/dark theme, WebGL background
- `Version_0.4` → `v4.html` — Animated sun/moon toggle, responsive light/dark themes with localStorage
- `main` — Current stable, references `v4.html` as entry point

### Key Systems in v4.html

**Theme System** (lines 746-839)
- `ThemeManager` object handles dark/light theme with localStorage persistence
- CSS variables defined in `:root`, `[data-theme="dark"]`, `[data-theme="light"]`
- 0.35s transition on all theme-dependent properties
- System theme detection via `prefers-color-scheme:dark` media query
- Prevents flash by applying theme before page render

**Internationalization** (lines 842-914)
- `T.zh` and `T.en` objects contain all UI strings
- `toggleLang()` switches between Chinese/English
- No external i18n library—direct DOM text replacement

**WebGL Hero Shader** (lines 963-988)
- Procedural noise-based animated background using raw WebGL
- Fragment shader generates organic flowing patterns
- Visibility API pauses animation when tab is hidden

**Scroll Animations** (lines 916-935)
- `IntersectionObserver` triggers `.in` class for fade-up animations
- `.an` class = hidden, `.an.in` = visible
- Delay classes `.d1`-`.d6` stagger animations
- Navigation active state synced to scroll position

**Responsive Breakpoints**
- 1024px: 2-column grids, hide nav links except first two
- 768px: Single column, reduced padding
- 480px: Further mobile optimizations

## File Structure

```
/
├── v4.html              # Main entry (current version)
├── v3.html              # Previous version
├── v2.html              # Previous version
├── 初版示例.html         # Original version
├── 社团图标.jpg          # Club logo
├── 社团微信公众号二维码.png  # WeChat QR code
├── images/             # Event photos (cover-1.jpg through cover-5.jpg)
└── docs/               # Version documentation
    ├── README_v0.1.md
    ├── README_v0.2.md
    ├── README_v0.3.md
    └── README_v0.4.md
```
