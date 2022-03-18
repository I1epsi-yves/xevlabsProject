export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'xevlabsProject',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      //<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      {rel:'stylesheet', href:'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css', integrity:'sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyAec9-XtW3Ps6bTtLNYbIsWAOtP2Qt3LnI",
          authDomain: "xevlabsproject.firebaseapp.com",
          projectId: "xevlabsproject",
          storageBucket: "xevlabsproject.appspot.com",
          messagingSenderId: "480335178736",
          appId: "1:480335178736:web:28c4bc55ac9500b7288b35",
          measurementId: "G-9ZP2W82JSM"
        },
        services: {
          auth: true, // Just as example. Can be any other service
          firestore: true
        }
      }
    ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }/*,
  async asyncData ({ app, params }) {
    const db = app.$fireStore
    const placeId = params.id

    const placeRef = db.collection('place')
    // const snapshot = await placeRef.doc(placeId).get()
    const snapshot = await placeRef.where('parent_ids', 'array-contains', placeId).get()
    const items = snapshot.docs.map(doc => {
      const item = doc.data()
      item.id = doc.id
      return item
    })
    return { items }
  }*/

}
