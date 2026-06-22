"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Globe, Smartphone, GitBranch, Users, Clock, AlertCircle } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { projectsData } from "@/lib/projects";
import Image from "next/image";

type ProjectFilter = "all" | "web" | "mobile" | "fullstack" | "academic";

export default function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("all");

  const filteredProjects = projectsData.filter((project) => {
    if (filter === "all") return true;
    if (filter === "mobile") return project.tech.includes("React Native (Expo)") || project.tech.includes("React Native");
    if (filter === "web") return !project.tech.includes("React Native (Expo)") && !project.tech.includes("React Native");
    if (filter === "fullstack") {
      // MERN, Java Spring Boot, etc are full stack
      return project.tech.includes("Node.js") || project.tech.includes("Java Spring Boot");
    }
    if (filter === "academic") {
      // Academic projects are career-guidance, smart-campus, golden-curator, and hrm-system
      return ["career-guidance", "smart-campus", "golden-curator", "hrm-system"].includes(project.id);
    }
    return true;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

  return (
    
    <section id="projects" className="py-24 relative bg-slate-950 overflow-hidden">
      {/* Background blurs */}
      <div className="absolute top-[30%] left-[-5%] w-[450px] h-[450px] bg-purple-600/5 rounded-full blur-[130px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[20%] right-[-5%] w-[450px] h-[450px] bg-indigo-600/5 rounded-full blur-[130px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div className="text-center md:text-left">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-3 block">Development Repository</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Featured Projects</h2>
            <div className="w-12 h-1 bg-purple-600 mt-3 rounded-full mx-auto md:mx-0" />
          </div>

          {/* Upgraded Filtering Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-slate-900 border border-white/5 glass">
            {([
              { id: "all", label: "All" },
              { id: "web", label: "Web Apps" },
              { id: "mobile", label: "Mobile Apps" }
              
            ] as const).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold capitalize transition-all cursor-pointer ${
                  filter === tab.id
                    ? "bg-purple-600 text-white shadow-md shadow-purple-500/20"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div
  layout
  variants={cardVariants}
  initial={{ opacity: 0, y: 40, scale: 0.95 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: true }}
  whileHover={{
    y: -12,
    scale: 1.02,
    rotateX: 3,
    rotateY: 3,
  }}
  transition={{
    type: "spring",
    stiffness: 180,
    damping: 15,
  }}
  className="
  group
  relative
  overflow-hidden
  rounded-[32px]
  border border-purple-500/20
  bg-gradient-to-br
  from-slate-900/95
  via-slate-950/95
  to-slate-900/95
  backdrop-blur-2xl
  shadow-[0_0_40px_rgba(168,85,247,0.08)]
  hover:shadow-[0_0_80px_rgba(168,85,247,0.25)]
  transition-all
  duration-700
"
>
  
</motion.div>
{/*Add floatinng particles*/}
<div className="absolute inset-0 pointer-events-none">

  <motion.div
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
    }}
    className="
    absolute
    top-20
    left-20
    w-4
    h-4
    bg-purple-500
    rounded-full
    blur-md
    opacity-40
    "
  />

  <motion.div
    animate={{
      y: [0, 25, 0],
      x: [0, -10, 0],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
    }}
    className="
    absolute
    bottom-20
    right-20
    w-5
    h-5
    bg-pink-500
    rounded-full
    blur-md
    opacity-40
    "
  />

</div>
        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
             <motion.div
  key={project.id}
  layout
  variants={cardVariants}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  whileHover={{
    y: -12,
    scale: 1.03,
  }}
  transition={{
    type: "spring",
    stiffness: 250,
    damping: 18,
  }}
  className="
  group
  relative
  overflow-hidden
  rounded-[28px]
  bg-slate-900/90
  border border-purple-500/20
  hover:border-purple-400
  transition-all
  duration-500
  shadow-[0_0_25px_rgba(168,85,247,0.08)]
  hover:shadow-[0_0_60px_rgba(168,85,247,0.25)]
  flex
  flex-col
  h-full
"
>
  {/* Animated Glow */}
  <div
    className="
    absolute
    inset-0
    bg-gradient-to-br
    from-purple-500/10
    via-transparent
    to-pink-500/10
    opacity-0
    group-hover:opacity-100
    transition-opacity
    duration-500
    "
  />

  {/* Moving Border Glow */}
  <div
    className="
    absolute
    inset-0
    rounded-[28px]
    bg-gradient-to-r
    from-purple-500/20
    via-pink-500/20
    to-indigo-500/20
    blur-3xl
    opacity-0
    group-hover:opacity-100
    transition-all
    duration-700
    "
  />

  {/* Existing Card Content Here */}
                {/* Project Screenshot */}
<div className="relative aspect-video overflow-hidden">
<motion.div
  whileHover={{
    scale: 1.08,
  }}
  transition={{
    duration: 0.5,
  }}
  className="relative aspect-video overflow-hidden"
></motion.div>
  <Image
  src={project.imageUrl || "/placeholder.jpg"}
  alt={project.title}
  fill
  sizes="(max-width:768px) 100vw, 50vw"
  className="
    object-cover
    transition-all
    duration-700
    group-hover:scale-110
  "
/>

  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

  <div className="absolute top-4 right-4 z-10">
    <span className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-medium">
      {project.tech.includes("React Native")
        ? "Mobile App"
        : "Web App"}
    </span>
  </div>

  <div className="absolute bottom-4 left-4 right-4 z-10 flex justify-between text-xs text-white">

  </div>

</div>

                  {/* Metrics Row */}
                  <div className="flex items-center justify-between relative z-10 border-t border-white/5 pt-3 text-[10px] text-gray-500 font-mono">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-purple-400" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{project.teamSize}</span>
                    </div>
                  </div>
                

                {/* Details Content */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title and Repo */}
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 rounded-lg bg-slate-950 border border-white/5 hover:border-purple-500/20 text-gray-400 hover:text-white transition-all shadow"
                          title="View Repository"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    
                    {/* Role Contribution */}
                    <p className="text-xs text-purple-400 font-mono font-medium mb-4 flex items-center gap-1.5">
                      <GitBranch className="w-3.5 h-3.5" />
                      <span>Role: {project.role}</span>
                    </p>

                    {/* Problem statement preview */}
                    <div className="mb-5 bg-slate-950/40 p-4 rounded-2xl border border-white/5 flex gap-2.5 items-start">
                      <AlertCircle className="w-4 h-4 text-yellow-500/80 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] font-mono text-yellow-500 uppercase tracking-widest block mb-0.5">Problem Solved</span>
                        <p className="text-xs text-gray-400 leading-relaxed text-justify">
                          {project.problem}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    {/* Tech badging */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[9px] font-mono text-gray-400 bg-slate-950 px-2.5 py-1 rounded-lg border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* View Details Case Study Button */}
                    <Link
                      href={`/projects/${project.id}`}
                      className="flex items-center justify-between w-full px-5 py-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 hover:bg-purple-600 hover:text-white hover:border-transparent text-purple-300 font-semibold text-xs transition-all duration-300 group/btn shadow cursor-pointer"
                    >
                      <span>Explore Case Study</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
