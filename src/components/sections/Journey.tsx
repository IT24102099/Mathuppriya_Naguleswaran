"use client";

import { motion } from "framer-motion";
import { User, Code, Heart, Target, GraduationCap } from "lucide-react";

export default function Journey() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const sections = [
    {
      icon: User,
      title: "Who I Am",
      content:
        "I am an IT student majoring in Software Engineering at the Sri Lanka Institute of Information Technology (SLIIT). Since launching my engineering track in 2024, I have dedicated myself to studying computer science fundamentals, data structures, and the engineering principles required to write scalable, production-ready applications.",
      color: "from-purple-500/20 to-purple-500/5",
      borderColor: "border-purple-500/20",
      iconColor: "text-purple-400",
    },
    {
      icon: Code,
      title: "What I Build",
      content:
        "I develop full stack web environments using the MERN stack (React, Node.js, Express, MongoDB) and Java Spring Boot. For mobile devices, I write cross-platform systems with React Native (Expo). I specialize in designing microservices, implementing JSON Web Token (JWT) authentications, and structuring complex relational and non-relational database schemas.",
      color: "from-indigo-500/20 to-indigo-500/5",
      borderColor: "border-indigo-500/20",
      iconColor: "text-indigo-400",
    },
    {
      icon: Heart,
      title: "Why I Love Engineering",
      content:
        "I enjoy taking complicated, abstract ideas and writing clean code to turn them into functioning software. The process of translating a problem description (like Z-score university eligibility analysis or rule-based item matching) into structured algorithms that run in milliseconds is what excites me about writing software.",
      color: "from-pink-500/20 to-pink-500/5",
      borderColor: "border-pink-500/20",
      iconColor: "text-pink-400",
    },
    {
      icon: Target,
      title: "Career Aspirations",
      content:
        "My goal is to secure a software engineering internship where I can contribute to core repositories and work alongside senior architects. I want to build skills in cloud infrastructure (AWS/Vercel), CI/CD automation pipelines, and learn how big engineering teams collaborate, structure, and scale codebases.",
      color: "from-emerald-500/20 to-emerald-500/5",
      borderColor: "border-emerald-500/20",
      iconColor: "text-emerald-400",
    },
  ];

  return (
    <section id="journey" className="py-24 relative bg-slate-950">
      {/* Background radial highlight */}
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-3"
          >
            My Story
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white tracking-tight"
          >
            Professional Journey
          </motion.h2>
          <div className="w-12 h-1 bg-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Journey Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {sections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`p-6 md:p-8 rounded-2xl border ${section.borderColor} bg-gradient-to-br ${section.color} hover:scale-[1.01] hover:border-purple-500/30 transition-all duration-300 flex flex-col gap-4 group`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl bg-slate-900 border border-white/5 ${section.iconColor} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">{section.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed text-justify">{section.content}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Education Stats Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 md:p-8 glass flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">SLIIT Undergraduate (BSc Hons in IT)</h4>
              <p className="text-xs text-gray-400 font-mono mt-0.5">J/Manipay Ladies&apos; College Alumna (Bio Stream)</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-6 md:gap-12">
            <div className="text-center md:text-left">
              <div className="text-2xl font-extrabold text-white font-mono tracking-tight">3.18</div>
              <div className="text-[10px] text-gray-400 font-mono uppercase tracking-wider">Cumulative GPA</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-2xl font-extrabold text-white font-mono tracking-tight">3.48</div>
              <div className="text-[10px] text-purple-400 font-mono uppercase tracking-wider">Y2 S1 GPA</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-2xl font-extrabold text-white font-mono tracking-tight">2024 - 2028</div>
              <div className="text-[10px] text-gray-400 font-mono uppercase tracking-wider">Academic Timeline</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
