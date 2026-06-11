import ScrollReveal from './ui/ScrollReveal'

const stats = [
  { num: '48h',  label: 'Tiempo de despliegue' },
  { num: '24/7', label: 'Disponibilidad continua' },
  { num: '3+',   label: 'Idiomas soportados' },
  { num: '0',    label: 'Líneas de código necesarias' },
]

export default function Stats() {
  return (
    <div className="border-y border-white/[0.06] bg-deep/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className={`flex flex-col items-center justify-center py-6 text-center ${i < 3 ? 'border-r border-white/[0.06]' : ''}`}>
                <div
                  className="font-head text-3xl font-bold mb-1"
                  style={{ background: 'linear-gradient(135deg,#00E5FF,#3D6FFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                >
                  {s.num}
                </div>
                <div className="text-xs text-muted">{s.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}
