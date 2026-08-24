import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    // Service copy/config lives here and carries class names (hero focal points).
    // Without this glob Tailwind never sees them and they silently no-op.
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // tweakcn theme cmpj5t4zo000104jobb8048zz — warm cream + deep ocean
        primary: {
          DEFAULT: '#074469',
          light: '#0b5c8c',
          dark: '#053554',
        },
        ink: {
          DEFAULT: '#123145',
          deep: '#0b2233',
        },
        accent: {
          DEFAULT: '#3b6985',
          light: '#5d87a1',
          // pale: small text on dark navy surfaces (4.5:1+ on ink/ink-deep)
          pale: '#a7c4d6',
          dark: '#2c536b',
        },
        cream: {
          DEFAULT: '#faf9f5',
          dark: '#f5f4ee',
        },
        sand: {
          DEFAULT: '#e9e6dc',
          dark: '#ded8c4',
        },
        earth: {
          DEFAULT: '#3d3929',
          light: '#535146',
          muted: '#83827d',
        },
        line: '#dad9d4',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['var(--font-display)', 'Georgia', 'serif'],
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        body: '-0.01em',
      },
    },
  },
  plugins: [],
}

export default config
