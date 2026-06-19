"use client";

import { motion } from "framer-motion";
import { Layout, Server, Database, Wrench, ExternalLink } from "lucide-react";

interface SkillItem {
  name: string;
  usage: string; // Project highlights / where it was used
  experience: string; // Level of depth
}

interface SkillCategory {
  title: string;
  icon: typeof Layout;
  color: string;
  borderColor: string;
  skills: SkillItem[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Stack",
      icon: Layout,
      color: "from-purple-500/10 to-purple-500/0",
      borderColor: "border-purple-500/20",
      skills: [
        { name: "React.js", usage: "Career Guidance, Blood Donation", experience: "Core Library" },
        { name: "Next.js", usage: "Personal Portfolios & Dashboards", experience: "Framework" },
        { name: "JavaScript", usage: "Dynamic Frontend & Backend Scripts", experience: "Advanced" },
        { name: "TypeScript", usage: "Type-safe Next.js Systems", experience: "Advanced" },
        { name: "HTML & CSS", usage: "Responsive Layouts & Custom Animations", experience: "Core" },
      ],
    },
    {
      title: "Backend Core",
      icon: Server,
      color: "from-indigo-500/10 to-indigo-500/0",
      borderColor: "border-indigo-500/20",
      skills: [
        { name: "Node.js", usage: "Smart Campus & Career Systems", experience: "Runtime Environment" },
        { name: "Express.js", usage: "RESTful API Routers & Middlewares", experience: "Core Backend" },
        { name: "Java Spring Boot", usage: "Enterprise APIs & Backend Systems", experience: "Framework" },
      ],
    },
    {
      title: "Databases & Storage",
      icon: Database,
      color: "from-emerald-500/10 to-emerald-500/0",
      borderColor: "border-emerald-500/20",
      skills: [
        { name: "MongoDB", usage: "MERN Stack Projects (NoSQL)", experience: "Document Database" },
        { name: "SQL", usage: "Relational Data Schemas & Queries", experience: "Relational Database" },
      ],
    },
    {
      title: "Development Tools",
      icon: Wrench,
      color: "from-pink-500/10 to-pink-500/0",
      borderColor: "border-pink-500/20",
      skills: [
        { name: "Git & GitHub", usage: "Version Control & Team Workflows", experience: "Daily Use" },
        { name: "Postman", usage: "API Testing & Documentation", experience: "Daily Use" },
        { name: "VS Code", usage: "Code Writing & Debugging Workspaces", experience: "Primary IDE" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" className="py-24 relative bg-slate-950">
      {/* Background blurs */}
      <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-3"
          >
            Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white tracking-tight"
          >
            Technical Stack & Skills
          </motion.h2>
          <div className="w-12 h-1 bg-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, idx) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className={`p-6 rounded-2xl border ${category.borderColor} bg-gradient-to-br ${category.color} glass flex flex-col gap-6 hover:border-purple-500/30 transition-colors duration-300`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-white/5">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-white/5 text-purple-400">
                    <CategoryIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">{category.title}</h3>
                </div>

                {/* Skills Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-4 rounded-xl bg-slate-900/50 border border-white/5 hover:border-white/10 hover:bg-slate-900 transition-all flex flex-col justify-between gap-2 group"
                    >
                      <div className="flex items-start justify-between gap-1.5">
                        <span className="font-bold text-white text-sm tracking-tight group-hover:text-purple-300 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono font-semibold text-gray-500 uppercase tracking-wider">
                          {skill.experience}
                        </span>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">
                          Project Usage
                        </span>
                        <span className="text-xs text-gray-400 font-medium">
                          {skill.usage}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
