import path from 'path'
import i18n from './config/i18n'
export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'spa',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css',
      },
    ],
  },

  loading: { color: '#a80b0b' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    {
      src: '~/plugins/lightbox.js',
      ssr: false,
    },
    {
      src: '~/plugins/directives.js',
      ssr: false,
    },
    {
      src: '~/plugins/components.js',
      ssr: false,
    },
    {
      src: '~/plugins/vue-agile.js',
      ssr: false,
    },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/svg',
    [
      'nuxt-i18n',
      // eslint-disable-next-line no-undef

      {
        defaultLocale: 'ar',
        seo: false,
        vueI18nLoader: true,
        strategy: 'no_prefix',
        routesNameSeparator: '_',
        locales: [
          {
            code: 'en',
            name: 'English',
            iso: 'en',
          },
          {
            code: 'ar',
            name: 'Aabic',
            iso: 'ar',
          },
        ],
        vueI18n: i18n,
        vuex: {
          // Module namespace
          moduleName: 'i18n',

          // If enabled, current app's locale is synced with nuxt-i18n store module
          syncLocale: true,

          // If enabled, current translation messages are synced with nuxt-i18n store module
          syncMessages: false,

          // Mutation to commit to set route parameters translations
          syncRouteParams: false,
        },
        beforeLanguageSwitch: (oldLocale, newLocale) => {
          console.log('before')
        },
        onLanguageSwitched: (oldLocale, newLocale) => {
          // store.commit('configration.toggleLang')
          console.log('after')
          // if (newLocale === 'ar') {
          //   document.classList.add('rtl')
          // }
        },
      },
    ],
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    transpile: ['vue-agile'],
    extractCss: true,
    postcss: {
      plugins: {
        'postcss-import': {},
        tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
        'postcss-nested': {},
      },
    },
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        tailwindConfig: {
          test: /tailwind\.config/,
          chunks: 'all',
          priority: 10,
          name: true,
        },
      },
    },
  },
}
