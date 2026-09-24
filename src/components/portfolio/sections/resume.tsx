"use client";

import { useState } from "react";
import { education, experience, type TimelineEntry } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Card, CardTitle } from "../ui";

export function ResumeSection() {
  return (
    <>
      <Timeline title="Experience" entries={experience} />
      <Timeline title="Education" entries={education} />
    </>
  );
}

function Timeline({ title, entries }: { title: string; entries: TimelineEntry[] }) {
  return (
    <Card>
      <CardTitle className="mb-2">{title}</CardTitle>
      {entries.map((e, i) => (
        <div
          key={`${e.role}-${e.organisation}`}
          className={cn("flex gap-4 py-5", i > 0 && "border-t border-line")}
        >
          <OrgLogo domain={e.domain} name={e.organisation} />
          <div className="min-w-0 flex-1">
            <h3 className="m-0 text-[17px] font-semibold tracking-[-0.01em]">{e.role}</h3>
            <div className="mt-0.5 text-sm">{e.organisation}</div>
            <div className="mt-0.5 text-[13px] text-subtle">{e.period}</div>
            <p className="mt-2.5 mb-0 text-[15px] leading-normal text-pretty text-ink-2">{e.description}</p>
          </div>
        </div>
      ))}
    </Card>
  );
}

/** Organisation favicon, falling back to its initial when the favicon can't load. */
function OrgLogo({ domain, name }: { domain?: string; name: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="flex size-12 flex-none items-center justify-center rounded-xl bg-canvas text-[17px] font-semibold text-muted">
      {domain && !failed ? (
        // Remote favicons are tiny and not worth routing through next/image.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`}
          alt=""
          width={26}
          height={26}
          className="size-[26px] object-contain"
          onError={() => setFailed(true)}
        />
      ) : (
        name.charAt(0)
      )}
    </div>
  );
}
