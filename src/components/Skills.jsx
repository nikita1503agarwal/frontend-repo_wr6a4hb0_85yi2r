import { Brain, Boxes, Server, Code, Rocket } from 'lucide-react'

const skills = [
  { icon: Brain, title: 'Machine Learning', items: ['LLMs & RAG', 'Transformers', 'MLOps', 'LangChain'] },
  { icon: Server, title: 'Backend', items: ['FastAPI', 'GraphQL', 'MongoDB', 'Redis'] },
  { icon: Code, title: 'Frontend', items: ['React + Vite', 'Tailwind', 'Framer Motion', 'shadcn/ui'] },
  { icon: Boxes, title: 'Systems', items: ['Vector DBs', 'Docker', 'CI/CD', 'Cloud'] },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 lg:py-28">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(34,211,238,0.08),transparent_60%),radial-gradient(600px_circle_at_80%_30%,rgba(59,130,246,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-10">Core skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map(({ icon: Icon, title, items }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-9 w-9 rounded-lg bg-gradient-to-tr from-cyan-400 to-blue-500 grid place-items-center text-white shadow-lg shadow-cyan-500/30">
                  <Icon size={18} />
                </span>
                <h3 className="text-white font-semibold">{title}</h3>
              </div>
              <ul className="text-blue-100/90 text-sm space-y-1.5">
                {items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
