import fetch from 'node-fetch'

export default {
  srcDir: 'app/',

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-static',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  generate: {
    async routes() {
      let fetchResponse
      await fetch(`https://jsonplaceholder.typicode.com/todos/`)
        .then(async (res) => {
          fetchResponse = await res.json()
        })
        .catch((err) => {
          console.log(err)
        })

      const routes = fetchResponse.map((el) => {
        return {
          route: `/static/${el.id}`,
          payload: el,
        }
      })
      return [
        {
          route: '/static',
          payload: fetchResponse,
        },
        ...routes,
      ]
    },
  },
}
