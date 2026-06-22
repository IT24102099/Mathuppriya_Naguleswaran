"use client";

import { motion } from "framer-motion";
import { Award, Calendar, Landmark } from "lucide-react";

export default function Certifications() {
  const credentials = [
    {
      title: "Computer Systems & Hardware",
      detail: "Distinction Level Achievement",
      issuer: "Orion International Campus",
      year: "2025",
      description: "Gained foundational knowledge in computer architecture, physical hardware components, and system-level operations.",
    },
    {
      title: "AI Poster Presentation",
      detail: "ThinkAI Expo 2025",
      issuer: "SLIIT NorthernUNI",
      year: "2025",
      description: "Researched and presented a multi-modal assistive AI system poster to academic panels and tech representatives.",
    },
    {
      title: "Artificial Intelligence Course",
      detail: "NoviTech R&D certification",
      issuer: "NoviTech R&D Private Limited",
      year: "2024",
      description: "Studied neural networks, fundamental AI algorithms, machine learning basics, and modern application scopes.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-3 block">Credentials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Certifications & Workshops</h2>
          <div className="w-12 h-1 bg-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Certs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {credentials.map((cred, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="p-6 rounded-2xl border border-white/5 bg-slate-900/30 hover:border-purple-500/20 hover:bg-slate-900/60 transition-all duration-300 flex flex-col justify-between h-full glass group"
            >
              <div>
                {/* Badge Icon / Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="flex items-center gap-1 text-[10px] font-mono text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/20">
                    <Calendar className="w-2.5 h-2.5" />
                    <span>{cred.year}</span>
                  </span>
                </div>

                <h3 className="font-bold text-white tracking-tight text-base mb-1 group-hover:text-purple-300 transition-colors">
                  {cred.title}
                </h3>
                <p className="text-xs text-gray-500 font-medium mb-3">{cred.detail}</p>
                <p className="text-xs text-gray-400 leading-relaxed text-justify">
                  {cred.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[10px] font-mono text-gray-500">
                <Landmark className="w-3.5 h-3.5" />
                <span>{cred.issuer}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
