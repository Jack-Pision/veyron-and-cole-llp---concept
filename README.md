# Veyron & Cole LLP — Concept Website

A premium corporate law firm website built as a portfolio concept project.

**Designed & built by [Jack Pision](https://github.com/Jack-Pision)**

- [GitHub](https://github.com/Jack-Pision)
- [X / Twitter](https://x.com/Jack_pision)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + OKLCH color system
- **UI Components:** shadcn/ui (Radix + Base UI)
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod validation
- **Fonts:** Open Sans (body) + Instrument Serif (headings)

## Features

- 4 routes: Home, Practice, Team, Portal
- Client document portal with mock access code (`VC-DEMO`)
- Responsive design with fluid typography (clamp-based)
- Layered Vercel-style shadows, glassmorphism-free header
- Attorney profile drawers with scroll-triggered animations
- localStorage persistence for portal documents
- Legal disclaimer and compliance copy throughout

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Homepage
│   ├── practice/page.tsx     # Practice areas
│   ├── team/page.tsx         # Attorney profiles
│   └── portal/page.tsx       # Client document portal
├── components/
│   ├── site-header.tsx       # Sticky nav
│   ├── site-footer.tsx       # Full-width footer
│   ├── logo.tsx              # Scales icon + wordmark
│   ├── section-header.tsx    # Reusable section headings
│   ├── practice-card.tsx     # Practice area cards
│   ├── attorney-card.tsx     # Attorney grid cards
│   ├── consultation-form.tsx # Contact form (React Hook Form)
│   └── ui/                   # shadcn/ui components
├── data/
│   ├── practices.ts          # 6 practice areas
│   ├── attorneys.ts          # 4 attorney profiles
│   └── documents.ts          # Mock documents & updates
└── lib/
    └── utils.ts              # cn() utility
```

## License

This is a concept/portfolio project. Not a real law firm.
