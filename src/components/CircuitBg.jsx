import { useEffect, useRef } from 'react'

// Lightweight canvas: slow "signals" travelling along a right-angle trace grid.
export default function CircuitBg() {
  const ref = useRef(null)
  useEffect(() => {
    const c = ref.current, ctx = c.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const G = 48, dpr = Math.min(window.devicePixelRatio || 1, 2)
    let w, h, sig = [], raf, last = 0
    const size = () => {
      w = c.clientWidth; h = c.clientHeight; c.width = w * dpr; c.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const n = Math.max(6, Math.floor(w / 140)); sig = Array.from({ length: n }, spawn)
    }
    const spawn = () => ({ x: Math.floor(Math.random() * (w / G)) * G, y: Math.floor(Math.random() * (h / G)) * G,
      d: Math.floor(Math.random() * 4), life: 0, max: 120 + Math.random() * 200, trail: [] })
    const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]]
    const draw = (t) => {
      raf = requestAnimationFrame(draw)
      if (t - last < 40) return; last = t
      ctx.clearRect(0, 0, w, h)
      ctx.strokeStyle = 'rgba(236,232,223,0.05)'; ctx.lineWidth = 1; ctx.beginPath()
      for (let x = 0; x <= w; x += G) { ctx.moveTo(x, 0); ctx.lineTo(x, h) }
      for (let y = 0; y <= h; y += G) { ctx.moveTo(0, y); ctx.lineTo(w, y) }
      ctx.stroke()
      sig.forEach((s, i) => {
        s.trail.push([s.x, s.y]); if (s.trail.length > 14) s.trail.shift()
        s.x += dirs[s.d][0] * 4; s.y += dirs[s.d][1] * 4; s.life++
        if (s.x % G === 0 && s.y % G === 0 && Math.random() < 0.3) s.d = (s.d + (Math.random() < 0.5 ? 1 : 3)) % 4
        if (s.life > s.max || s.x < 0 || s.y < 0 || s.x > w || s.y > h) { sig[i] = spawn(); return }
        s.trail.forEach(([x, y], k) => { ctx.fillStyle = `rgba(232,176,74,${(k / s.trail.length) * 0.5})`; ctx.fillRect(x - 1, y - 1, 2, 2) })
        ctx.fillStyle = 'rgba(232,176,74,.9)'; ctx.fillRect(s.x - 2, s.y - 2, 4, 4)
      })
    }
    size(); window.addEventListener('resize', size)
    if (reduce) { ctx.strokeStyle = 'rgba(236,232,223,0.05)'; for (let x = 0; x <= w; x += G) { ctx.moveTo(x, 0); ctx.lineTo(x, h) } for (let y = 0; y <= h; y += G) { ctx.moveTo(0, y); ctx.lineTo(w, y) } ctx.stroke() } else raf = requestAnimationFrame(draw)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', size) }
  }, [])
  return <canvas ref={ref} aria-hidden className="absolute inset-0 h-full w-full" style={{ maskImage: 'linear-gradient(to bottom, transparent, #000 25%, #000 65%, transparent)' }} />
}
