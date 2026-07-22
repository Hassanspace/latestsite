"use client";

import React, { useEffect, useState } from "react";
import { 
  Search, 
  FileText, 
  Github, 
  Linkedin, 
  Mail, 
  Code, 
  User, 
  Cpu, 
  Briefcase, 
  GraduationCap, 
  X, 
  ArrowRight,
  ExternalLink,
  Sparkles
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenProjectModal?: (projectId: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenProjectModal,
}) => {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // parent handles toggle
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleNavigate = (id: string) => {
    onClose();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const commands = [
    {
      group: "Navigation",
      items: [
        { label: "Go to About Me", icon: User, action: () => handleNavigate("about") },
        { label: "Go to Categorized Skills", icon: Cpu, action: () => handleNavigate("skills") },
        { label: "Go to Featured Projects", icon: Code, action: () => handleNavigate("projects") },
        { label: "Go to Work Experience", icon: Briefcase, action: () => handleNavigate("experience") },
        { label: "Go to Education", icon: GraduationCap, action: () => handleNavigate("education") },
        { label: "Go to Contact", icon: Mail, action: () => handleNavigate("contact") },
      ],
    },
    {
      group: "Recruiter Shortcuts",
      items: [
        {
          label: "Review Resume (Google Drive PDF)",
          icon: FileText,
          action: () => {
            window.open(PORTFOLIO_DATA.personal.resumeUrl, "_blank");
            onClose();
          },
        },
        {
          label: `Copy Email (${PORTFOLIO_DATA.personal.email})`,
          icon: Mail,
          action: handleCopyEmail,
        },
        {
          label: "Open GitHub Profile (@Hassanspace)",
          icon: Github,
          action: () => {
            window.open(PORTFOLIO_DATA.personal.socials.github, "_blank");
            onClose();
          },
        },
        {
          label: "Open LinkedIn Profile",
          icon: Linkedin,
          action: () => {
            window.open(PORTFOLIO_DATA.personal.socials.linkedin, "_blank");
            onClose();
          },
        },
      ],
    },
    {
      group: "Featured Case Studies",
      items: PORTFOLIO_DATA.projects.slice(0, 4).map((p) => ({
        label: `View Case Study: ${p.title}`,
        icon: Sparkles,
        action: () => {
          onClose();
          if (onOpenProjectModal) onOpenProjectModal(p.id);
          else handleNavigate("projects");
        },
      })),
    },
  ];

  const filteredCommands = commands
    .map((group) => ({
      ...group,
      items: group.items.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase())
      ),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0F172A] border border-slate-700/60 rounded-2xl shadow-2xl overflow-hidden text-slate-200">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-slate-900/60">
          <Search className="w-5 h-5 text-primary mr-3 shrink-0" />
          <input
            type="text"
            placeholder="Type a command or search section..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent border-none text-slate-100 placeholder-slate-400 focus:outline-none text-base font-sans"
          />
          {copied ? (
            <span className="text-xs text-cyan-400 px-2 py-1 rounded bg-cyan-950 border border-cyan-800 mr-2 shrink-0">
              Copied!
            </span>
          ) : null}
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Command list */}
        <div className="max-h-96 overflow-y-auto p-3 space-y-4 font-sans scrollbar-thin">
          {filteredCommands.length === 0 ? (
            <div className="py-8 text-center text-slate-400 text-sm">
              No matching commands found for &quot;{query}&quot;
            </div>
          ) : (
            filteredCommands.map((group, idx) => (
              <div key={idx}>
                <div className="px-3 text-xs font-mono font-semibold tracking-wider text-slate-400 uppercase mb-2">
                  {group.group}
                </div>
                <div className="space-y-1">
                  {group.items.map((item, itemIdx) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={itemIdx}
                        onClick={item.action}
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-primary/10 hover:text-primary transition group text-left text-sm"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="p-1.5 rounded-lg bg-slate-800/80 group-hover:bg-primary/20 text-slate-300 group-hover:text-primary transition">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="font-medium">{item.label}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition transform group-hover:translate-x-1" />
                      </button>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer shortcuts indicator */}
        <div className="px-4 py-2.5 bg-slate-950/80 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>Navigate with mouse or click command</span>
          <div className="flex items-center space-x-2">
            <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-[10px]">ESC</kbd>
            <span>to close</span>
          </div>
        </div>
      </div>
    </div>
  );
};
