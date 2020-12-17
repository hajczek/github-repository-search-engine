export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Github Repositories Finder",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Page with Github Repositories Finder"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["~/assets/scss/main.scss"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ["@nuxtjs/apollo"],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["@nuxtjs/apollo", "@nuxtjs/style-resources"],

  apollo: {
    clientConfigs: {
      default: "~/plugins/apollo-config.js"
    }
  },
  errorHandler: "~/plugins/errorhandler.apollo.js",
  styleResources: {
    scss: ["~/assets/scss/variables.scss"]
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
