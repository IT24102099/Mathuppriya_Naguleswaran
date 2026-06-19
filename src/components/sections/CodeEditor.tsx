"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, FileCode, FileJson, FileText, ChevronRight, Minimize2, Maximize2, RefreshCw } from "lucide-react";

type FileTab = "Profile.ts" | "Stack.json" | "Goals.md";

export default function CodeEditor() {
  const [activeTab, setActiveTab] = useState<FileTab>("Profile.ts");
  const [isExplorerOpen, setIsExplorerOpen] = useState(true);

  const files = [
    { name: "Profile.ts", icon: FileCode, color: "text-blue-400" },
    { name: "Stack.json", icon: FileJson, color: "text-amber-400" },
    { name: "Goals.md", icon: FileText, color: "text-emerald-400" },
  ];

  const codeContents: Record<FileTab, { language: string; lines: string[] }> = {
    "Profile.ts": {
      language: "typescript",
      lines: [
        "// Profile class representing a passionate developer",
        "import { Developer } from './types';",
        "",
        "export class Mathuppriya implements Developer {",
        "  readonly name = \"Mathuppriya Naguleswaran\";",
        "  readonly role = \"Software Engineering Undergraduate\";",
        "  readonly university = \"SLIIT (Sri Lanka)\";",
        "  private gpa = 3.18;",
        "  public status = \"Internship Ready\";",
        "",
        "  constructor() {",
        "    console.log(\"Initializing developer journey...\");",
        "  }",
        "",
        "  public getQualifications() {",
        "    return {",
        "      degree: \"BSc (Hons) in Information Technology\",",
        "      expectedGraduation: 2028,",
        "      gpaHistory: {",
        "        year1Sem1: 2.98,",
        "        year1Sem2: 3.10,",
        "        year2Sem1: 3.48",
        "      }",
        "    };",
        "  }",
        "",
        "  public isInternshipReady(): boolean {",
        "    return this.gpa >= 3.0 && this.hasHandsOnExperience();",
        "  }",
        "",
        "  private hasHandsOnExperience(): boolean {",
        "    return [",
        "      \"Smart Campus Mobile App\",",
        "      \"Career Guidance System\",",
        "      \"Golden Curator Event Moderator\"",
        "    ].length > 0;",
        "  }",
        "}"
      ],
    },
    "Stack.json": {
      language: "json",
      lines: [
        "{",
        "  \"coreStack\": {",
        "    \"frontend\": [\"React.js\", \"Next.js 15\", \"TypeScript\", \"Tailwind CSS\"],",
        "    \"backend\": [\"Node.js\", \"Express.js\", \"Java Spring Boot\"],",
        "    \"databases\": [\"MongoDB\", \"MySQL\", \"SQL\"]",
        "  },",
        "  \"devOpsAndTools\": [",
        "    \"Git\",",
        "    \"GitHub\",",
        "    \"Postman\",",
        "    \"VS Code\",",
        "    \"Cloudinary\",",
        "    \"Vercel\"",
        "  ],",
        "  \"softSkills\": [",
        "    \"Clear Technical Communication\",",
        "    \"Team Collaboration (Git workflows)\",",
        "    \"Rule-based Matching Logics\",",
        "    \"Fast Stack Adaptation\"",
        "  ]",
        "}"
      ],
    },
    "Goals.md": {
      language: "markdown",
      lines: [
        "# Career Goals & Interests",
        "",
        "## What Drives Me",
        "- **Real-World Impact**: Building applications that solve practical issues (like visitor flows or career selection).",
        "- **Logical Challenges**: Writing matching algorithms, Z-score models, and complex pipeline moderation.",
        "- **Code Quality**: Adhering to strict folder structures, modular components, and type-safety rules.",
        "",
        "## Current Hobbies",
        "- ♟️ **Competitive Chess**: Strategic planning, patience, and logic analysis under time pressure.",
        "- ✍️ **Technical Writing**: Documenting learnings and publishing technical summaries on Medium.",
        "- 👥 **Batch Representative**: Acting as a bridge between faculty and peers at SLIIT."
      ],
    },
  };

  const getLineClass = (line: string, activeFile: FileTab) => {
    if (activeFile === "Profile.ts") {
      if (line.startsWith("//") || line.startsWith(" *")) return "text-gray-500 font-normal italic";
      if (line.includes("class ") || line.includes("export ") || line.includes("import ") || line.includes("return ") || line.includes("new ") || line.includes("boolean") || line.includes("private ") || line.includes("public ") || line.includes("readonly ")) {
        return "text-purple-400 font-semibold";
      }
      if (line.includes("console.log") || line.includes("hasHandsOnExperience")) return "text-blue-400";
      if (line.includes('"') || line.includes("'")) return "text-emerald-400";
      if (line.match(/\b\d+(\.\d+)?\b/)) return "text-amber-400";
    } else if (activeFile === "Stack.json") {
      if (line.match(/"[^"]+":/)) return "text-purple-400 font-semibold";
      if (line.includes('"')) return "text-emerald-400";
    } else if (activeFile === "Goals.md") {
      if (line.startsWith("#")) return "text-purple-400 font-bold text-sm md:text-base";
      if (line.startsWith("-")) return "text-blue-300";
    }
    return "text-gray-300";
  };

  return (
    <section className="py-16 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h3 className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-3">Interactive Workspace</h3>
          <h4 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Explore the Code</h4>
          <div className="w-12 h-1 bg-purple-600 mx-auto mt-3 rounded-full" />
        </div>

        {/* Editor Container */}
        <div className="w-full rounded-2xl bg-[#0d1117] border border-white/10 shadow-2xl overflow-hidden glass flex flex-col md:flex-row h-[500px]">
          {/* File Explorer Sidebar */}
          <div className={`border-r border-white/5 bg-[#080c10] flex-col ${isExplorerOpen ? "flex w-full md:w-56" : "hidden md:flex md:w-12"} transition-all duration-300`}>
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 text-xs font-mono font-semibold uppercase tracking-wider text-gray-500">
              <span className={isExplorerOpen ? "block" : "hidden"}>Explorer</span>
              <button
                onClick={() => setIsExplorerOpen(!isExplorerOpen)}
                className="hover:text-white text-gray-500 cursor-pointer hidden md:block"
                title={isExplorerOpen ? "Collapse Sidebar" : "Expand Sidebar"}
              >
                {isExplorerOpen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Folder Structure */}
            {isExplorerOpen && (
              <div className="p-3 flex-1 overflow-y-auto">
                <div className="flex items-center gap-1.5 text-xs text-gray-300 font-semibold font-mono mb-2">
                  <ChevronRight className="w-3.5 h-3.5 text-gray-500 rotate-90" />
                  <Folder className="w-4 h-4 text-purple-400" />
                  <span>portfolio</span>
                </div>
                <div className="pl-4 flex flex-col gap-1">
                  {files.map((file) => {
                    const FileIcon = file.icon;
                    const isActive = file.name === activeTab;
                    return (
                      <button
                        key={file.name}
                        onClick={() => setActiveTab(file.name as FileTab)}
                        className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-mono w-full text-left cursor-pointer transition-all ${
                          isActive ? "bg-white/10 text-white font-semibold" : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
                        }`}
                      >
                        <FileIcon className={`w-3.5 h-3.5 ${file.color}`} />
                        <span>{file.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
            {!isExplorerOpen && (
              <div className="flex flex-col items-center gap-4 py-4">
                {files.map((file) => {
                  const FileIcon = file.icon;
                  const isActive = file.name === activeTab;
                  return (
                    <button
                      key={file.name}
                      onClick={() => {
                        setIsExplorerOpen(true);
                        setActiveTab(file.name as FileTab);
                      }}
                      title={file.name}
                      className={`p-1.5 rounded-lg text-gray-400 cursor-pointer transition-all ${
                        isActive ? "bg-white/10 text-white" : "hover:text-gray-200 hover:bg-white/5"
                      }`}
                    >
                      <FileIcon className={`w-4 h-4 ${file.color}`} />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Main Code View Area */}
          <div className="flex-1 flex flex-col min-w-0 bg-[#0d1117]/60">
            {/* Editor Tabs Header */}
            <div className="flex items-center justify-between border-b border-white/5 bg-[#080c10] px-4 overflow-x-auto">
              <div className="flex">
                {files.map((file) => {
                  const FileIcon = file.icon;
                  const isActive = file.name === activeTab;
                  return (
                    <button
                      key={file.name}
                      onClick={() => setActiveTab(file.name as FileTab)}
                      className={`flex items-center gap-2 px-4 py-3 border-b text-xs font-mono cursor-pointer transition-all ${
                        isActive
                          ? "border-purple-500 bg-[#0d1117] text-white font-semibold"
                          : "border-transparent text-gray-400 hover:text-gray-200 hover:bg-white/5"
                      }`}
                    >
                      <FileIcon className={`w-3.5 h-3.5 ${file.color}`} />
                      <span>{file.name}</span>
                    </button>
                  );
                })}
              </div>
              <div className="flex items-center gap-2.5 text-gray-500">
                <button
                  onClick={() => {
                    const el = document.getElementById("editor-code-container");
                    if (el) el.scrollTop = 0;
                  }}
                  className="hover:text-gray-300 p-1 cursor-pointer"
                  title="Scroll to Top"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Code Content Container */}
            <div
              id="editor-code-container"
              className="p-6 flex-1 overflow-auto font-mono text-xs md:text-sm leading-relaxed scroll-smooth flex"
            >
              {/* Line Numbers */}
              <div className="text-gray-600 select-none text-right pr-4 border-r border-white/5 mr-4 flex flex-col">
                {codeContents[activeTab].lines.map((_, i) => (
                  <span key={i} className="block w-6">
                    {i + 1}
                  </span>
                ))}
              </div>

              {/* Code text */}
              <div className="flex-1 overflow-x-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.15 }}
                    className="whitespace-pre flex flex-col"
                  >
                    {codeContents[activeTab].lines.map((line, idx) => (
                      <div key={idx} className={`${getLineClass(line, activeTab)} min-h-[1.5rem] hover:bg-white/5 px-1 rounded`}>
                        {line}
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
