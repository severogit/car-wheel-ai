"use client";

import { useState } from "react";

const NAV_ITEMS = ["Products", "Download", "Pricing"];

type HeaderProps = {
  title?: string;
  ctaLabel?: string;
};

export default function Header({
  title = "Chora boy",
  ctaLabel = "Alguma coisa",
}: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full border-b border-zinc-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <div className="flex flex-1 items-center justify-center gap-8 md:flex-none md:justify-start">
          <span className="text-lg font-semibold text-zinc-900 text-center md:text-left">
            {title}
          </span>

          <nav className="hidden items-center gap-6 text-sm text-zinc-700 md:flex">
            {NAV_ITEMS.map((label) => (
              <a
                key={label}
                href="#"
                className="font-medium transition-colors hover:text-zinc-900"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end gap-3 md:flex-none md:ml-6">
          <button
            type="button"
            className="hidden rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-5 py-2 text-sm font-semibold text-white shadow-[0_12px_35px_-18px_rgba(99,102,241,0.7)] transition hover:shadow-[0_14px_40px_-18px_rgba(99,102,241,0.8)] focus:outline-none focus:ring-2 focus:ring-indigo-500/50 md:inline-flex"
          >
            {ctaLabel}
          </button>

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm transition hover:border-zinc-300 md:hidden"
          >
            {mobileOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="mx-auto max-w-5xl border-t border-zinc-100 px-6 pb-5 pt-4 md:hidden">
          <nav className="flex flex-col gap-3 text-sm font-medium text-zinc-700">
            {NAV_ITEMS.map((label) => (
              <a
                key={label}
                href="#"
                className="rounded-lg px-3 py-2 transition hover:bg-zinc-50 hover:text-zinc-900"
              >
                {label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="mt-4 w-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_35px_-18px_rgba(99,102,241,0.7)] transition hover:shadow-[0_14px_40px_-18px_rgba(99,102,241,0.8)] focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
          >
            {ctaLabel}
          </button>
        </div>
      )}
    </header>
  );
}
