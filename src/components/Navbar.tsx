"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, FileText, Search, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenResume: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", id: "journey" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  const handleLinkClick = (id: string) => {
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

  const openCmdPalette = () => {
    // Dispatch ctrl+k keyboard event to trigger CommandPalette component
    const event = new KeyboardEvent("keydown", {
      key: "k",
      ctrlKey: true,
      bubbles: true,
      cancelable: true,
    });
    window.dispatchEvent(event);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "py-4 bg-slate-950/70 backdrop-blur-md border-b border-white/5" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => handleLinkClick("hero")}
          className="flex items-center gap-2 cursor-pointer font-mono font-bold text-white text-base select-none"
        >
          <Terminal className="w-5 h-5 text-purple-500 animate-pulse" />
          <span>mathuppriya<span className="text-purple-400">.dev</span></span>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="text-sm text-gray-400 hover:text-white transition-all cursor-pointer font-medium relative py-1"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Cmd Palette Shortcut Trigger */}
          <button
            onClick={openCmdPalette}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Search</span>
            <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] font-mono text-gray-300">Ctrl+K</kbd>
          </button>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-purple-600/10 border border-purple-500/30 text-purple-300 text-xs font-semibold cursor-pointer hover:bg-purple-600 hover:text-white transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={openCmdPalette}
            aria-label="Search"
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white cursor-pointer"
          >
            <Search className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white cursor-pointer"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 top-[68px] z-30 bg-black/60 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed left-0 right-0 top-[68px] z-40 bg-slate-950/95 border-b border-white/10 p-6 md:hidden glass flex flex-col gap-5"
            >
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className="text-left text-base text-gray-300 hover:text-white font-medium py-1 cursor-pointer"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>

              <div className="h-px bg-white/10 w-full" />

              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenResume();
                }}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
