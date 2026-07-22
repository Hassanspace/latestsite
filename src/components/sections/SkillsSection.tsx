"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Cpu, Sparkles, Code, Terminal, Layers } from "lucide-react";

export const SkillsSection: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("all");

  const categories = PORTFOLIO_DATA.skillCategories;

  const activeCategories =
    selectedCategoryId === "all"
      ? categories
      : categories.filter((c) => c.id === selectedCategoryId);

  return (
    <section id="skills" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-xs font-mono text-cyan-400 uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Skills & Tech Stack Matrix
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Delve into the tools, frameworks, and deep learning libraries that empower my software development.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategoryId("all")}
            className={`px-4 py-2 text-xs font-mono rounded-xl transition ${
              selectedCategoryId === "all"
                ? "bg-primary text-white shadow-lg shadow-primary/25 border border-primary/50 font-semibold"
                : "bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            All Skill Domains
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategoryId(cat.id)}
              className={`px-4 py-2 text-xs font-mono rounded-xl transition ${
                selectedCategoryId === cat.id
                  ? "bg-primary text-white shadow-lg shadow-primary/25 border border-primary/50 font-semibold"
                  : "bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Category Cards Grid */}
        <div className="space-y-10">
          {activeCategories.map((category) => (
            <div
              key={category.id}
              className="bg-[#0F172A]/70 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl space-y-6"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 border-b border-slate-800/80 pb-4">
                <div className="p-2 rounded-xl bg-slate-800 text-cyan-400">
                  {category.id === "ai-ml" && <Cpu className="w-5 h-5" />}
                  {category.id === "fullstack" && <Code className="w-5 h-5" />}
                  {category.id === "tools-devops" && <Terminal className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-white">{category.title}</h3>
                  <p className="text-xs text-slate-400">{category.description}</p>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition group space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="font-heading font-semibold text-sm text-slate-200 group-hover:text-cyan-300 transition">
                          {skill.name}
                        </span>
                        {skill.badge && (
                          <span className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-primary/20 text-primary border border-primary/30">
                            {skill.badge}
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-mono text-slate-400">{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary via-cyan-400 to-accent rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>

                    <p className="text-xs text-slate-400 leading-snug">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
