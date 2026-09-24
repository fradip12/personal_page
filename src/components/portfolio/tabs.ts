"use client";

import { useSyncExternalStore } from "react";

export const TABS = [
  { id: "about", label: "About" },
  { id: "resume", label: "Resume" },
  { id: "portfolio", label: "Portfolio" },
  { id: "talks", label: "Talks" },
  { id: "contact", label: "Contact" },
] as const;

export type TabId = (typeof TABS)[number]["id"];

const DEFAULT_TAB: TabId = "about";

function isTabId(value: string): value is TabId {
  return TABS.some((t) => t.id === value);
}

function subscribe(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

/**
 * The active tab lives in the URL hash (e.g. /#resume) so tabs can be linked
 * to and the browser back button moves between them.
 */
export function useActiveTab(): [TabId, (tab: TabId) => void] {
  const hash = useSyncExternalStore(
    subscribe,
    () => window.location.hash.slice(1),
    () => "",
  );
  const active = isTabId(hash) ? hash : DEFAULT_TAB;

  const select = (tab: TabId) => {
    if (tab !== active) window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return [active, select];
}

function subscribeScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

/** True once the page has scrolled past `threshold` pixels. */
export function useScrolledPast(threshold: number): boolean {
  return useSyncExternalStore(
    subscribeScroll,
    () => window.scrollY > threshold,
    () => false,
  );
}
