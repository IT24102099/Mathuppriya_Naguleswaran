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
  "Canva",
];

export default function Tools() {
  return (
    <section className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
            Development toolkit
          </p>
          <h2 className="mt-4 font-[family:var(--font-display)] text-3xl font-semibold md:text-5xl">
            Supporting tools and platforms.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => (
            <div
              key={tool}
              className="rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--panel)] p-5 text-sm font-medium shadow-[var(--shadow)] backdrop-blur-xl"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}