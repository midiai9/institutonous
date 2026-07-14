import { useEffect, useRef } from 'react'

/**
 * Desktop-only pencil cursor that leaves a colorful scribble trail which
 * fades out over ~900ms. Disabled on touch devices and when the user
 * prefers reduced motion.
 */
export default function PencilCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const pencilRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const canvas = canvasRef.current
    const pencil = pencilRef.current
    if (!fine || reduce || !canvas || !pencil) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const COLORS = ['#1BA0D7', '#E6194B', '#FFC800', '#14164F']
    const FADE = 900 // ms until a stroke fully disappears
    type Seg = { x1: number; y1: number; x2: number; y2: number; t: number; c: string }
    let segs: Seg[] = []
    let last: { x: number; y: number } | null = null
    let colorI = 0

    document.body.style.cursor = 'none'
    pencil.style.display = 'block'

    const onMove = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY
      if (last) {
        segs.push({ x1: last.x, y1: last.y, x2: x, y2: y, t: performance.now(), c: COLORS[Math.floor(colorI) % COLORS.length] })
        colorI += 0.09
      }
      last = { x, y }
      pencil.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }
    const onLeave = () => {
      last = null
    }
    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)

    let raf = 0
    const frame = () => {
      const t = performance.now()
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      segs = segs.filter((s) => t - s.t < FADE)
      for (const s of segs) {
        const age = (t - s.t) / FADE
        ctx.globalAlpha = (1 - age) * 0.5
        ctx.strokeStyle = s.c
        ctx.lineWidth = 2.2 * (1 - age * 0.5)
        ctx.beginPath()
        ctx.moveTo(s.x1, s.y1)
        ctx.lineTo(s.x2, s.y2)
        ctx.stroke()
      }
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
      document.body.style.cursor = ''
      pencil.style.display = 'none'
    }
  }, [])

  return (
    <>
      <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-[45]" aria-hidden="true" />
      <div
        ref={pencilRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
        style={{ display: 'none', willChange: 'transform' }}
        aria-hidden="true"
      >
        {/* colored pencil, tip at (14,38) pinned to the cursor, slightly tilted */}
        <svg
          width="28"
          height="40"
          viewBox="0 0 28 40"
          style={{ transformOrigin: '14px 38px', transform: 'translate(-14px, -38px) rotate(-22deg)' }}
        >
          <rect x="8" y="0" width="12" height="5" rx="2" fill="#E6194B" />
          <rect x="8" y="5" width="12" height="3" fill="#FFC800" />
          <rect x="8" y="8" width="12" height="20" fill="#1BA0D7" />
          <rect x="11.5" y="8" width="2" height="20" fill="#ffffff" opacity="0.35" />
          <polygon points="8,28 20,28 14,36" fill="#F1D9B5" />
          <polygon points="12,33.5 16,33.5 14,38" fill="#14164F" />
        </svg>
      </div>
    </>
  )
}
