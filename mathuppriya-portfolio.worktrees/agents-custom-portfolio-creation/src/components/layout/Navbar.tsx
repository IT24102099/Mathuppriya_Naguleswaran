const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5">
        <a
          href="#hero"
          className="inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.72)] px-4 py-2 shadow-[0_12px_30px_-18px_rgba(31,41,55,0.35)] backdrop-blur-xl"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
          <span className="font-semibold tracking-wide">Mathuppriya</span>
        </a>

        <nav className="hidden items-center gap-7 rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.68)] px-6 py-3 text-sm text-[var(--text-secondary)] backdrop-blur-xl md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[var(--text-primary)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_35px_-20px_rgba(47,93,80,0.75)] transition-transform hover:-translate-y-0.5"
        >
          Let&apos;s talk
        </a>
      </div>
    </header>
  );
}