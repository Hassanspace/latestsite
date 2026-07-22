"use client";

import React, { useState, useEffect } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ArrowRight, FileText, Sparkles, Terminal, Code2, Brain, Cpu } from "lucide-react";

export const HeroSection: React.FC = () => {
  const [headlineIndex, setHeadlineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % PORTFOLIO_DATA.personal.headlines.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 backdrop-blur-md shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{PORTFOLIO_DATA.personal.status}</span>
            </div>

            {/* Main Greeting & Name */}
            <div>
              <p className="text-sm font-mono text-cyan-400 tracking-wider uppercase mb-1">
                Hello & Welcome, I am
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight">
                {PORTFOLIO_DATA.personal.name}
              </h1>
              
              {/* Dynamic Rotating Headline */}
              <div className="h-12 mt-2 flex items-center">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-accent font-heading transition-all duration-500">
                  {PORTFOLIO_DATA.personal.headlines[headlineIndex]}
                </span>
              </div>
            </div>

            {/* Bio Paragraph */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
              {PORTFOLIO_DATA.personal.bio}
            </p>

            {/* Primary Action CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary via-blue-600 to-cyan-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-primary/30 transition transform hover:-translate-y-0.5 group"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-700/80 transition transform hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Review Resume (PDF)</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-slate-900/40 hover:bg-slate-900 text-slate-300 font-semibold text-sm border border-slate-800 transition"
              >
                <span>Let&apos;s Connect</span>
              </a>
            </div>

            {/* Real-time Metrics Grid */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4">
              {PORTFOLIO_DATA.metrics.map((metric) => (
                <div key={metric.id} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-bold font-heading text-white">
                    {metric.value}
                    <span className="text-cyan-400">{metric.suffix}</span>
                  </div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Hero Visual Card with Glassmorphism */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Glowing backdrop circle */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary via-cyan-500 to-accent opacity-30 blur-2xl animate-pulse-slow pointer-events-none" />

            <div className="relative w-full max-w-md bg-[#0F172A]/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-6 backdrop-blur-xl">
              
              {/* Card Terminal Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-[11px] font-mono text-slate-400 flex items-center space-x-1.5">
                  <Terminal className="w-3.5 h-3.5 text-primary" />
                  <span>hassan-ai-core.py</span>
                </div>
              </div>

              {/* Developer Avatar & Quick Badges */}
              <div className="flex items-center space-x-4">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-primary/40 p-1 bg-slate-900 shadow-xl shrink-0">
                  <img
                    src="/images/header.jpg"
                    alt="Hassan Rasool"
                    className="w-full h-full object-cover rounded-xl"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/images/newportfolio.png";
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-heading text-white">Hassan Rasool</h3>
                  <p className="text-xs font-mono text-cyan-400">AI & Full Stack Engineer</p>
                  <p className="text-xs text-slate-400 mt-1">📍 Pakistan</p>
                </div>
              </div>

              {/* Core Skill Chips */}
              <div className="space-y-2">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center space-x-1">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Core Tech Stack</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["PyTorch", "Django", "React", "Next.js", "OpenCV", "YOLOv8", "FastAPI", "TypeScript", "Tailwind"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-800/80 border border-slate-700/80 text-slate-200 hover:border-primary/50 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Spec Highlights */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2.5 text-xs font-mono">
                <div className="flex justify-between items-center text-slate-300">
                  <span className="text-slate-400 flex items-center space-x-1.5">
                    <Brain className="w-3.5 h-3.5 text-purple-400" />
                    <span>Specialization:</span>
                  </span>
                  <span className="text-purple-300">Computer Vision & Deep Learning</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span className="text-slate-400 flex items-center space-x-1.5">
                    <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Backend Stack:</span>
                  </span>
                  <span className="text-cyan-300">Python / Django / REST / PostgreSQL</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span className="text-slate-400 flex items-center space-x-1.5">
                    <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Frontend Stack:</span>
                  </span>
                  <span className="text-emerald-300">React 19 / Next.js 15 / Tailwind</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
