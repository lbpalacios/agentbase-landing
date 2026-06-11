import { useState, useEffect, useRef } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&'

export default function TextDecrypt({ text, className = '', delay = 0, speed = 0.6 }) {
  const [display, setDisplay]   = useState(() => text.replace(/[^\s]/g, '_'))
  const [active, setActive]     = useState(false)
  const rafRef = useRef(null)
  const iterRef = useRef(0)

  useEffect(() => {
    const t = setTimeout(() => setActive(true), delay)
    return () => clearTimeout(t)
  }, [delay])

  useEffect(() => {
    if (!active) return

    const animate = () => {
      setDisplay(
        text.split('').map((ch, i) => {
          if (ch === ' ' || ch === '\n') return ch
          if (i < Math.floor(iterRef.current)) return ch
          return CHARS[Math.floor(Math.random() * CHARS.length)]
        }).join('')
      )
      iterRef.current += speed
      if (iterRef.current < text.length + 4) {
        rafRef.current = requestAnimationFrame(animate)
      } else {
        setDisplay(text)
      }
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [active, text, speed])

  return <span className={`font-head ${className}`}>{display}</span>
}
