"use client";

import { motion } from "framer-motion";
import { FileText, Mail, Send,Database,
  Code2,
  Terminal,
  Server,
  Globe, } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

interface RecruiterCTAProps {
  onOpenResume: () => void;
}

export default function RecruiterCTA({ onOpenResume }: RecruiterCTAProps) {
  const handleContactScroll = () => {
    const el = document.getElementById("contact");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-12 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border border-purple-500/30 overflow-hidden glass-premium p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left"
        >
          {/* Decorative glow spheres inside card */}
          <div className="absolute -top-[50%] -right-[20%] w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-[50%] -left-[20%] w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[80px] pointer-events-none" />

          {/* Heading Detail */}
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-3">
              Let's Build Something Meaningful Together...
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              I am actively seeking an internship opportunity for 2026. Let&apos;s connect to discuss how my full-stack web and mobile development skills can add value to your engineering teams.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="relative z-10 flex flex-wrap justify-center items-center gap-3 w-full lg:w-auto">
            {/* Contact Action */}
            <button
              onClick={handleContactScroll}
              className="flex items-center gap-1.5 px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Contact Me</span>
            </button>

            {/* Resume Action */}
            <a
  href="/Mathuppriya_CV.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-1.5 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 text-white font-semibold text-xs transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
>
  <FileText className="w-3.5 h-3.5 text-purple-400" />
  <span>View Resume</span>
</a>

            {/* LinkedIn Action */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 text-white font-semibold text-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
              <span>LinkedIn</span>
            </a>

            {/* GitHub Action */}
            <a
              href="https://github.com/mathuppriya-dev"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 text-white font-semibold text-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <GithubIcon className="w-3.5 h-3.5 text-gray-300" />
              <span>GitHub</span>
            </a>
          </div>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">

  <motion.div
    animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }}
    transition={{ duration: 6, repeat: Infinity }}
    className="absolute top-16 left-16 text-purple-500/20"
  >
    <GithubIcon size={42} />
  </motion.div>

</div>
        </motion.div>
      </div>
      <motion.div
    animate={{ y: [0, 15, 0] }}
    transition={{ duration: 7, repeat: Infinity }}
    className="absolute top-24 right-20 text-blue-500/20"
  >
    <LinkedinIcon size={40} />
  </motion.div>

  <motion.div
    animate={{ y: [0, -18, 0] }}
    transition={{ duration: 5, repeat: Infinity }}
    className="absolute bottom-20 left-24 text-cyan-500/20"
  >
    <Database size={40} />
  </motion.div>

  <motion.div
    animate={{ y: [0, 20, 0] }}
    transition={{ duration: 8, repeat: Infinity }}
    className="absolute bottom-24 right-24 text-purple-500/20"
  >
    <Code2 size={40} />
  </motion.div>

  <motion.div
    animate={{ y: [0, -15, 0] }}
    transition={{ duration: 6, repeat: Infinity }}
    className="absolute top-1/4 left-[6%] text-indigo-500/20"
  >
    <Terminal size={38} />
  </motion.div>

  <motion.div
    animate={{ y: [0, 15, 0] }}
    transition={{ duration: 7, repeat: Infinity }}
    className="absolute top-1/4 right-[18%] text-emerald-500/20"
  >
    <Server size={28} />
    
  </motion.div>
  
    </section>
  );
}
