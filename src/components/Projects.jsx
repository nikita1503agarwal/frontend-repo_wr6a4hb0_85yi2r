import { ExternalLink, Sparkles } from 'lucide-react'

const projects = [
  {
    title: 'RAG Search Engine',
    description: 'Domain-tuned retrieval augmented generation with hybrid search and tool use.',
    tags: ['LLMs', 'RAG', 'OpenAI', 'Qdrant'],
    link: '#'
  },
  {
    title: 'MLOps Pipeline',
    description: 'End-to-end training, evaluation, and model serving with CI/CD and monitoring.',
    tags: ['Kubeflow', 'Weights & Biases', 'FastAPI'],
    link: '#'
  },
  {
    title: 'Realtime AI UI',
    description: 'Interactive React UI for chat, code assist, and multimodal prompts with streaming.',
    tags: ['React', 'WebSockets', 'Vite'],
    link: '#'
  }
]

export default function Projects() {
  return (
    <section id="work" className="relative py-20 lg:py-28">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Selected work</h2>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 text-cyan-300/90 hover:text-white transition-colors">
            <Sparkles size={18} /> Explore more
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors flex flex-col">
              <div className="aspect-[16/9] rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 mb-4" />
              <h3 className="text-white font-semibold group-hover:text-cyan-300 transition-colors">{p.title}</h3>
              <p className="mt-2 text-blue-100/90 text-sm flex-1">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-white/10 text-blue-100/90 border border-white/10">{t}</span>
                ))}
              </div>
              <div className="mt-5 inline-flex items-center gap-2 text-cyan-300/90 group-hover:text-white">
                Visit <ExternalLink size={16} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
