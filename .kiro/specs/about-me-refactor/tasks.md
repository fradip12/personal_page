# Implementation Plan: About Me Section Refactor

## Overview

Decompose the monolithic `AboutSection` into three focused sub-components (`AboutBio`, `AboutServices`, `AboutTechStack`) and refactor `about.tsx` into a stateless orchestrating shell. All changes are confined to `src/components/sections/` — no other files are modified.

## Tasks

- [ ] 1. Create `AboutBio` component
  - [ ] 1.1 Create `src/components/sections/about-bio.tsx` with the `AboutBioProps` interface and `AboutBio` function
    - Define `BIO_HIGHLIGHTS` constant array with the five specialism labels: "Flutter & Native iOS/Android", "Clean Architecture", "RAG & LLM Systems", "CI/CD Pipelines", "Mentoring"
    - Render `paragraphs[0]` with `text-sm leading-relaxed text-foreground font-medium` (lead paragraph)
    - Render `paragraphs.slice(1)` with `text-sm leading-relaxed text-muted-foreground` (secondary paragraphs)
    - Render `BIO_HIGHLIGHTS` pills below paragraphs using `rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground` in a `flex flex-wrap gap-2` row
    - Apply `space-y-3` between paragraphs and pills
    - Do not mutate the `paragraphs` prop
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 5.5_

  - [ ]* 1.2 Write property test for `AboutBio` — bio completeness
    - **Property 1: Bio completeness** — for any non-empty `paragraphs` array, `AboutBio` renders exactly `paragraphs.length` `<p>` elements in document order with no duplicates
    - **Validates: Requirements 2.1**

  - [ ]* 1.3 Write unit tests for `AboutBio`
    - Assert first paragraph receives `text-foreground font-medium` classes
    - Assert subsequent paragraphs receive `text-muted-foreground` class
    - Assert all five `BIO_HIGHLIGHTS` pill labels are rendered
    - Assert pills are wrapped in a `flex flex-wrap gap-2` container
    - _Requirements: 2.2, 2.3, 2.4, 2.5_

- [ ] 2. Create `AboutServices` component
  - [ ] 2.1 Create `src/components/sections/about-services.tsx` with `Service` and `AboutServicesProps` interfaces, `ServiceCard` internal component, and `AboutServices` function
    - `ServiceCard` renders a `Card` with `border border-l-2 border-l-primary/30 shadow-sm transition-all duration-200 hover:border-l-primary/70 hover:shadow-md`
    - Icon container inside `ServiceCard`: `flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-muted/80`
    - `Image` renders at `width={28} height={28}` with an `onError` fallback to a generic icon (e.g. `/images/icon-dev.svg`)
    - Entrance animation on `ServiceCard`: `animate-in fade-in slide-in-from-bottom-4` with `animationDelay: index * 80ms` and `animationFillMode: "both"`
    - `AboutServices` renders sub-heading "What I'm Doing" above the grid
    - Grid uses `grid grid-cols-1 sm:grid-cols-2 gap-4`
    - Do not mutate the `services` prop
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 5.2, 6.3, 6.4_

  - [ ]* 2.2 Write property test for `AboutServices` — service card count
    - **Property 2: Service card count** — for any `services` array of length `n`, `AboutServices` renders exactly `n` `ServiceCard` components
    - **Validates: Requirements 3.1**

  - [ ]* 2.3 Write unit tests for `AboutServices`
    - Assert sub-heading "What I'm Doing" is rendered
    - Assert grid has `sm:grid-cols-2` class
    - Assert each card has `border-l-2 border-l-primary/30` classes
    - Assert icon container has `h-14 w-14 rounded-2xl bg-muted/80` classes
    - Assert `animationDelay` style is `index * 80ms` for each card
    - _Requirements: 3.2, 3.3, 3.4, 3.6, 3.7_

- [ ] 3. Checkpoint — Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 4. Create `AboutTechStack` component
  - [ ] 4.1 Create `src/components/sections/about-tech-stack.tsx` with `TechStackCategory`, `AboutTechStackProps` interfaces and `AboutTechStack` function
    - Own `activeCategory` (init `0`), `displayCategory` (init `0`), `isExiting` (init `false`), `gridKey` (init `0`) state
    - Implement `handleCategoryChange(idx)`: no-op if `idx === activeCategory` or `isExiting`; otherwise set `isExiting = true`, after 180ms set `displayCategory`, `activeCategory` to `idx`, increment `gridKey` by 1, set `isExiting = false`
    - Render category tabs as `<button>` elements; active tab gets `bg-primary text-primary-foreground shadow-sm scale-105`, inactive gets `bg-muted text-muted-foreground hover:bg-muted/70 hover:text-foreground hover:scale-105`
    - Icon grid uses React `key={gridKey}` to force remount on category change
    - Apply `opacity-0 pointer-events-none` to grid while `isExiting` is `true`, `opacity-100` otherwise
    - Each tech icon at index `i` gets `animationDelay: i * 45ms` with `animationFillMode: "both"` and `animate-in fade-in slide-in-from-bottom-3`
    - Icon container hover: `group-hover:scale-110 group-hover:-translate-y-1.5 group-hover:shadow-lg`
    - Apply `space-y-5` between tabs row and icon grid; `gap-3` between icon items
    - Guard: if `categories.length === 0`, render nothing without throwing
    - Do not mutate the `categories` prop
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 4.10, 4.11, 5.3, 5.4, 6.2_

  - [ ]* 4.2 Write property test for `AboutTechStack` — active tab invariant
    - **Property 3: Active tab invariant** — at any point in time, exactly one category tab has `bg-primary text-primary-foreground` applied; no two tabs are simultaneously active
    - **Validates: Requirements 4.2**

  - [ ]* 4.3 Write property test for `AboutTechStack` — grid key monotonicity
    - **Property 4: Grid key monotonicity** — after each successful `handleCategoryChange`, `gridKey` is strictly greater than its previous value
    - **Validates: Requirements 4.3, 4.8**

  - [ ]* 4.4 Write property test for `AboutTechStack` — animation delay monotonicity
    - **Property 5: Animation delay monotonicity** — for any rendered tech icon grid, `animationDelay[i] < animationDelay[i+1]` for all valid `i`
    - **Validates: Requirements 4.7**

  - [ ]* 4.5 Write property test for `AboutTechStack` — exit guard idempotency
    - **Property 6: Exit guard idempotency** — `handleCategoryChange` called with the current `activeCategory` produces no state transitions; the function is a no-op when `idx === activeCategory` or `isExiting === true`
    - **Validates: Requirements 4.4, 4.5**

  - [ ]* 4.6 Write unit tests for `AboutTechStack`
    - Assert initial active category is index 0
    - Assert tab click triggers 180ms transition and updates displayed icons (use fake timers)
    - Assert `opacity-0` applied to grid during exit, `opacity-100` after
    - Assert empty `categories` array renders without error
    - _Requirements: 4.1, 4.3, 4.6, 4.10_

- [ ] 5. Refactor `AboutSection` orchestrating shell
  - [ ] 5.1 Rewrite `src/components/sections/about.tsx` to import and compose the three sub-components
    - Remove all local state (`activeCategory`, `displayCategory`, `isExiting`, `gridKey`) — delegate to sub-components
    - Import `aboutText`, `services`, `techStackCategories` from `@/lib/data`
    - Import `AboutBio` from `./about-bio`, `AboutServices` from `./about-services`, `AboutTechStack` from `./about-tech-stack`
    - Render `SectionTitle` ("About me"), then `AboutBio`, `AboutServices`, `AboutTechStack` in a `div` with `space-y-10`
    - Keep `export function AboutSection()` signature unchanged so `page.tsx` requires no modifications
    - Do not re-export `AboutBio`, `AboutServices`, or `AboutTechStack` from this file
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 5.1_

  - [ ]* 5.2 Write unit tests for `AboutSection`
    - Assert `AboutSection` renders without errors using real data from `src/lib/data`
    - Assert `SectionTitle` with "About me" is present
    - Assert `AboutBio`, `AboutServices`, and `AboutTechStack` are all rendered
    - _Requirements: 1.1, 1.3, 1.4_

- [ ] 6. Final checkpoint — Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties from the design document
- Unit tests validate specific examples and edge cases
- Sub-components (`AboutBio`, `AboutServices`, `AboutTechStack`) are NOT exported from any barrel — only `AboutSection` is consumed externally
- No new npm packages are introduced; all components use existing dependencies only

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1", "2.1", "4.1"] },
    { "id": 1, "tasks": ["1.2", "1.3", "2.2", "2.3", "4.2", "4.3", "4.4", "4.5", "4.6"] },
    { "id": 2, "tasks": ["5.1"] },
    { "id": 3, "tasks": ["5.2"] }
  ]
}
```
