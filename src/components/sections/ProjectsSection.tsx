"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";
import { Sparkles, ExternalLink, Github, ArrowRight, Code2 } from "lucide-react";

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ai-ml", label: "AI & Computer Vision" },
    { id: "fullstack", label: "Full-Stack Web Apps" },
    { id: "django-backend", label: "Django Backend" },
    { id: "frontend", label: "Frontend React & UI" },
  ];

  const filteredProjects =
    selectedFilter === "all"
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary uppercase tracking-widest">
            <Code2 className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Production Projects & AI Systems
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Delve into the engineering solutions, computer vision models, and full-stack software applications I have developed.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedFilter(cat.id)}
              className={`px-4 py-2 text-xs font-mono rounded-xl transition ${
                selectedFilter === cat.id
                  ? "bg-primary text-white shadow-lg shadow-primary/25 border border-primary/50 font-semibold"
                  : "bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-[#0F172A]/80 border border-slate-800 hover:border-slate-700/80 rounded-3xl overflow-hidden backdrop-blur-xl shadow-xl flex flex-col justify-between transition duration-300 transform hover:-translate-y-1"
            >
              {/* Image Banner */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/images/newportfolio.png";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-90" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 flex space-x-2">
                  <span className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-full bg-slate-950/80 text-cyan-300 border border-cyan-800/60 backdrop-blur-md">
                    {project.category.replace("-", " ")}
                  </span>
                  {project.featured && (
                    <span className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-full bg-primary/80 text-white backdrop-blur-md flex items-center space-x-1">
                      <Sparkles className="w-3 h-3" />
                      <span>Featured</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-heading text-white group-hover:text-cyan-300 transition">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 font-medium">{project.subtitle}</p>
                  <p className="text-slate-300 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Chips */}
                <div className="space-y-3 pt-3 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-900 text-slate-400 border border-slate-800">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center space-x-1.5 text-xs font-medium font-mono text-primary hover:text-cyan-300 transition"
                    >
                      <span>Deep Dive & Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center space-x-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
