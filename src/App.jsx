import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-blue-100">
      <Navbar />
      <Hero />
      <main>
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 text-sm text-blue-200/70 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} AI Engineer • All rights reserved</p>
          <p className="text-blue-200/60">Built with love for AI, design, and great DX.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
