export default function Education() {
  return (
    <section id="education" className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
            Education
          </p>
          <h2 className="mt-4 font-[family:var(--font-display)] text-3xl font-semibold md:text-5xl">
            Academic background.
          </h2>
        </div>

        <div className="rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--panel)] p-8 shadow-[var(--shadow)] backdrop-blur-xl md:p-10">
          <div className="grid gap-6 md:grid-cols-[180px_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                2024 - 2028
              </p>
              <p className="mt-3 text-2xl font-semibold">Northern UNI</p>
            </div>

            <div className="space-y-4">
              <p className="text-lg font-medium">
                Bachelor of Science (Hons) in Information Technology
              </p>
              <p className="text-[color:var(--muted)]">
                Specialized in Software Engineering with a focus on web
                applications, system design, and practical project work.
              </p>
              <p className="text-[color:var(--muted)]">GPA: 3.18</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}