"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, Award } from "lucide-react";

export const ExperienceEducationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");

  return (
    <section id="experience" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-xs font-mono text-cyan-400 uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" />
            <span>Track Record & Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Experience & Education Journey
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Discover my professional career path, software engineering contributions, and academic background.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-12">
          <div className="p-1.5 rounded-2xl bg-slate-900 border border-slate-800 flex space-x-2">
            <button
              onClick={() => setActiveTab("experience")}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-xl text-xs font-mono font-medium transition ${
                activeTab === "experience"
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Work & Projects Experience ({PORTFOLIO_DATA.experience.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("education")}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-xl text-xs font-mono font-medium transition ${
                activeTab === "education"
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Education ({PORTFOLIO_DATA.education.length})</span>
            </button>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {activeTab === "experience" && (
            <div className="space-y-6">
              {PORTFOLIO_DATA.experience.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#0F172A]/80 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl space-y-4 shadow-lg hover:border-slate-700 transition"
                >
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-start justify-between gap-2 border-b border-slate-800 pb-4">
                    <div>
                      <h3 className="text-xl font-bold font-heading text-white">{item.role}</h3>
                      <p className="text-sm font-mono text-cyan-400 font-medium">{item.company}</p>
                    </div>

                    <div className="space-y-1 text-right sm:text-right text-xs font-mono text-slate-400">
                      <div className="flex items-center space-x-1.5 sm:justify-end text-emerald-400">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center space-x-1.5 sm:justify-end">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Key Impact & Responsibilities
                    </h4>
                    <div className="space-y-2">
                      {item.highlights.map((hl, idx) => (
                        <div key={idx} className="flex items-start space-x-2.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="pt-3 flex flex-wrap gap-2">
                    {item.skills.map((s, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "education" && (
            <div className="space-y-6">
              {PORTFOLIO_DATA.education.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#0F172A]/80 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl space-y-4 shadow-lg hover:border-slate-700 transition"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 border-b border-slate-800 pb-4">
                    <div>
                      <h3 className="text-xl font-bold font-heading text-white">{item.degree}</h3>
                      <p className="text-sm font-mono text-cyan-400 font-medium">{item.institution}</p>
                    </div>

                    <div className="space-y-1 text-right text-xs font-mono text-slate-400">
                      <div className="flex items-center space-x-1.5 sm:justify-end text-emerald-400">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center space-x-1.5 sm:justify-end">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">{item.details}</p>

                  {/* Courses */}
                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Relevant Coursework
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.courses.map((course, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-900 text-cyan-300 border border-slate-800"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Academic Accomplishments
                    </h4>
                    <div className="space-y-1.5">
                      {item.highlights.map((hl, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-xs text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
