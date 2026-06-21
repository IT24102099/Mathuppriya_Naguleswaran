"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProfileSection() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="lg:col-span-5 flex justify-center items-center order-2 lg:order-2">
    
      <div className="relative flex items-center justify-center">

        {/* Main Glow */}
        <div className="absolute w-[450px] h-[450px] bg-purple-600/20 blur-[140px] rounded-full" />
       <div className="absolute w-[380px] h-[380px] bg-indigo-600/20 blur-[100px] rounded-full" />
       <div className="absolute w-[300px] h-[300px] bg-violet-500/10 blur-[80px] rounded-full" />

        {/* React */}
<motion.div
  animate={{ y: [0, -10, 0] }}
  transition={{ duration: 4, repeat: Infinity }}
  className="absolute -top-10 left-10 px-5 py-2 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 text-cyan-300 text-sm font-medium shadow-lg"
>
  React
</motion.div>


        {/* Node */}
<motion.div
  animate={{ y: [0, 12, 0] }}
  transition={{ duration: 5, repeat: Infinity }}
  className="absolute top-20 -left-24 px-5 py-2 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 text-green-300 text-sm font-medium shadow-lg"
>
  Node.js
</motion.div>

        {/* Spring */}
<motion.div
  animate={{ y: [0, -12, 0] }}
  transition={{ duration: 5, repeat: Infinity }}
  className="absolute top-16 right-[-70px] px-5 py-2 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 text-emerald-300 text-sm font-medium shadow-lg"
>
  Spring Boot
</motion.div>

        {/* MongoDB */}
<motion.div
  animate={{ y: [0, 10, 0] }}
  transition={{ duration: 6, repeat: Infinity }}
  className="absolute bottom-16 right-[-90px] px-5 py-2 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 text-green-400 text-sm font-medium shadow-lg"
>
  MongoDB
</motion.div>

       {/* HTML */}
<motion.div
  animate={{ y: [0, -12, 0] }}
  transition={{ duration: 5, repeat: Infinity }}
  className="absolute bottom-5 left-[-50px] px-5 py-2 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 text-orange-300 text-sm font-medium shadow-lg"
>
  HTML
</motion.div>

{/* CSS */}
<motion.div
  animate={{ y: [0, 8, 0] }}
  transition={{ duration: 4.5, repeat: Infinity }}
  className="absolute top-[55%] right-[-120px] px-5 py-2 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 text-blue-300 text-sm font-medium shadow-lg"
>
  CSS
</motion.div>

<motion.div
  animate={{ rotate: 360 }}
  transition={{
    duration: 30,
    repeat: Infinity,
    ease: "linear",
  }}
  className="absolute w-[460px] h-[460px] rounded-full border border-purple-500/20"
/>

<motion.div
  animate={{ rotate: -360 }}
  transition={{
    duration: 40,
    repeat: Infinity,
    ease: "linear",
  }}
  className="absolute w-[500px] h-[500px] rounded-full border border-purple-500/10 border-dashed"
/>
        {/* Main Image */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 blur-3xl opacity-40 scale-110" />

          <div className="relative w-[300px] h-[300px] md:w-[430px] md:h-[430px] rounded-full overflow-hidden border border-white/20 shadow-[0_0_80px_rgba(168,85,247,0.25)]">
            <Image
              src="/profile.jpeg"
              alt="Mathuppriya"
              fill
              priority
               sizes="(max-width: 768px) 300px, 430px"
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Floating Glass Card */}
       
            {/* Stats */}
    

      </div>
    </motion.div>
  );
}