# Image Generation Prompts — Veyron & Cole LLP

All images should feel like premium editorial corporate photography.
Consistent mood: calm, sharp, trustworthy, expensive.
Color palette anchors: deep navy (#101C2E), warm gold (#B08A57), warm off-white (#F6F3EE).
Avoid stock-photo cliches, bright colors, startup aesthetics, or anything cartoonish.

---

## 1. Hero Office — `/public/images/hero-office.jpg`

**Placement:** Homepage hero section, right side. Large (roughly 800x600).

**Prompt:**
> A premium corporate law firm office interior. Deep navy paneled walls with warm wood trim. A marble reception desk in the foreground. Soft natural light from floor-to-ceiling windows on the left. Minimalist executive decor — a single plant, a leather chair, no clutter. Warm, muted tones of ivory, navy, and brass. Shot from a slightly low angle. Editorial architectural photography. No text, no logos, no people. Moody, refined, high-end.

---

## 2. Attorney Portrait — Eleanor Veyron — `/public/images/attorney-1.jpg`

**Placement:** Team page card, home page preview card, profile drawer. Portrait aspect (roughly 400x500).

**Prompt:**
> Professional corporate attorney portrait of a confident senior woman in her late 40s. Tailored dark navy blazer over a cream blouse. Calm, composed expression. Neutral warm studio background, slightly textured like linen. Soft key light from the left. No jewelry except small gold earrings. Hair neatly styled. Premium law firm editorial portrait photography. No text, no logos.

---

## 3. Attorney Portrait — Marcus Cole — `/public/images/attorney-2.jpg`

**Placement:** Team page card, profile drawer. Portrait aspect (roughly 400x500).

**Prompt:**
> Professional corporate attorney portrait of a distinguished Black man in his early 40s. Tailored charcoal suit, crisp white shirt, thin navy tie. Confident, approachable expression. Neutral warm studio background, slightly textured like linen. Soft key light from the left. Short, clean haircut. Premium law firm editorial portrait photography. No text, no logos.

---

## 4. Attorney Portrait — Amara Bennett — `/public/images/attorney-3.jpg`

**Placement:** Team page card, profile drawer. Portrait aspect (roughly 400x500).

**Prompt:**
> Professional corporate attorney portrait of a poised woman in her mid-30s. Tailored dark navy suit, light blue blouse. Warm, confident smile. Neutral warm studio background, slightly textured like linen. Soft key light from the left. Natural makeup, professional hairstyle. Premium law firm editorial portrait photography. No text, no logos.

---

## 5. Attorney Portrait — Julian Hart — `/public/images/attorney-4.jpg`

**Placement:** Team page card, profile drawer. Portrait aspect (roughly 400x500).

**Prompt:**
> Professional corporate attorney portrait of a focused man in his mid-30s. Tailored dark navy suit, white open-collar shirt. Calm, intelligent expression. Neutral warm studio background, slightly textured like linen. Soft key light from the left. Short beard, clean styling. Premium law firm editorial portrait photography. No text, no logos.

---

## 6. Portal Visual — `/public/images/portal-visual.jpg`

**Placement:** Homepage portal CTA section, right side. Landscape (roughly 800x500).

**Prompt:**
> Minimal premium desk setup photographed from a 45-degree angle. A closed laptop with a matte dark navy finish sits on a warm walnut desk. Beside it, a small stack of legal documents tied with a thin gold ribbon. A fountain pen rests on a leather notebook. The background is softly blurred — warm wood shelves with a few law books. The mood is confidential, quiet, and professional. Warm ambient lighting with gold highlights. Editorial still-life photography. No text, no readable screens, no logos.

---

## Notes

- All images should be saved as `.jpg` (high quality, ~85-90%) to keep file sizes reasonable.
- After generating, update the file extensions in the codebase from `.svg` to `.jpg`:
  - `src/app/page.tsx` — `hero-office.svg` → `hero-office.jpg` and `portal-visual.svg` → `portal-visual.jpg`
  - `src/data/attorneys.ts` — all four `attorney-*.svg` → `attorney-*.jpg`
- Maintain the same filenames and paths so no import changes are needed beyond the extensions.
