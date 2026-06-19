"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

export default function Journey() {
  return (
    <section>

  {/* About Card */}
  <br></br>
  <div className="mb-10">
  <p className="text-purple-400 uppercase tracking-[0.3em] text-sm font-mono">
    Academic Background
  </p>

  <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
    Education
  </h2>

  <div className="w-24 h-1 mt-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
</div>

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
  <div className="
mt-10
rounded-3xl
border border-purple-500/20
bg-gradient-to-br
from-slate-900/90
to-slate-950/90
p-8
shadow-[0_0_40px_rgba(168,85,247,0.15)]
">

  <div className="flex items-center gap-4 mb-6">
    
    <div className="
    w-14 h-14
    rounded-2xl
    flex items-center justify-center
    bg-purple-500/10
    border border-purple-500/20
    ">
      🎓
    </div>

    <div>
      <h3 className="text-2xl font-bold text-white">
        Bachelor of Science (Hons) in Information Technology
      </h3>

      <p className="text-purple-400 font-medium">
        Specializing in Software Engineering
      </p>
    </div>

  </div>

  <div className="space-y-3 text-slate-300">

    <p>
      <span className="font-semibold text-white">
        Sri Lanka Institute of Information Technology (SLIIT)
      </span>
    </p>

    <p>
      📍 Colombo, Sri Lanka
    </p>

    <p>
      📅 July 2024 – July 2028
    </p>

  </div>

  <div className="
  mt-8
  grid
  md:grid-cols-2
  gap-6
  ">

    <div>
      <h4 className="text-white font-semibold mb-3">
        Key Achievements
      </h4>

      <ul className="space-y-2 text-slate-300">
        <li>✓ Current CGPA: 3.18 / 4.00</li>
        <li>✓ Software Engineering Specialization</li>
        <li>✓ Active Project Development Experience</li>
        <li>✓ Internship Ready Candidate</li>
      </ul>
    </div>

    <div className="grid lg:grid-cols-2 gap-6 mt-8">

  {/* Technologies */}
  <div className="rounded-3xl border border-purple-500/20 bg-slate-900/50 p-6">

  <h3 className="text-2xl font-bold text-white mb-8">
    Core Technologies
  </h3>

  <div className="grid grid-cols-2 gap-10">

    {/* Frontend */}
    <div>
      <h4 className="text-purple-400 font-semibold text-lg mb-4">
        Frontend
      </h4>

      <ul className="space-y-3 text-slate-300">
        <li>• React.js</li>
        <li>• React Native</li>
        <li>• Next.js</li>
        <li>• JavaScript</li>
      </ul>
    </div>

    {/* Backend */}
    <div>
      <h4 className="text-pink-400 font-semibold text-lg mb-4">
        Backend
      </h4>

      <ul className="space-y-3 text-slate-300">
        <li>• Java</li>
        <li>• Node.js</li>
        <li>• Express.js</li>
        <li>• Spring Boot</li>
      </ul>
    </div>

    {/* Database */}
    <div>
      <h4 className="text-cyan-400 font-semibold text-lg mb-4">
        Databases
      </h4>

      <ul className="space-y-3 text-slate-300">
        <li>• MongoDB</li>
        <li>• MySQL</li>
        <li>• PostgreSQL</li>
      </ul>
    </div>

    {/* Tools */}
    <div>
      <h4 className="text-emerald-400 font-semibold text-lg mb-4">
        Tools
      </h4>

      <ul className="space-y-3 text-slate-300">
        <li>• Git</li>
        <li>• GitHub</li>
        <li>• VS Code</li>
        <li>• Postman</li>
      </ul>
    </div>

  </div>

</div>

  {/* Coursework */}
  <div className="rounded-3xl border border-purple-500/20 bg-slate-900/50 p-6">

    <h3 className="text-2xl font-bold text-white mb-6">
      Relevant Coursework
    </h3>

    <div className="flex flex-wrap gap-3">

      {[
        "Software Engineering",
        "Data Structures",
        "Algorithms",
        "DBMS",
        "Web Development",
        "Mobile Development",
        "AI & ML",
        "Computer Networks",
        "Statistics",
      ].map((course) => (
        <span
          key={course}
          className="px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-slate-300"
        >
          {course}
        </span>
      ))}

    </div>

  </div>

</div>

  </div>
<div className="mt-6 rounded-3xl border border-purple-500/20 bg-slate-900/50 p-6">

  <h3 className="text-2xl font-bold text-white mb-6">
    Academic Projects
  </h3>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

    {[
      "Smart Career Guidance System",
      "Smart Campus Mobile Application",
      "Golden Curator System",
      "Blood Donation System",
    ].map((project) => (
      <div
        key={project}
        className="p-4 rounded-2xl border border-white/10 bg-white/5 hover:border-purple-500/30 transition-all"
      >
        <p className="text-slate-300 font-medium">
          {project}
        </p>
      </div>
    ))}

  </div>

</div>
</div>
<br></br>


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
  
<p className="text-slate-300 text-lg md:text-xl leading-10 text-justify">
  I'm{" "}
  <span className="font-bold text-white">
    Naguleswaran Mathuppriya
  </span>
  , a Software Engineering Undergraduate passionate about building
  <span className="text-purple-400 font-medium">
    {" "}scalable web applications
  </span>
  ,
  <span className="text-indigo-400 font-medium">
    {" "}mobile solutions
  </span>
  , and
  <span className="text-pink-400 font-medium">
    {" "}real-world software products
  </span>
  .


  I specialize in Full Stack Development using the MERN Stack,
  Spring Boot, React Native, PostgreSQL, and MongoDB. Through
  academic and personal projects, I have developed solutions
  ranging from career guidance platforms and HR management systems
  to smart campus applications.


  Currently, I am seeking a
  <span className="text-purple-400 font-semibold">
    {" "}Software Engineering Internship
  </span>
  where I can contribute to impactful projects, collaborate with
  experienced developers, and continue growing as a professional
  software engineer.
</p>

  </div>
</motion.div>


  
</motion.div>
</section>
  );
}
