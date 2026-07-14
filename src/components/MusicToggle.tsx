import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

/**
 * Looping background music with an accessible on/off control.
 * Browsers block autoplay with sound, so playback starts on the first
 * user gesture — but ONLY that very first gesture. Once the user pauses
 * with the button, clicking elsewhere must NOT restart the music.
 */
export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const audio = new Audio('/criancas.mp3')
    audio.loop = true
    audio.volume = 0.15
    audio.preload = 'auto'
    audioRef.current = audio

    const sync = () => setPlaying(!audio.paused)
    audio.addEventListener('play', sync)
    audio.addEventListener('pause', sync)

    // Best-effort autoplay (usually blocked until a gesture).
    audio.play().catch(() => {})

    // Single first-gesture kickoff: fires at most once, and only if the
    // music never managed to start yet. It removes itself immediately,
    // so a manual pause later is never undone by clicking around.
    const kickoff = () => {
      window.removeEventListener('pointerdown', kickoff)
      window.removeEventListener('keydown', kickoff)
      if (audio.paused) audio.play().catch(() => {})
    }
    window.addEventListener('pointerdown', kickoff, { once: true })
    window.addEventListener('keydown', kickoff, { once: true })

    return () => {
      window.removeEventListener('pointerdown', kickoff)
      window.removeEventListener('keydown', kickoff)
      audio.removeEventListener('play', sync)
      audio.removeEventListener('pause', sync)
      audio.pause()
    }
  }, [])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      audio.play().catch(() => {})
    } else {
      audio.pause()
    }
  }

  return (
    <button
      onClick={toggle}
      aria-label={playing ? 'Desativar música de fundo' : 'Ativar música de fundo'}
      aria-pressed={playing}
      title={playing ? 'Desativar música' : 'Ativar música'}
      className="fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white shadow-soft ring-1 ring-white/20 transition-transform hover:scale-110 active:scale-95"
    >
      {playing ? <Volume2 size={22} className="text-yellow" /> : <VolumeX size={22} />}
      {playing && (
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-cyan/40" />
      )}
    </button>
  )
}
