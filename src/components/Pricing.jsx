import ScrollReveal from './ui/ScrollReveal'
import { SectionLabel } from './Problem'

const WA = 'https://wa.me/528140235824'

const plans = [
  {
    name: 'Base',
    price: '$9,990',
    desc: 'Para negocios que están comenzando con IA y quieren un agente en un canal principal.',
    features: ['1 módulo personalizado','1 canal (WhatsApp o Web)','Dashboard básico','Soporte por email','Hardware en arrendamiento c/ opción a compra','Instalación incluida'],
    cta: 'Comenzar', ctaStyle: 'outline', featured: false,
  },
  {
    name: 'Premium',
    price: '$19,990',
    desc: 'La opción ideal para empresas que necesitan atender múltiples canales con CRM integrado.',
    features: ['3 módulos personalizados','Multicanal (WhatsApp, Web, más)','CRM integrado completo','Dashboard avanzado','Soporte prioritario','Hardware en arrendamiento c/ opción a compra'],
    cta: 'Comenzar ahora', ctaStyle: 'solid', featured: true,
  },
  {
    name: 'Enterprise',
    price: '$39,990',
    desc: 'Para empresas que requieren automatización total con soporte dedicado 24/7.',
    features: ['Módulos ilimitados','Todos los canales disponibles','CRM + integraciones avanzadas','Soporte 24/7 dedicado','SLA garantizado','Hardware premium c/ opción a compra'],
    cta: 'Contactar ventas', ctaStyle: 'outline', featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="precios" className="py-24" style={{ background: 'linear-gradient(180deg,#0A1628,#040C18)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal className="text-center max-w-xl mx-auto mb-14">
          <SectionLabel>Precios</SectionLabel>
          <h2 className="font-head font-bold tracking-tight mb-3" style={{ fontSize: 'clamp(2rem,4vw,2.8rem)', lineHeight: 1.12 }}>
            Planes para cada <span className="gradient-text">tamaño de negocio</span>
          </h2>
          <p className="text-subtle text-base">Sin contratos anuales. Sin costos ocultos. Cancela cuando quieras.</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {plans.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div
                className={`relative flex flex-col p-6 rounded-2xl border backdrop-blur h-full transition-all duration-300 hover:-translate-y-2 ${
                  p.featured
                    ? 'border-cyan/30 bg-gradient-to-b from-cyan/[0.07] to-blue-a/[0.07] shadow-[0_0_60px_rgba(0,229,255,0.08)]'
                    : 'border-white/[0.07] bg-surface/50'
                }`}
              >
                {p.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[0.68rem] font-bold text-deep font-head whitespace-nowrap" style={{ background: 'linear-gradient(135deg,#00E5FF,#3D6FFF)' }}>
                    Más popular
                  </div>
                )}

                <div className="font-head text-[0.72rem] font-bold tracking-[0.12em] uppercase text-muted mb-2">{p.name}</div>

                <div className={`font-head text-4xl font-bold mb-0.5 ${p.featured ? 'gradient-text' : ''}`}>
                  {p.price} <span className="text-base font-normal text-muted">MXN/mes</span>
                </div>

                {/* Installation fee badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[0.68rem] font-semibold text-amber-400 mb-3 mt-1.5" style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)' }}>
                  + $5,000 instalación
                  <span className="font-normal text-amber-600/80">(pago único)</span>
                </div>

                <p className="text-subtle text-sm leading-relaxed pb-4 mb-4 border-b border-white/[0.06]">{p.desc}</p>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {p.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-subtle">
                      <span className="w-4 h-4 rounded-full shrink-0 mt-0.5 flex items-center justify-center" style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)' }}>
                        <svg width="9" height="9" fill="none" stroke="#22C55E" strokeWidth="2.5" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5"/></svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-3 rounded-xl font-head font-bold text-sm no-underline transition-all duration-200 ${
                    p.ctaStyle === 'solid'
                      ? 'bg-cyan text-deep hover:bg-[#33eeff] hover:shadow-[0_8px_32px_rgba(0,229,255,0.4)]'
                      : 'border border-white/[0.1] text-white hover:border-white/25 hover:bg-white/[0.04]'
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
