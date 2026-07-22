"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Mail, Send, CheckCircle2, MessageSquare, Github, Linkedin, Instagram, PhoneCall, Copy } from "lucide-react";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary uppercase tracking-widest">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Let&apos;s Connect & Collaborate
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Have a project in mind, an AI opportunity, or technical inquiry? Reach out directly via the form or email below.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="bg-[#0F172A]/80 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-2xl bg-primary/20 text-primary border border-primary/30">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-heading text-white">Direct Email</h3>
                  <p className="text-xs text-slate-400">Send an inquiry directly</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-xs font-mono text-cyan-300 truncate">
                  {PORTFOLIO_DATA.personal.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono transition shrink-0 ml-2"
                  title="Copy Email Address"
                >
                  {copiedEmail ? "Copied!" : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="bg-[#0F172A]/80 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl space-y-4">
              <h3 className="text-base font-bold font-heading text-white">Social Profiles & Repositories</h3>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={PORTFOLIO_DATA.personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-primary/50 text-slate-200 text-xs font-mono transition group"
                >
                  <Github className="w-4 h-4 text-primary group-hover:scale-110 transition" />
                  <span>GitHub</span>
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 text-slate-200 text-xs font-mono transition group"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/50 text-slate-200 text-xs font-mono transition group"
                >
                  <Instagram className="w-4 h-4 text-purple-400 group-hover:scale-110 transition" />
                  <span>Instagram</span>
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.socials.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 text-slate-200 text-xs font-mono transition group"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition" />
                  <span>Live Site</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#0F172A]/80 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-white">Message Sent Successfully!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you for reaching out. I will review your message and get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-primary transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-primary transition"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. AI Project Collaboration / Full-time Role"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-primary transition"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your inquiry or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-primary transition scrollbar-thin"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary via-blue-600 to-cyan-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-primary/30 transition transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
