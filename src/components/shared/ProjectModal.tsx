"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, Github, CheckCircle2, AlertCircle, Sparkles, Layers, BookOpen } from "lucide-react";
import { Project } from "@/data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0F172A] border border-slate-700/80 rounded-2xl shadow-2xl overflow-y-auto font-sans scrollbar-thin text-slate-100 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0F172A]/90 backdrop-blur-md border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <span className="px-2.5 py-1 text-xs font-mono font-medium rounded-full bg-primary/20 text-primary border border-primary/30 uppercase tracking-wider">
              {project.category.replace("-", " ")}
            </span>
            <span className="text-xs text-slate-400 font-mono">{project.date}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Container */}
        <div className="p-6 md:p-8 space-y-8">
          {/* Title & Subtitle */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white tracking-tight">
              {project.title}
            </h2>
            <p className="mt-2 text-lg text-cyan-400 font-medium font-sans">
              {project.subtitle}
            </p>
          </div>

          {/* Project Image Banner */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-inner group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
              onError={(e) => {
                // fallback if image fails to load
                (e.target as HTMLImageElement).src = "/images/newportfolio.png";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80" />
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-cyan-600 text-white font-medium text-sm hover:shadow-lg hover:shadow-primary/25 transition transform hover:-translate-y-0.5"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Launch Live Product</span>
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 font-medium text-sm border border-slate-700 transition transform hover:-translate-y-0.5"
            >
              <Github className="w-4 h-4" />
              <span>Explore GitHub Repository</span>
            </a>
          </div>

          {/* Overview */}
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center space-x-2">
              <BookOpen className="w-4 h-4 text-primary" />
              <span>Executive Overview</span>
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              {project.description}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Problem */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-red-500/20 space-y-3">
              <div className="flex items-center space-x-2 text-red-400">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <h4 className="font-heading font-semibold text-lg text-white">The Engineering Problem</h4>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Solution */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-cyan-500/20 space-y-3">
              <div className="flex items-center space-x-2 text-cyan-400">
                <Sparkles className="w-5 h-5 shrink-0" />
                <h4 className="font-heading font-semibold text-lg text-white">The Architectural Solution</h4>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold text-white flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>Key Technical Features</span>
            </h4>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-3">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start space-x-3 p-3.5 rounded-xl bg-slate-900/40 border border-slate-800 text-sm text-slate-300">
                  <span className="w-2 h-2 mt-1.5 rounded-full bg-primary shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Challenges & Learnings Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="text-base font-heading font-semibold text-amber-400 flex items-center space-x-2">
                <Layers className="w-4 h-4" />
                <span>Engineering Challenges Solved</span>
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                {project.engineeringChallenges.map((ch, idx) => (
                  <li key={idx} className="p-3 rounded-lg bg-slate-900/60 border border-amber-500/10 leading-snug">
                    {ch}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-base font-heading font-semibold text-violet-400 flex items-center space-x-2">
                <Sparkles className="w-4 h-4" />
                <span>Key Technical Takeaways</span>
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                {project.whatILearned.map((lrn, idx) => (
                  <li key={idx} className="p-3 rounded-lg bg-slate-900/60 border border-violet-500/10 leading-snug">
                    {lrn}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technologies Used Badges */}
          <div className="pt-4 border-t border-slate-800 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-800 text-cyan-300 border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
