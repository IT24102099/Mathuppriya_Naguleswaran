"use client";

import { motion } from "framer-motion";
import {
  Database,
  Terminal,
  Code2,
  Braces,
} from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">

      {/* Purple Blob */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
        className="
          absolute
          top-20
          left-10
          w-[400px]
          h-[400px]
          bg-purple-500/20
          rounded-full
          blur-[140px]
        "
      />

      {/* Blue Blob */}
      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-10
          right-10
          w-[400px]
          h-[400px]
          bg-indigo-500/20
          rounded-full
          blur-[140px]
        "
      />

      {/* Github */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          top-[15%]
          left-[8%]
          text-purple-500/10
        "
      >
        <GithubIcon size={50} />
      </motion.div>

      {/* Database */}
      <motion.div
        animate={{
          y: [0, 25, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
          absolute
          top-[55%]
          right-[10%]
          text-cyan-500/10
        "
      >
        <Database size={50} />
      </motion.div>

      {/* Terminal */}
      <motion.div
        animate={{
          y: [0, -18, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-[20%]
          left-[12%]
          text-pink-500/10
        "
      >
        <Terminal size={45} />
      </motion.div>

      {/* Code */}
      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
        }}
        className="
          absolute
          top-[25%]
          right-[15%]
          text-indigo-500/10
        "
      >
        <Code2 size={45} />
      </motion.div>

      {/* Braces */}
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-[15%]
          right-[25%]
          text-purple-500/10
        "
      >
        <Braces size={40} />
      </motion.div>

      {/* Grid Pattern */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-[size:50px_50px]
        "
      />
    </div>
  );
}