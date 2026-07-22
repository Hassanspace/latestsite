"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ArrowUp, Github, Linkedin, Heart } from "lucide-react";

export const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-12 text-slate-400 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="space-y-1 text-center md:text-left">
          <div className="font-heading font-bold text-white text-lg tracking-tight flex items-center justify-center md:justify-start space-x-2">
            <span>Hassan Rasool</span>
            <span className="text-xs font-mono text-cyan-400 font-normal">v2.0</span>
          </div>
          <p className="text-xs text-slate-400">
            AI Engineer & Full Stack Software Developer
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center space-x-6 text-xs font-mono text-slate-300">
          <a href="#about" className="hover:text-primary transition">About</a>
          <a href="#skills" className="hover:text-primary transition">Skills</a>
          <a href="#projects" className="hover:text-primary transition">Projects</a>
          <a href="#experience" className="hover:text-primary transition">Experience</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
        </div>

        {/* Back to top */}
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            <a
              href={PORTFOLIO_DATA.personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      <div className="mt-8 pt-6 border-t border-slate-900 text-center text-[11px] font-mono text-slate-400 flex items-center justify-center space-x-1">
        <span>© {new Date().getFullYear()} Hassan Rasool. Designed & Developed with Next.js 15 & Tailwind CSS.</span>
      </div>
    </footer>
  );
};
