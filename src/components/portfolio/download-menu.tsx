"use client";

import { DropdownMenu } from "radix-ui";
import { siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";
import { pillClass } from "./ui";

/** "Download CV/Resume" pill that opens a menu with one item per PDF. */
export function DownloadMenu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={cn(pillClass("secondary"), "group cursor-pointer gap-1.5 outline-none focus-visible:ring-2 focus-visible:ring-accent")}>
        Download CV/Resume
        <svg
          viewBox="0 0 12 12"
          aria-hidden
          className="size-3 transition-transform duration-200 group-data-[state=open]:rotate-180"
        >
          <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="start"
          sideOffset={8}
          className="z-50 min-w-[220px] rounded-tile bg-surface p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04)]"
        >
          {siteConfig.downloads.map((d) => (
            <DropdownMenu.Item key={d.href} asChild>
              <a
                href={d.href}
                download={d.fileName}
                className="flex cursor-pointer items-center justify-between gap-4 rounded-[10px] px-3 py-2.5 text-ink no-underline outline-none hover:no-underline data-[highlighted]:bg-canvas"
              >
                <span className="text-[15px] font-medium">{d.label}</span>
                <span className="text-[13px] text-subtle">{d.detail} · PDF</span>
              </a>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
