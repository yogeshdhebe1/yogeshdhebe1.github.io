import { Section, Reveal, Heading } from '../components/ui'
import { education } from '../data'

export default function About() {
  return (
    <Section id="about">
      <Heading>About</Heading>
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-bone/80">
          <p>I'm studying Electronics &amp; Telecommunication at Sinhgad College of Engineering in Pune, graduating in 2027. That background is why my projects tend to end up with a sensor or a microcontroller somewhere in them.</p>
          <p>Most of my work is Python on the backend (FastAPI, Flask), React on the front, and LLM APIs like Gemini wherever a product needs to understand text, images or speech.</p>
          <p>I'm looking for AI/ML, GenAI, backend and full-stack internships, and I'm open to freelance work, including enterprise application development.</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className="mb-4 font-display text-xl font-bold">Education</h3>
          <ol className="space-y-6 border-l border-line pl-5">
            {education.map((e) => (
              <li key={e.title} className="relative">
                <span className="absolute -left-[25px] top-2 h-2 w-2 rounded-full bg-gold" />
                <p className="font-semibold">{e.title}</p>
                <p className="text-sm text-mute">{e.where}</p>
                <p className="mt-1 font-mono text-xs text-gold">{e.note}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </Section>
  )
}
