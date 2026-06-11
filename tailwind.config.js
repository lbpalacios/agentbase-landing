/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        deep:    '#040C18',
        base:    '#0A1628',
        surface: '#0C1A30',
        cyan:    '#00E5FF',
        'blue-a': '#3D6FFF',
        'green-a':'#22C55E',
        'purple-a':'#8B5CF6',
        muted:   '#5C7099',
        subtle:  '#8899B8',
      },
      fontFamily: {
        head: ['"Space Grotesk"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
