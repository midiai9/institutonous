import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

/**
 * Looping background music with an accessible on/off control.
 * Browsers block autoplay with sound, so playback starts on the first
 * user interaction (and can always be toggled with the floating button).
 */
export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)

  // Prepare the audio element once.
  useEffect(() => {
    const audio = new Audio('/criancas.mp3')
    audio.loop = true
    audio.volume = 0.35
    audio.preload = 'auto'
    audioRef.current = audio
    return () => {
      audio.pause()
    }
  }, [])

  // Try to start playback on the first user gesture (autoplay policy).
  useEffect(() => {
    const start = () => {
      const audio = audioRef.current
      if (!audio || playing) return
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => {
          /* user can still start it via the button */
        })
      cleanup()
    }
    const cleanup = () => {
      window.removeEventListener('pointerdown', start)
      window.removeEventListener('keydown', start)
    }
    window.addEventListener('pointerdown', start, { once: true })
    window.addEventListener('keydown', start, { once: true })
    return cleanup
  }, [playing])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {})
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
