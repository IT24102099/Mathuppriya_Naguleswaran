"use client";

import { motion } from "framer-motion";
import { GraduationCap, Trophy, BookOpen, Calendar, MapPin, Award, User } from "lucide-react";

export default function Journey() {
  const coursework = [
    "Software Engineering Principles",
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Web Development Technologies",
    "Mobile Application Development",
    "Artificial Intelligence & Machine Learning",
    "Computer Networks",
    "Probability & Statistics",
  ];

  return (
    <section id="about" className="py-24 relative bg-slate-950 overflow-hidden">
      {/* Background radial spotlights */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* ================= ABOUT ME SECTION ================= */}
        {/* ================= ABOUT ME ================= */}

<div className="mb-12">
  <p className="text-purple-400 uppercase tracking-[0.3em] text-sm font-mono">
    Who I Am
  </p>

  <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
    About Me
  </h2>

  <div className="w-24 h-1 mt-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
</div>

<motion.div
  initial={{ opacity: 0, scale: 0.95, y: 40 }}
animate={{
  opacity: 1,
  scale: 1,
  y: [40, -8, 0],
}}
transition={{
  duration: 1.8,
  ease: [0.22, 1, 0.36, 1],
}}
  className="
  relative
  overflow-hidden
  rounded-[40px]
  border border-purple-500/30
  bg-gradient-to-br
  from-slate-900/90
  via-slate-950/90
  to-slate-900/90
  backdrop-blur-3xl
  p-10 md:p-14
  shadow-[0_0_120px_rgba(168,85,247,0.15)]
  group
"
>
  <motion.div
  animate={{
    backgroundPosition: ["0px 0px", "100px 100px"],
  }}
  transition={{
    duration: 15,
    repeat: Infinity,
    ease: "linear"
  }}
  className="
  absolute inset-0 opacity-10
  bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]
  bg-[size:40px_40px]
"
/>
  <div className="absolute -top-20 -right-20 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full" />
  <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-indigo-500/20 blur-[120px] rounded-full" />

  <div className="relative z-10 max-w-5xl">
    <p className="text-lg md:text-xl leading-10 text-slate-300 text-justify">
      I'm{" "}
      <motion.span
  animate={{
    backgroundPosition: ["0%", "100%"],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "linear"
  }}
  className="
  bg-gradient-to-r
  from-purple-400
  via-white
  to-purple-400
  bg-[length:200%_100%]
  bg-clip-text
  text-transparent
"
>
  Naguleswaran Mathuppriya
</motion.span>
      , a Software Engineering Undergraduate passionate about building
      scalable software solutions, modern web applications, backend
      systems, mobile applications, and solving real-world problems
      through technology.
    </p>

    <p className="mt-8 text-lg md:text-xl leading-10 text-slate-300 text-justify">
      My technical foundation includes
      <span className="font-semibold text-purple-400"> MERN Stack</span>,
      <span className="font-semibold text-pink-400"> Spring Boot</span>,
      <span className="font-semibold text-indigo-400"> React Native</span>,
      <span className="font-semibold text-cyan-400"> MongoDB</span>,
      and
      <span className="font-semibold text-emerald-400"> MySQL</span>.
      I enjoy transforming ideas into scalable and impactful software
      products.
    </p>

    <div className="mt-10 pt-8 border-t border-white/10">
      <p className="italic text-center text-purple-300 text-lg">
        "Transforming ideas into practical software solutions that
        create meaningful impact."
      </p>
    </div>
  </div>
</motion.div>

{/*Quick stats section*/}
<motion.div
  initial={{ opacity: 0 }}
  whileHover={{
  y: -10,
  scale: 1.03
}}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
>
  {[
    {
      value: "3.18",
      label: "Current GPA",
      icon: "🎓",
    },
    {
      value: "4+",
      label: "Projects",
      icon: "🚀",
    },
    {
      value: "10+",
      label: "Technologies",
      icon: "⚡",
    },
    {
      value: "2028",
      label: "Graduation",
      icon: "🏆",
    },
  ].map((item) => (
    <motion.div
      key={item.label}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      className="
      rounded-3xl
      border border-purple-500/20
      bg-slate-900/50
      backdrop-blur-xl
      p-6
      text-center
      shadow-[0_0_30px_rgba(168,85,247,0.08)]
      "
    >
      <div className="text-3xl mb-3">{item.icon}</div>

      <h3 className="text-4xl font-bold text-white">
        {item.value}
      </h3>

      <p className="text-slate-400 mt-2">
        {item.label}
      </p>
    </motion.div>
  ))}
</motion.div>

<br></br>
<br></br>
<br></br>

        {/* ================= EDUCATION SECTION ================= */}
        <div className="mb-12">
  <p className="text-purple-400 uppercase tracking-[0.3em] text-sm font-mono">
    Academic Background
  </p>

  <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
    Education
  </h2>

  <div className="w-24 h-1 mt-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
</div>

        <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  whileHover={{ y: -5 }}
  className="
  relative
  overflow-hidden
  rounded-[40px]
  border border-purple-500/20
  bg-gradient-to-br
  from-slate-900/80
  via-slate-950/80
  to-slate-900/80
  backdrop-blur-3xl
  p-10 md:p-14
  shadow-[0_0_100px_rgba(168,85,247,0.12)]
  group
"
>
          {/* Degree and University Header */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b border-white/5">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-purple-500/10 border border-purple-500/20 text-purple-400 flex-shrink-0">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-snug">
                  Bachelor of Science (Hons) in Information Technology
                </h3>
                <p className="text-purple-400 font-mono text-sm mt-1">
                  Specializing in Software Engineering
                </p>
                <p className="text-gray-300 font-semibold mt-2 text-base">
                  Sri Lanka Institute of Information Technology (SLIIT)
                </p>
              </div>
            </div>

            {/* Logistics Info Card */}
            <div className="flex flex-col gap-2.5 text-xs text-gray-400 bg-slate-950/60 p-4 rounded-xl border border-white/5 font-mono min-w-[200px]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>Colombo, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-indigo-400" />
                <span>July 2024 – July 2028</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-400" />
                <span className="font-bold text-emerald-300">CGPA: 3.18 / 4.00</span>
              </div>
            </div>
          </div>

          {/* Details Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-8">
            
            {/* Academic Achievements Column (col-5) */}
            <div className="lg:col-span-5 flex flex-col justify-start">
              <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                <span>Academic Achievements</span>
              </h4>
              <ul className="space-y-3.5 text-gray-300 text-sm">
                <li className="flex items-start gap-2.5">
                  <span className="text-purple-400 font-bold">✓</span>
                  <span>Currently maintaining a strong **3.18 CGPA** majoring in Software Engineering.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-purple-400 font-bold">✓</span>
                  <span>Active core academic project contributor with verified codebase completions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-purple-400 font-bold">✓</span>
                  <span>Selected batch representative bridge, handling coordination workflows with faculty.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-purple-400 font-bold">✓</span>
                  <span>Certified in Foundational Systems & Hardware architecture (Distinction level).</span>
                </li>
              </ul>
            </div>

            {/* Relevant Coursework Badges Column (col-7) */}
            <div className="lg:col-span-7 flex flex-col justify-start">
              <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>Relevant Coursework</span>
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {coursework.map((course) => (
                  <span
                    key={course}
                    className="px-3.5 py-2 rounded-xl bg-slate-950 border border-white/5 hover:border-purple-500/20 text-gray-300 text-xs font-semibold hover:text-white transition-all duration-200 shadow-sm"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}
