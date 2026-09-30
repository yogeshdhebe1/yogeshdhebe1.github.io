import { motion } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'
import { Magnetic } from '../components/ui'
import { marquee, profile } from '../data'
import CircuitBg from '../components/CircuitBg'

const line = (t, i) => (
  <span className="block overflow-hidden pb-1">
    <motion.span className="block" initial={{ y: '105%' }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}>{t}</motion.span>
  </span>
)

export default function Hero() {
  const items = [...marquee, ...marquee]
  return (
    <div id="top" className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden">
      <CircuitBg />
      <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-32 sm:px-8">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-sm text-mute">
          <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-bone">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60 motion-reduce:animate-none" /><span className="relative h-2 w-2 rounded-full bg-gold" /></span>
            Open to freelance
          </span>
          <span>{profile.location} · final-year E&amp;TC student</span>
        </motion.p>
        <h1 className="font-display text-[clamp(2.6rem,9.5vw,8rem)] font-extrabold leading-[0.95] tracking-tighter">
          {line('AI/ML Engineer &', 0)}{line('Full Stack Developer', 1)}
        </h1>
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mt-8 max-w-xl text-lg text-bone/75">
          I build AI-powered applications, intelligent automation systems and full-stack products — from the model to the interface, and sometimes the hardware.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95 }} className="mt-10 flex flex-wrap gap-3">
          <Magnetic href="#work" primary><ArrowDown size={16} />View Projects</Magnetic>
          <Magnetic href="#contact">Let's Connect</Magnetic>
          <Magnetic href={profile.resume}><Download size={16} />Download Resume</Magnetic>
        </motion.div>
      </div>
      <div aria-hidden className="relative overflow-hidden border-y border-line py-4">
        <div className="marquee flex w-max gap-10 whitespace-nowrap font-display text-xl font-bold text-bone/30">
          {items.map((m, i) => <span key={i}>{m}</span>)}
        </div>
      </div>
    </div>
  )
}
