import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, Globe, CheckCircle2, AlertTriangle, ShieldCheck, HelpCircle } from "lucide-react";
import { projectsData } from "@/lib/projects";

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950 text-gray-100 flex flex-col relative overflow-hidden">
      {/* Background Radial Glows */}
      <div className="absolute top-0 left-[20%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Sticky Header */}
      <header className="border-b border-white/5 bg-slate-950/70 backdrop-blur-md sticky top-0 z-40 py-4 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-xs font-mono font-semibold text-purple-400 hover:text-purple-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Workspace</span>
          </Link>
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
            project.details / {project.id}
          </span>
        </div>
      </header>

      {/* Main Body */}
      <main className="flex-1 max-w-5xl mx-auto px-6 py-12 relative z-10 w-full">
        {/* Title area */}
        <div className="mb-10 text-center md:text-left">
          <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono mb-4">
            Role: {project.role}
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            {project.title}
          </h1>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl text-justify md:text-left">
            {project.subtitle}
          </p>
        </div>

        {/* Project Visual Placement / Screenshot Grid */}
        <div className="aspect-video w-full rounded-2xl bg-slate-900 border border-white/10 overflow-hidden mb-12 flex flex-col justify-between p-8 relative glass-premium">
          {/* Mockup styling */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
          
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 animate-pulse" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <span className="text-xs font-mono text-gray-500 bg-white/5 px-3 py-1 rounded border border-white/5">
              production_dashboard.log
            </span>
          </div>

          <div className="flex flex-col items-center justify-center flex-1 relative z-10 gap-3">
            <div className="p-4 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400">
              <Globe className="w-10 h-10 animate-pulse" />
            </div>
            <h3 className="text-sm font-semibold text-white tracking-wider">Awaiting Actual Screenshot Upload</h3>
            <p className="text-xs text-gray-500 text-center max-w-xs leading-relaxed">
              This card is preconfigured to support live layout image assets. Replace this grid with a screenshot in the future.
            </p>
          </div>

          <div className="flex justify-between items-center text-[10px] font-mono text-gray-600 relative z-10 border-t border-white/5 pt-4">
            <span>STATUS: ACTIVE</span>
            <span>BUILD: COMPILED</span>
          </div>
        </div>

        {/* Core Layout Split columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column - Detailed Journey Narrative (col-8) */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* Overview */}
            <div className="p-6 rounded-2xl border border-white/5 bg-slate-900/20 glass">
              <h2 className="text-lg font-bold text-white mb-3 tracking-tight">System Overview</h2>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed text-justify">
                {project.summary}
              </p>
            </div>

            {/* Problem & Challenge */}
            <div className="p-6 rounded-2xl border border-white/5 bg-slate-900/20 glass">
              <h2 className="text-lg font-bold text-white mb-4 tracking-tight flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                <span>The Problem & Technical Challenges</span>
              </h2>
              <div className="flex flex-col gap-4 text-sm text-gray-400 leading-relaxed">
                <div>
                  <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-1">General Context:</h3>
                  <p className="text-justify">{project.problem}</p>
                </div>
                <div>
                  <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-1">Key Hurdles:</h3>
                  <p className="text-justify">{project.challenges}</p>
                </div>
              </div>
            </div>

            {/* Solution & Outcome */}
            <div className="p-6 rounded-2xl border border-white/5 bg-slate-900/20 glass">
              <h2 className="text-lg font-bold text-white mb-4 tracking-tight flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                <span>The Solution & Business Outcomes</span>
              </h2>
              <div className="flex flex-col gap-4 text-sm text-gray-400 leading-relaxed">
                <div>
                  <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-1">Implementation Detail:</h3>
                  <p className="text-justify">{project.solution}</p>
                </div>
                <div>
                  <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-1">Measured Outcome:</h3>
                  <p className="text-justify">{project.outcome}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Tech stack / Features / Lessons (col-4) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Tech Stack */}
            <div className="p-6 rounded-2xl border border-white/5 bg-slate-900/20 glass">
              <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono text-purple-300 bg-purple-500/10 border border-purple-500/20 px-2.5 py-1 rounded-lg"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Features List */}
            <div className="p-6 rounded-2xl border border-white/5 bg-slate-900/20 glass">
              <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-3">Key Features</h3>
              <ul className="flex flex-col gap-3">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-2 text-xs text-gray-400 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Lessons Learned */}
            <div className="p-6 rounded-2xl border border-white/5 bg-slate-900/20 glass">
              <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-purple-400" />
                <span>Lessons Learned</span>
              </h3>
              <ul className="flex flex-col gap-2.5 list-disc list-inside text-xs text-gray-400 leading-relaxed pl-1">
                {project.lessons.map((lesson, idx) => (
                  <li key={idx} className="marker:text-purple-500 pl-1">
                    {lesson}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Links */}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs transition-all hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-purple-500/15"
              >
                <Github className="w-4 h-4" />
                <span>View Source Repository</span>
              </a>
            )}
          </div>
        </div>
      </main>

      <footer className="border-t border-white/5 py-8 mt-12 text-center text-xs text-gray-600 font-mono">
        Mathuppriya Naguleswaran © 2026
      </footer>
    </div>
  );
}
