import Image from "next/image";

const stats = [
  { value: "3.18", label: "GPA" },
  { value: "4+", label: "Projects" },
  { value: "10+", label: "Technologies" },
  { value: "Sri Lanka", label: "Location" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-20 pt-28 md:px-6 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-28 h-24 w-24 rounded-full bg-[color:var(--accent-soft)] blur-3xl" />
        <div className="absolute right-[10%] top-40 h-32 w-32 rounded-full bg-[color:var(--accent-soft)] blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-center">
        <div>
          <span className="inline-flex rounded-full border border-[color:var(--line)] bg-[color:var(--panel)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)] shadow-[var(--shadow)] backdrop-blur-xl">
            Full stack developer
          </span>

          <p className="mt-8 text-sm font-medium uppercase tracking-[0.35em] text-[color:var(--accent)]">
            Hello, I&apos;m
          </p>

          <h1 className="mt-4 font-[family:var(--font-display)] text-5xl font-semibold leading-none text-[color:var(--text)] sm:text-6xl lg:text-7xl">
            Mathuppriya
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
            I build calm, modern portfolio and web experiences with clean UI,
            smooth interactions, and dependable functionality.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="inline-flex rounded-full border border-[color:var(--line)] px-6 py-3 text-sm font-semibold text-[color:var(--text)] transition hover:bg-[color:var(--accent-soft)]"
            >
              Contact me
            </a>
            <a
              href="/Mathuppriya-CV.txt"
              download
              className="inline-flex rounded-full border border-[color:var(--line)] px-6 py-3 text-sm font-semibold text-[color:var(--text)] transition hover:bg-[color:var(--accent-soft)]"
            >
              Download CV
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--panel)] p-4 shadow-[var(--shadow)] backdrop-blur-xl"
              >
                <div className="text-2xl font-semibold">{stat.value}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.25em] text-[color:var(--muted)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[420px]">
          <div className="absolute inset-10 rounded-full bg-[color:var(--accent-soft)] blur-3xl" />
          <div className="relative rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--panel)] p-4 shadow-[var(--shadow)] backdrop-blur-xl">
            <div className="overflow-hidden rounded-[1.5rem]">
              <Image
                src="/profile.jpg"
                alt="Mathuppriya"
                width={800}
                height={980}
                priority
                className="h-auto w-full object-cover"
              />
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--muted)]">
                  Focus
                </p>
                <p className="mt-2 text-sm font-medium">Full stack development</p>
              </div>
              <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--muted)]">
                  Status
                </p>
                <p className="mt-2 text-sm font-medium">Open to opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}