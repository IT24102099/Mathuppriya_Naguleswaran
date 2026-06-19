"use client";

import { X, Printer, Mail, Phone, ExternalLink, Calendar, GraduationCap, Award } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { motion, AnimatePresence } from "framer-motion";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl bg-slate-900 border border-white/10 shadow-2xl flex flex-col glass"
          >
            {/* Header / Actions */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900/80 sticky top-0 z-10">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-purple-400" />
                <h3 className="font-semibold text-white text-lg">Quick Resume Preview</h3>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / Save PDF</span>
                </button>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Resume Content Container */}
            <div className="overflow-y-auto flex-1 p-6 md:p-10 bg-slate-950/40 text-gray-300">
              {/* Paper styled document */}
              <div
                id="resume-printable-area"
                className="w-full mx-auto max-w-[800px] bg-white text-slate-900 p-8 md:p-12 shadow-xl rounded-lg border border-gray-200 text-sm font-sans print:p-0 print:border-none print:shadow-none print:rounded-none"
              >
                {/* Header */}
                <div className="border-b border-gray-300 pb-6 text-center">
                  <h1 className="text-3xl font-bold tracking-tight text-gray-900">Mathuppriya Naguleswaran</h1>
                  <p className="text-base text-purple-600 font-semibold mt-1">Software Engineering Undergraduate</p>
                  
                  {/* Contacts Grid */}
                  <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-4 text-xs text-gray-600 font-mono">
                    <a href="mailto:mathuppriyan@gmail.com" className="flex items-center gap-1 hover:text-purple-600">
                      <Mail className="w-3.5 h-3.5" />
                      <span>mathuppriyan@gmail.com</span>
                    </a>
                    <a href="tel:+94779178371" className="flex items-center gap-1 hover:text-purple-600">
                      <Phone className="w-3.5 h-3.5" />
                      <span>+94 779 178 371</span>
                    </a>
                    <a href="https://github.com/mathuppriya-dev" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-purple-600">
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>github.com/mathuppriya-dev</span>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-purple-600">
                      <LinkedinIcon className="w-3.5 h-3.5" />
                      <span>linkedin.com/in/mathuppriya</span>
                    </a>
                  </div>
                </div>

                {/* Professional Summary */}
                <div className="mt-6">
                  <h2 className="text-sm font-bold tracking-wider text-gray-800 uppercase border-b border-gray-200 pb-1 flex items-center gap-2">
                    Professional Summary
                  </h2>
                  <p className="text-gray-700 leading-relaxed mt-2 text-justify">
                    I’m an IT student at SLIIT, passionate about full-stack web and mobile application development since starting my journey in 
                    2024. I have hands-on experience building real-world systems, including a Smart Campus mobile app and a Career Guidance 
                    Platform. I am passionate about solving practical problems through scalable and user-focused solutions. I’m currently seeking 
                    an internship to enhance my technical skills and contribute to real-world projects while growing as a collaborative team member.
                  </p>
                </div>

                {/* Technical Skills */}
                <div className="mt-6">
                  <h2 className="text-sm font-bold tracking-wider text-gray-800 uppercase border-b border-gray-200 pb-1">
                    Technical Skills
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div>
                      <p className="text-xs font-bold text-gray-800 uppercase">Languages & DBs</p>
                      <ul className="list-disc list-inside text-gray-700 mt-1 space-y-0.5">
                        <li>Java, HTML, CSS, JavaScript, SQL, C</li>
                        <li>MongoDB, MySQL</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-800 uppercase">Frameworks & Tools</p>
                      <ul className="list-disc list-inside text-gray-700 mt-1 space-y-0.5">
                        <li>MERN Stack, Spring Boot, React, React Native</li>
                        <li>Postman, VS Code, Git, GitHub, Hugging Face, Vercel</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div className="mt-6">
                  <h2 className="text-sm font-bold tracking-wider text-gray-800 uppercase border-b border-gray-200 pb-1">
                    Education
                  </h2>
                  <div className="mt-2 space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-gray-900">Sri Lanka Institute of Information Technology (SLIIT)</h3>
                        <p className="text-xs text-gray-600">BSc (Hons) in Information Technology</p>
                        <p className="text-xs font-semibold text-purple-600 mt-1">GPA: 3.18 (Y1S1: 2.98 | Y1S2: 3.10 | Y2S1: 3.48)</p>
                      </div>
                      <span className="text-xs font-semibold text-gray-500 font-mono">2024 – 2028</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-gray-900">J/Manipay Ladies&apos; College, Jaffna</h3>
                        <p className="text-xs text-gray-600">G.C.E Advanced Level Examination (Bio Stream)</p>
                      </div>
                      <span className="text-xs font-semibold text-gray-500 font-mono">2020 – 2022</span>
                    </div>
                  </div>
                </div>

                {/* Projects */}
                <div className="mt-6">
                  <h2 className="text-sm font-bold tracking-wider text-gray-800 uppercase border-b border-gray-200 pb-1">
                    Academic Projects
                  </h2>
                  <div className="mt-2 space-y-4">
                    {/* Project 1 */}
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-gray-900">Smart Career Guidance System</h3>
                        <span className="text-xs font-semibold text-gray-500 font-mono">2026</span>
                      </div>
                      <p className="text-xs text-purple-600 font-semibold">React, Node.js, Express.js, MongoDB</p>
                      <ul className="list-disc list-inside text-gray-700 mt-1.5 space-y-1">
                        <li>Developed a full-stack MERN web application to recommend degree programs based on academic marks.</li>
                        <li>Implemented an Eligibility Analyzer using Z-score logic to evaluate university admission chances.</li>
                        <li>Built and integrated RESTful APIs and built a responsive dashboard UI with result visualization.</li>
                      </ul>
                    </div>

                    {/* Project 2 */}
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-gray-900">Smart Campus Mobile Application</h3>
                        <span className="text-xs font-semibold text-gray-500 font-mono">2026</span>
                      </div>
                      <p className="text-xs text-purple-600 font-semibold">React Native (Expo), Node.js, Express.js, MongoDB, JWT</p>
                      <ul className="list-disc list-inside text-gray-700 mt-1.5 space-y-1">
                        <li>Developing a cross-platform campus services application for students and staff.</li>
                        <li>Designed & implemented the Lost & Found module with image uploads and status tracking.</li>
                        <li>Created visitor check-in workflows and secure authentication using JSON Web Tokens.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div className="mt-6">
                  <h2 className="text-sm font-bold tracking-wider text-gray-800 uppercase border-b border-gray-200 pb-1">
                    Certifications & Activities
                  </h2>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                    <li><strong>Computer Systems & Hardware (Distinction)</strong> – Orion International Campus (2025)</li>
                    <li><strong>AI Poster Presentation</strong> – ThinkAI Expo, SLIIT NorthernUNI (2025)</li>
                    <li><strong>Artificial Intelligence Course</strong> – NoviTech R&D (2024)</li>
                    <li>Batch Representative at SLIIT (2025 – Present) & Technical Writer on Medium</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
