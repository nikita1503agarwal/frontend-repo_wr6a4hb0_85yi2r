import { Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 lg:py-28">
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 lg:p-10">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">Let’s build something</h2>
            <p className="mt-2 text-blue-100/90">Have a role or project in mind? I’d love to hear about it.</p>
          </div>

          <form className="mt-8 grid sm:grid-cols-2 gap-4">
            <input className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Name" />
            <input className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Email" type="email" />
            <textarea className="sm:col-span-2 min-h-[120px] w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Tell me a little about your idea" />
            <button type="button" className="sm:col-span-2 inline-flex items-center gap-2 justify-center px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium shadow-lg shadow-cyan-500/25">
              <Send size={16} /> Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
