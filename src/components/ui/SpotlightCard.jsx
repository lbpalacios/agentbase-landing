import { useRef, useState } from 'react'

export default function SpotlightCard({ children, className = '', color = '0,229,255', size = 320 }) {
  const ref = useRef(null)
  const [pos, setPos]       = useState({ x: 0, y: 0 })
  const [hovered, setHover] = useState(false)

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden cursor-default ${className}`}
      onMouseMove={onMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Spotlight layer */}
      <div
        className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(${size}px circle at ${pos.x}px ${pos.y}px, rgba(${color},0.14), transparent 70%)`,
        }}
      />
      {/* Border highlight on hover */}
      <div
        className="absolute inset-0 pointer-events-none z-0 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(${size}px circle at ${pos.x}px ${pos.y}px, rgba(${color},0.25), transparent 70%)`,
          mask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          maskComposite: 'exclude',
          padding: '1px',
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
