import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const WA = 'https://wa.me/528140235824'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-deep/85 backdrop-blur-xl border-b border-white/[0.06]' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Typographic logo — monospaced with glow */}
          <a href="#hero" className="flex items-center gap-2 no-underline group">
            <span
              className="font-mono text-xl font-bold tracking-tight text-cyan"
              style={{ textShadow: '0 0 20px rgba(0,229,255,0.7), 0 0 40px rgba(0,229,255,0.3)' }}
            >
              agent
            </span>
            <span
              className="font-mono text-xl font-bold tracking-tight text-white/90"
              style={{ textShadow: '0 0 12px rgba(255,255,255,0.2)' }}
            >
              base
            </span>
            <span className="font-mono text-cyan text-lg animate-pulse">_</span>
          </a>

          {/* Links */}
          <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0">
            {['Solución','Cómo funciona','Precios','FAQ'].map((l, i) => (
              <li key={i}>
                <a
                  href={`#${['solucion','como-funciona','precios','faq'][i]}`}
                  className="text-sm font-medium text-subtle hover:text-white transition-colors duration-200 no-underline"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan text-deep font-head font-bold text-sm no-underline transition-all duration-200 hover:bg-[#33eeff] hover:shadow-[0_0_24px_rgba(0,229,255,0.4)] hover:-translate-y-0.5"
          >
            <WaIcon />
            Quiero un Agente
          </a>
        </div>
      </div>
    </motion.nav>
  )
}

function WaIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.09.534 4.1 1.558 5.874L0 24l6.325-1.525A11.93 11.93 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 0 1-5.032-1.387l-.36-.215-3.754.904.937-3.633-.235-.373A9.787 9.787 0 0 1 2.182 12c0-5.422 4.396-9.818 9.818-9.818 5.421 0 9.818 4.396 9.818 9.818 0 5.421-4.397 9.818-9.818 9.818z"/>
    </svg>
  )
}
