import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] lg:min-h-[88vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/40 to-slate-900" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-blue-100/80 text-xs mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" /> Open to opportunities
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-[0_0_20px_rgba(34,211,238,0.15)]">
            Building intelligent products with code and curiosity
          </h1>
          <p className="mt-5 text-blue-100/90 text-lg leading-relaxed">
            I’m an AI Engineer crafting end‑to‑end machine learning systems — from research and data to scalable APIs and beautiful interfaces.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#work" className="px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium shadow-lg shadow-cyan-500/25">
              View projects
            </a>
            <a href="#contact" className="px-5 py-3 rounded-lg bg-white/10 text-white/90 hover:bg-white/15 transition-colors">
              Get in touch
            </a>
          </div>
        </div>

        <div className="hidden lg:block" />
      </div>
    </section>
  )
}
