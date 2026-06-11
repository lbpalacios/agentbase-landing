import { useState } from 'react'
import SpotlightCard from './ui/SpotlightCard'
import ScrollReveal from './ui/ScrollReveal'
import { SectionLabel } from './Problem'

export default function Solution() {
  return (
    <section id="solucion" className="py-24 bg-base">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <ScrollReveal>
            <SectionLabel>La solución</SectionLabel>
            <h2 className="font-head font-bold tracking-tight" style={{ fontSize: 'clamp(2rem,4vw,2.8rem)', lineHeight: 1.12 }}>
              Todo lo que tu negocio<br />
              <span className="gradient-text">necesita, automatizado</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15} className="md:max-w-[320px]">
            <p className="text-subtle text-base leading-relaxed">
              No es un chatbot genérico. AgentBase aprende tu negocio y ejecuta tareas reales.
            </p>
          </ScrollReveal>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* Card 1 — Large: WhatsApp 24/7 */}
          <ScrollReveal delay={0.05} className="sm:col-span-2">
            <SpotlightCard
              color="0,229,255"
              className="h-full p-6 rounded-2xl bg-surface/50 border border-cyan/[0.12] backdrop-blur transition-all duration-300 hover:border-cyan/30 hover:-translate-y-1"
            >
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="flex-1">
                  <BentoIcon color="rgba(0,229,255,0.1)" borderColor="rgba(0,229,255,0.2)">
                    <PhoneIcon stroke="#00E5FF" />
                  </BentoIcon>
                  <h3 className="font-head font-semibold text-base text-white mb-2">WhatsApp 24/7 con IA</h3>
                  <p className="text-subtle text-sm leading-relaxed mb-4">
                    Tu agente responde, califica prospectos, agenda citas y genera cotizaciones por WhatsApp, sin importar la hora ni el día.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {[['100%','Uptime'],['<3s','Respuesta'],['∞','Conversaciones']].map(([n,l]) => (
                      <div key={l} className="flex flex-col items-center px-3 py-2 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                        <span className="font-head text-base font-bold text-cyan">{n}</span>
                        <span className="text-[0.62rem] text-muted mt-0.5">{l}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <PulseVisual />
              </div>
            </SpotlightCard>
          </ScrollReveal>

          {/* Card 2 — Multi-idioma */}
          <ScrollReveal delay={0.1}>
            <SpotlightCard
              color="139,92,246"
              className="h-full p-6 rounded-2xl bg-surface/50 border border-purple-a/[0.12] backdrop-blur transition-all duration-300 hover:border-purple-a/30 hover:-translate-y-1"
            >
              <BentoIcon color="rgba(139,92,246,0.1)" borderColor="rgba(139,92,246,0.2)">
                <GlobeIcon stroke="#8B5CF6" />
              </BentoIcon>
              <h3 className="font-head font-semibold text-base text-white mb-2">Multi-idioma</h3>
              <p className="text-subtle text-sm leading-relaxed">
                Atiende clientes en español, inglés y más. Tu agente detecta y responde en el idioma del usuario automáticamente.
              </p>
            </SpotlightCard>
          </ScrollReveal>

          {/* Card 3 — Métricas */}
          <ScrollReveal delay={0.12}>
            <SpotlightCard
              color="61,111,255"
              className="h-full p-6 rounded-2xl bg-surface/50 border border-blue-a/[0.12] backdrop-blur transition-all duration-300 hover:border-blue-a/30 hover:-translate-y-1"
            >
              <BentoIcon color="rgba(61,111,255,0.1)" borderColor="rgba(61,111,255,0.2)">
                <ChartIcon stroke="#3D6FFF" />
              </BentoIcon>
              <h3 className="font-head font-semibold text-base text-white mb-2">Dashboard en tiempo real</h3>
              <p className="text-subtle text-sm leading-relaxed">
                Visualiza conversaciones, métricas de conversión y rendimiento desde un panel centralizado.
              </p>
            </SpotlightCard>
          </ScrollReveal>

          {/* Card 4 — CRM */}
          <ScrollReveal delay={0.14}>
            <SpotlightCard
              color="34,197,94"
              className="h-full p-6 rounded-2xl bg-surface/50 border border-green-a/[0.12] backdrop-blur transition-all duration-300 hover:border-green-a/30 hover:-translate-y-1"
            >
              <BentoIcon color="rgba(34,197,94,0.1)" borderColor="rgba(34,197,94,0.2)">
                <CrmIcon stroke="#22C55E" />
              </BentoIcon>
              <h3 className="font-head font-semibold text-base text-white mb-2">CRM integrado</h3>
              <p className="text-subtle text-sm leading-relaxed">
                Cada conversación queda registrada. Tu agente hace seguimiento automático de prospectos y clientes.
              </p>
            </SpotlightCard>
          </ScrollReveal>

          {/* Card 5 — Sin código (full width) */}
          <ScrollReveal delay={0.1} className="sm:col-span-2 lg:col-span-1">
            <SpotlightCard
              color="0,229,255"
              className="h-full p-6 rounded-2xl bg-surface/50 border border-cyan/[0.12] backdrop-blur transition-all duration-300 hover:border-cyan/30 hover:-translate-y-1"
            >
              <BentoIcon color="rgba(0,229,255,0.08)" borderColor="rgba(0,229,255,0.15)">
                <CodeIcon stroke="#00E5FF" />
              </BentoIcon>
              <h3 className="font-head font-semibold text-base text-white mb-2">Sin código, sin complicaciones</h3>
              <p className="text-subtle text-sm leading-relaxed">
                No necesitas saber programar ni contratar un equipo técnico. Configuramos todo y tu agente queda listo en 48 horas.
              </p>
            </SpotlightCard>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}

function BentoIcon({ color, borderColor, children }) {
  return (
    <div
      className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
      style={{ background: color, border: `1px solid ${borderColor}` }}
    >
      {children}
    </div>
  )
}

function PulseVisual() {
  return (
    <div className="shrink-0 w-32 h-24 rounded-xl bg-cyan/5 border border-cyan/10 flex items-center justify-center relative overflow-hidden">
      {[1,2,3].map(i => (
        <span
          key={i}
          className="absolute w-16 h-16 rounded-full border-2 border-cyan/50"
          style={{ animation: `pulseRing 2s ease-out ${(i-1)*0.7}s infinite` }}
        />
      ))}
      <span className="w-4 h-4 rounded-full bg-cyan relative z-10" style={{ boxShadow: '0 0 16px #00E5FF' }} />
      <style>{`@keyframes pulseRing{0%{transform:scale(.5);opacity:1}100%{transform:scale(2.5);opacity:0}}`}</style>
    </div>
  )
}

function PhoneIcon({ stroke }) { return <svg width="20" height="20" fill="none" stroke={stroke} strokeWidth="1.8" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.64 3.38 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.09 6.09l.96-.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.8 16z"/></svg> }
function GlobeIcon({ stroke })  { return <svg width="20" height="20" fill="none" stroke={stroke} strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> }
function ChartIcon({ stroke })  { return <svg width="20" height="20" fill="none" stroke={stroke} strokeWidth="1.8" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> }
function CrmIcon({ stroke })    { return <svg width="20" height="20" fill="none" stroke={stroke} strokeWidth="1.8" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg> }
function CodeIcon({ stroke })   { return <svg width="20" height="20" fill="none" stroke={stroke} strokeWidth="1.8" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> }
