import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef } from 'react'

export const Reveal = ({ children, delay = 0, className = '' }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
)

export const Magnetic = ({ href, children, primary, external }) => {
  const ref = useRef(null)
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 })
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 })
  const move = (e) => {
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - r.left - r.width / 2) * 0.18); y.set((e.clientY - r.top - r.height / 2) * 0.28)
  }
  return (
    <motion.a ref={ref} href={href} style={{ x, y }} onMouseMove={move} onMouseLeave={() => { x.set(0); y.set(0) }}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
        primary ? 'bg-gold text-ink hover:bg-bone' : 'border border-line text-bone hover:border-gold hover:text-gold'}`}>
      {children}
    </motion.a>
  )
}

export const Heading = ({ children, sub }) => (
  <Reveal className="mb-12 max-w-2xl">
    <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">{children}</h2>
    {sub && <p className="mt-3 text-mute">{sub}</p>}
  </Reveal>
)

export const Chip = ({ children }) => (
  <span className="rounded-md border border-line bg-raise px-2.5 py-1 font-mono text-xs text-bone/80">{children}</span>
)

export const Section = ({ id, children, className = '' }) => (
  <section id={id} className={`mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32 ${className}`}>{children}</section>
)
