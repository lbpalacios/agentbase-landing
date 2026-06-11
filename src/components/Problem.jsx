import ScrollReveal from './ui/ScrollReveal'

const cards = [
  {
    icon: <ClockIcon />,
    title: 'Respuestas tardías',
    body:  'El 78% de clientes compra al primero que responde. Cada hora de demora le cuesta ventas reales a tu empresa.',
  },
  {
    icon: <TeamIcon />,
    title: 'Equipo limitado',
    body:  'Contratar más personal para atender chat, llamadas y seguimientos consume tiempo y presupuesto que no siempre tienes.',
  },
  {
    icon: <GearIcon />,
    title: 'Procesos manuales',
    body:  'Cotizaciones, recordatorios, seguimientos y agendamiento consumen horas de trabajo que podrían automatizarse completamente.',
  },
]

export default function Problem() {
  return (
    <section id="problema" className="py-24" style={{ background: 'linear-gradient(180deg,#040C18,#0A1628)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal className="text-center max-w-xl mx-auto mb-14">
          <SectionLabel>El problema</SectionLabel>
          <h2 className="font-head font-bold tracking-tight mb-4" style={{ fontSize: 'clamp(2rem,4vw,2.8rem)', lineHeight: 1.12 }}>
            Tu negocio pierde oportunidades <span className="gradient-text">cada día</span>
          </h2>
          <p className="text-subtle text-base leading-relaxed">
            Mientras duermes, tus clientes preguntan, comparan y se van con la competencia. Un equipo humano no puede estar en todos lados.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <div className="group p-7 rounded-2xl bg-surface/50 border border-white/[0.06] backdrop-blur transition-all duration-300 hover:border-red-500/25 hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-11 h-11 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-5 text-red-400">
                  {c.icon}
                </div>
                <h3 className="font-head font-semibold text-base mb-2">{c.title}</h3>
                <p className="text-subtle text-sm leading-relaxed">{c.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SectionLabel({ children }) {
  return (
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan/25 bg-cyan/[0.06] mb-4">
      <span className="w-1.5 h-1.5 rounded-full bg-cyan" style={{ boxShadow: '0 0 6px #00E5FF' }} />
      <span className="text-cyan text-[0.68rem] font-bold tracking-[0.1em] uppercase">{children}</span>
    </div>
  )
}

function ClockIcon()  { return <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> }
function TeamIcon()   { return <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg> }
function GearIcon()   { return <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> }
