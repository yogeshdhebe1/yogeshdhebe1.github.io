import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { Section, Reveal, Heading, Chip } from '../components/ui'
import { featured, projects } from '../data'

function Featured() {
  const tabs = Object.keys(featured.views)
  const [tab, setTab] = useState(tabs[0])
  return (
    <Reveal>
      <article className="grid overflow-hidden rounded-3xl border border-line bg-raise md:grid-cols-2">
        <div className="p-7 sm:p-10">
          <h3 className="font-display text-5xl font-extrabold tracking-tight sm:text-6xl">{featured.title}</h3>
          <p className="mt-2 text-gold">{featured.kind}</p>
          <p className="mt-1 text-sm text-mute">{featured.role}</p>
          <p className="mt-6 text-bone/80">{featured.desc}</p>
          <div className="mt-6 flex flex-wrap gap-2">{featured.tech.map((t) => <Chip key={t}>{t}</Chip>)}</div>
          <a href={featured.live} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-ink hover:bg-bone">
            Live demo <ExternalLink size={15} />
          </a>
        </div>
        <div className="border-t border-line bg-ink/60 p-7 sm:p-10 md:border-l md:border-t-0">
          <p className="mb-4 text-sm text-mute">Four roles, one system — pick a view</p>
          <div role="tablist" className="flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button key={t} role="tab" aria-selected={tab === t} onClick={() => setTab(t)}
                className={`rounded-full px-4 py-1.5 text-sm transition-colors ${tab === t ? 'bg-bone text-ink' : 'border border-line text-mute hover:text-bone'}`}>{t}</button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.ul key={tab} role="tabpanel" initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }} transition={{ duration: 0.2 }} className="mt-6 space-y-3">
              {featured.views[tab].map((f) => (
                <li key={f} className="flex items-center gap-3 rounded-xl border border-line bg-raise px-4 py-3 text-sm"><span className="h-1.5 w-1.5 rounded-full bg-gold" />{f}</li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </article>
    </Reveal>
  )
}

function Row({ p }) {
  return (
    <Reveal>
      <article className="group grid gap-6 border-t border-line py-8 transition-colors hover:bg-raise/50 md:grid-cols-[1fr_1.1fr] md:px-4">
        <div>
          <h3 className="font-display text-3xl font-bold tracking-tight transition-transform duration-300 group-hover:translate-x-2 sm:text-4xl">{p.title}</h3>
          <p className="mt-1 text-gold">{p.kind}{p.role ? ` · ${p.role}` : ''}</p>
          <p className="mt-4 max-w-md text-bone/75">{p.desc}</p>
          {p.live && (
            <a href={p.live} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm hover:border-gold hover:text-gold">
              Live demo <ExternalLink size={14} />
            </a>
          )}
        </div>
        <div>
          <ul className="space-y-1.5 text-sm text-bone/80">
            {p.features.map((f) => <li key={f} className="flex gap-2"><span className="text-gold">+</span>{f}</li>)}
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">{p.tech.map((t) => <Chip key={t}>{t}</Chip>)}</div>
        </div>
      </article>
    </Reveal>
  )
}

export default function Work() {
  return (
    <Section id="work">
      <Heading sub="LearnAge is the one I'd start with. The rest cover AI, computer vision and IoT.">Selected work</Heading>
      <Featured />
      <div className="mt-16 border-b border-line">{projects.map((p) => <Row key={p.title} p={p} />)}</div>
    </Section>
  )
}
