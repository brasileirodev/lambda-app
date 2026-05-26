import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        neutral: {
          1000: '#000000',
          900: '#0b0b0b',
          800: '#262625',
          700: '#42413e',
          600: '#5e5d58',
          500: '#797872',
          400: '#95948c',
          300: '#b0afa6',
          200: '#cccbbf',
          100: '#e7e6d9',
          0: '#ffffff',
        },
        ultraviolet: {
          400: '#815ef6',
          500: '#6236f4',
        },
        shell: '#e7e6d9',
        terminal: '#0b0b0b',
      },
      fontFamily: {
        mono: ['"Suisse Intl Mono"', '"Courier New"', 'monospace'],
        sans: ['"Suisse Intl"', 'Helvetica', 'Arial', 'sans-serif'],
        pixel: ['apkarchivr21', 'monospace'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.5rem',
        '2xl': '2rem',
        '3xl': '2.5rem',
        '5xl': '4.5rem',
        '6xl': '6rem',
        '7xl': '7.315rem',
      },
      fontWeight: {
        light: '300',
        regular: '400',
        semibold: '600',
      },
      lineHeight: {
        none: '100%',
        tight: '110%',
        snug: '120%',
        relaxed: '150%',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0em',
        widest: '0.05em',
      },
      spacing: {
        '2xs': '20px',
        xs: '40px',
        sm: '60px',
        md: '80px',
        lg: '100px',
        xl: '160px',
      },
      height: {
        header: '72px',
      },
      maxWidth: {
        container: '1398px',
      },
      transitionTimingFunction: {
        snappy: 'cubic-bezier(0.6, 0, 0.4, 1)',
      },
      transitionDuration: {
        snappy: '100ms',
        smooth: '400ms',
      },
    },
  },
  plugins: [],
};

export default config;
