"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    const initialTheme = storedTheme === "dark" ? "dark" : "light";

    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-[color:var(--line)] bg-[color:var(--panel)] px-4 py-3 shadow-[var(--shadow)] backdrop-blur-xl">
        <a href="#home" className="flex items-center gap-3">
          <span className="h-3 w-3 rounded-full bg-[color:var(--accent)]" />
          <span className="text-sm font-semibold tracking-[0.28em] uppercase">
            Mathuppriya
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[color:var(--muted)] transition hover:text-[color:var(--text)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/Mathuppriya-CV.txt"
            download
            className="hidden rounded-full border border-[color:var(--line)] px-4 py-2 text-sm font-medium text-[color:var(--text)] transition hover:bg-[color:var(--accent-soft)] md:inline-flex"
          >
            Download CV
          </a>

          <button
            type="button"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--line)] text-sm transition hover:bg-[color:var(--accent-soft)]"
          >
            {theme === "light" ? "☾" : "☀"}
          </button>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--line)] text-lg transition hover:bg-[color:var(--accent-soft)] md:hidden"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="mx-auto mt-3 max-w-6xl rounded-3xl border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-4 shadow-[var(--shadow)] backdrop-blur-xl md:hidden">
          <div className="grid gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-[color:var(--muted)] transition hover:bg-[color:var(--accent-soft)] hover:text-[color:var(--text)]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/Mathuppriya-CV.txt"
              download
              className="rounded-2xl px-4 py-3 text-sm font-medium text-[color:var(--text)] transition hover:bg-[color:var(--accent-soft)]"
            >
              Download CV
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}