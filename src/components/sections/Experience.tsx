"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Database,
  Users,
} from "lucide-react";

export default function WhatIBring() {
  const strengths = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description:
        "Building scalable web applications using React, Node.js, Express.js, MongoDB, and modern development practices.",
      points: [
        "MERN Stack Applications",
        "REST API Development",
        "Authentication Systems",
        "Responsive UI Design",
      ],
      color: "from-purple-500/10 to-purple-500/0",
      border: "border-purple-500/20",
      iconColor: "text-purple-400",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Creating cross-platform mobile applications using React Native and Expo with seamless API integration.",
      points: [
        "React Native",
        "Expo Framework",
        "Mobile UI Design",
        "API Integration",
      ],
      color: "from-indigo-500/10 to-indigo-500/0",
      border: "border-indigo-500/20",
      iconColor: "text-indigo-400",
    },
    {
      icon: Database,
      title: "Backend Engineering",
      description:
        "Designing secure backend systems, database architectures, and scalable application workflows.",
      points: [
        "MongoDB",
        "MySQL",
        "Spring Boot",
        "Database Design",
      ],
      color: "from-emerald-500/10 to-emerald-500/0",
      border: "border-emerald-500/20",
      iconColor: "text-emerald-400",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Working effectively in academic team projects using Git workflows, communication, and agile practices.",
      points: [
        "Git & GitHub",
        "Team Projects",
        "Problem Solving",
        "Agile Mindset",
      ],
      color: "from-pink-500/10 to-pink-500/0",
      border: "border-pink-500/20",
      iconColor: "text-pink-400",
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 relative bg-slate-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="mb-16">
          <p className="text-purple-400 uppercase tracking-[0.3em] text-sm font-mono">
            Strengths
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            What I Bring
          </h2>

          <div className="w-24 h-1 mt-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {strengths.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className={`
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  ${item.border}
                  bg-gradient-to-br
                  ${item.color}
                  backdrop-blur-xl
                  p-8
                  shadow-[0_0_40px_rgba(168,85,247,0.08)]
                  hover:shadow-[0_0_60px_rgba(168,85,247,0.15)]
                  transition-all
                  duration-500
                  group
                `}
              >
                {/* Glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />

                <div className="relative z-10">

                  <div
                    className={`
                      w-14 h-14
                      rounded-2xl
                      flex items-center justify-center
                      bg-slate-900/70
                      border border-white/10
                      ${item.iconColor}
                      mb-6
                    `}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 leading-7 mb-6">
                    {item.description}
                  </p>

                  <div className="space-y-3">
                    {item.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-3"
                      >
                        <div
                          className={`
                            w-2.5 h-2.5 rounded-full
                            ${item.iconColor.replace("text", "bg")}
                          `}
                        />

                        <span className="text-slate-300">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

{/*"use client";

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
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section id="experience" className="py-24 relative bg-slate-950">
      
      <div className="absolute top-[30%] right-[10%] w-[350px] h-[350px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-3 block">Methodologies</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Core Competencies</h2>
          <div className="w-12 h-1 bg-purple-600 mx-auto mt-4 rounded-full" />
        </div>

       
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
               
                <div className="flex-shrink-0">
                  <div className={`p-3 rounded-xl bg-slate-900 border border-white/5 ${exp.iconColor} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                
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
{/* Background Blurs */}