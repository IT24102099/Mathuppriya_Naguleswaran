export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container px-6">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[var(--accent)]">
            Education
          </p>
          <h2 className="font-[family:var(--font-playfair)] text-4xl font-bold md:text-5xl">
            Academic journey
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="relative rounded-[32px] border border-[var(--border)] bg-[rgba(255,255,255,0.78)] p-8 shadow-[0_24px_55px_-42px_rgba(31,41,55,0.45)] backdrop-blur-xl">
            <div className="absolute left-10 top-8 h-[calc(100%-4rem)] w-px bg-[rgba(47,93,80,0.18)]" />

            <div className="relative pl-10">
              <div className="absolute left-[-1px] top-1 h-4 w-4 rounded-full bg-[var(--accent)]" />
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
                2024 - 2028
              </p>
              <h3 className="mt-4 font-[family:var(--font-playfair)] text-3xl font-bold text-[var(--text-primary)]">
                Northern UNI
              </h3>
              <p className="mt-3 text-lg text-[var(--text-secondary)]">
                Bachelor of Science (Hons) in Information Technology
              </p>
              <p className="mt-3 text-[var(--text-secondary)]">
                Specialized in Software Engineering
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[28px] border border-[var(--border)] bg-[var(--accent)] p-7 text-white shadow-[0_24px_55px_-42px_rgba(47,93,80,0.8)]">
              <p className="text-sm uppercase tracking-[0.3em] text-white/70">
                GPA
              </p>
              <p className="mt-4 font-[family:var(--font-playfair)] text-5xl font-bold">
                3.18
              </p>
            </div>

            <div className="rounded-[28px] border border-[var(--border)] bg-[rgba(255,255,255,0.78)] p-7 shadow-[0_24px_55px_-42px_rgba(31,41,55,0.35)] backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--text-secondary)]">
                Current focus
              </p>
              <p className="mt-4 text-lg font-semibold text-[var(--text-primary)]">
                Full stack development and problem solving
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}