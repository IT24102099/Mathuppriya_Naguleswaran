"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Journey from "@/components/sections/Journey";
import CodeEditor from "@/components/sections/CodeEditor";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import GitHubActivity from "@/components/sections/GitHubActivity";
import Experience from "@/components/sections/Experience";
import Certifications from "@/components/sections/Certifications";
import RecruiterCTA from "@/components/sections/RecruiterCTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";
import CommandPalette from "@/components/CommandPalette";
import { Loader2, Terminal } from "lucide-react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [loadingText, setLoadingText] = useState("");

  const logs = [
    "Initializing mathuppriya-portfolio v2.0.26...",
    "Mounting React 19 App Engine & Next.js 15 routing...",
    "Loading Tailwind CSS v4 variables & glassmorphism filters...",
    "Connecting live GitHub REST API endpoints...",
    "Compiling developer credentials & project modules...",
    "Ready! Launching Mathuppriya's digital workspace."
  ];

  useEffect(() => {
    let currentLogIdx = 0;
    const logInterval = setInterval(() => {
      if (currentLogIdx < logs.length) {
        setLoadingText(logs[currentLogIdx]);
        currentLogIdx++;
      } else {
        clearInterval(logInterval);
        setTimeout(() => setLoading(false), 500);
      }
    }, 400);

    return () => clearInterval(logInterval);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-950 text-gray-100 flex flex-col justify-between overflow-x-hidden">
      <AnimatePresence mode="wait">
        {loading ? (
          /* Premium Terminal Loader Screen */
          <motion.div
            key="loader"
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-slate-950 flex flex-col items-center justify-center p-6"
          >
            <div className="w-full max-w-lg p-6 rounded-2xl bg-slate-900 border border-white/10 shadow-2xl glass font-mono text-xs text-gray-400">
              <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-gray-500">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>portfolio-builder</span>
                </div>
                <div className="w-8" />
              </div>
              <div className="flex flex-col gap-2 min-h-[120px] justify-center">
                <div className="flex items-center gap-2 text-purple-400">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{loadingText}</span>
                </div>
              </div>
              <div className="border-t border-white/5 mt-4 pt-3 text-right text-[10px] text-gray-600">
                Mathuppriya Naguleswaran © 2026
              </div>
            </div>
          </motion.div>
        ) : (
          /* Main Homepage Content */
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-1 flex flex-col"
          >
            {/* Header / Nav */}
            <Navbar onOpenResume={() => setIsResumeOpen(true)} />

            {/* Global Cmd Palette Search */}
            <CommandPalette onOpenResume={() => setIsResumeOpen(true)} />

            {/* Main Sections */}
            <main className="flex-1 flex flex-col">
              <Hero onOpenResume={() => setIsResumeOpen(true)} />
              <Journey />
              <CodeEditor />
              <Skills />
              <Projects />
              <GitHubActivity />
              <Experience />
              <Certifications />
              <RecruiterCTA onOpenResume={() => setIsResumeOpen(true)} />
              <Contact />
            </main>

            {/* Footer */}
            <Footer />

            {/* Resume Overlay Modal */}
            <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
