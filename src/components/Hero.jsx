import { motion } from 'framer-motion'
import TextDecrypt from './ui/TextDecrypt'
import Terminal from './ui/Terminal'

const WA = 'https://wa.me/528140235824'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-svh flex items-center pt-16 overflow-hidden">
      {/* Radial glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-cyan/[0.07] blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[400px] rounded-full bg-blue-a/[0.07] blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full bg-purple-a/[0.05] blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan/30 bg-cyan/[0.07] mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" style={{ boxShadow: '0 0 6px #00E5FF' }} />
              <span className="text-cyan text-xs font-semibold tracking-widest uppercase">IA dedicada para tu negocio</span>
            </motion.div>

            <h1 className="font-head font-bold leading-[1.06] tracking-tight mb-5" style={{ fontSize: 'clamp(2.6rem,5.5vw,4rem)' }}>
              <TextDecrypt
                text="Agentes de IA que"
                delay={300}
                speed={0.7}
                className="block text-white"
              />
              <TextDecrypt
                text="trabajan por ti"
                delay={800}
                speed={0.7}
                className="block gradient-text"
              />
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.7 }}
              className="text-subtle text-lg leading-relaxed mb-8 max-w-[440px]"
            >
              Tu negocio con inteligencia artificial dedicada. Sin código, sin complicaciones. Hardware en arrendamiento. Operacional en <span className="text-cyan font-semibold">48 horas</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cyan text-deep font-head font-bold text-base no-underline transition-all duration-200 hover:bg-[#33eeff] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,229,255,0.4)]"
                style={{ boxShadow: '0 0 30px rgba(0,229,255,0.25)' }}
              >
                <WaIcon />
                Quiero un Agente
              </a>
              <a
                href="#precios"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/[0.1] text-white font-head font-semibold text-base no-underline transition-all duration-200 hover:border-white/25 hover:bg-white/[0.04] hover:-translate-y-0.5"
              >
                Ver Precios
              </a>
            </motion.div>
          </div>

          {/* Right — Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex justify-center"
          >
            <Terminal />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function WaIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.09.534 4.1 1.558 5.874L0 24l6.325-1.525A11.93 11.93 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 0 1-5.032-1.387l-.36-.215-3.754.904.937-3.633-.235-.373A9.787 9.787 0 0 1 2.182 12c0-5.422 4.396-9.818 9.818-9.818 5.421 0 9.818 4.396 9.818 9.818 0 5.421-4.397 9.818-9.818 9.818z"/>
    </svg>
  )
}
