import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        white: '#FFFFFF',
        blue: '#4A77FF',
        cyan: '#40E2E8',
        green: '#00C696',
        'light-blue': '#EDFCFF',
        gray: '#EFF1F6',
        dark: '#343741',
        'off-white': '#FBFBFB',
        'medium-gray': '#5E626F',
        'charcoal-blue': '#344054',
        'bright-yellow': '#FBFF23',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
