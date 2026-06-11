const WA = 'https://wa.me/528140235824'

const nav = [
  { label: 'Inicio',          href: '#inicio' },
  { label: 'Solución',        href: '#solucion' },
  { label: 'Cómo funciona',   href: '#como-funciona' },
  { label: 'Precios',         href: '#precios' },
  { label: 'Industrias',      href: '#industrias' },
  { label: 'FAQ',             href: '#faq' },
]

export default function Footer() {
  return (
    <footer className="bg-deep border-t border-white/[0.05] py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <a href="#inicio" className="no-underline flex items-center gap-1.5 group">
            <span className="font-mono text-lg font-bold" style={{ color: '#00E5FF', textShadow: '0 0 16px rgba(0,229,255,0.7)' }}>agent</span>
            <span className="font-mono text-lg font-bold text-white" style={{ textShadow: '0 0 16px rgba(61,111,255,0.4)' }}>base</span>
            <span className="font-mono text-lg font-bold text-cyan opacity-60 animate-pulse">_</span>
          </a>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {nav.map(n => (
              <a key={n.href} href={n.href} className="text-muted hover:text-white transition-colors duration-150 text-xs no-underline font-body">
                {n.label}
              </a>
            ))}
          </nav>

          {/* Contact */}
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold text-cyan no-underline hover:text-white transition-colors duration-150 font-head"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            +52 814 023 5824
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-2 text-muted text-[0.72rem] font-body">
          <span>© {new Date().getFullYear()} AgentBase. Todos los derechos reservados.</span>
          <span>Hecho en México 🇲🇽</span>
        </div>
      </div>
    </footer>
  )
}
