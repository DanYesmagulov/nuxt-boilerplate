import server from './server'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Billbord',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/scss/main.scss'],

  // Global variables and mixins
  styleResources: {
    scss: ['~/assets/scss/_mixins.scss', '~/assets/scss/_variables.scss'],
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    // https://www.npmjs.com/package/v-click-outside
    { src: '@/plugins/vClickOutside', ssr: false },
    // https://www.npmjs.com/package/vue2-touch-events
    { src: '@/plugins/vue2TouchEvents', ssr: false },
    // https://typescript.nuxtjs.org/cookbook/store/
    { src: '@/plugins/axiosAccessor' },
    // https://axios.nuxtjs.org/extend
    { src: '@/plugins/axios' },
    // https://github.com/mercs600/vue2-perfect-scrollbar#readme
    { src: '@/plugins/vue2PerfectScrollBar', ssr: false },
    // https://swiperjs.com/vue
    { src: '@/plugins/vueSwiper', ssr: false },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: false,

  // Server app entrypoint
  serverMiddleware: [...server],

  server: {
    host: '0.0.0.0', // default: localhost
  },

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://i18n.nuxtjs.org/setup
    'nuxt-i18n',
    // https://github.com/nuxt-community/device-module
    '@nuxtjs/device',
    // https://auth.nuxtjs.org/guide/setup
    '@nuxtjs/auth-next',
  ],

  i18n: {
    locales: [
      { code: 'ru', iso: 'ru-RU', file: 'ru-RU.js', name: 'Ru' },
      { code: 'en', iso: 'en-US', file: 'en-US.js', name: 'En' },
    ],
    lazy: true,
    defaultLocale: 'ru',
    langDir: 'lang/',
  },

  auth: {
    strategies: {
      local: {
        scheme: 'refresh',
        token: {
          property: 'access_token',
          maxAge: 3600,
        },
        refreshToken: {
          property: 'refresh_token',
          data: 'refresh_token',
          maxAge: 60 * 60 * 24 * 30,
        },
        user: {
          property: 'data.attributes',
        },
        endpoints: {
          login: { url: 'auth/login', method: 'post' },
          refresh: {
            url: 'auth/token',
            method: 'post',
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            },
          },
          user: {
            url: 'auth/profile',
            method: 'get',
          },
          logout: false,
        },
      },
    },
    cookie: {
      options: { sameSite: true },
    },
    redirect: {
      login: '/auth',
      logout: '/',
      callback: '/auth',
      home: '/',
    },
    plugins: ['@/plugins/auth'],
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: '',
    headers: {
      common: {
        'Content-Type': 'application/vnd.api+json; charset=UTF-8',
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: 'vuex-module-decorators',
  },
}
