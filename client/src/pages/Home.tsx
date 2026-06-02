import { useState } from "react";
import { 
  Calendar, 
  MapPin, 
  Mail, 
  ExternalLink, 
  ArrowRight, 
  Layers, 
  Compass, 
  Cpu, 
  ShieldAlert, 
  HelpCircle,
  Clock,
  CheckCircle2,
  ChevronDown,
  User,
  BookOpen,
  CalendarDays
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  KEYNOTE_SPEAKERS, 
  PANEL_SPEAKERS, 
  ORGANIZERS, 
  SCHEDULE
} from "@/const";

export default function Home() {
  const [expandedSpeaker, setExpandedSpeaker] = useState<string | null>(null);

  const toggleSpeakerBio = (name: string) => {
    if (expandedSpeaker === name) {
      setExpandedSpeaker(null);
    } else {
      setExpandedSpeaker(name);
    }
  };

  const topics = [
    { title: "Agentic AI for Geospatial Reasoning", icon: <Cpu className="w-5 h-5 text-sky-600" /> },
    { title: "Reinforcement Fine-Tuning for Remote Sensing MLLMs", icon: <Layers className="w-5 h-5 text-sky-600" /> },
    { title: "Tool-Augmented Geospatial AI Agents", icon: <Compass className="w-5 h-5 text-sky-600" /> },
    { title: "World Models & Simulation-Based Reasoning", icon: <Cpu className="w-5 h-5 text-sky-600" /> },
    { title: "Foundation Models for Earth Observation", icon: <Layers className="w-5 h-5 text-sky-600" /> },
    { title: "Multi-Agent Satellite/UAV Coordination", icon: <Compass className="w-5 h-5 text-sky-600" /> },
    { title: "Safety, Trustworthiness & Interpretability", icon: <ShieldAlert className="w-5 h-5 text-sky-600" /> },
    { title: "Benchmarking Geospatial Reasoning Agents", icon: <HelpCircle className="w-5 h-5 text-sky-600" /> }
  ];

  return (
    <div className="min-h-screen bg-[#fafaf9] flex flex-col selection:bg-sky-100 selection:text-sky-900 scroll-smooth">
      
      {/* HEADER HERO BANNER */}
      <header className="relative bg-slate-950 text-white overflow-hidden py-20 md:py-28 border-b border-slate-800">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663493919263/9DrfZuSabAu7vok4PSS7EX/hero_earth_observation-4TP4ax6M6MMDxZkRg3XKr7.webp" 
            alt="Earth Observation Satellite View" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent"></div>
        </div>

        <div className="container relative z-10 max-w-6xl">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-300 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
              NeurIPS 2026 Workshop Proposal
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold tracking-tight leading-tight">
              Agentic AI for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-300">
                Earth Observation
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed">
              Bridging foundation models, reasoning, and autonomous decision-making for planetary intelligence.
            </p>

            <div className="flex flex-wrap gap-6 text-sm text-slate-300 pt-2">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-sky-400" />
                <span>December 12, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-sky-400" />
                <span>Sydney or Paris (Preference)</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* STICKY QUICK NAVIGATION BAR */}
      <section className="bg-white border-b border-slate-200/80 py-4 sticky top-0 z-50 shadow-sm backdrop-blur-md bg-white/95">
        <div className="container max-w-6xl flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Section Jump Links */}
          <div className="flex gap-1 md:gap-2 w-full md:w-auto overflow-x-auto scrollbar-none py-1">
            <a href="#overview" className="px-3 py-1.5 text-xs md:text-sm font-medium text-slate-600 hover:text-slate-900 rounded-md hover:bg-slate-50 transition-all">Overview</a>
            <a href="#schedule" className="px-3 py-1.5 text-xs md:text-sm font-medium text-slate-600 hover:text-slate-900 rounded-md hover:bg-slate-50 transition-all">Schedule</a>
            <a href="#speakers" className="px-3 py-1.5 text-xs md:text-sm font-medium text-slate-600 hover:text-slate-900 rounded-md hover:bg-slate-50 transition-all">Speakers</a>
            <a href="#cfp" className="px-3 py-1.5 text-xs md:text-sm font-medium text-slate-600 hover:text-slate-900 rounded-md hover:bg-slate-50 transition-all">Call for Papers</a>
            <a href="#organizers" className="px-3 py-1.5 text-xs md:text-sm font-medium text-slate-600 hover:text-slate-900 rounded-md hover:bg-slate-50 transition-all">Organizers</a>
          </div>

          {/* Quick CTAs */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <Button variant="outline" size="sm" className="text-slate-700 border-slate-300" asChild>
              <a href="#organizers">
                Contact
              </a>
            </Button>
            <Button size="sm" className="bg-sky-700 hover:bg-sky-800 text-white font-medium" asChild>
              <a href="#cfp">
                Submit Paper <ArrowRight className="ml-1.5 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* MAIN SINGLE PAGE LAYOUT */}
      <main className="container max-w-6xl py-12 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT SIDEBAR: Quick Info Panel */}
          <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-24 h-fit">
            
            {/* Quick Summary Box */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-6">
              <h3 className="text-lg font-serif font-semibold text-slate-900 border-b border-slate-100 pb-3">
                Workshop Details
              </h3>
              
              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-start gap-4">
                  <span className="text-slate-500 font-medium">Conference</span>
                  <span className="text-slate-900 text-right font-semibold">NeurIPS 2026 Proposal</span>
                </div>
                <div className="flex justify-between items-start gap-4">
                  <span className="text-slate-500 font-medium">Date</span>
                  <span className="text-slate-900 text-right font-semibold">Dec 12, 2026</span>
                </div>
                <div className="flex justify-between items-start gap-4">
                  <span className="text-slate-500 font-medium">Location</span>
                  <span className="text-slate-900 text-right">Sydney / Paris</span>
                </div>
                <div className="flex justify-between items-start gap-4">
                  <span className="text-slate-500 font-medium">Submission Deadline</span>
                  <span className="text-amber-700 font-semibold text-right">TBA (Sept 2026)</span>
                </div>
                <div className="flex justify-between items-start gap-4">
                  <span className="text-slate-500 font-medium">Review Process</span>
                  <span className="text-slate-900 text-right">Double-blind peer review</span>
                </div>
              </div>

              <div className="pt-2">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 text-xs text-slate-600 leading-relaxed">
                  <strong>Note:</strong> This workshop is motivated by the convergence of agentic AI and Earth sciences, aiming to build general-purpose geospatial agents.
                </div>
              </div>
            </div>

            {/* Visual Callout */}
            <div className="bg-sky-950 text-white rounded-xl overflow-hidden shadow-md relative">
              <div className="absolute inset-0 opacity-20">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663493919263/9DrfZuSabAu7vok4PSS7EX/geospatial_agent_illustration-hn6CUes4fhiQYXPDagMWZx.webp" 
                  alt="Geospatial AI Diagram" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 relative z-10 space-y-4">
                <Badge className="bg-sky-500/20 text-sky-300 border-none">Focus Theme</Badge>
                <h4 className="text-xl font-serif font-medium">Toward General-Purpose Geospatial AI Agents</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Moving beyond static perception tasks (segmentation, detection) toward active reasoning, planning, tool-use, and sequential decision-making in complex Earth systems.
                </p>
              </div>
            </div>
          </aside>

          {/* RIGHT CONTENT: Single-Page Continuous Flow */}
          <div className="lg:col-span-8 space-y-20">
            
            {/* SECTION 1: OVERVIEW */}
            <section id="overview" className="space-y-10 scroll-mt-24">
              
              {/* Workshop Summary */}
              <div className="space-y-4">
                <h2 className="text-3xl font-serif font-semibold text-slate-900 border-b border-slate-100 pb-3">
                  Workshop Summary
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-4 font-light">
                  <p>
                    Recent breakthroughs in foundation models, multimodal large language models (MLLMs), reinforcement learning (RL), and AI agents are rapidly transforming artificial intelligence from passive perception systems into reasoning- and action-oriented agents capable of planning, tool use, and sequential decision-making. At the same time, Earth observation (EO) is entering a new era driven by unprecedented volumes of multimodal geospatial data, including satellite imagery, SAR, hyperspectral observations, LiDAR, climate simulations, and large-scale geospatial knowledge bases.
                  </p>
                  <p>
                    These developments create a timely opportunity to rethink EO not merely as an image understanding problem, but as a domain for building intelligent agents that can perceive, reason, interact, and make decisions within complex Earth systems.
                  </p>
                  <p>
                    Despite rapid progress in geospatial foundation models and remote sensing MLLMs, most existing EO research remains centered on static perception tasks such as classification, segmentation, captioning, and detection. However, many real-world environmental and societal applications—including disaster response, climate adaptation, environmental monitoring, autonomous sensing, urban planning, and scientific discovery—fundamentally require adaptive reasoning, active information acquisition, long-horizon planning, uncertainty-aware decision-making, and iterative interaction with external tools and simulators.
                  </p>
                </div>
              </div>

              {/* Why This Workshop? */}
              <div className="space-y-6 bg-slate-50 p-6 md:p-8 rounded-xl border border-slate-100">
                <h3 className="text-xl font-serif font-semibold text-slate-900">
                  Distinguishing Factors
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm font-light">
                  This workshop is among the first at NeurIPS to focus on Agentic AI for Earth Observation, bringing together researchers from machine learning, computer vision, remote sensing, and environmental sciences. Unlike existing venues (such as ML4RS at ICLR or EarthVision at CVPR) that center on perception-only EO models, it emphasizes AI systems capable of reasoning, planning, interaction, and sequential decision-making in complex Earth environments.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-slate-800">Reasoning over Perception</h4>
                      <p className="text-xs text-slate-500">Shifting focus from static classification to dynamic reasoning and active sensing.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-slate-800">Interdisciplinary Synergy</h4>
                      <p className="text-xs text-slate-500">Connecting frontier machine learning with Earth science and remote sensing experts.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Focus Topics */}
              <div className="space-y-6">
                <h3 className="text-xl font-serif font-semibold text-slate-900">
                  Core Topics of Interest
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {topics.map((topic, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                      <div className="p-2 bg-sky-50 rounded-md">
                        {topic.icon}
                      </div>
                      <span className="text-sm font-medium text-slate-700">{topic.title}</span>
                    </div>
                  ))}
                </div>
              </div>

            </section>

            {/* SECTION 2: SCHEDULE */}
            <section id="schedule" className="space-y-8 scroll-mt-24">
              <div className="space-y-2">
                <h2 className="text-3xl font-serif font-semibold text-slate-900 border-b border-slate-100 pb-3">
                  Tentative Schedule
                </h2>
                <p className="text-slate-500 text-sm font-light">
                  December 12, 2026 — All times are listed in local conference time.
                </p>
              </div>

              {/* Timeline Component */}
              <div className="relative border-l border-slate-200 pl-6 ml-4 space-y-8">
                {SCHEDULE.map((item, idx) => (
                  <div key={idx} className="relative">
                    {/* Timeline Dot */}
                    <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-sky-600 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-600"></span>
                    </span>
                    
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                          {item.time}
                        </span>
                        <h4 className="text-base font-semibold text-slate-800">
                          {item.activity}
                        </h4>
                      </div>
                      {item.details && (
                        <p className="text-sm text-slate-500 font-light max-w-2xl whitespace-pre-line">
                          {item.details}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 3: SPEAKERS */}
            <section id="speakers" className="space-y-12 scroll-mt-24">
              
              {/* Keynote Speakers */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-serif font-semibold text-slate-900 border-b border-slate-100 pb-3">
                    Keynote Speakers
                  </h2>
                  <p className="text-slate-500 text-sm font-light">
                    Pioneering researchers spanning machine learning, computer vision, and Earth sciences.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {KEYNOTE_SPEAKERS.map((speaker, idx) => (
                    <Card key={idx} className="overflow-hidden border-slate-200 hover:border-sky-300/80 transition-all duration-300 bg-white shadow-sm">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-start gap-6">
                          
                          {/* Avatar Image or Initial Placeholder */}
                          {speaker.avatar ? (
                            <img 
                              src={speaker.avatar} 
                              alt={speaker.name} 
                              className="w-20 h-20 rounded-full object-cover border border-slate-200 shrink-0"
                            />
                          ) : (
                            <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-serif font-semibold text-2xl shrink-0 border border-slate-200">
                              {speaker.name.split(' ').map(n => n[0]).join('')}
                            </div>
                          )}

                          {/* Info */}
                          <div className="space-y-3 flex-grow">
                            <div className="space-y-1">
                              <div className="flex flex-wrap items-center gap-2">
                                <h3 className="text-lg font-serif font-semibold text-slate-900">
                                  {speaker.name}
                                </h3>
                                <Badge className="bg-teal-50 text-teal-700 border-teal-200 text-xs hover:bg-teal-50">
                                  {speaker.status.split(' ')[0]}
                                </Badge>
                              </div>
                              <p className="text-sm font-medium text-slate-700">
                                {speaker.role} — <span className="text-slate-500">{speaker.affiliation}</span>
                              </p>
                              <p className="text-xs text-slate-400 italic">
                                {speaker.status}
                              </p>
                            </div>

                            {/* Expandable Bio */}
                            <div className="text-sm text-slate-600 leading-relaxed font-light">
                              <p className={expandedSpeaker === speaker.name ? "" : "line-clamp-2"}>
                                {speaker.bio}
                              </p>
                              <button 
                                onClick={() => toggleSpeakerBio(speaker.name)}
                                className="inline-flex items-center gap-1 text-xs text-sky-600 font-medium mt-2 hover:text-sky-800 transition-colors"
                              >
                                {expandedSpeaker === speaker.name ? "Read Less" : "Read Full Bio"} 
                                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${expandedSpeaker === speaker.name ? "rotate-180" : ""}`} />
                              </button>
                            </div>
                          </div>

                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Panel Speakers */}
              <div className="space-y-6 pt-6 border-t border-slate-200">
                <div className="space-y-1">
                  <h3 className="text-xl font-serif font-semibold text-slate-900">
                    Panel Speakers
                  </h3>
                  <p className="text-slate-500 text-sm font-light">
                    Panel Theme: <strong className="font-semibold text-slate-700">“Toward General-Purpose Geospatial AI Agents”</strong>
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {PANEL_SPEAKERS.map((speaker, idx) => (
                    <Card key={idx} className="overflow-hidden border-slate-200 bg-white shadow-sm">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-start gap-6">
                          {speaker.avatar ? (
                            <img 
                              src={speaker.avatar} 
                              alt={speaker.name} 
                              className="w-20 h-20 rounded-full object-cover border border-slate-200 shrink-0"
                            />
                          ) : (
                            <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-serif font-semibold text-2xl shrink-0 border border-slate-200">
                              {speaker.name.split(' ').map(n => n[0]).join('')}
                            </div>
                          )}
                          <div className="space-y-2 flex-grow">
                            <div className="space-y-1">
                              <h4 className="text-base font-serif font-semibold text-slate-900">
                                {speaker.name}
                              </h4>
                              <p className="text-sm font-medium text-slate-700">
                                {speaker.role} — <span className="text-slate-500">{speaker.affiliation}</span>
                              </p>
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed font-light">
                              {speaker.bio}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

            </section>

            {/* SECTION 4: CALL FOR PAPERS */}
            <section id="cfp" className="space-y-8 scroll-mt-24">
              <div className="space-y-2">
                <h2 className="text-3xl font-serif font-semibold text-slate-900 border-b border-slate-100 pb-3">
                  Call for Papers
                </h2>
                <p className="text-slate-500 text-sm font-light">
                  We invite submissions on next-generation agentic AI, reasoning systems, and foundation models for Earth observation.
                </p>
              </div>

              {/* Important Dates */}
              <div className="bg-amber-50/50 border border-amber-200 rounded-xl p-6 space-y-4">
                <h3 className="text-base font-semibold text-amber-900 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-amber-700" />
                  Tentative Key Dates (NeurIPS Timeline)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="space-y-1">
                    <span className="text-xs text-amber-700 uppercase font-semibold">Submission Deadline</span>
                    <p className="font-semibold text-slate-900">September 2026 (TBA)</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs text-amber-700 uppercase font-semibold">Notification</span>
                    <p className="font-semibold text-slate-900">October 2026 (TBA)</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs text-amber-700 uppercase font-semibold">Camera Ready</span>
                    <p className="font-semibold text-slate-900">November 2026 (TBA)</p>
                  </div>
                </div>
              </div>

              {/* Submission Guidelines */}
              <div className="space-y-4 text-slate-600 font-light leading-relaxed">
                <h3 className="text-lg font-serif font-semibold text-slate-900">
                  Submission Guidelines
                </h3>
                <p>
                  We welcome both full research papers and short/work-in-progress papers. Submissions should be formatted using the NeurIPS style files.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li><strong>Full Papers:</strong> Up to 8 pages (excluding references and appendices).</li>
                  <li><strong>Short Papers / Extended Abstracts:</strong> Up to 4 pages (excluding references).</li>
                  <li>All submissions must be anonymous and will undergo double-blind peer review.</li>
                  <li>Accepted papers will be presented as posters or selected for oral presentations.</li>
                </ul>
              </div>

              {/* Call to Action */}
              <div className="pt-2">
                <Button className="bg-sky-700 hover:bg-sky-800 text-white font-medium px-6 py-5 rounded-lg">
                  Open Submission Portal (Coming Soon)
                </Button>
              </div>
            </section>

            {/* SECTION 5: ORGANIZERS */}
            <section id="organizers" className="space-y-8 scroll-mt-24 pt-12 border-t border-slate-200">
              <div className="space-y-2">
                <h2 className="text-3xl font-serif font-semibold text-slate-900 border-b border-slate-100 pb-3">
                  Workshop Organizers
                </h2>
                <p className="text-slate-500 text-sm font-light">
                  An international team of leading researchers bridging remote sensing and artificial intelligence.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ORGANIZERS.map((org, idx) => (
                  <Card key={idx} className="border-slate-200 hover:border-slate-300 transition-all bg-white flex flex-col justify-between shadow-sm">
                    <CardContent className="p-6 space-y-4">
                      
                      <div className="flex items-start gap-4">
                        {/* Organizer Avatar */}
                        {org.avatar ? (
                          <img 
                            src={org.avatar} 
                            alt={org.name} 
                            className="w-14 h-14 rounded-full object-cover border border-slate-200 shrink-0"
                          />
                        ) : (
                          <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-serif font-semibold text-lg shrink-0 border border-slate-200">
                            {org.name.split(' ').map(n => n[0]).join('')}
                          </div>
                        )}
                        
                        <div className="space-y-1">
                          <h3 className="text-base font-serif font-semibold text-slate-900">
                            {org.name}
                          </h3>
                          <p className="text-xs text-sky-700 font-medium">
                            {org.affiliation}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-xs text-slate-500 leading-relaxed font-light line-clamp-4">
                        {org.bio}
                      </p>

                      <div className="flex gap-4 pt-2 text-xs border-t border-slate-100">
                        <a 
                          href={`mailto:${org.email}`} 
                          className="inline-flex items-center gap-1 text-slate-600 hover:text-sky-700 font-medium transition-colors"
                        >
                          <Mail className="w-3.5 h-3.5" /> Email
                        </a>
                        <a 
                          href={org.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center gap-1 text-slate-600 hover:text-sky-700 font-medium transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" /> Website
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 mt-24">
        <div className="container max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-sm font-semibold text-white font-serif">
              Agentic AI for Earth Observation
            </p>
            <p className="text-xs text-slate-500">
              Proposed Workshop for NeurIPS 2026.
            </p>
          </div>
          
          <div className="flex gap-6 text-xs">
            <a href="#overview" className="hover:text-white transition-colors">Overview</a>
            <a href="#schedule" className="hover:text-white transition-colors">Schedule</a>
            <a href="#speakers" className="hover:text-white transition-colors">Speakers</a>
            <a href="#cfp" className="hover:text-white transition-colors">Call for Papers</a>
            <a href="#organizers" className="hover:text-white transition-colors">Organizers</a>
          </div>

          <div className="text-xs text-slate-500 text-center md:text-right">
            © 2026 Agentic AI EO Workshop. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
