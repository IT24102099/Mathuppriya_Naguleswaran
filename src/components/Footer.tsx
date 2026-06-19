"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, MediumIcon } from "@/components/SocialIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: GithubIcon, url: "https://github.com/mathuppriya-dev", name: "GitHub" },
    { icon: LinkedinIcon, url: "https://linkedin.com", name: "LinkedIn" },
    { icon: Mail, url: "mailto:mathuppriyan@gmail.com", name: "Email" },
    { icon: MediumIcon, url: "https://medium.com/@reththur", name: "Medium" },
  ];

  return (
    <footer className="border-t border-white/5 bg-slate-950 py-8 relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs text-gray-500 font-mono">
        <div>
          <p>© {currentYear} Mathuppriya Naguleswaran. All rights reserved.</p>
          <p className="text-[10px] text-gray-600 mt-1">
            BSc (Hons) in IT Undergraduate at SLIIT. Sri Lanka.
          </p>
        </div>

        {/* Technology tags */}
        <div className="hidden md:flex items-center gap-2">
          <span>Built with</span>
          <span className="text-purple-400">Next.js 15</span>
          <span>•</span>
          <span className="text-indigo-400">TypeScript</span>
          <span>•</span>
          <span className="text-pink-400">Tailwind v4</span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="text-gray-500 hover:text-purple-400 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
