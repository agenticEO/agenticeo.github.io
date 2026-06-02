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
  Globe
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

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-slate-100 selection:text-slate-900 scroll-smooth font-sans antialiased">
      
      {/* MINIMALIST ACADEMIC HEADER */}
      <header className="border-b border-slate-100 py-16 md:py-24 bg-slate-50/50">
        <div className="container max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 text-sky-800 text-xs font-semibold tracking-wider uppercase">
            NeurIPS 2026 Workshop Proposal
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-slate-900 leading-tight">
            Agentic AI for <br className="hidden sm:inline" />
            <span className="text-sky-800">Earth Observation</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 font-light max-w-2xl leading-relaxed">
            Bridging foundation models, reasoning, and autonomous decision-making for planetary intelligence.
          </p>

          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-500 pt-4 font-medium">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-slate-400" />
              <span>December 12, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-slate-400" />
              <span>Sydney or Paris (Preference)</span>
            </div>
          </div>
        </div>
      </header>

      {/* QUICK STICKY NAV BAR */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50 py-3">
        <div className="container max-w-4xl flex justify-between items-center">
          <div className="flex gap-1 md:gap-4 overflow-x-auto scrollbar-none">
            <a href="#about" className="px-2 py-1 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">About</a>
            <a href="#cfp" className="px-2 py-1 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Call for Papers</a>
            <a href="#schedule" className="px-2 py-1 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Schedule</a>
            <a href="#speakers" className="px-2 py-1 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Speakers</a>
            <a href="#organizers" className="px-2 py-1 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Organizers</a>
          </div>
          <Button size="sm" className="bg-sky-800 hover:bg-sky-900 text-white font-medium rounded text-xs" asChild>
            <a href="#cfp">Submit Paper</a>
          </Button>
        </div>
      </nav>

      {/* MAIN CONTENT CONTAINER */}
      <main className="container max-w-4xl py-12 space-y-20">
        
        {/* SECTION: ABOUT */}
        <section id="about" className="space-y-8 scroll-mt-20">
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-slate-900 border-b border-slate-100 pb-2">
              About the Workshop
            </h2>
            <div className="text-slate-600 leading-relaxed space-y-4 font-light text-base">
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

          {/* Key Problems Grid */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-semibold text-slate-800">
              Key Problems We Aim to Address
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="font-semibold text-slate-900 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-700"></span>
                  Agentic Geospatial Reasoning
                </h4>
                <p className="text-sm text-slate-500 font-light leading-relaxed">
                  How can we build AI systems capable of active reasoning, tool-augmented decision making, and long-horizon planning in complex Earth environments?
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-slate-900 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-700"></span>
                  Reinforcement Fine-Tuning
                </h4>
                <p className="text-sm text-slate-500 font-light leading-relaxed">
                  How can we apply reinforcement learning and fine-tuning techniques to remote sensing MLLMs to improve their interactive planning and decision capabilities?
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-slate-900 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-700"></span>
                  World Models & Simulation
                </h4>
                <p className="text-sm text-slate-500 font-light leading-relaxed">
                  How can world models and simulation environments be leveraged for training and evaluating geospatial reasoning agents?
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-slate-900 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-700"></span>
                  Safety and Trustworthiness
                </h4>
                <p className="text-sm text-slate-500 font-light leading-relaxed">
                  How can we ensure safety, trustworthiness, and interpretability in autonomous Earth observation agents?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: CALL FOR PAPERS */}
        <section id="cfp" className="space-y-8 scroll-mt-20">
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-slate-900 border-b border-slate-100 pb-2">
              Call for Papers
            </h2>
            <p className="text-slate-600 leading-relaxed font-light">
              The **Workshop on Agentic AI for Earth Observation** invites submissions from researchers at the intersection of machine learning, computer vision, remote sensing, and Earth sciences. We welcome contributions focusing on reasoning, planning, and sequential decision-making in Earth systems.
            </p>
          </div>

          {/* Key Dates Table */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-semibold text-slate-800">
              Key Dates
            </h3>
            <div className="border border-slate-100 rounded overflow-hidden">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-3.5 font-semibold text-slate-700">Paper Submission Deadline</td>
                    <td className="px-6 py-3.5 text-slate-600">September 2026 (TBA)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-3.5 font-semibold text-slate-700">Author Notification</td>
                    <td className="px-6 py-3.5 text-slate-600">October 2026 (TBA)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-3.5 font-semibold text-slate-700">Camera-Ready Deadline</td>
                    <td className="px-6 py-3.5 text-slate-600">November 2026 (TBA)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-400 italic">
              All deadlines follow the Anywhere on Earth (AoE) timezone.
            </p>
          </div>

          {/* Scope List */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-semibold text-slate-800">
              Scope & Topics
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-slate-600 font-light list-disc pl-5">
              <li>Agentic AI for geospatial reasoning and decision-making</li>
              <li>Reinforcement fine-tuning for remote sensing MLLMs</li>
              <li>Tool-augmented geospatial AI agents</li>
              <li>World models and simulation-based geospatial reasoning</li>
              <li>Foundation models for Earth Observation</li>
              <li>Multi-agent systems for satellite/UAV coordination</li>
              <li>Safety, trustworthiness, and interpretability in EO agents</li>
              <li>Benchmarking and evaluation of geospatial reasoning agents</li>
            </ul>
          </div>

          {/* Submission Guidelines */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-semibold text-slate-800">
              Submission Guidelines
            </h3>
            <div className="text-slate-600 leading-relaxed font-light text-sm space-y-3">
              <p>
                <strong>Format:</strong> All submissions must be a single PDF file formatted using the standard NeurIPS style files. We welcome high-quality original papers in the following two tracks:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs">
                <li><strong>Full Papers:</strong> Up to 8 pages (excluding references and appendices).</li>
                <li><strong>Short Papers / Extended Abstracts:</strong> Up to 4 pages (excluding references).</li>
              </ul>
              <p>
                <strong>Double-blind reviewing:</strong> All submissions must be anonymized and may not contain any identifying information that may violate the double-blind reviewing policy. This policy applies to any supplementary or linked material as well.
              </p>
              <p>
                <strong>Dual-submission and non-archival policy:</strong> The workshop is non-archival and will not have official proceedings. Ongoing and unpublished work, as well as papers currently under review, are welcome.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION: SCHEDULE */}
        <section id="schedule" className="space-y-8 scroll-mt-20">
          <div className="space-y-2">
            <h2 className="text-2xl font-serif font-bold text-slate-900 border-b border-slate-100 pb-2">
              Schedule
            </h2>
            <p className="text-slate-500 text-sm font-light">
              This is the tentative schedule of the workshop. All slots are provided in local conference time.
            </p>
          </div>

          <div className="border border-slate-100 rounded overflow-hidden shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-700 border-b border-slate-100 font-semibold">
                <tr>
                  <th className="px-6 py-3">Time</th>
                  <th className="px-6 py-3">Topic / Activity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {SCHEDULE.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 font-mono text-xs text-sky-800 whitespace-nowrap">{item.time}</td>
                    <td className="px-6 py-4">
                      <div className="font-semibold text-slate-800">{item.activity}</div>
                      {item.details && <div className="text-xs text-slate-500 font-light mt-0.5">{item.details}</div>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION: SPEAKERS */}
        <section id="speakers" className="space-y-12 scroll-mt-20">
          
          {/* Keynote Speakers */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-serif font-bold text-slate-900 border-b border-slate-100 pb-2">
                Invited Keynote Speakers
              </h2>
              <p className="text-slate-500 text-sm font-light">
                Pioneering researchers spanning machine learning, computer vision, and Earth sciences.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {KEYNOTE_SPEAKERS.map((speaker, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row gap-6 p-4 border border-slate-100 rounded-lg hover:border-slate-200 transition-all">
                  
                  {/* Portrait */}
                  {speaker.avatar ? (
                    <img 
                      src={speaker.avatar} 
                      alt={speaker.name} 
                      className="w-20 h-20 rounded-full object-cover border border-slate-100 shrink-0 mx-auto sm:mx-0"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 font-serif font-semibold text-xl shrink-0 border border-slate-100 mx-auto sm:mx-0">
                      {speaker.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}

                  {/* Details */}
                  <div className="space-y-2 flex-grow text-center sm:text-left">
                    <div className="space-y-0.5">
                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                        <h3 className="text-lg font-serif font-bold text-slate-900">
                          {speaker.name}
                        </h3>
                        <Badge className="bg-slate-50 text-slate-600 border-slate-200 text-[10px] uppercase tracking-wider font-semibold hover:bg-slate-100">
                          {speaker.status.split(' ')[0]}
                        </Badge>
                      </div>
                      <p className="text-sm font-medium text-slate-700">
                        {speaker.role} — <span className="text-slate-500">{speaker.affiliation}</span>
                      </p>
                    </div>

                    <div className="text-xs text-slate-500 leading-relaxed font-light">
                      <p className={expandedSpeaker === speaker.name ? "" : "line-clamp-2"}>
                        {speaker.bio}
                      </p>
                      <button 
                        onClick={() => toggleSpeakerBio(speaker.name)}
                        className="inline-flex items-center gap-1 text-sky-800 font-medium mt-1 hover:text-sky-950 transition-colors"
                      >
                        {expandedSpeaker === speaker.name ? "Read Less" : "Read Full Bio"} 
                        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${expandedSpeaker === speaker.name ? "rotate-180" : ""}`} />
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Panel Speakers */}
          <div className="space-y-6 pt-6 border-t border-slate-100">
            <div className="space-y-1">
              <h3 className="text-xl font-serif font-bold text-slate-900">
                Panel Speakers
              </h3>
              <p className="text-slate-500 text-sm font-light">
                Panel Theme: <strong className="font-semibold text-slate-700">“Toward General-Purpose Geospatial AI Agents”</strong>
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {PANEL_SPEAKERS.map((speaker, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row gap-6 p-4 border border-slate-100 rounded-lg">
                  {speaker.avatar ? (
                    <img 
                      src={speaker.avatar} 
                      alt={speaker.name} 
                      className="w-20 h-20 rounded-full object-cover border border-slate-100 shrink-0 mx-auto sm:mx-0"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 font-serif font-semibold text-xl shrink-0 border border-slate-100 mx-auto sm:mx-0">
                      {speaker.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                  <div className="space-y-1 flex-grow text-center sm:text-left">
                    <h4 className="text-base font-serif font-bold text-slate-900">
                      {speaker.name}
                    </h4>
                    <p className="text-sm font-medium text-slate-700">
                      {speaker.role} — <span className="text-slate-500">{speaker.affiliation}</span>
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed font-light pt-1">
                      {speaker.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* SECTION: ORGANIZERS */}
        <section id="organizers" className="space-y-8 scroll-mt-20 pt-12 border-t border-slate-100">
          <div className="space-y-2">
            <h2 className="text-2xl font-serif font-bold text-slate-900 border-b border-slate-100 pb-2">
              Workshop Organizers
            </h2>
            <p className="text-slate-500 text-sm font-light">
              An international team of leading researchers bridging remote sensing and artificial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ORGANIZERS.map((org, idx) => (
              <div key={idx} className="flex gap-4 p-4 border border-slate-100 rounded-lg bg-slate-50/30">
                {/* Avatar */}
                {org.avatar ? (
                  <img 
                    src={org.avatar} 
                    alt={org.name} 
                    className="w-12 h-12 rounded-full object-cover border border-slate-100 shrink-0"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-serif font-semibold text-sm shrink-0 border border-slate-100">
                    {org.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
                
                <div className="space-y-2 flex-grow">
                  <div className="space-y-0.5">
                    <h3 className="text-sm font-bold text-slate-900">
                      {org.name}
                    </h3>
                    <p className="text-xs text-sky-800 font-medium">
                      {org.affiliation}
                    </p>
                  </div>
                  
                  <p className="text-[11px] text-slate-500 leading-relaxed font-light line-clamp-3">
                    {org.bio}
                  </p>

                  <div className="flex gap-3 pt-1 text-[11px] font-medium border-t border-slate-100/60">
                    <a 
                      href={`mailto:${org.email}`} 
                      className="inline-flex items-center gap-1 text-slate-500 hover:text-sky-800 transition-colors"
                    >
                      <Mail className="w-3 h-3" /> Email
                    </a>
                    <a 
                      href={org.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-1 text-slate-500 hover:text-sky-800 transition-colors"
                    >
                      <Globe className="w-3 h-3" /> Website
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-slate-50 text-slate-500 py-12 border-t border-slate-100 mt-24 text-xs">
        <div className="container max-w-4xl flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <p className="font-semibold text-slate-800">
              Agentic AI for Earth Observation
            </p>
            <p className="text-slate-400">
              Proposed Workshop for NeurIPS 2026.
            </p>
          </div>
          
          <div className="flex gap-4">
            <a href="#about" className="hover:text-slate-800 transition-colors">About</a>
            <a href="#cfp" className="hover:text-slate-800 transition-colors">Call for Papers</a>
            <a href="#schedule" className="hover:text-slate-800 transition-colors">Schedule</a>
            <a href="#speakers" className="hover:text-slate-800 transition-colors">Speakers</a>
            <a href="#organizers" className="hover:text-slate-800 transition-colors">Organizers</a>
          </div>

          <div className="text-slate-400 text-center sm:text-right">
            © 2026 Agentic AI EO Workshop. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
