"use client";

import { siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";
import { TABS, useScrolledPast, type TabId } from "./tabs";
import { pillClass } from "./ui";

/**
 * Full-width bar at the top of the page that shrinks into a floating,
 * frosted pill once the visitor scrolls.
 */
export function Header({ active, onSelect }: { active: TabId; onSelect: (tab: TabId) => void }) {
  const scrolled = useScrolledPast(24);

  return (
    <header
      className={cn(
        "pointer-events-none sticky top-0 z-10 -mx-4 px-4 transition-[padding] duration-[450ms] ease-spring sm:-mx-5 sm:px-5",
        scrolled && "pt-3",
      )}
    >
      <div
        className={cn(
          "pointer-events-auto mx-auto flex h-[52px] items-center justify-between gap-4 transition-all duration-[450ms] ease-spring",
          scrolled
            ? "max-w-[720px] rounded-full bg-white/78 pr-2 pl-5 shadow-[0_8px_30px_rgba(0,0,0,0.10),0_0_0_1px_rgba(0,0,0,0.04)] backdrop-blur-xl backdrop-saturate-[1.8]"
            : "max-w-[1080px] rounded-none bg-transparent",
        )}
      >
        <div className="shrink-0 text-[15px] font-semibold tracking-[-0.01em]">
          {siteConfig.shortName}
        </div>

        <nav
          aria-label="Sections"
          className="flex min-w-0 gap-0.5 overflow-x-auto rounded-[10px] bg-black/5 p-[3px]"
        >
          {TABS.map((tab) => {
            const on = tab.id === active;
            return (
              <button
                key={tab.id}
                type="button"
                aria-current={on ? "page" : undefined}
                onClick={() => onSelect(tab.id)}
                className={cn(
                  "cursor-pointer rounded-lg px-2.5 py-1.5 text-[13px] sm:px-3.5 font-medium whitespace-nowrap transition-all duration-200",
                  on ? "bg-white text-ink shadow-[0_1px_3px_rgba(0,0,0,0.12)]" : "text-muted hover:text-ink",
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>

        <a href={`mailto:${siteConfig.email}`} className={cn(pillClass("primary", "sm"), "max-sm:hidden")}>
          Hire me
        </a>
      </div>
    </header>
  );
}
