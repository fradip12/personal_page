"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Card, CardTitle, pillClass } from "../ui";

const fieldClass =
  "rounded-xl border border-field px-4 py-3.5 text-[17px] outline-none focus:border-accent focus:shadow-[0_0_0_4px_rgba(0,113,227,0.15)]";

/**
 * There is no backend: submitting opens the visitor's email app with the
 * message filled in, addressed to siteConfig.email.
 */
export function ContactSection() {
  const [opened, setOpened] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = `Project enquiry from ${name}`;
    const body = `${message}\n\n— ${name} (${email})`;
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  };

  return (
    <Card>
      <CardTitle className="mb-1.5">Let’s build something.</CardTitle>
      <p className="mt-0 mb-5.5 text-[17px] text-muted">I usually reply within a day.</p>

      {opened ? (
        <div className="rounded-tile bg-canvas p-6 text-[17px]">
          Thanks — your email app should now be open with the message ready to send. If it
          didn’t open, write to{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-link">
            {siteConfig.email}
          </a>
          .{" "}
          <button
            type="button"
            onClick={() => setOpened(false)}
            className="cursor-pointer text-link hover:underline"
          >
            Edit message
          </button>
        </div>
      ) : null}

      {/* Kept mounted (just hidden) so the visitor's text survives "Edit message". */}
      <form onSubmit={handleSubmit} hidden={opened} className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-3">
          <input name="name" required placeholder="Name" autoComplete="name" aria-label="Name" className={cn(fieldClass, "flex-[1_1_200px]")} />
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            autoComplete="email"
            aria-label="Email"
            className={cn(fieldClass, "flex-[1_1_200px]")}
          />
        </div>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project"
          aria-label="Message"
          className={cn(fieldClass, "resize-y")}
        />
        <button type="submit" className={cn(pillClass("primary"), "cursor-pointer self-start px-6.5 py-3 text-[17px]")}>
          Send message
        </button>
      </form>
    </Card>
  );
}
