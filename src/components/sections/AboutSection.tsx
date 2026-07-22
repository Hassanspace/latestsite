"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Brain, Layers, Cpu, Globe, Rocket, CheckCircle } from "lucide-react";

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Brain,
      title: "AI & Computer Vision Engineering",
      description:
        "Building end-to-end vision pipelines—from raw dataset preprocessing, spatial annotations, and augmentations to custom YOLO and PyTorch model training and optimization.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Layers,
      title: "Full-Stack Web Architecture",
      description:
        "Designing robust Django REST and FastAPI microservices backed by relational databases (PostgreSQL, MySQL), seamlessly paired with responsive React and Next.js interfaces.",
      color: "from-cyan-500 to-emerald-500",
    },
    {
      icon: Cpu,
      title: "Edge & Cloud Deployment",
      description:
        "Packaging deep learning models and web services into lightweight Docker containers and deploying production-ready APIs to cloud infrastructure.",
      color: "from-purple-500 to-blue-500",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary uppercase tracking-widest">
            <Rocket className="w-3.5 h-3.5" />
            <span>Engineering & Vision</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            About My Engineering Journey
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Bridging the gap between cutting-edge Artificial Intelligence and intuitive, enterprise-ready web applications.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Bio Card */}
          <div className="lg:col-span-7 bg-[#0F172A]/80 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-heading text-white">
                Who I Am & What I Build
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                I am a dedicated **AI & Full Stack Software Engineer** specializing in computer vision, deep learning, and robust web applications. My expertise spans constructing custom object detection frameworks, automated automated image processing workflows, and high-concurrency backend services.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Whether creating intelligent surveillance applications, custom gesture recognition models, or full-blown SaaS platforms with Next.js and Django, I focus on clean code architecture, performance optimization, and intuitive user experiences.
              </p>
            </div>

            {/* Bullet Highlights */}
            <div className="grid sm:grid-cols-2 gap-3 pt-4 border-t border-slate-800/80">
              {[
                "Computer Vision & Deep Learning",
                "Full Stack Web Development",
                "Django REST & FastAPI Specialist",
                "Next.js & React 19 Architect",
                "Model Preprocessing & Annotations",
                "Clean Code & Unit Testing",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs font-mono text-slate-300">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Side Info & Social Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0F172A] to-slate-900 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl flex flex-col justify-between space-y-6">
            <div>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
                Quick Facts & Contact
              </div>
              <h3 className="text-xl font-bold font-heading text-white">Hassan Rasool</h3>
              <p className="text-xs text-slate-400 mt-1">{PORTFOLIO_DATA.personal.shortBio}</p>

              <div className="mt-6 space-y-3 text-xs font-mono text-slate-300">
                <div className="flex justify-between py-2 border-b border-slate-800">
                  <span className="text-slate-400">Email:</span>
                  <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="text-cyan-400 hover:underline">
                    {PORTFOLIO_DATA.personal.email}
                  </a>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800">
                  <span className="text-slate-400">Location:</span>
                  <span>{PORTFOLIO_DATA.personal.location}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800">
                  <span className="text-slate-400">Availability:</span>
                  <span className="text-emerald-400 font-semibold">Open for Roles & Projects</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800">
                  <span className="text-slate-400">GitHub:</span>
                  <a href={PORTFOLIO_DATA.personal.socials.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    @Hassanspace
                  </a>
                </div>
              </div>
            </div>

            <a
              href={PORTFOLIO_DATA.personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs border border-slate-700 transition"
            >
              Connect on LinkedIn
            </a>
          </div>

        </div>

        {/* 3 Engineering Pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0F172A]/60 border border-slate-800/80 hover:border-slate-700 transition group space-y-4"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${pillar.color} p-0.5 shadow-lg`}>
                  <div className="w-full h-full bg-[#050816] rounded-[10px] flex items-center justify-center text-white">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <h4 className="text-lg font-bold font-heading text-white group-hover:text-cyan-300 transition">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
