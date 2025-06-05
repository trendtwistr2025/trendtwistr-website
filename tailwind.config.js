/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // Add any other top-level folders in src/ if you use Tailwind classes there
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: "#f87d39",
        secondary: "#2B267F",
        'dark-text': "#1e293b",
        'subtle-text': "#64748b",
        'light-bg': "#f8fafc",
        'accent-yellow': "#FFC107",
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
        fadeIn: 'fadeIn 0.8s ease-out forwards',
        slideInLeft: 'slideInLeft 0.8s ease-out forwards',
        slideInRight: 'slideInRight 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideInLeft: {
            '0%': { opacity: 0, transform: 'translateX(-50px)' },
            '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        slideInRight: {
            '0%': { opacity: 0, transform: 'translateX(50px)' },
            '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
// The extra '}' at the end was removed from here