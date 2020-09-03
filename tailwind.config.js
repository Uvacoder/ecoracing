/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    colors: {
      primary: 'var(--color-primary)',
      textcolor: 'var(--color)',
      secondary: 'var(--color-seconadry)',

      bglighter: 'var(--bg-lighter)',
      gray: 'var(--gray)',
      bordercolor: 'var(--border-color)',
      secondarybg: 'var(--bg-secondary)',
      white: 'var(--white)',
      black: 'var(--black)',
    },
    container: {
      center: true,
      padding: '15px',
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '992px',
      // => @media (min-width: 1024px) { ... }

      xl: '1200px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  variants: {},
  plugins: [],

  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
