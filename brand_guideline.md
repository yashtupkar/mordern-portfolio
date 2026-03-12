# Brand Guideline - Yash Tupkar

This document outlines the design system and brand consistency rules used throughout the portfolio website to achieve the modern, dark-themed, and neon-accented aesthetic.

## 1. Typography

The portfolio prioritizes readability and bold, striking visual hierarchy using modern sans-serif fonts from Google Fonts.

*   **Primary Font (Headings & Accent text):** `Outfit`, sans-serif
    *   **Weights utilized:** Extra Bold (800) for large text, Black (900) for hero/CTA components, Semi-Bold (600) for smaller headings.
    *   **Usage:** Hero title, Section titles (`h2`, `h3`), large numbers, navigation links.
*   **Secondary Font (Body Text & Data):** `Inter`, sans-serif
    *   **Weights utilized:** Light (300), Regular (400), Medium (500).
    *   **Usage:** Paragraphs (`p`), project descriptions, lists, roles, small labels.

**Typography CSS Variables:**
```css
--font-heading: 'Outfit', sans-serif;
--font-body: 'Inter', sans-serif;
```

## 2. Color Palette

The site uses a dark mode palette with a strong, vibrant neon green accent inspired by cyberpunk/modern developer aesthetics.

*   **Background Base (`--bg-color`):** `#080808`
    *   *Deepest black with a slight tint to reduce pure-black eye strain.* Used for the overall body background.
*   **Surface / Elevation (`--surface-color`):** `#121212`
    *   *Lighter charcoal.* Used for section backgrounds (like Education or Projects) to create visual separation.
*   **Primary Text (`--text-main`):** `#ffffff`
    *   *White.* Used for top-level readability and contrast.
*   **Muted Text (`--text-muted`):** `#9ca3af`
    *   *Cool gray.* Used for secondary text, descriptions, and less prominent information.
*   **Primary Accent (`--accent-primary`):** `#7af298`
    *   *Vibrant Neon Green.* Used for buttons, highlights, neon text (`.neon-text`), bullet points, and hover effects.
*   **Accent Glow (`--accent-glow`):** `rgba(122, 242, 152, 0.2)`
    *   *Transparent Green.* Used for text-shadows, box-shadows, and background glowing orbs (`.glow`).

## 3. UI Components & Effects

*   **Glassmorphism & Blurs:**
    *   The Navigation bar uses a semi-transparent background with a `backdrop-filter: blur(10px)` to float above content smoothly.
    *   Background glows (`.glow`) are blurred intensely (`filter: blur(200px)`) to create ambient lighting.
*   **Outlined Text (`.outline`):**
    *   Used for brutalist typographic style. Employs `-webkit-text-stroke: 1px var(--text-muted);` and becomes solid `var(--text-main)` on hover, demonstrating interactivity.
*   **Buttons:**
    *   **Primary:** Solid neon background with dark text, throwing a neon box-shadow (`.btn-primary`).
    *   **Outline:** Transparent with a neon border, filling solid neon on hover (`.btn-outline`). Rounded with `border-radius: 50px`.

## 4. Animation & Interactions

All transitions should feel snappy yet natural (usually `0.3s` to `0.5s` easing).

*   **Load Animations:** Elements like titles utilize `.fade-in` and `.slide-up` classes to appear gracefully when the page first loads.
*   **Scroll Animations:** Sections use the Intersection Observer API (`.fade-in-scroll`). Elements start translated lower and fade/slide into their final position as the user scrolls them into view.
*   **Image Hovers:** Project and Hero images start heavily desaturated (`grayscale(0.5)`) or darkened, expanding slightly (`transform: scale(1.05)`) and returning to full color on hover to encourage interaction.
*   **Cards:** Projects float upward (`transform: translateY(-10px)`) and their borders light up with the accent color.

## 5. Spacing & Layout Structure

*   **Sections:** Use `.section-padding` (`padding: 100px 5%`).
*   **Grid Systems:** CSS Grid is heavily utilized for Cards and timelines (`grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))`) to handle responsive reflow naturally without excessive media queries.
*   **Section Headers:** H2 titles are very large with a small accent line (`.line`) underneath to anchor the section visually.

Follow these rules when adding or modifying elements to keep the "Bruno Simon" inspired modern vibe alive!
