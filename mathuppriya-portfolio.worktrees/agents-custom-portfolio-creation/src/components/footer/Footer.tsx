export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8">
      <div className="container flex flex-col items-center justify-between gap-3 px-6 text-center md:flex-row md:text-left">
        <h3 className="font-[family:var(--font-playfair)] text-xl font-bold text-[var(--text-primary)]">
          Mathuppriya
        </h3>
        <p className="text-sm text-[var(--text-secondary)]">
          © 2026 Mathuppriya. All rights reserved.
        </p>
      </div>
    </footer>
  );
}