import { 
  Mail, 
  Globe
} from "lucide-react";
import { 
  INVITED_SPEAKERS, 
  ORGANIZERS, 
  SCHEDULE,
  Speaker,
  Organizer
} from "@/const";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-slate-100 selection:text-slate-900 scroll-smooth font-sans antialiased">
      
      {/* HEADER SECTION */}
      <header className="relative bg-slate-950 text-white overflow-hidden py-28 md:py-36 text-center">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663493919263/9DrfZuSabAu7vok4PSS7EX/hero_earth_observation-4TP4ax6M6MMDxZkRg3XKr7.webp" 
            alt="Earth Observation" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container max-w-4xl relative z-10 space-y-6">
          <div className="text-sky-400 text-sm font-semibold tracking-widest uppercase">
            NeurIPS 2026 Workshop Proposal
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-tight">
            Agentic AI for <br />
            <span className="text-sky-300">Earth Observation</span>
          </h1>

          <div className="text-xl md:text-2xl text-slate-200 font-light max-w-2xl mx-auto leading-relaxed">
            December 12, 2026 — Sydney or Paris
          </div>
          
          <div className="text-base text-slate-300 font-light max-w-xl mx-auto">
            The workshop will be held in a hybrid format.
          </div>
        </div>
      </header>

      {/* FIXED NAVBAR */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50 py-4 shadow-sm">
        <div className="container max-w-4xl flex flex-col sm:flex-row justify-between items-center gap-4">
          <a href="#" className="font-serif font-bold text-lg text-slate-900 hover:text-sky-800 transition-colors">
            Agentic AI for EO
          </a>
          <div className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-none py-1 text-base font-medium">
            <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">About</a>
            <a href="#cfp" className="text-slate-600 hover:text-slate-900 transition-colors">Call for Papers</a>
            <a href="#schedule" className="text-slate-600 hover:text-slate-900 transition-colors">Schedule</a>
            <a href="#speakers" className="text-slate-600 hover:text-slate-900 transition-colors">Speakers</a>
            <a href="#organizers" className="text-slate-600 hover:text-slate-900 transition-colors">Organizers</a>
          </div>
        </div>
      </nav>

      {/* CONTINUOUS SINGLE PAGE FLOW */}
      <main className="container max-w-4xl py-16 space-y-24">
        
        {/* SECTION: ABOUT */}
        <section id="about" className="space-y-8 scroll-mt-24 relative pb-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-serif font-bold text-slate-900 border-b border-slate-100 pb-3">
              About
            </h2>
            <div className="text-slate-700 leading-relaxed space-y-5 font-light text-lg text-justify">
              <p>
                In the era of AI-driven transformations, foundation models (FMs) have become pivotal in various applications, from natural language processing to computer vision. These models, with their immense capabilities, reshape the future of scientific research and the broader human society, but also introduce challenges in their in-the-wild deployments. 
              </p>
              <p>
                This workshop is motivated by the convergence of two rapidly evolving frontiers: the emergence of agentic and reasoning-centric AI systems, and the growing need for intelligent Earth observation systems capable of supporting real-world environmental decision-making. We believe this moment is uniquely important for establishing a dedicated research forum that bridges machine learning, computer vision, reinforcement learning, geospatial AI, and Earth sciences.
              </p>
              <p>
                Despite rapid progress in geospatial foundation models and remote sensing MLLMs, most existing EO research remains centered on static perception tasks such as classification, segmentation, captioning, and detection. However, many real-world environmental and societal applications—including disaster response, climate adaptation, environmental monitoring, autonomous sensing, urban planning, and scientific discovery—fundamentally require adaptive reasoning, active information acquisition, long-horizon planning, uncertainty-aware decision-making, and iterative interaction with external tools and simulators.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-slate-100"></div>
        </section>

        {/* SECTION: CALL FOR PAPERS */}
        <section id="cfp" className="space-y-8 scroll-mt-24 relative pb-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-serif font-bold text-slate-900 border-b border-slate-100 pb-3">
              Call for Papers
            </h2>
            <p className="text-slate-700 leading-relaxed font-light text-lg text-justify">
              The **Workshop on Agentic AI for Earth Observation@NeurIPS 2026** invites submissions from researchers in machine learning pertaining to foundation models, remote sensing, and environmental sciences. We welcome contributions that explore reasoning, planning, and autonomous decision-making in complex Earth environments.
            </p>
          </div>

          {/* Key Dates Table */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-semibold text-slate-900">
              Key Dates
            </h3>
            <div className="border border-slate-100 rounded overflow-hidden shadow-sm">
              <table className="w-full text-left text-base">
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4.5 font-semibold text-slate-700">Paper Submission Deadline</td>
                    <td className="px-6 py-4.5 text-slate-600">August 29, 2026 (AoE)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4.5 font-semibold text-slate-700">Author Notification</td>
                    <td className="px-6 py-4.5 text-slate-600">September 29, 2026 (AoE)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4.5 font-semibold text-slate-700">Camera-Ready Deadline</td>
                    <td className="px-6 py-4.5 text-slate-600">October 20, 2026 (AoE, TBA)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-400 italic">
              All deadlines follow the Anywhere on Earth (AoE) timezone.
            </p>
          </div>

          {/* Scope List */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-semibold text-slate-900">
              Scope & Topics
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-base text-slate-700 font-light list-disc pl-5">
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
            <h3 className="text-2xl font-serif font-semibold text-slate-900">
              Submission Guidelines
            </h3>
            <div className="text-slate-700 leading-relaxed font-light text-base space-y-4 text-justify">
              <p>
                <strong>Format:</strong> All submissions must be a single PDF file formatted using the standard NeurIPS style files. We welcome high-quality original papers in the following two tracks:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                <li><strong>Short Papers / Extended Abstracts:</strong> Up to 4 pages (excluding references).</li>
                <li><strong>Full Papers:</strong> Up to 8 pages (excluding references and appendices).</li>
              </ul>
              <p>
                <strong>Double-blind reviewing:</strong> All submissions must be anonymized and may not contain any identifying information that may violate the double-blind reviewing policy. This policy applies to any supplementary or linked material as well.
              </p>
              <p>
                <strong>Dual-submission and non-archival policy:</strong> The workshop is non-archival and will not have official proceedings. Ongoing and unpublished work, as well as papers currently under review, are welcome.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-slate-100"></div>
        </section>

        {/* SECTION: SCHEDULE */}
        <section id="schedule" className="space-y-8 scroll-mt-24 relative pb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-serif font-bold text-slate-900 border-b border-slate-100 pb-3">
              Schedule
            </h2>
            <p className="text-slate-500 text-base font-light">
              This is the tentative schedule of the workshop. All slots are provided in local conference time.
            </p>
          </div>

          <div className="border border-slate-100 rounded overflow-hidden shadow-sm">
            <table className="w-full text-left text-base">
              <thead className="bg-slate-50 text-slate-700 border-b border-slate-100 font-semibold">
                <tr>
                  <th className="px-6 py-4">Time</th>
                  <th className="px-6 py-4">Topic / Activity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {SCHEDULE.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-5 font-mono text-sm text-sky-800 whitespace-nowrap">{item.time}</td>
                    <td className="px-6 py-5">
                      <div className="font-semibold text-slate-850 text-base md:text-lg">{item.activity}</div>
                      {item.details && <div className="text-sm text-slate-500 font-light mt-1">{item.details}</div>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-slate-100"></div>
        </section>

        {/* SECTION: SPEAKERS */}
        <section id="speakers" className="space-y-12 scroll-mt-24 relative pb-12">
          
          {/* Invited Speakers */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-serif font-bold text-slate-900 border-b border-slate-100 pb-3">
                Invited Speakers
              </h2>
              <p className="text-slate-500 text-base font-light">
                Pioneering researchers spanning machine learning, computer vision, and Earth sciences.
              </p>
            </div>

            {/* Circular Headshots Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-10">
              {INVITED_SPEAKERS.map((speaker: Speaker, idx: number) => (
                <div key={idx} className="text-center space-y-3 group">
                  
                  {/* Portrait Container */}
                  <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden border-2 border-slate-100 group-hover:border-sky-500 transition-colors duration-300 shadow-sm">
                    {speaker.avatar ? (
                      speaker.url ? (
                        <a href={speaker.url} target="_blank" rel="noopener noreferrer">
                          <img 
                            src={speaker.avatar} 
                            alt={speaker.name} 
                            className="w-full h-full object-cover"
                          />
                        </a>
                      ) : (
                        <img 
                          src={speaker.avatar} 
                          alt={speaker.name} 
                          className="w-full h-full object-cover"
                        />
                      )
                    ) : (
                      speaker.url ? (
                        <a href={speaker.url} target="_blank" rel="noopener noreferrer" className="w-full h-full bg-slate-50 flex items-center justify-center text-slate-400 font-serif font-semibold text-xl">
                          {speaker.name.split(' ').map((n: string) => n[0]).join('')}
                        </a>
                      ) : (
                        <div className="w-full h-full bg-slate-50 flex items-center justify-center text-slate-400 font-serif font-semibold text-xl">
                          {speaker.name.split(' ').map((n: string) => n[0]).join('')}
                        </div>
                      )
                    )}
                  </div>

                  {/* Details */}
                  <div className="space-y-1">
                    {speaker.url ? (
                      <a href={speaker.url} target="_blank" rel="noopener noreferrer" className="hover:text-sky-800 hover:underline transition-all">
                        <h4 className="text-base font-bold text-slate-900 leading-tight">{speaker.name}</h4>
                      </a>
                    ) : (
                      <h4 className="text-base font-bold text-slate-900 leading-tight">{speaker.name}</h4>
                    )}
                    <p className="text-xs text-slate-500 font-light leading-tight">{speaker.affiliation}</p>
                  </div>

                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-slate-100"></div>
        </section>

        {/* SECTION: ORGANIZERS */}
        <section id="organizers" className="space-y-8 scroll-mt-24">
          <div className="space-y-2">
            <h2 className="text-3xl font-serif font-bold text-slate-900 border-b border-slate-100 pb-3">
              Workshop Organizers
            </h2>
            <p className="text-slate-500 text-base font-light">
              An international team of leading researchers bridging remote sensing and artificial intelligence.
            </p>
          </div>

          {/* Circular Headshots Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-10">
            {ORGANIZERS.map((org: Organizer, idx: number) => (
              <div key={idx} className="text-center space-y-3 group">
                
                {/* Portrait Container */}
                <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden border-2 border-slate-100 group-hover:border-sky-500 transition-colors duration-300 shadow-sm">
                  {org.avatar ? (
                    org.url ? (
                      <a href={org.url} target="_blank" rel="noopener noreferrer">
                        <img 
                          src={org.avatar} 
                          alt={org.name} 
                          className="w-full h-full object-cover"
                        />
                      </a>
                    ) : (
                      <img 
                        src={org.avatar} 
                        alt={org.name} 
                        className="w-full h-full object-cover"
                      />
                    )
                  ) : (
                    org.url ? (
                      <a href={org.url} target="_blank" rel="noopener noreferrer" className="w-full h-full bg-slate-50 flex items-center justify-center text-slate-400 font-serif font-semibold text-xl">
                        {org.name.split(' ').map((n: string) => n[0]).join('')}
                      </a>
                    ) : (
                      <div className="w-full h-full bg-slate-50 flex items-center justify-center text-slate-400 font-serif font-semibold text-xl">
                        {org.name.split(' ').map((n: string) => n[0]).join('')}
                      </div>
                    )
                  )}
                </div>

                {/* Details */}
                <div className="space-y-1">
                  <a href={org.url} target="_blank" rel="noopener noreferrer" className="hover:text-sky-800 hover:underline transition-all">
                    <h4 className="text-base font-bold text-slate-900 leading-tight">{org.name}</h4>
                  </a>
                  <p className="text-xs text-slate-500 font-light leading-tight">{org.affiliation}</p>
                </div>

                {/* Quick Contact Icons */}
                <div className="flex justify-center gap-3 pt-1 text-slate-400">
                  <a href={`mailto:${org.email}`} className="hover:text-sky-800 transition-colors">
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                  <a href={org.url} target="_blank" rel="noopener noreferrer" className="hover:text-sky-800 transition-colors">
                    <Globe className="w-3.5 h-3.5" />
                  </a>
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
