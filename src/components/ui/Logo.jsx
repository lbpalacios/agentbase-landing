export default function Logo({ height = 36, glowColor = '#00E5FF', textColor = 'white', className = '' }) {
  const w = Math.round(height * (210 / 230))

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width={w}
        height={height}
        viewBox="-2 -2 214 234"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: `drop-shadow(0 0 8px ${glowColor}88) drop-shadow(0 0 20px ${glowColor}44)` }}
      >
        <path
          d="M 21 194 L 21 105 A 84 84 0 0 1 189 105 L 189 194"
          stroke={glowColor}
          strokeWidth="42"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 105,66 a 29,29 0 1,0 0,58 a 29,29 0 1,0 0,-58 Z M 109,82 a 9,9 0 1,0 0,18 a 9,9 0 1,0 0,-18 Z"
          fill={glowColor}
          fillRule="evenodd"
        />
      </svg>
      <span
        className="font-head font-bold tracking-tight"
        style={{
          fontSize: `${height * 0.53}px`,
          color: textColor,
          textShadow: textColor === 'white' ? '0 0 12px rgba(255,255,255,0.15)' : undefined,
          letterSpacing: '-0.01em',
        }}
      >
        AgentBase
      </span>
    </span>
  )
}
