import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ScrollReveal from './ui/ScrollReveal'
import { SectionLabel } from './Problem'

const faqs = [
  { q: '¿Qué es AgentBox y dónde se instala?',           a: 'AgentBox es el hardware en arrendamiento de AgentBase donde corre tu agente de IA de forma local. Se instala en tu negocio y al ser local, tus datos nunca viajan a servidores externos. Tiene opción a compra al final del contrato.' },
  { q: '¿Cuánto tiempo tarda la implementación?',         a: 'El proceso completo toma 48 horas desde que hacemos el análisis de tu negocio. Esto incluye configuración del agente, instalación del hardware y pruebas iniciales. Estarás operacional en menos de 2 días.' },
  { q: '¿Necesito conocimientos técnicos?',               a: 'No. AgentBase está diseñado para dueños de negocio, no para ingenieros. Nosotros nos encargamos de toda la configuración técnica. Solo necesitas contarnos cómo funciona tu negocio.' },
  { q: '¿Hay contratos o penalizaciones por cancelar?',   a: 'No hay contratos de permanencia ni penalizaciones. Puedes cancelar tu suscripción cuando quieras. Creemos en mantener clientes por resultados, no por contratos forzosos.' },
  { q: '¿Es diferente a un chatbot convencional?',        a: 'Completamente diferente. Los chatbots convencionales siguen flujos predefinidos. AgentBase ejecuta tareas reales: genera cotizaciones, agenda citas en tu calendario, hace seguimiento de clientes y procesa pedidos. Es un agente, no un bot.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="py-24 bg-deep">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal className="text-center max-w-lg mx-auto mb-12">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="font-head font-bold tracking-tight" style={{ fontSize: 'clamp(2rem,4vw,2.8rem)', lineHeight: 1.12 }}>
            Preguntas <span className="gradient-text">frecuentes</span>
          </h2>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto space-y-0">
          {faqs.map((f, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <div className="border-b border-white/[0.06]">
                <button
                  className="w-full flex items-center justify-between gap-4 py-5 text-left font-head font-semibold text-sm text-white hover:text-cyan transition-colors duration-200 cursor-pointer bg-transparent border-none"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  {f.q}
                  <span
                    className="w-6 h-6 rounded-md shrink-0 flex items-center justify-center border border-white/[0.08] transition-all duration-300"
                    style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)', borderColor: open === i ? 'rgba(0,229,255,0.4)' : undefined }}
                  >
                    <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-subtle text-sm leading-relaxed pb-5">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
