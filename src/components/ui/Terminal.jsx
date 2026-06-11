import { useState, useEffect, useRef } from 'react'

const SCRIPT = [
  { type: 'cmd',  text: 'agentbase init --analyze-business' },
  { type: 'out',  text: 'Escaneando procesos de negocio...' },
  { type: 'prog', text: '' },
  { type: 'out',  text: '✓ Análisis completado — 0.8s' },
  { type: 'gap' },
  { type: 'cmd',  text: 'agentbase deploy --channels=whatsapp,web --crm' },
  { type: 'out',  text: 'Instalando módulos personalizados...' },
  { type: 'ok',   text: '✓ WhatsApp 24/7 activado' },
  { type: 'ok',   text: '✓ CRM integrado' },
  { type: 'ok',   text: '✓ Dashboard conectado' },
  { type: 'gap' },
  { type: 'cmd',  text: 'agentbase status --live' },
  { type: 'stat', text: '' },
]

function ProgressBar() {
  const [p, setP] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setP(v => v >= 100 ? 100 : v + 4), 40)
    return () => clearInterval(t)
  }, [])
  const filled = Math.round(p / 5)
  return (
    <span className="font-mono text-xs text-cyan">
      {'[' + '█'.repeat(filled) + '░'.repeat(20 - filled) + `] ${p}%`}
    </span>
  )
}

function StatusBlock() {
  const [conv, setConv] = useState(127)
  useEffect(() => {
    const t = setInterval(() => setConv(v => v + Math.floor(Math.random() * 3)), 2200)
    return () => clearInterval(t)
  }, [])
  return (
    <div className="font-mono text-xs space-y-0.5 mt-0.5">
      <div><span className="text-green-a">●</span><span className="text-subtle ml-2">Agente:</span> <span className="text-cyan">ACTIVO</span></div>
      <div><span className="text-green-a">●</span><span className="text-subtle ml-2">Latencia:</span> <span className="text-white">&lt;3ms</span></div>
      <div><span className="text-green-a">●</span><span className="text-subtle ml-2">Uptime:</span> <span className="text-white">100%</span></div>
      <div><span className="text-cyan">↑</span><span className="text-subtle ml-2">Conversaciones hoy:</span> <span className="text-cyan">{conv}</span></div>
    </div>
  )
}

export default function Terminal() {
  const [lines, setLines]  = useState([])
  const [typing, setTyping] = useState('')
  const [cursor, setCursor] = useState(true)
  const idxRef = useRef(0)
  const restart = useRef(null)

  useEffect(() => {
    const blink = setInterval(() => setCursor(v => !v), 530)
    return () => clearInterval(blink)
  }, [])

  const runScript = () => {
    idxRef.current = 0
    setLines([])
    setTyping('')

    const step = () => {
      const entry = SCRIPT[idxRef.current]
      if (!entry) {
        restart.current = setTimeout(() => { runScript() }, 4000)
        return
      }

      if (entry.type === 'gap') {
        setLines(l => [...l, { type: 'gap' }])
        idxRef.current++
        setTimeout(step, 180)
        return
      }

      if (entry.type === 'cmd') {
        let i = 0
        const type = () => {
          setTyping(entry.text.slice(0, i + 1))
          i++
          if (i < entry.text.length) setTimeout(type, 28)
          else {
            setTyping('')
            setLines(l => [...l, entry])
            idxRef.current++
            setTimeout(step, 220)
          }
        }
        setTimeout(type, 200)
      } else {
        setTimeout(() => {
          setLines(l => [...l, entry])
          idxRef.current++
          setTimeout(step, entry.type === 'prog' ? 1100 : 160)
        }, 120)
      }
    }
    step()
  }

  useEffect(() => {
    runScript()
    return () => clearTimeout(restart.current)
  }, [])

  const renderLine = (entry, i) => {
    if (entry.type === 'gap') return <div key={i} className="h-2" />
    if (entry.type === 'prog') return <div key={i} className="py-0.5"><ProgressBar /></div>
    if (entry.type === 'stat') return <div key={i}><StatusBlock /></div>
    if (entry.type === 'cmd')  return (
      <div key={i} className="flex items-start gap-1.5">
        <span className="text-cyan select-none shrink-0">$</span>
        <span className="text-white font-mono text-xs">{entry.text}</span>
      </div>
    )
    if (entry.type === 'ok') return (
      <div key={i} className="font-mono text-xs text-green-a pl-3">{entry.text}</div>
    )
    return <div key={i} className="font-mono text-xs text-subtle pl-3">{entry.text}</div>
  }

  return (
    <div className="relative w-full max-w-md">
      {/* Glow */}
      <div className="absolute -inset-4 rounded-2xl bg-cyan/5 blur-2xl pointer-events-none" />

      <div className="relative bg-surface/80 backdrop-blur border border-white/[0.07] rounded-2xl overflow-hidden shadow-2xl">
        {/* Topbar */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.06] bg-deep/60">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
          <span className="ml-3 font-mono text-[0.65rem] text-muted tracking-wider">agentbase — terminal</span>
        </div>

        {/* Screen */}
        <div className="p-4 font-mono text-xs space-y-1 min-h-[280px] max-h-[320px] overflow-hidden">
          {/* Top line with scanline effect */}
          <div className="text-cyan/40 text-[0.6rem] mb-2 tracking-widest">AGENTBASE OS v2.4.1 — SECURE SHELL</div>

          {lines.map(renderLine)}

          {/* Typing line */}
          {typing && (
            <div className="flex items-start gap-1.5">
              <span className="text-cyan select-none shrink-0">$</span>
              <span className="text-white">{typing}</span>
            </div>
          )}

          {/* Cursor */}
          {!typing && (
            <div className="flex items-center gap-1.5">
              <span className="text-cyan select-none">$</span>
              <span
                className="inline-block w-2 h-3.5 bg-cyan"
                style={{ opacity: cursor ? 1 : 0, transition: 'opacity 0.1s' }}
              />
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
