import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { nav, profile } from '../data'

export default function Navbar() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${solid || open ? 'border-b border-line bg-ink/80 backdrop-blur-md' : 'border-b border-transparent'}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-display text-lg font-extrabold tracking-tight">YOGESH<span className="text-gold">·</span>DHEBE</a>
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {nav.map(([l, h]) => <a key={h} href={h} className="text-sm text-mute transition-colors hover:text-bone">{l}</a>)}
          <a href={profile.resume} className="rounded-full border border-line px-4 py-1.5 text-sm hover:border-gold hover:text-gold">Resume</a>
        </nav>
        <button className="md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav aria-label="Mobile" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-x-0 top-16 bottom-0 flex flex-col gap-1 bg-ink px-5 pt-6 md:hidden">
            {nav.map(([l, h], i) => (
              <motion.a key={h} href={h} onClick={() => setOpen(false)} initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.05 * i }}
                className="border-b border-line py-4 font-display text-3xl font-bold">{l}</motion.a>
            ))}
            <a href={profile.resume} className="mt-6 self-start rounded-full bg-gold px-5 py-3 text-sm font-semibold text-ink">Download resume</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
