"use client";

import { cn } from "@/lib/utils";

const navItems = [
  { id: "about", label: "About" },
  { id: "resume", label: "Resume" },
  { id: "portfolio", label: "Portfolio" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

interface NavigationProps {
  active: string;
  onChange: (id: string) => void;
}

export function Navigation({ active, onChange }: NavigationProps) {
  return (
    <nav className="mb-6 flex gap-1 overflow-x-auto rounded-xl bg-card border p-1 shadow-sm">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onChange(item.id)}
          className={cn(
            "rounded-lg px-5 py-2.5 text-sm font-medium transition-all whitespace-nowrap",
            active === item.id
              ? "bg-foreground text-background shadow-sm"
              : "text-muted-foreground hover:text-foreground hover:bg-muted"
          )}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}
