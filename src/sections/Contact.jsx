import { ArrowUpRight } from 'lucide-react'
import { Section, Reveal } from '../components/ui'
import { links, profile } from '../data'

export default function Contact() {
  return (
    <>
      <Section id="coding" className="!pb-0">
        <Reveal>
          <div className="rounded-2xl border border-line bg-raise p-6 font-mono text-sm sm:p-8">
            <div aria-hidden className="mb-5 flex gap-1.5"><i className="h-2.5 w-2.5 rounded-full bg-line" /><i className="h-2.5 w-2.5 rounded-full bg-line" /><i className="h-2.5 w-2.5 rounded-full bg-line" /></div>
            <p className="text-mute">$ where --code</p>
            <p className="mt-3">Repositories and experiments live on <a className="text-gold underline underline-offset-4" href={links[0].href} target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
            <p>Problem solving practice is on <a className="text-gold underline underline-offset-4" href={links[2].href} target="_blank" rel="noopener noreferrer">LeetCode</a>.</p>
          </div>
        </Reveal>
      </Section>
      <Section id="contact">
        <Reveal>
          <h2 className="font-display text-[clamp(2.4rem,8vw,6.5rem)] font-extrabold leading-none tracking-tighter">Have something to build?</h2>
          <p className="mt-6 max-w-lg text-lg text-bone/75">Open to freelance projects, including enterprise applications, and to AI/ML, GenAI, backend and full-stack internships. Email is the fastest way to reach me.</p>
        </Reveal>
        <ul className="mt-12 border-t border-line">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} {...(l.label !== 'Email' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex items-center justify-between gap-4 border-b border-line py-5 transition-colors hover:text-gold">
                <span className="font-display text-2xl font-bold sm:text-3xl">{l.label}</span>
                <span className="flex min-w-0 items-center gap-2 text-sm text-mute group-hover:text-gold"><span className="truncate">{l.handle}</span><ArrowUpRight size={18} className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-mute">Based in {profile.location}.</p>
      </Section>
    </>
  )
}
