import { Menu, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30 grid place-items-center text-white font-bold">
            AI
          </div>
          <div>
            <p className="text-white font-semibold leading-tight group-hover:text-cyan-300 transition-colors">AI Engineer</p>
            <p className="text-xs text-blue-200/70">Portfolio</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#work" className="text-blue-100/80 hover:text-white transition-colors">Work</a>
          <a href="#skills" className="text-blue-100/80 hover:text-white transition-colors">Skills</a>
          <a href="#about" className="text-blue-100/80 hover:text-white transition-colors">About</a>
          <a href="#contact" className="text-blue-100/80 hover:text-white transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-blue-100 hover:text-white transition-colors" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-blue-100 hover:text-white transition-colors" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium shadow-lg shadow-cyan-500/25">
            <Mail size={16} /> Say hi
          </a>
          <button className="md:hidden p-2 rounded-lg bg-white/5 text-blue-100 hover:bg-white/10" aria-label="Menu">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}
