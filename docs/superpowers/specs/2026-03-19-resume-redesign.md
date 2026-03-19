# Resume Redesign: The Technical Ledger (Dark Edition)

**Goal:** Transform the existing resume into a high-signal, dark-themed web portfolio that emphasizes technical depth and project architecture.

## Visual Design

### 1. Palette
- **Background:** `#121212` (Deep Charcoal)
- **Surface/Cards:** `#18181b` (Zinc Black)
- **Accents:** `#f97316` (Orange-500) or current `#b55a2a` (Rust Orange)
- **Text:** `#f9fafb` (Off-white)
- **Muted Text:** `#9ca3af` (Grey-400)
- **Borders:** `rgba(255, 255, 255, 0.1)`

### 2. Typography
- **Technical/Headers:** `Martian Mono`, `Consolas`, monospace.
  - Used for: Name, Section Titles, Job Titles, Dates, Stack Chips.
- **Reading/Body:** `Inter`, `System Sans-Serif`.
  - Used for: Summary, Experience Bullets, Project Descriptions.

## Layout & Components

### 1. Layout (Desktop)
- **Main Column (70%):**
  - **Header:** Full-width name and headline.
  - **Summary:** Concise intro focusing on "Support + Systems Thinking".
  - **Experience:** Vertical timeline-style list.
  - **Selected Projects:** Cards with "Architecture" labels.
- **Sidebar (30%):**
  - **Contact:** Clean, vertical list with subtle icons or labels.
  - **Core Competencies:** Tags/chips layout.
  - **Technical Skills:** Grouped (Primary, Identity, Tools).
  - **Education:** Minimalist list.

### 2. Layout (Mobile)
- Single-column flow.
- Sidebar content moves below the Main Column.
- Header contact info collapses into a horizontal or grid layout.

## Content Enhancements

### 1. Project Cards
- **Architecture Blocks:** Each project card includes a "System Overview" and a "Stack" section.
- **Links:** Prominent, high-contrast links to live projects (holler.works, pixelpatcher.com).

### 2. Experience
- **Focus:** Maintain the existing bullets but ensure clear separation between roles.
- **Metadata:** Company and Location in muted text below job title.

## Technical Implementation
- **Markup:** Semantic HTML5 (`<main>`, `<section>`, `<article>`, `<aside>`).
- **Styling:** Vanilla CSS (CSS Variables for the theme).
- **Responsiveness:** CSS Grid for layout, Media Queries for mobile breakpoint (768px).
- **Print:** Maintain `@media print` support to ensure the resume still looks good as a 1-page PDF.
