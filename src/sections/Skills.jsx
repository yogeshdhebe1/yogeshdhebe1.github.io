import { Section, Reveal, Heading } from '../components/ui'
import { skills } from '../data'

export default function Skills() {
  return (
    <Section id="skills">
      <Heading sub="Grouped by what I use them for.">Tech stack</Heading>
      <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
        {skills.map((g, i) => (
          <Reveal key={g.group} delay={(i % 2) * 0.08}>
            <h3 className="mb-3 font-display text-lg font-bold text-gold">{g.group}</h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <li key={s} className="cursor-default rounded-lg border border-line px-3 py-1.5 text-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-gold hover:bg-raise">{s}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
