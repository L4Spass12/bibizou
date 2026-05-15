import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        /**
         * Pure neutral dark palette (GLIDE-style).
         * Les noms sont conservés pour faciliter la migration depuis yoga-malin
         * mais les valeurs sont remappées :
         *   dark        = body background (#0a0a0a)
         *   panel       = sections secondaires / cards (#0d0d0d)
         *   teal        = variation panel légèrement plus claire (#111111)
         *   beige       = bordures / tags / subtle bg (#1f1f1f)
         *   cream       = blanc principal (texte et surfaces)
         *   terracotta  = accent = blanc pur (utilisé pour boutons, liens, labels)
         *   sage        = accent de statut (vert)
         */
        dark:       '#FFFBF5',
        panel:      '#FFF4E8',
        teal:       '#FFEAD8',
        beige:      '#F5C9B0',
        cream:      '#3E2A1F',
        terracotta: '#E8724A',
        sage:       '#7CB495',
        accent:     '#F4A26C',
        blush:      '#F8D7C8',
        mint:       '#C8E6D4',
        /* Neutres supplémentaires pour granularité (optional) */
        'n-500':    '#6B5142',
        'n-400':    '#8A7060',
        'n-300':    '#A88E7C',
      },
      fontFamily: {
        display: ['Quicksand', 'system-ui', 'sans-serif'],
        body:    ['Nunito', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'tightest': '-0.04em',
      },
    },
  },
  plugins: [typography],
};
