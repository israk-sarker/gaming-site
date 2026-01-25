import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { 
  Terminal, 
  Server, 
  Cpu, 
  Globe, 
  Code2, 
  Network, 
  Database, 
  Github, 
  ExternalLink, 
  Gamepad2,
  Zap,
  Target
} from 'lucide-react';
import ReactionTest from './components/ReactionTest';
import AimTrainer from './components/AimTrainer';

// --- Portfolio Components ---

const SkillBadge = ({ icon: Icon, label }) => (
  <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-full hover:border-purple-500/50 transition-colors">
    <Icon size={16} className="text-purple-400" />
    <span className="text-sm font-medium text-slate-300">{label}</span>
  </div>
);

function Home() {
  const skills = [
    { icon: Terminal, label: "Linux / Bash" },
    { icon: Server, label: "Nginx" },
    { icon: Cpu, label: "Docker" },
    { icon: Network, label: "Networking" },
    { icon: Code2, label: "Java / React" },
    { icon: Database, label: "Nextcloud" },
    { icon: Globe, label: "HTML5 / CSS3" },
    { icon: Github, label: "Git" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-purple-500/30">
      {/* Hero Section */}
      <header className="relative pt-20 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-purple-600/10 blur-[120px] rounded-full" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Production Live: Atom Server
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-slate-400 to-slate-600 bg-clip-text text-transparent">
            I'm Israk.
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed">
            A High School Computer Science student focusing on the <span className="text-white">infrastructure</span> behind the code. 
            I build projects to understand how the internet works, from the OS level to the application layer.
          </p>
          
          <div className="mt-10 p-6 bg-slate-900/40 border border-slate-800 rounded-2xl backdrop-blur-sm italic text-slate-400">
            "My philosophy is simple: <span className="text-purple-400 font-semibold text-not-italic">Learn by breaking things, then fixing them.</span>"
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-24 space-y-24">
        
        {/* Skills Section */}
        <section>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 mb-8 flex items-center gap-4">
            Technical Arsenal <div className="h-[1px] flex-1 bg-slate-800" />
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <SkillBadge key={skill.label} icon={skill.icon} label={skill.label} />
            ))}
          </div>
        </section>

        {/* Featured Project - The Server */}
        <section className="group">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 mb-8 flex items-center gap-4">
            The Home Lab <div className="h-[1px] flex-1 bg-slate-800" />
          </h2>
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-8 rounded-3xl group-hover:border-purple-500/40 transition-all shadow-2xl">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-white mb-4">Self-Hosted Infrastructure</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  I engineered a custom Linux-based environment to host my own data and services. 
                  This website is served via <span className="text-slate-200">Nginx</span> configured as a reverse proxy, 
                  with <span className="text-slate-200">Nextcloud</span> and other services running inside <span className="text-slate-200">Docker</span> containers.
                </p>
                <div className="flex gap-4">
                  <span className="text-xs font-mono text-purple-400 px-2 py-1 bg-purple-500/5 rounded">Headless Linux</span>
                  <span className="text-xs font-mono text-cyan-400 px-2 py-1 bg-cyan-500/5 rounded">Reverse Proxy</span>
                  <span className="text-xs font-mono text-pink-400 px-2 py-1 bg-pink-500/5 rounded">Cloudflare Tunnel</span>
                </div>
              </div>
              <div className="w-full md:w-48 aspect-square bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700">
                <Server size={64} className="text-slate-600 group-hover:text-purple-500 transition-colors" />
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Lab Section (The Games) */}
        <section>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 mb-8 flex items-center gap-4">
            The Skill Lab <div className="h-[1px] flex-1 bg-slate-800" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/reaction" className="group p-8 bg-slate-900/50 border border-slate-800 rounded-3xl hover:bg-slate-900 transition-all hover:-translate-y-1">
              <Zap className="text-yellow-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">Reaction Test</h3>
              <p className="text-slate-400 text-sm mb-4">Measure your response time in milliseconds. Italian localized UI.</p>
              <div className="flex items-center text-purple-400 text-sm font-bold group-hover:gap-2 transition-all">
                Play Now <ExternalLink size={14} className="ml-1" />
              </div>
            </Link>

            <Link to="/aim" className="group p-8 bg-slate-900/50 border border-slate-800 rounded-3xl hover:bg-slate-900 transition-all hover:-translate-y-1">
              <Target className="text-red-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">Aim Trainer Pro</h3>
              <p className="text-slate-400 text-sm mb-4">Click-precision trainer with difficulty levels and combo systems.</p>
              <div className="flex items-center text-purple-400 text-sm font-bold group-hover:gap-2 transition-all">
                Play Now <ExternalLink size={14} className="ml-1" />
              </div>
            </Link>
          </div>
        </section>
      </main>

      <footer className="max-w-4xl mx-auto px-6 py-12 border-t border-slate-900 flex justify-between items-center text-slate-500 text-sm">
        <p>© 2026 Israk.dev</p>
        <div className="flex gap-6">
          <Github size={18} className="hover:text-white cursor-pointer" />
          <Globe size={18} className="hover:text-white cursor-pointer" />
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reaction" element={<ReactionTest />} />
        <Route path="/aim" element={<AimTrainer />} />
      </Routes>
    </BrowserRouter>
  );
}