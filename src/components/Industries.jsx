import ScrollReveal from './ui/ScrollReveal'
import { SectionLabel } from './Problem'

const list = [
  { icon: <HomeIcon />,   name: 'Inmobiliaria',      color: '#00E5FF' },
  { icon: <HeartIcon />,  name: 'Clínicas Dentales', color: '#00E5FF' },
  { icon: <MapIcon />,    name: 'Turismo',            color: '#3D6FFF' },
  { icon: <DollarIcon />, name: 'Contabilidad',       color: '#3D6FFF' },
  { icon: <TruckIcon />,  name: 'Logística',          color: '#8B5CF6' },
  { icon: <FoodIcon />,   name: 'Restaurantes',       color: '#8B5CF6' },
  { icon: <BagIcon />,    name: 'Retail',             color: '#22C55E' },
  { icon: <BookIcon />,   name: 'Educación',          color: '#22C55E' },
]

export default function Industries() {
  return (
    <section id="industrias" className="py-24 bg-base">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal className="text-center max-w-lg mx-auto mb-12">
          <SectionLabel>Industrias</SectionLabel>
          <h2 className="font-head font-bold tracking-tight mb-3" style={{ fontSize: 'clamp(2rem,4vw,2.8rem)', lineHeight: 1.12 }}>
            Para cualquier <span className="gradient-text">tipo de negocio</span>
          </h2>
          <p className="text-subtle text-base leading-relaxed">
            AgentBase se adapta a tu industria, no al revés.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {list.map((item, i) => (
            <ScrollReveal key={i} delay={(i % 4) * 0.07}>
              <div
                className="flex flex-col items-center gap-3 p-5 rounded-xl border border-white/[0.06] bg-surface/40 backdrop-blur text-center cursor-default transition-all duration-200 hover:-translate-y-1 group"
                style={{ '--c': item.color }}
              >
                <span
                  className="transition-colors duration-200 group-hover:drop-shadow-[0_0_8px_var(--c)]"
                  style={{ color: item.color }}
                >
                  {item.icon}
                </span>
                <span className="font-head text-sm font-semibold">{item.name}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

const s = { width:26, height:26, fill:'none', stroke:'currentColor', strokeWidth:1.5 }
function HomeIcon()   { return <svg {...s} viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> }
function HeartIcon()  { return <svg {...s} viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> }
function MapIcon()    { return <svg {...s} viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> }
function DollarIcon() { return <svg {...s} viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> }
function TruckIcon()  { return <svg {...s} viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg> }
function FoodIcon()   { return <svg {...s} viewBox="0 0 24 24"><path d="M3 2h1l2 8-1.5 1.5A16 16 0 0 0 12 19a16 16 0 0 0 7.5-7.5L18 10l2-8h1M9 22v-4m6 4v-4m-6 4h6"/></svg> }
function BagIcon()    { return <svg {...s} viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg> }
function BookIcon()   { return <svg {...s} viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg> }
