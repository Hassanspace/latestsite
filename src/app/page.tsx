"use client";

import React, { useState } from "react";
import { NeuralBackground } from "@/components/shared/NeuralBackground";
import { ScrollProgress } from "@/components/shared/ScrollProgress";
import { Navbar } from "@/components/shared/Navbar";
import { CommandPalette } from "@/components/shared/CommandPalette";
import { ProjectModal } from "@/components/shared/ProjectModal";

import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceEducationSection } from "@/components/sections/ExperienceEducationSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FooterSection } from "@/components/sections/FooterSection";

import { Project, PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Home() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenProjectById = (projectId: string) => {
    const found = PORTFOLIO_DATA.projects.find((p) => p.id === projectId);
    if (found) {
      setSelectedProject(found);
    }
  };

  return (
    <main className="relative min-h-screen bg-[#050816] text-slate-100 overflow-x-hidden selection:bg-primary/30 selection:text-cyan-200">
      {/* Background Neural Canvas */}
      <NeuralBackground />

      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Sticky Header Navbar */}
      <Navbar onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />

      {/* Command Palette Modal (⌘K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenProjectModal={handleOpenProjectById}
      />

      {/* Project Case Study Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Main Page Sections */}
      <div className="relative z-10 space-y-12">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
        <ExperienceEducationSection />
        <ContactSection />
        <FooterSection />
      </div>
    </main>
  );
}
