"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Interfaces, accessibility, and responsive design.",
    skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    description: "APIs, business logic, and server-side services.",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database Technologies",
    description: "Data modeling and storage for real-world apps.",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools & Platforms",
    description: "My everyday workflow and delivery stack.",
    skills: ["Git", "GitHub", "Postman", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[var(--accent)]">
            Technical expertise
          </p>
          <h2
            id="skills-heading"
            className="font-[family:var(--font-playfair)] text-4xl font-bold md:text-5xl"
          >
            Tech stack & skills
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--text-secondary)]">
            Technologies and tools I use to build scalable, polished, and
            maintainable web applications.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.08 }}
              viewport={{ once: true }}
              className="rounded-[30px] border border-[var(--border)] bg-[rgba(255,255,255,0.78)] p-8 shadow-[0_24px_55px_-42px_rgba(31,41,55,0.4)] backdrop-blur-xl"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent)]">
                {group.title}
              </p>
              <p className="mt-3 text-[var(--text-secondary)]">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--text-primary)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
