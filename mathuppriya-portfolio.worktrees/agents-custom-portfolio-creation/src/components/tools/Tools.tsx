export default function Tools() {
  const tools = [
    "VS Code",
    "Git",
    "GitHub",
    "Postman",
    "Figma",
    "MongoDB Compass",
    "MySQL Workbench",
    "Vercel",
    "Netlify",
    "ClickUp",
    "Draw.io",
    "Canva",
  ];

  return (
    <section id="tools" className="section">
      <div className="container px-6">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[var(--accent)]">
            Development toolkit
          </p>
          <h2 className="font-[family:var(--font-playfair)] text-4xl font-bold md:text-5xl">
            Tools I rely on
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => (
            <div
              key={tool}
              className="rounded-[24px] border border-[var(--border)] bg-[rgba(255,255,255,0.78)] px-5 py-5 text-center shadow-[0_18px_35px_-28px_rgba(31,41,55,0.35)] backdrop-blur-xl"
            >
              <h3 className="text-base font-semibold text-[var(--text-primary)]">
                {tool}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}