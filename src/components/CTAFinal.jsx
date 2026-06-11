import ScrollReveal from './ui/ScrollReveal'

const WA = 'https://wa.me/528140235824'

export default function CTAFinal() {
  return (
    <section className="py-28 relative overflow-hidden" style={{ background: 'linear-gradient(180deg,#040C18,#0A1628)' }}>
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(ellipse,rgba(0,229,255,0.06) 0%,transparent 70%)' }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold font-head mb-6 text-cyan" style={{ background: 'rgba(0,229,255,0.07)', border: '1px solid rgba(0,229,255,0.15)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan" style={{ animation: 'blink 2s ease-in-out infinite' }} />
            Agentes disponibles ahora
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-head font-bold tracking-tight mb-5" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', lineHeight: 1.08 }}>
            Tu negocio no debería<br />
            <span className="gradient-text">perder clientes mientras duermes</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-subtle text-lg leading-relaxed max-w-lg mx-auto mb-8">
            Agenda una llamada de 20 minutos. Analizamos tu negocio y te mostramos exactamente cómo un agente de IA puede transformarlo.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.28}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-head font-bold text-base text-deep no-underline transition-all duration-200 hover:-translate-y-1 active:translate-y-0"
              style={{ background: 'linear-gradient(135deg,#00E5FF,#3D6FFF)', boxShadow: '0 8px 40px rgba(0,229,255,0.3)' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Quiero un agente ahora
            </a>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-head font-bold text-base text-white no-underline transition-all duration-200 hover:border-white/25 hover:bg-white/[0.04]"
              style={{ border: '1px solid rgba(255,255,255,0.1)' }}
            >
              Ver demo
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.38}>
          <p className="text-muted text-xs mt-6">Sin compromisos. Sin tarjeta de crédito. Respuesta en menos de 1 hora.</p>
        </ScrollReveal>
      </div>

      <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:.3}}`}</style>
    </section>
  )
}
