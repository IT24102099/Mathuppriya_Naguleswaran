import Image from "next/image";
import Navbar from "../layout/Navbar";

const stats = [
  {
    value: "3.18",
    label: "GPA",
  },
  {
    value: "4+",
    label: "Projects",
  },
  {
    value: "10+",
    label: "Tools",
  },
];

export default function Hero() {
  return (
    <>
      <Navbar />

      <section
        id="hero"
        className="relative overflow-hidden pt-32 pb-20"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-[-10%] top-24 h-72 w-72 rounded-full bg-white/70 blur-3xl" />
          <div className="absolute right-[-10%] top-40 h-72 w-72 rounded-full bg-[rgba(47,93,80,0.14)] blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(47,93,80,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(47,93,80,0.04)_1px,transparent_1px)] bg-[size:56px_56px] opacity-40" />
        </div>

        <div className="container px-6">
          <div className="mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.72)] px-5 py-2 text-sm font-medium text-[var(--accent)] backdrop-blur-xl">
              Software Engineering Undergraduate • Sri Lanka
            </div>

            <div className="mt-10 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-6 rounded-full bg-[rgba(47,93,80,0.12)] blur-3xl" />
                <div className="relative h-56 w-56 overflow-hidden rounded-full border border-white/80 bg-white shadow-[0_28px_60px_-35px_rgba(31,41,55,0.55)] md:h-72 md:w-72">
                  <Image
                    src="/profile.jpg"
                    alt="Mathuppriya"
                    fill
                    priority
                    sizes="(max-width: 768px) 14rem, 18rem"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <p className="mt-10 text-sm uppercase tracking-[0.35em] text-[var(--accent)]">
              Hello, I&apos;m
            </p>

            <h1 className="mt-4 font-[family:var(--font-playfair)] text-5xl font-bold leading-none text-[var(--text-primary)] md:text-7xl">
              Mathuppriya
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-[var(--text-secondary)] md:text-xl">
              I build clean, responsive full-stack experiences with a focus on
              practical solutions, smooth interactions, and reliable
              foundations.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_-22px_rgba(47,93,80,0.8)] transition-transform hover:-translate-y-0.5"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.75)] px-6 py-3 text-sm font-semibold text-[var(--text-primary)] backdrop-blur-xl transition-transform hover:-translate-y-0.5"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-16 grid gap-4 md:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[28px] border border-[var(--border)] bg-[rgba(255,255,255,0.72)] px-6 py-8 text-center shadow-[0_18px_40px_-28px_rgba(31,41,55,0.32)] backdrop-blur-xl"
                >
                  <p className="font-[family:var(--font-playfair)] text-4xl font-bold text-[var(--text-primary)]">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}