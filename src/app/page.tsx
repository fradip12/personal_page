"use client";

import { useState } from "react";
import { Sidebar } from "@/components/sidebar";
import { Navigation } from "@/components/navigation";
import { AboutSection } from "@/components/sections/about";
import { ResumeSection } from "@/components/sections/resume";
import { PortfolioSection } from "@/components/sections/portfolio";
import { BlogSection } from "@/components/sections/blog";
import { ContactSection } from "@/components/sections/contact";

const sections: Record<string, React.ComponentType> = {
  about: AboutSection,
  resume: ResumeSection,
  portfolio: PortfolioSection,
  blog: BlogSection,
  contact: ContactSection,
};

export default function Home() {
  const [activePage, setActivePage] = useState("about");
  const ActiveSection = sections[activePage];

  return (
    <main className="mx-auto max-w-6xl px-4 py-6 xl:py-10">
      <div className="flex flex-col gap-6">
        <Sidebar />
        <div className="min-w-0">
          <Navigation active={activePage} onChange={setActivePage} />
          <div className="rounded-2xl border bg-card p-6 shadow-sm sm:p-8">
            <ActiveSection />
          </div>
        </div>
      </div>
    </main>
  );
}
