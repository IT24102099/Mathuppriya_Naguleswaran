"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Mail, Terminal as TermIcon, Play } from "lucide-react";
import { GithubIcon, LinkedinIcon, MediumIcon } from "@/components/SocialIcons";

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [terminalText, setTerminalText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  const commandText = "cat mathuppriya.json";
  const jsonResponse = `{
  "name": "Mathuppriya Naguleswaran",
  "role": "Software Engineering Undergraduate",
  "location": "Jaffna/Colombo, Sri Lanka",
  "university": "SLIIT (BSc IT - Hons)",
  "skills": ["MERN Stack", "Spring Boot", "React Native"],
  "focus": "Scalable APIs & Clean Client UIs",
  "status": "Actively seeking an Internship"
}`;

  useEffect(() => {
    // Type Command first
    let index = 0;
    const typeCommand = setInterval(() => {
      setTerminalText((prev) => prev + commandText[index]);
      index++;
      if (index >= commandText.length) {
        clearInterval(typeCommand);
        // Pause briefly, then print JSON output
        setTimeout(() => {
          setTerminalText((prev) => prev + "\n" + jsonResponse);
        }, 800);
      }
    }, 70);

    // Blinking Cursor
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typeCommand);
      clearInterval(cursorInterval);
    };
  }, []);

  const handleContactScroll = () => {
    const contact = document.getElementById("contact");
    contact?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    { icon: GithubIcon, url: "https://github.com/mathuppriya-dev", name: "GitHub" },
    { icon: LinkedinIcon, url: "https://linkedin.com", name: "LinkedIn" },
    { icon: Mail, url: "mailto:mathuppriyan@gmail.com", name: "Email" },
    { icon: MediumIcon, url: "https://medium.com/@reththur", name: "Medium" },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-slate-950">
      {/* Background Gradient Blurs */}
      <div className="absolute top-[20%] left-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[20%] right-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Side Details */}
        <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono mb-6 mx-auto lg:mx-0 w-fit"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping" />
            <span>Ready for Internship 2026</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4"
          >
            Hi, I&apos;m <span className="text-gradient font-extrabold block lg:inline">Mathuppriya</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl font-mono text-purple-400 font-semibold mb-6"
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 text-justify lg:text-left"
          >
            I craft clean, high-performance web and mobile systems. As a Software Engineering student at SLIIT, 
            I build projects using the MERN stack and Spring Boot, combining strict code architectures with modern Apple-style UI designs.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
          >
            <button
              onClick={handleContactScroll}
              className="group flex items-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-lg shadow-purple-500/20"
            >
              <span>Get in touch</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <FileText className="w-4 h-4 text-purple-400" />
              <span>Preview Resume</span>
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center lg:justify-start gap-5"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-purple-400 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </motion.div>
        </div>


        {/* Right Side: Animated Code Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-6 w-full"
        >
          <div className="w-full rounded-2xl bg-slate-900 border border-white/10 shadow-2xl overflow-hidden glass">
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-white/5">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                <TermIcon className="w-3.5 h-3.5" />
                <span>mathuppriya-terminal</span>
              </div>
              <div className="w-12" /> {/* Spacer */}
            </div>

            {/* Terminal Console Output */}
            <div className="p-5 font-mono text-xs text-gray-300 min-h-[280px] bg-slate-950/50 leading-relaxed overflow-x-auto whitespace-pre">
              <div className="flex items-center gap-2 text-purple-400 mb-2">
                <span>$</span>
                <span>{terminalText.split("\n")[0]}</span>
                {terminalText.split("\n").length === 1 && showCursor && (
                  <span className="w-1.5 h-4 bg-purple-400 animate-pulse" />
                )}
              </div>
              {terminalText.split("\n").length > 1 && (
                <div className="text-emerald-400">
                  {terminalText.substring(commandText.length + 1)}
                  {showCursor && <span className="inline-block w-1.5 h-3.5 bg-emerald-400 ml-0.5" />}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating technologies in background */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] left-[5%] px-3 py-1.5 rounded-lg border border-purple-500/20 bg-purple-500/5 backdrop-blur-md text-xs font-mono text-purple-300 shadow-md"
        >
          React
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[75%] left-[12%] px-3 py-1.5 rounded-lg border border-indigo-500/20 bg-indigo-500/5 backdrop-blur-md text-xs font-mono text-indigo-300 shadow-md"
        >
          Node.js
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 4, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[10%] px-3 py-1.5 rounded-lg border border-pink-500/20 bg-pink-500/5 backdrop-blur-md text-xs font-mono text-pink-300 shadow-md"
        >
          Spring Boot
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0], rotate: [0, -2, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[80%] right-[32%] px-3 py-1.5 rounded-lg border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-md text-xs font-mono text-emerald-300 shadow-md"
        >
          MongoDB
        </motion.div>
      </div>
    </section>
  );
}
