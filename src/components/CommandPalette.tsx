"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Search, Folder, Zap, Mail, FileText, CornerDownLeft, X, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { AnimatePresence, motion } from "framer-motion";

interface CommandPaletteProps {
  onOpenResume: () => void;
}

export default function CommandPalette({ onOpenResume }: CommandPaletteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();
  const pathname = usePathname();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setActiveIndex(0);
      setSearch("");
    }
  }, [isOpen]);

  const items = [
    {
      icon: Folder,
      title: "Go to Projects",
      subtitle: "Browse my full stack & mobile systems",
      shortcut: "G P",
      action: () => handleNavigation("projects"),
    },
    {
      icon: Zap,
      title: "Go to Skills",
      subtitle: "See languages, tools & technologies",
      shortcut: "G S",
      action: () => handleNavigation("skills"),
    },
    {
      icon: FileText,
      title: "View Resume",
      subtitle: "Preview interactive CV & download PDF",
      shortcut: "V R",
      action: () => {
        setIsOpen(false);
        onOpenResume();
      },
    },
    {
      icon: Mail,
      title: "Contact Me",
      subtitle: "Drop me an email or get in touch",
      shortcut: "C M",
      action: () => handleNavigation("contact"),
    },
    {
      icon: GithubIcon,
      title: "View GitHub Profile",
      subtitle: "Check out @mathuppriya-dev repos",
      shortcut: "V G",
      action: () => {
        window.open("https://github.com/mathuppriya-dev", "_blank");
        setIsOpen(false);
      },
    },
  ];

  const handleNavigation = (id: string) => {
    setIsOpen(false);
    if (pathname !== "/") {
      router.push(`/#${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(search.toLowerCase())
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % filteredItems.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredItems[activeIndex]) {
        filteredItems[activeIndex].action();
      }
    }
  };

  return (
    <>
      {/* Floating Shortcut Helper on navbar/screen */}
      <button
        onClick={() => setIsOpen(true)}
        className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
      >
        <Search className="w-3.5 h-3.5" />
        <span>Search</span>
        <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] font-mono text-gray-300">Ctrl+K</kbd>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-xl overflow-hidden rounded-xl bg-slate-900/90 border border-purple-500/20 shadow-2xl glass-premium"
            >
              {/* Header Input */}
              <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3.5">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Type a command or search..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setActiveIndex(0);
                  }}
                  onKeyDown={handleKeyDown}
                  className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded hover:bg-white/10 text-gray-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Items List */}
              <div className="max-h-[300px] overflow-y-auto p-2">
                {filteredItems.length === 0 ? (
                  <div className="py-6 text-center text-gray-400 text-sm flex flex-col items-center justify-center gap-2">
                    <Terminal className="w-6 h-6 text-purple-400 animate-pulse" />
                    <span>No results found for &quot;{search}&quot;</span>
                  </div>
                ) : (
                  filteredItems.map((item, idx) => {
                    const Icon = item.icon;
                    const isActive = idx === activeIndex;
                    return (
                      <div
                        key={item.title}
                        onClick={item.action}
                        onMouseEnter={() => setActiveIndex(idx)}
                        className={`flex items-center justify-between px-3.5 py-3 rounded-lg cursor-pointer transition-all ${
                          isActive
                            ? "bg-purple-600/30 border-purple-500/30 text-white"
                            : "text-gray-300 hover:bg-white/5"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2 rounded-md ${
                              isActive ? "bg-purple-500 text-white" : "bg-white/5 text-gray-400"
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-medium">{item.title}</div>
                            <div className="text-xs text-gray-400">{item.subtitle}</div>
                          </div>
                        </div>

                        {isActive && (
                          <span className="flex items-center gap-1 text-[10px] font-mono text-purple-300 px-2 py-1 rounded bg-purple-500/20 border border-purple-500/30">
                            <span>Enter</span>
                            <CornerDownLeft className="w-3 h-3" />
                          </span>
                        )}
                      </div>
                    );
                  })
                )}
              </div>

              {/* Footer Help */}
              <div className="flex items-center justify-between border-t border-white/10 px-4 py-2 text-[10px] text-gray-400 font-mono">
                <div className="flex gap-3">
                  <span>↑↓ Navigate</span>
                  <span>↵ Select</span>
                </div>
                <span>ESC to Close</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
