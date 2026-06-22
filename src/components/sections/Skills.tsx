"use client";

import { motion } from "framer-motion";
import { Layout, Server, Database, Wrench, ExternalLink } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiSpringboot,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Coffee } from "lucide-react";
interface SkillItem {
  name: string;
  experience: string; // Level of depth
}

interface SkillCategory {
  title: string;
  icon: typeof Layout;
  color: string;
  borderColor: string;
  iconColor: string;
  skills: SkillItem[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Stack",
      icon: Layout,
      color: "from-purple-500/10 to-purple-500/0",
      borderColor: "hover:border-purple-500/30 border-white/5",
      iconColor: "text-purple-500",
      skills: [
        { name: "React.js",  experience: "Core Library" },
        { name: "Next.js",  experience: "Framework" },
        { name: "JavaScript",  experience: "Advanced" },
        { name: "TypeScript",  experience: "Advanced" },
        { name: "HTML & CSS",  experience: "Core" },
      ],
    },
    {
      title: "Backend Core",
      icon: Server,
      color: "from-indigo-500/10 to-indigo-500/0",
      borderColor: "hover:border-indigo-500/30 border-white/5",
      iconColor: "text-indigo-500",
      skills: [
        { name: "Node.js", experience: "Runtime Environment" },
        { name: "Express.js", experience: "Core Backend" },
        { name: "Java Spring Boot", experience: "Framework" },
      ],
    },
    {
      title: "Databases & Storage",
      icon: Database,
      color: "from-emerald-500/10 to-emerald-500/0",
      borderColor: "border-emerald-500/20",
      iconColor: "text-emerald-500",
      skills: [
        { name: "MongoDB",  experience: "Document Database" },
        { name: "SQL",  experience: "Relational Database" },
      ],
    },
    {
      title: "Development Tools",
      icon: Wrench,
      color: "from-pink-500/10 to-pink-500/0",
      borderColor: "border-pink-500/20",
      iconColor: "text-pink-500",
      skills: [
        { name: "Git & GitHub",  experience: "Daily Use" },
        { name: "Postman",  experience: "Daily Use" },
        { name: "VS Code",  experience: "Primary IDE" },
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
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

  return (
    <section id="skills" className="py-24 relative bg-slate-950">
      {/* Background blurs */}
      <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />
{/* Floating Tech Logos */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">

  <motion.div
    animate={{ y: [0, -20, 0] }}
    transition={{ duration: 5, repeat: Infinity }}
    className="absolute top-20 left-16 text-purple-400"
  >
    <SiReact size={40} />
  </motion.div>

  <motion.div
    animate={{ y: [0, 20, 0] }}
    transition={{ duration: 6, repeat: Infinity }}
    className="absolute top-32 right-20 text-white"
  >
    <SiNextdotjs size={36} />
  </motion.div>

  <motion.div
    animate={{ y: [0, -15, 0] }}
    transition={{ duration: 4.5, repeat: Infinity }}
    className="absolute bottom-24 left-20 text-green-500"
  >
    <SiNodedotjs size={40} />
  </motion.div>

  <motion.div
    animate={{ y: [0, 20, 0] }}
    transition={{ duration: 5.5, repeat: Infinity }}
    className="absolute bottom-32 right-24 text-emerald-400"
  >
    <SiMongodb size={40} />
  </motion.div>

  <motion.div
    animate={{ y: [0, -18, 0] }}
    transition={{ duration: 6, repeat: Infinity }}
    className="absolute top-1/2 left-[8%] text-orange-500"
  >
     <FaJava size={36} />
  </motion.div>

  <motion.div
    animate={{ y: [0, 18, 0] }}
    transition={{ duration: 5, repeat: Infinity }}
    className="absolute top-1/2 right-[8%] text-green-400"
  >
    <SiSpringboot size={36} />
  </motion.div>

</div>
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
  viewport={{ once: true }}
  className="grid grid-cols-1 md:grid-cols-2 gap-8"
>
  {skillCategories.map((category, idx) => {
    const CategoryIcon = category.icon;

    return (
      <motion.div
        key={idx}
        variants={cardVariants}
        whileHover={{
          y: -8,
          scale: 1.02,
        }}
        className={`
          rounded-3xl
          border ${category.borderColor}
          bg-gradient-to-br ${category.color}
          backdrop-blur-xl
          p-8
          shadow-[0_0_30px_rgba(168,85,247,0.08)]
          hover:shadow-[0_0_50px_rgba(168,85,247,0.15)]
          transition-all duration-500
        `}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div
            className={`p-3 rounded-2xl bg-slate-900 border border-white/5 ${category.iconColor}`}
          >
            <CategoryIcon className="w-6 h-6" />
          </div>

          <h3 className="text-2xl font-bold text-white">
            {category.title}
          </h3>
        </div>

        {/* Skills */}
        <div className="space-y-5">
          {category.skills.map((skill, sIdx) => (
            <motion.div
              key={sIdx}
              whileHover={{ x: 5 }}
              className="flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`
                    w-2.5 h-2.5 rounded-full
                    ${category.iconColor.replace("text", "bg")}
                  `}
                />

                <span className="text-slate-300 text-lg group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </div>

              <span
                className="
                px-3 py-1
                rounded-full
                bg-purple-500/10
                border border-purple-500/20
                text-purple-300
                text-xs
                font-medium
                "
              >
                {skill.experience}
              </span>
            </motion.div>
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
