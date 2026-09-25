# Requirements Document

## Introduction

This document captures the requirements for the About Me Section Refactor of a personal portfolio website built with Next.js 15, TypeScript, Tailwind CSS v4, and shadcn/ui. The refactor decomposes the monolithic `AboutSection` component into three focused sub-components (`AboutBio`, `AboutServices`, `AboutTechStack`), improves visual hierarchy and spacing, and enhances the service cards and tech stack grid with richer visual treatments — all without introducing new dependencies or modifying `page.tsx`.

## Glossary

- **AboutSection**: The orchestrating shell component (`src/components/sections/about.tsx`) that composes the three sub-components and is consumed by `page.tsx`.
- **AboutBio**: Sub-component responsible for rendering the bio text and highlight pills.
- **AboutServices**: Sub-component responsible for rendering the service cards grid.
- **AboutTechStack**: Sub-component responsible for rendering the category tabs and animated tech icon grid.
- **ServiceCard**: Internal component within `AboutServices` that renders a single service item.
- **BIO_HIGHLIGHTS**: A static array of five specialism labels rendered as pills below the bio paragraphs.
- **TechStackCategory**: A data object containing a label, emoji, and array of tech items for one category tab.
- **gridKey**: A React state integer incremented on each successful category change to force remount of the icon grid.
- **activeCategory**: The index of the currently selected category tab.
- **displayCategory**: The index of the category whose icons are currently rendered (lags `activeCategory` by 180ms during exit transition).
- **isExiting**: A boolean state flag that is `true` during the 180ms exit animation window.
- **System**: The About Me section of the portfolio, comprising `AboutSection` and its sub-components.

---

## Requirements

### Requirement 1: Component Decomposition

**User Story:** As a developer, I want the `AboutSection` to be decomposed into focused sub-components, so that each concern is isolated and the codebase is easier to maintain and extend.

#### Acceptance Criteria

1. THE System SHALL decompose `AboutSection` into exactly three sub-components: `AboutBio`, `AboutServices`, and `AboutTechStack`.
2. THE `AboutSection` SHALL own no local state — all state SHALL be delegated to the appropriate sub-component.
3. THE `AboutSection` SHALL render `AboutBio`, `AboutServices`, and `AboutTechStack` in a vertical stack with `space-y-10` spacing between them.
4. THE `AboutSection` SHALL remain a drop-in replacement for the existing component — `page.tsx` SHALL require no modifications.
5. WHERE sub-components are created, THE System SHALL place them in `src/components/sections/` alongside `about.tsx`.
6. WHERE sub-components are created, THE System SHALL NOT export them from the barrel — only `AboutSection` SHALL be exported for consumption by `page.tsx`.

---

### Requirement 2: Bio Section

**User Story:** As a visitor, I want the bio section to present text with clear visual hierarchy and surfaced specialisms, so that I can quickly understand the author's background and key skills.

#### Acceptance Criteria

1. WHEN `AboutBio` is rendered with a non-empty `paragraphs` array, THE `AboutBio` SHALL render every element of the array exactly once, in document order, with no paragraph skipped or duplicated.
2. WHEN `AboutBio` is rendered, THE `AboutBio` SHALL apply `text-sm leading-relaxed text-foreground font-medium` to the first paragraph (lead paragraph).
3. WHEN `AboutBio` is rendered with more than one paragraph, THE `AboutBio` SHALL apply `text-sm leading-relaxed text-muted-foreground` to all paragraphs after the first.
4. WHEN `AboutBio` is rendered, THE `AboutBio` SHALL render all five `BIO_HIGHLIGHTS` pills below the paragraphs with labels: "Flutter & Native iOS/Android", "Clean Architecture", "RAG & LLM Systems", "CI/CD Pipelines", and "Mentoring".
5. THE `AboutBio` SHALL render highlight pills using `rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground` and arrange them in a `flex flex-wrap gap-2` row.
6. THE `AboutBio` SHALL NOT mutate the `paragraphs` input array — all rendering SHALL be purely derived from props.

---

### Requirement 3: Services Section

**User Story:** As a visitor, I want the services section to display service cards with a richer, more spacious layout, so that each service is visually distinct and easy to scan.

#### Acceptance Criteria

1. WHEN `AboutServices` is rendered with a `services` array of length `n`, THE `AboutServices` SHALL render exactly `n` `ServiceCard` components — one per service item.
2. THE `AboutServices` SHALL render service cards in a responsive grid with `grid-cols-1` on mobile and `sm:grid-cols-2` on screens ≥ 640px.
3. THE `AboutServices` SHALL render a sub-heading "What I'm Doing" above the grid.
4. WHEN a `ServiceCard` is rendered, THE `ServiceCard` SHALL apply `border-l-2 border-l-primary/30` as a left accent border at rest.
5. WHEN a `ServiceCard` is hovered, THE `ServiceCard` SHALL transition the left accent border to `border-l-primary/70` and apply `shadow-md`.
6. WHEN a `ServiceCard` is rendered, THE `ServiceCard` SHALL render the icon inside a container with `h-14 w-14 rounded-2xl bg-muted/80` (56×56px).
7. WHEN a `ServiceCard` is rendered at index `i`, THE `ServiceCard` SHALL apply an entrance animation delay of `i * 80` milliseconds.
8. IF a `service.icon` path does not resolve to a valid image, THEN THE `ServiceCard` SHALL render a fallback generic icon without throwing a JavaScript error.
9. THE `AboutServices` SHALL NOT mutate the `services` input array — all rendering SHALL be purely derived from props.

---

### Requirement 4: Tech Stack Section

**User Story:** As a visitor, I want the tech stack section to display technologies grouped by category with smooth animated transitions, so that I can explore the author's skills in an engaging and organised way.

#### Acceptance Criteria

1. WHEN `AboutTechStack` is first rendered, THE `AboutTechStack` SHALL initialise `activeCategory` to `0`, displaying the first category's icons.
2. AT ALL TIMES, THE `AboutTechStack` SHALL ensure exactly one category tab has the active style (`bg-primary text-primary-foreground`) — no two tabs SHALL be simultaneously active.
3. WHEN a category tab at index `idx` is clicked and `idx` does not equal `activeCategory` and `isExiting` is `false`, THE `AboutTechStack` SHALL set `isExiting` to `true`, wait 180 milliseconds, then set `displayCategory`, `activeCategory` to `idx`, increment `gridKey` by exactly one, and set `isExiting` to `false`.
4. WHEN `handleCategoryChange` is called with an `idx` equal to `activeCategory`, THE `AboutTechStack` SHALL produce no state change.
5. WHILE `isExiting` is `true`, THE `AboutTechStack` SHALL produce no state change in response to further `handleCategoryChange` calls.
6. WHEN the icon grid is rendered, THE `AboutTechStack` SHALL apply `opacity-0 pointer-events-none` to the grid while `isExiting` is `true`, and `opacity-100` otherwise.
7. WHEN tech icons are rendered for the current category, THE `AboutTechStack` SHALL assign each icon at index `i` an `animationDelay` of `i * 45` milliseconds, ensuring icons stagger in ascending index order.
8. WHEN `gridKey` changes, THE `AboutTechStack` SHALL remount the icon grid (via React `key` prop) to reset stagger animations.
9. WHEN a tech icon is hovered, THE `AboutTechStack` SHALL apply a lift effect (`scale-110`, `-translate-y-1.5`, `shadow-lg`) to the icon container.
10. IF `categories` is an empty array, THEN THE `AboutTechStack` SHALL render no tabs and no icon grid without throwing a JavaScript error.
11. THE `AboutTechStack` SHALL NOT mutate the `categories` input array — all rendering SHALL be purely derived from props.

---

### Requirement 5: Spacing and Visual Rhythm

**User Story:** As a visitor, I want consistent spacing and visual rhythm throughout the About Me section, so that the content feels polished and easy to read.

#### Acceptance Criteria

1. THE `AboutSection` SHALL apply `space-y-10` between the three major sub-sections (Bio, Services, Tech Stack).
2. THE `AboutServices` SHALL apply `gap-4` between service cards in the grid.
3. THE `AboutTechStack` SHALL apply `space-y-5` between the category tabs row and the icon grid.
4. THE `AboutTechStack` SHALL apply `gap-3` between tech icon items in the grid.
5. THE `AboutBio` SHALL apply `space-y-3` between bio paragraphs.

---

### Requirement 6: No New Dependencies

**User Story:** As a developer, I want the refactor to use only existing dependencies, so that the bundle size and dependency surface remain unchanged.

#### Acceptance Criteria

1. THE System SHALL NOT introduce any new npm packages — all components SHALL use only the existing dependencies: `next`, `react`, `tailwindcss`, `shadcn/ui`, `tech-stack-icons`, and `lucide-react`.
2. THE System SHALL continue to use `StackIcon` from `tech-stack-icons` for tech icon rendering.
3. THE System SHALL continue to use `Card` and `CardContent` from `shadcn/ui` for service card rendering.
4. THE System SHALL continue to use `Image` from `next/image` for service icon rendering.

---

### Requirement 7: Data Integrity

**User Story:** As a developer, I want all sub-components to treat their input data as immutable, so that the source data in `src/lib/data.ts` is never accidentally modified at runtime.

#### Acceptance Criteria

1. THE `AboutBio` SHALL NOT mutate the `paragraphs` prop array or any of its elements.
2. THE `AboutServices` SHALL NOT mutate the `services` prop array or any of its elements.
3. THE `AboutTechStack` SHALL NOT mutate the `categories` prop array, any `TechStackCategory` object, or any `tech` item within a category.
