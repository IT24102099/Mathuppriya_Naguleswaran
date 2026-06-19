"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Mail, Terminal as TermIcon, Play, Briefcase, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon, MediumIcon } from "@/components/SocialIcons";
import ProfileSection from "@/components/hero/ProfileSection";

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

    <div className="max-w-7xl mx-auto px-6
                grid grid-cols-1 lg:grid-cols-12
                gap-10 lg:gap-16
                items-center
                relative z-10 w-full">
  {/* Left Side */}
  <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left order-1 lg:order-1">

    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono mb-6 mx-auto lg:mx-0 w-fit"
    >
      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
      Ready for Internship 2026
    </motion.div>

    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-5xl md:text-7xl font-extrabold leading-tight mb-4"
    >
      Hi, I'm{" "}
      <span className="bg-gradient-to-r from-white via-purple-300 to-purple-500 bg-clip-text text-transparent">
        Mathuppriya
      </span>
    </motion.h1>

    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-2xl md:text-3xl font-mono text-purple-400 mb-6"
    >
      Full Stack Developer
    </motion.h2>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-gray-400 text-lg mb-8"
    >
      Software Engineering Undergraduate
    </motion.p>


    {/* Buttons */}
    <div className="flex flex-wrap gap-4 mb-10">

      <button
        onClick={handleContactScroll}
        className="px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold transition"
      >
        Get In Touch
      </button>

      <button
        onClick={onOpenResume}
        className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-white"
      >
        Preview Resume
      </button>

      <a
        href="/Mathuppriya Naguleswaran_CV.pdf"
        download
        className="px-8 py-4 rounded-xl border border-purple-500/30 bg-purple-500/10 text-purple-300"
      >
        Download CV
      </a>

    </div>

    {/* Socials */}
    <div className="flex gap-4">
      {socialLinks.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30"
          >
            <Icon className="w-5 h-5" />
          </a>
        );
      })}
    </div>

  </div>

  {/* Right Side */}
  <ProfileSection />

</div>

</section>
);
}