<!--
PHASE 1 AUDIT

Architecture Review
- File structure is small: `index.html` is the public site, `style.css` styles the generated resume output, `input.md` feeds `build_resume.sh`, which produces `resume.html` and `resume.pdf`. Local fonts live in `assets/fonts/`. Two GitHub Pages workflows exist in `.github/workflows/`.
- Tech stack is plain static HTML/CSS with no framework and no package manager. That is the correct stack for this problem.
- The current architecture is split in a wasteful way. There are effectively two resumes with different content models: the handcrafted web page in `index.html` and the Markdown-generated `resume.html` / `resume.pdf` path. They are already out of sync.
- `index.html` is overstuffed. It inlines all styles instead of using `style.css`, which makes future edits harder for no benefit.
- `style.css` duplicates a large amount of styling logic already embedded in `index.html`. That is redundant maintenance surface.
- `.github/workflows/jp.yml` and `.github/workflows/static.yml` are identical deploy workflows. One is dead weight.
- `resume.html` and `resume.pdf` are generated artifacts living in the repo root. Keeping generated output checked in may be acceptable for a resume PDF, but `resume.html` is redundant if the public page is `index.html`.
- `PersingerJasonResume.pdf` and `resume.pdf` are separate PDFs with different content. That is confusing for both maintenance and visitors.
- There is no site-level JavaScript file right now. That is fine, but there is also no structured way to add a small amount of progressive enhancement.
- Hosting is simple GitHub Pages deployment via Actions. No hosting config file beyond workflows.

Missing / Underbuilt
- No Open Graph tags, no Twitter card tags, no favicon, and no structured data. SEO and share previews are underbuilt.
- No skip link. Keyboard users land in navigation or top controls without a fast path to main content.
- No explicit focus styling for keyboard navigation.
- No clear top navigation for scanning sections. The page assumes visitors will read top-to-bottom.
- Accessibility is mixed: semantic sections exist in `index.html`, but the color system is too dim in places and the visual density hurts readability.
- `resume.pdf` is not tagged, and the print path spans two pages, which weakens the “single-page resume” claim.
- External font strategy is inconsistent: `index.html` loads Google Fonts for Inter while also bundling local Martian Mono fonts. That adds network dependence for a site that could be fully local and static.

Dead Code / Orphans / Redundancy
- Duplicate GitHub Pages workflow: one should be removed.
- `style.css` is not used by the public site and only serves the generated resume path. If the public site is the source of truth, this file should be repurposed instead of duplicated inline CSS.
- `resume.html` is a generated file with no unique value once the public page is redesigned.
- `input.md` is useful as raw content, but not as a separate presentation layer unless the PDF pipeline remains an intentional product.

Content Review
- The site currently has stronger content in `index.html` than in `input.md`, but neither version is sharp enough.
- The strongest differentiator is not “technical product support specialist.” It is a hybrid profile: support systems thinker, technical communicator, and operator who can debug messy workflows and build process around them. The current wording only partially captures that.
- Too many bullets describe duties instead of outcomes. Phrases like “investigate and resolve,” “support users,” and “managed end-to-end implementations” are credible but generic. They do not tell a hiring manager what improved because this person was there.
- The professional narrative is split. One version centers SaaS support; the other adds Pixel Patcher and personal projects. Together they imply a strong operator-builder profile, but the site does not intentionally frame that story.
- Several claims are undersold because they stop at activity. Writing runbooks, leading escalations, launching training, and translating change into support workflows are high-value skills, but the copy does not consistently state impact.
- Some bullets verge on filler or resume boilerplate. “Cross-functional collaboration,” “process improvement,” and “user empathy” are true, but presented as generic hiring keywords.
- Skills are too list-heavy. They read like a search-index block rather than a calibrated statement of depth.
- Project entries are more interesting than the work history in some places, but they still lean on stack descriptors and slogans instead of results or design decisions.
- The address is probably too specific for a public website. Full street address is unnecessary and increases personal exposure without helping hiring outcomes.
- Tone is mostly consistent but flatter than it should be. The web page hints at personality; the generated resume falls back into conventional template voice.
- There is a mild contradiction between “single-page resume layout” messaging and the actual two-page PDFs.

Specific Content Weaknesses
- “Technical Product Support Specialist” is serviceable but bland and interchangeable.
- Summary language is too soft and repetitive; it says “support” several times without sharpening the angle.
- Experience bullets lack numbers because no numbers exist in source material, but they also rarely substitute with concrete stakes, complexity, or decision ownership.
- Binance.US entry mentions CSAT and resolution time in `index.html` but provides no detail. It feels asserted, not supported.
- Pixel Patcher is compelling because it shows ownership and direct client work, but it is not integrated tightly enough into the main narrative.
- Project descriptions are clear but not yet persuasive enough about why they matter.
- Skills labeling such as “Primary,” “Identity,” and “Tools & Foundational” is cleaner than the Markdown version, but still slightly opaque to a recruiter scanning quickly.

Design and UX Review
- Current desktop design has intent and some personality, but it is too dim. The contrast between background, muted copy, and line work is low enough that the page feels harder to read than it should.
- The current two-column layout is visually dense. It looks like a print artifact more than a web-first portfolio.
- Typography choices are interesting, but the heavy condensed mono face is doing too much. Large sections feel cramped and muted instead of crisp.
- Information hierarchy is only moderately successful. A visitor can find experience and projects, but not as quickly as they should. There is no simple nav and no obvious “this is who I am / this is why I matter” frame.
- Mobile holds together structurally, but still feels like a compressed print sheet rather than a layout designed for phones.
- The toolbar is useful but visually disconnected from the resume and not especially elegant.
- Accessibility basics need work: no skip link, no visible keyboard focus treatment, no social/share metadata, and probably insufficient contrast in several muted text regions.
- What works: semantic structure in the main page, real project links, a clear attempt at print support, and a design direction that is at least specific.
- What does not: duplicated systems, dim readability, inconsistent source of truth, generic copy, and no clear web-first narrative flow.

Implementation Decisions
- Consolidate the public site around `index.html` + `style.css` + a very small `script.js`.
- Keep the site static and dependency-free.
- Preserve one downloadable PDF resume asset, but stop pretending there are multiple canonical resume versions.
- Reframe the content around support systems, technical communication, and operator mindset.
- Use the terminal aesthetic as presentation, not gimmick: readable type, restrained effects, clear anchors, minimal motion.
-->

# Working Notes

Implementation will prioritize:

1. One public source of truth for the site.
2. Stronger narrative and tighter copy.
3. Terminal-inspired design that stays readable on first glance.
4. Minimal architecture and deploy-safe cleanup.
