"use client";

import { motion } from "framer-motion";
import { User, Code, Heart, Target, GraduationCap } from "lucide-react";

export default function Journey() {
  return (
    <section>

  {/* About Card */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="
    mb-16
    rounded-3xl
    border border-purple-500/20
    bg-gradient-to-br
    from-slate-900/90
    to-slate-950/90
    backdrop-blur-xl
    p-8 md:p-12
    shadow-[0_0_60px_rgba(168,85,247,0.08)]
  "
>
  <div className="flex items-start gap-5 mb-6">
    <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20">
      <User className="w-7 h-7 text-purple-400" />
    </div>

    <div>
      <h3 className="text-2xl font-bold text-white">
        About Me
      </h3>

      <p className="text-purple-400 mt-1">
        Software Engineering Undergraduate | Full Stack Developer
      </p>
    </div>
  </div>

<motion.div
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
className="
relative
overflow-hidden
rounded-[32px]
border-2 border-purple-500/40
bg-slate-900/70
backdrop-blur-2xl
p-8 md
shadow-[0_0_60px_rgba(168,85,247,0.25)]
"

>

{/* Glow */}

  <div className="absolute -top-24 -right-24 w-72 h-72 bg-purple-600/20 blur-[120px] rounded-full" />

  <div className="relative z-10">
  
<p
  className="
    text-slate-300
    text-lg md:text-xl
    leading-[2.3rem]
    text-justify
    tracking-wide
    max-w-5xl
    mx-auto
  "
>
  I'm <span className="text-white font-semibold">Naguleswaran Mathuppriya</span>,
  a Software Engineering Undergraduate focused on creating
  <span className="text-purple-400"> scalable web applications</span>,
  <span className="text-indigo-400"> mobile experiences</span>, and
  <span className="text-pink-400"> modern software solutions</span>.
  My work spans MERN Stack, Spring Boot, React Native, and MongoDB, with a strong passion for turning ideas into products
  that deliver real value and meaningful impact. I love building Software That
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
    {" "}Solves Real Problems.
  </span>
</p>

  </div>
</motion.div>


  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">

    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <p className="text-3xl font-bold text-white">3.18</p>
      <p className="text-gray-400 text-sm mt-1">Current GPA</p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <p className="text-3xl font-bold text-white">2028</p>
      <p className="text-gray-400 text-sm mt-1">Graduation</p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <p className="text-3xl font-bold text-white">10+</p>
      <p className="text-gray-400 text-sm mt-1">Technologies</p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <p className="text-3xl font-bold text-white">4+</p>
      <p className="text-gray-400 text-sm mt-1">Projects</p>
    </div>

  </div>
</motion.div>
</section>
  );
}
