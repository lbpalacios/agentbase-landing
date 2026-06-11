import { useState, useEffect } from 'react'
import ScrollReveal from './ui/ScrollReveal'
import { SectionLabel } from './Problem'

const specs = ['TLS 1.2+ encriptado','Uptime 24/7','Certificación LFPDPPP']
const items = [
  'Sin dependencia de servicios cloud externos',
  'Backups automáticos encriptados diariamente',
  'Hardware en arrendamiento con opción a compra',
  'Instalación y configuración incluida',
]

export default function AgentBox() {
  return (
    <section id="agentbox" className="py-24 bg-deep">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Visual */}
          <ScrollReveal direction="right">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-8 rounded-full" style={{ background: 'radial-gradient(ellipse,rgba(0,229,255,0.06) 0%,transparent 70%)' }} />
                <DeviceBox />
              </div>
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal delay={0.15}>
            <SectionLabel>Hardware incluido</SectionLabel>
            <h2 className="font-head font-bold tracking-tight mb-4" style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', lineHeight: 1.12 }}>
              AgentBox: tu IA en tu negocio,<br />
              <span className="gradient-text">no en la nube</span>
            </h2>
            <p className="text-subtle text-base leading-relaxed mb-5">
              A diferencia de soluciones cloud, AgentBox procesa todo localmente. Tus datos nunca salen de tus instalaciones.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {specs.map(s => (
                <div key={s} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-green-a" style={{ background: 'rgba(34,197,94,0.07)', border: '1px solid rgba(34,197,94,0.15)' }}>
                  <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5"/></svg>
                  {s}
                </div>
              ))}
            </div>

            <ul className="space-y-3">
              {items.map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-subtle">
                  <span className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center mt-0.5" style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)' }}>
                    <svg width="10" height="10" fill="none" stroke="#22C55E" strokeWidth="2.5" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5"/></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

function DeviceBox() {
  const [scanY, setScanY] = useState(0)
  useEffect(() => {
    let y = 0
    const t = setInterval(() => { y = (y + 1) % 100; setScanY(y) }, 30)
    return () => clearInterval(t)
  }, [])

  return (
    <div
      className="w-52 h-52 rounded-3xl flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(145deg,#0C1A30,#071120)',
        border: '1px solid rgba(0,229,255,0.15)',
        boxShadow: '0 0 60px rgba(0,229,255,0.1),0 40px 80px rgba(0,0,0,0.6)',
      }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-[20%] right-[20%] h-px" style={{ background: 'linear-gradient(90deg,transparent,#00E5FF,transparent)' }} />
      {/* Scan line */}
      <div className="absolute left-0 right-0 h-px pointer-events-none" style={{ top: `${scanY}%`, background: 'linear-gradient(90deg,transparent,rgba(0,229,255,0.15),transparent)' }} />

      <div className="w-2 h-2 rounded-full bg-green-a mb-3" style={{ boxShadow: '0 0 10px #22C55E', animation: 'blink 2.5s ease-in-out infinite' }} />
      <div className="font-mono text-xl font-bold text-white tracking-tight">AgentBox</div>
      <div className="font-mono text-[0.6rem] text-muted tracking-[0.12em] uppercase mt-1">Vault Edition</div>

      <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:.3}}`}</style>
    </div>
  )
}
