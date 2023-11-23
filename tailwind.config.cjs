/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
			colors: {
        white: {
          DEFAULT: '#F3F4F1',
        },
				black: {
					DEFAULT: '#131410',
				}
			}
    },
    container: {
      padding: {
        DEFAULT: '1rem'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
};
