"use client";

import { motion } from "framer-motion";
import { Link2, Database, GitBranch, Users } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      icon: Link2,
      title: "API Integration & Design",
      subtitle: "RESTful Service Architectures",
      description:
        "Writing clean, modular, and secure REST endpoints using Node.js/Express.js and Spring Boot. Expertly integrating middleware modules like JWT validation and routing rules, handling async payloads, and structuring consistent response payloads for frontend clients.",
      color: "from-purple-500/10 to-purple-500/0",
      borderColor: "border-purple-500/20",
      iconColor: "text-purple-400",
    },
    {
      icon: Database,
      title: "Database Management & Design",
      subtitle: "Relational & Document Schemas",
      description:
        "Designing highly structured database schemas in MongoDB (documents, validator schemas, mongoose pipelines) and MySQL (relational constraints, foreign keys). Writing optimized queries, indices, and pipeline operations to manage fast document lookups.",
      color: "from-indigo-500/10 to-indigo-500/0",
      borderColor: "border-indigo-500/20",
      iconColor: "text-indigo-400",
    },
    {
      icon: GitBranch,
      title: "Git Workflow & Version Control",
      subtitle: "Collaborative Code Management",
      description:
        "Practicing standard feature-branch Git workflows (`git checkout -b`, pull requests, code reviews). Experienced with resolving merge conflicts, writing descriptive commit messages, and managing synchronized repository branching in team environments.",
      color: "from-pink-500/10 to-pink-500/0",
      borderColor: "border-pink-500/20",
      iconColor: "text-pink-400",
    },
    {
      icon: Users,
      title: "Team Collaboration & Agile",
      subtitle: "Cross-Functional Syncing",
      description:
        "Collaborating in small engineering sprints, managing tasks, and presenting system iterations during team reviews. Serving as a batch representative at SLIIT, bridging students and faculty while improving interpersonal coordination and communication.",
      color: "from-emerald-500/10 to-emerald-500/0",
      borderColor: "border-emerald-500/20",
      iconColor: "text-emerald-400",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="experience" className="py-24 relative bg-slate-950">
      {/* Background Blurs */}
      <div className="absolute top-[30%] right-[10%] w-[350px] h-[350px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-3 block">Methodologies</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Core Competencies</h2>
          <div className="w-12 h-1 bg-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Competencies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`p-6 md:p-8 rounded-2xl border ${exp.borderColor} bg-gradient-to-br ${exp.color} glass flex gap-6 hover:border-purple-500/30 transition-all duration-300 group`}
              >
                {/* Icon Column */}
                <div className="flex-shrink-0">
                  <div className={`p-3 rounded-xl bg-slate-900 border border-white/5 ${exp.iconColor} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Details Column */}
                <div className="flex-col">
                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-purple-400/80 font-mono mt-0.5 mb-3">{exp.subtitle}</p>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed text-justify">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
