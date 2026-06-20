export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container px-6">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[var(--accent)]">
            Get in touch
          </p>
          <h2 className="font-[family:var(--font-playfair)] text-4xl font-bold md:text-5xl">
            Let&apos;s build something useful
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[32px] border border-[var(--border)] bg-[rgba(255,255,255,0.78)] p-8 shadow-[0_24px_55px_-42px_rgba(31,41,55,0.45)] backdrop-blur-xl">
            <p className="max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
              I&apos;m always open to discussing software engineering,
              internships, collaborations, and practical project ideas. If you
              want to build something thoughtful, I&apos;d love to hear about
              it.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["Email", "mathuppriyan@gmail.com"],
                ["Location", "Manipay, Sri Lanka"],
                ["GitHub", "mathuppriya-dev"],
                ["LinkedIn", "mathuppriya-naguleswaran-dev"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-5"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-secondary)]">
                    {label}
                  </p>
                  <p className="mt-3 break-words font-medium text-[var(--text-primary)]">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <a
              href="mailto:mathuppriyan@gmail.com"
              className="rounded-[28px] border border-[var(--border)] bg-[var(--accent)] p-7 text-white shadow-[0_24px_55px_-42px_rgba(47,93,80,0.8)] transition-transform hover:-translate-y-0.5"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-white/70">
                Start here
              </p>
              <p className="mt-4 text-2xl font-semibold">Send an email</p>
            </a>

            <a
              href="https://github.com/mathuppriya-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[28px] border border-[var(--border)] bg-[rgba(255,255,255,0.78)] p-7 shadow-[0_24px_55px_-42px_rgba(31,41,55,0.35)] backdrop-blur-xl transition-transform hover:-translate-y-0.5"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--text-secondary)]">
                Code
              </p>
              <p className="mt-4 text-2xl font-semibold text-[var(--text-primary)]">
                GitHub profile
              </p>
            </a>

            <a
              href="https://www.linkedin.com/in/mathuppriya-naguleswaran-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[28px] border border-[var(--border)] bg-[rgba(255,255,255,0.78)] p-7 shadow-[0_24px_55px_-42px_rgba(31,41,55,0.35)] backdrop-blur-xl transition-transform hover:-translate-y-0.5"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--text-secondary)]">
                Network
              </p>
              <p className="mt-4 text-2xl font-semibold text-[var(--text-primary)]">
                LinkedIn profile
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}