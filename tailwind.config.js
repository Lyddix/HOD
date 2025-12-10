/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f2f9',
          100: '#b3d6ed',
          200: '#80bae1',
          300: '#4d9ed5',
          400: '#1a82c9',
          500: '#045C96', // Base color
          600: '#034a78',
          700: '#02385a',
          800: '#01263c',
          900: '#00141e',
        },
        yellow: {
          50: '#fffef6',
          100: '#fffce8',
          200: '#fff9d1',
          300: '#fff6ba',
          400: '#fff3a3',
          500: '#FCB83B', // Base yellow
          600: '#e3a635',
          700: '#ca942f',
          800: '#b18229',
          900: '#987023',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
}

