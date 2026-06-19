"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Globe, Smartphone } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { projectsData } from "@/lib/projects";

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "web" | "mobile">("all");

  const filteredProjects = projectsData.filter((project) => {
    if (filter === "all") return true;
    if (filter === "mobile") return project.tech.includes("React Native (Expo)");
    // Web projects do not include React Native
    return !project.tech.includes("React Native (Expo)");
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-24 relative bg-slate-950">
      {/* Background blurs */}
      <div className="absolute top-[40%] left-[5%] w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div className="text-center md:text-left">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-3 block">My Work</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Featured Projects</h2>
            <div className="w-12 h-1 bg-purple-600 mt-3 rounded-full mx-auto md:mx-0" />
          </div>

          {/* Filtering Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-white/5 glass">
            {(["all", "web", "mobile"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold capitalize transition-all cursor-pointer ${
                  filter === tab
                    ? "bg-purple-600 text-white shadow-md shadow-purple-500/15"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab === "all" ? "All Systems" : tab === "web" ? "Web Systems" : "Mobile Apps"}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={cardVariants}
                className="group rounded-2xl border border-white/10 bg-slate-900/40 overflow-hidden glass hover:border-purple-500/30 transition-all duration-300 flex flex-col h-full"
              >
                {/* Visual Image / Placeholder Container */}
                <div className="relative aspect-video w-full bg-slate-950 overflow-hidden border-b border-white/5">
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    /* Premium Stylized Grid Placeholder */
                    <div className="w-full h-full flex flex-col justify-between p-6 relative">
                      {/* Grid background */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:16px_16px]" />
                      <div className="absolute top-[30%] left-[30%] w-[120px] h-[120px] bg-purple-600/10 rounded-full blur-2xl" />

                      {/* Header controls mockup */}
                      <div className="flex items-center justify-between relative z-10">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        </div>
                        <span className="text-[9px] font-mono text-gray-600 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                          dashboard.mockup
                        </span>
                      </div>

                      {/* Visual Center Art */}
                      <div className="flex flex-col items-center justify-center flex-1 relative z-10 gap-2 mt-2">
                        {project.tech.includes("React Native (Expo)") ? (
                          <Smartphone className="w-10 h-10 text-purple-400 group-hover:scale-110 transition-transform" />
                        ) : (
                          <Globe className="w-10 h-10 text-indigo-400 group-hover:scale-110 transition-transform" />
                        )}
                        <span className="text-[10px] font-mono text-gray-500 tracking-wider text-center max-w-[180px]">
                          SCREENSHOT PLACEHOLDER
                        </span>
                      </div>

                      {/* Visual Footer Stack Badges */}
                      <div className="flex flex-wrap gap-1.5 relative z-10">
                        {project.tech.slice(0, 3).map((t) => (
                          <span key={t} className="text-[9px] font-mono text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/10">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Info Details Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors tracking-tight">
                        {project.title}
                      </h3>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1 rounded hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                          title="View Repository"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    <p className="text-xs text-purple-400 font-mono font-medium mb-3">Role: {project.role}</p>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6 text-justify">
                      {project.summary}
                    </p>
                  </div>

                  <div>
                    {/* Tech Badges List */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((t) => (
                        <span key={t} className="text-[10px] font-mono text-gray-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* View Details Link */}
                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 group/link transition-colors cursor-pointer"
                    >
                      <span>View Engineering Journey</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
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
