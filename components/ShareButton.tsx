"use client";

import { useState } from "react";

export default function ShareButton({
  title,
  description,
  label,
  copiedLabel,
}: {
  title: string;
  description: string;
  label: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);

  async function share() {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title, text: description, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
    }
  }

  return (
    <button
      type="button"
      onClick={share}
      className="text-brand-950 hover:bg-brand-500 focus-visible:outline-brand-500 mt-3 inline-flex w-full items-center justify-center border border-transparent bg-mist-50 px-5 py-3.5 text-sm font-semibold transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4"
    >
      {copied ? copiedLabel : label}
    </button>
  );
}
