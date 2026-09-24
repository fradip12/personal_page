"use client";

import type { Contributions } from "@/lib/github";
import { siteConfig } from "@/lib/data";
import { Header } from "./header";
import { Hero } from "./hero";
import { Sidebar } from "./sidebar";
import { useActiveTab, type TabId } from "./tabs";
import { AboutSection } from "./sections/about";
import { ResumeSection } from "./sections/resume";
import { WorkSection } from "./sections/work";
import { TalksSection } from "./sections/talks";
import { ContactSection } from "./sections/contact";

const SECTIONS: Record<TabId, React.ComponentType> = {
  about: AboutSection,
  resume: ResumeSection,
  portfolio: WorkSection,
  talks: TalksSection,
  contact: ContactSection,
};

export function Portfolio({ contributions }: { contributions: Contributions | null }) {
  const [active, select] = useActiveTab();
  const Section = SECTIONS[active];

  return (
    <div className="min-h-screen px-4 pb-20 sm:px-5">
      <Header active={active} onSelect={select} />

      <div className="mx-auto mt-6 flex max-w-[1080px] flex-wrap items-start gap-5">
        <main className="flex min-w-0 flex-[1_1_420px] flex-col gap-5">
          <Hero />
          <Section />
        </main>
        <Sidebar contributions={contributions} />
      </div>

      <footer className="mx-auto mt-10 max-w-[1080px] text-xs text-subtle">
        © {new Date().getFullYear()} {siteConfig.name}
      </footer>
    </div>
  );
}
