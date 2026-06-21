const projects = [
  {
    title: "Northern UNI Smart Campus",
    description:
      "A smart campus platform for visitor flows, facility booking, student services, and admin operations.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    link: null,
    status: "Private",
  },
  {
    title: "Smart Career Guidance System",
    description:
      "A MERN app that helps students explore degree options using academic performance and eligibility signals.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/IT24102099/A-Web-Based-Career-Selection-and-Education-Guidance-System",
    status: "GitHub",
  },
  {
    title: "Smart Campus Mobile App",
    description:
      "A React Native app for Lost & Found, visitor management, canteen services, and student operations.",
    tech: ["React Native", "Expo", "Node.js", "MongoDB"],
    link: "https://github.com/mathuppriya-dev/Mobile",
    status: "GitHub",
  },
  {
    title: "Blood Donation Management System",
    description:
      "A full stack app connecting donors and recipients through registration, requests, and inventory tracking.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    link: "https://github.com/mathuppriya-dev/Blood-Donation-System",
    status: "GitHub",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
            Featured work
          </p>
          <h2 className="mt-4 font-[family:var(--font-display)] text-3xl font-semibold md:text-5xl">
            Projects that actually do something.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--panel)] shadow-[var(--shadow)] backdrop-blur-xl"
            >
              <div className="flex min-h-48 items-end justify-between bg-[linear-gradient(135deg,rgba(47,93,80,0.18),rgba(255,255,255,0.02))] p-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--muted)]">
                    {project.status}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="leading-7 text-[color:var(--muted)]">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[color:var(--line)] bg-[color:var(--panel-strong)] px-3 py-1 text-xs font-medium text-[color:var(--text)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-full border border-[color:var(--line)] px-5 py-3 text-sm font-semibold transition hover:bg-[color:var(--accent-soft)]"
                    >
                      Open link
                    </a>
                  ) : (
                    <span className="inline-flex rounded-full border border-[color:var(--line)] px-5 py-3 text-sm font-semibold text-[color:var(--muted)]">
                      Private project
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}