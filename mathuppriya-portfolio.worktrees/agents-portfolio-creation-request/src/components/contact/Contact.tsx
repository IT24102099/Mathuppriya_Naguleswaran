const contactLinks = [
  {
    label: "Email",
    value: "mathuppriyan@gmail.com",
    href: "mailto:mathuppriyan@gmail.com",
  },
  {
    label: "GitHub",
    value: "mathuppriya-dev",
    href: "https://github.com/mathuppriya-dev",
  },
  {
    label: "LinkedIn",
    value: "mathuppriya-naguleswaran-dev",
    href: "https://www.linkedin.com/in/mathuppriya-naguleswaran-dev",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-20 md:px-6">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--panel)] p-8 shadow-[var(--shadow)] backdrop-blur-xl md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
            Contact
          </p>
          <h2 className="mt-4 font-[family:var(--font-display)] text-3xl font-semibold md:text-5xl">
            Let&apos;s build something useful.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
            I&apos;m open to internships, freelance work, and collaborative web
            projects. If you want a clean portfolio, a campus system, or a full
            stack feature built well, reach out.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:mathuppriyan@gmail.com"
              className="inline-flex rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Send email
            </a>
            <a
              href="#home"
              className="inline-flex rounded-full border border-[color:var(--line)] px-6 py-3 text-sm font-semibold transition hover:bg-[color:var(--accent-soft)]"
            >
              Back to top
            </a>
          </div>
        </div>

        <div className="grid gap-4">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--panel)] p-5 shadow-[var(--shadow)] backdrop-blur-xl transition hover:bg-[color:var(--accent-soft)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                {link.label}
              </p>
              <p className="mt-3 text-sm font-medium">{link.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}