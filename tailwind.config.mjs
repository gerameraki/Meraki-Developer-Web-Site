/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6ebff',
          100: '#ccd7ff',
          200: '#99afff',
          300: '#6687ff',
          400: '#335fff',
          500: '#0831FF',
          600: '#0627cc',
          700: '#051d99',
          800: '#031466',
          900: '#020a33',
          950: '#010519',
        },
        secondary: {
          50: '#eefbfa',
          100: '#d5f5f4',
          200: '#adeaec',
          300: '#75d9df',
          400: '#3bbfcc',
          500: '#25a2b3',
          600: '#208297',
          700: '#1f697a',
          800: '#1f5564',
          900: '#1d4853',
          950: '#0f2e38',
        },
        accent: {
          50: '#fff8ed',
          100: '#ffefd2',
          200: '#ffdca5',
          300: '#ffc26d',
          400: '#ff9f36',
          500: '#ff7f11',
          600: '#f15c07',
          700: '#c84009',
          800: '#9f3311',
          900: '#802c11',
          950: '#461405',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.75s ease-in forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}