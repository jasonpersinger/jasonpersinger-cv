# Resume Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the current resume into a dark-themed, high-signal web portfolio that emphasizes technical depth and project architecture.

**Architecture:** A single-page, responsive, two-column layout built with semantic HTML5 and vanilla CSS. Uses CSS variables for the dark theme and a mobile-first grid approach.

**Tech Stack:** HTML5, CSS3, Google Fonts (Martian Mono), and custom icons/SVG where needed.

---

### Task 1: Setup Theme & Typography

**Files:**
- Modify: `index.html` (Header styles)
- Modify: `style.css` (Root variables and resets)

- [ ] **Step 1: Update CSS Variables for Dark Theme**

Modify `style.css` to include the new dark palette variables:
```css
:root {
  --bg: #121212;
  --surface: #18181b;
  --ink: #f9fafb;
  --muted: #9ca3af;
  --soft: #6b7280;
  --line: rgba(255, 255, 255, 0.1);
  --accent: #b55a2a;
  --accent-soft: rgba(181, 90, 42, 0.16);
  --shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
}
```

- [ ] **Step 2: Update Base Styles**

Update the `html` and `body` backgrounds and primary text colors in `style.css`.

- [ ] **Step 3: Run the build script to verify no errors**

Run: `./build_resume.sh`
Expected: "Built resume.html" and "Built resume.pdf" (even if PDF styling is temporary).

- [ ] **Step 4: Commit**

```bash
git add style.css index.html
git commit -m "feat: setup dark theme variables and base styles"
```

---

### Task 2: Implement Redesigned Header & Summary

**Files:**
- Modify: `index.html` (Main layout)
- Modify: `style.css` (Header & Summary classes)

- [ ] **Step 1: Refactor Header Structure**

Ensure the header uses a full-width grid and updates the typography for the name and headline.

- [ ] **Step 2: Update Summary Layout**

Adjust the summary to follow the "Systems Thinking" focus described in the spec.

- [ ] **Step 3: Commit**

```bash
git add index.html style.css
git commit -m "feat: implement redesigned header and summary"
```

---

### Task 3: Implement Experience Column (Timeline)

**Files:**
- Modify: `index.html` (Experience section)
- Modify: `style.css` (Timeline and Role styles)

- [ ] **Step 1: Style the Experience Timeline**

Use a left border or visual "dot" to indicate the chronological flow. Ensure roles are well-spaced.

- [ ] **Step 2: Update Metadata Typography**

Company and location should use the "Muted" color and secondary typography.

- [ ] **Step 3: Commit**

```bash
git add index.html style.css
git commit -m "feat: implement experience timeline"
```

---

### Task 4: Implement Architecture-Focused Project Cards

**Files:**
- Modify: `index.html` (Selected Projects section)
- Modify: `style.css` (Project card styles)

- [ ] **Step 1: Refactor Project Cards**

Include the "System Overview" and "Stack" sections for *holler.works* and *pixelpatcher.com*.

- [ ] **Step 2: Add Hover Effects**

Add subtle scale or color shifts to highlight interactivity.

- [ ] **Step 3: Commit**

```bash
git add index.html style.css
git commit -m "feat: implement architecture project cards"
```

---

### Task 5: Implement Sidebar (Skills & Education)

**Files:**
- Modify: `index.html` (Sidebar section)
- Modify: `style.css` (Panel and Chip styles)

- [ ] **Step 1: Style Skills Chips**

Ensure chips/tags use high-contrast accents against the dark cards.

- [ ] **Step 2: Layout Education Items**

Minimalist, clean list at the bottom of the sidebar.

- [ ] **Step 3: Commit**

```bash
git add index.html style.css
git commit -m "feat: implement redesigned sidebar"
```

---

### Task 6: Mobile Responsiveness & Print Support

**Files:**
- Modify: `style.css` (Media Queries)

- [ ] **Step 1: Add Mobile-First Media Queries**

Refactor the grid to collapse into a single column on screens smaller than 768px.

- [ ] **Step 2: Polish Print Styles**

Ensure the dark theme is inverted or handled gracefully for the 1-page PDF print output.

- [ ] **Step 3: Final Build & Verification**

Run: `./build_resume.sh`
Expected: Final PDF and HTML look as expected.

- [ ] **Step 4: Commit**

```bash
git add style.css index.html
git commit -m "feat: add mobile responsiveness and print support"
```
