import ScrollReveal from './ui/ScrollReveal'
import { SectionLabel } from './Problem'

const steps = [
  { n: '01', title: 'Análisis de negocio',    body: 'Mapeamos tus operaciones: cómo vendes, qué procesos son repetitivos y dónde pierdes más tiempo. El agente aprende tu negocio.' },
  { n: '02', title: 'Instalación del AgentBox', body: 'Enviamos e instalamos el hardware con los módulos personalizados: WhatsApp, CRM, catálogo, agendamiento y más.' },
  { n: '03', title: 'Tu agente trabaja',       body: 'Desde el primer día, tu agente atiende clientes 24/7, genera cotizaciones, agenda citas y hace seguimiento automático.' },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24" style={{ background: 'linear-gradient(180deg,#0A1628,#040C18)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal className="text-center max-w-xl mx-auto mb-14">
          <SectionLabel>Proceso</SectionLabel>
          <h2 className="font-head font-bold tracking-tight mb-3" style={{ fontSize: 'clamp(2rem,4vw,2.8rem)', lineHeight: 1.12 }}>
            Operacional en <span className="gradient-text">3 pasos</span>
          </h2>
          <p className="text-subtle text-base leading-relaxed">
            Sin complicaciones técnicas. Nosotros hacemos el trabajo pesado para que tu agente esté activo rápido.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-[calc(16.66%+44px)] right-[calc(16.66%+44px)] h-px" style={{ background: 'linear-gradient(90deg,#00E5FF,#3D6FFF,#8B5CF6)', opacity: 0.3 }} />

          {steps.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.13}>
              <div className="group text-center p-7 rounded-2xl bg-surface/50 border border-white/[0.06] backdrop-blur transition-all duration-300 hover:-translate-y-2">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 font-head text-lg font-bold text-deep"
                  style={{ background: 'linear-gradient(135deg,#00E5FF,#3D6FFF)', boxShadow: '0 0 30px rgba(0,229,255,0.3)' }}
                >
                  {s.n}
                </div>
                <h3 className="font-head font-semibold text-base mb-2">{s.title}</h3>
                <p className="text-subtle text-sm leading-relaxed">{s.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
