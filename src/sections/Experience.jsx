import { motion } from 'framer-motion'
import { Section, Reveal, Heading } from '../components/ui'
import { experience as x, services } from '../data'

export default function Experience() {
  return (
    <>
      <Section id="experience">
        <Heading>Experience</Heading>
        <div className="relative pl-8 sm:pl-12">
          <motion.span aria-hidden className="absolute left-0 top-2 h-full w-px origin-top bg-gold" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1.1 }} />
          <span aria-hidden className="absolute -left-[5px] top-2 h-[11px] w-[11px] rounded-full bg-gold" />
          <Reveal>
            <p className="font-mono text-sm text-mute">{x.when} · {x.type}</p>
            <h3 className="mt-1 font-display text-3xl font-bold sm:text-4xl">{x.role}</h3>
            <p className="text-gold">{x.org}</p>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {x.points.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.08}><h4 className="font-semibold">{t}</h4><p className="mt-1 text-sm text-mute">{d}</p></Reveal>
            ))}
          </div>
        </div>
      </Section>
      <Section className="!py-0">
        <Heading>What I build</Heading>
        <dl className="border-t border-line">
          {services.map(([t, d]) => (
            <Reveal key={t}>
              <div className="grid gap-1 border-b border-line py-6 sm:grid-cols-2">
                <dt className="font-display text-2xl font-bold">{t}</dt><dd className="text-mute">{d}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </Section>
    </>
  )
}
