# Portfolio Design Brief

## Vibe
Dark, clean, single-page scroller with subtle developer/terminal accents. NOT a VS Code clone, NOT an IDE layout, NO 3D, NO WebGL. Think: confident bold headers + monospace developer touches + one accent color + smooth scroll animations. Reference feel: tamalsen.dev's flavor (monospace nav, code-comment labels, big headers) but simpler and with a single accent.

## Colors
- Base background: near-black, around `#0d0f14`
- Surface/cards: slightly lighter, around `#161922`
- Text: off-white `#e6e8ee` primary, muted gray `#8b91a1` secondary
- Single accent: teal/cyan, around `#2dd4bf` (use ONLY this accent — no second accent color). Use for links, buttons, the cursor, section numbers, hover states.

## Typography
- Headers: a bold geometric sans (e.g. Inter or Space Grotesk), large and confident.
- Monospace (e.g. JetBrains Mono or Fira Code) for: the nav, section labels, the terminal hero, code-comment accents, tags.
- Section labels styled like code comments, e.g. `// work`, with a small two-digit number like `01`.

## Layout
- Sticky top nav: left = logo `JuanCeja._` with a blinking cursor underscore. Right = monospace links: `// home  // about  // work  // skills  // contact`, each with a small number above (01–05). Accent on active/hover.
- Generous spacing, max-width container (~1100px), mobile-responsive.
- Big bold section headers (e.g. "My Work") with a small monospace `// work` label above them.

## Sections (build later, in this order)
1. **Hero** — typed terminal intro (mock terminal window, three dots, monospace) that types a short sequence on load, with my name big. Teal accent + faint grid or soft gradient glow background.
2. **About** — short career-arc story (operational tech / SCADA → software).
3. **Work** — project cards (screenshot, one-line description, tech tags, live + GitHub links). One featured project larger.
4. **Skills** — grouped (Languages / Backend / Frontend / Infra & Tools).
5. **Contact** — email + LinkedIn + GitHub.

## Motion
Smooth, tasteful scroll-triggered fade/slide-in as sections enter the viewport. Subtle, not flashy. Blinking cursor in hero and logo. No parallax overload.

## Rules
- Reusable components, not one giant file. Typed. Clean and easy to extend.
- Responsive (desktop + mobile).
- Don't add features I didn't ask for. Don't redesign once set.
