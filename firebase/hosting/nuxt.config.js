require("dotenv").config()

const baseUrl = process.env.BASE_URL || "http://localhost:3000"
const gaeUrl = process.env.GAE_URL || "http://localhost:8080"

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: "ja",
    },
    title: "kik4.work",
    titleTemplate: "%s | kik4.work",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "kik4's page: The engineer's portfolio, blog and others.",
      },
      { hid: "og:title", property: "og:title", content: "kik4.work" },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:image",
        property: "og:image",
        content: baseUrl + "/icon-512x512.png",
      },
      { hid: "og:site_name", property: "og:site_name", content: "kik4.work" },
      {
        hid: "og:description",
        property: "og:description",
        content: "kik4's page: The engineer's portfolio, blog and others.",
      },
      { name: "twitter:card", content: "summary" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "icon", size: "192x192", href: "/icon-192x192.png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/manifest.json" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Noto+Sans+JP&amp;subset=japanese",
      },
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        })
      }
    },
  },
  //
  css: ["@/assets/css/reboot.css"],
  generate: {
    fallback: true,
  },
  plugins: [
    { src: "~plugins/global.js" },
    { src: "~plugins/ga.js", ssr: false },
    { src: "~plugins/url.js" },
    { src: "~plugins/jsonld.js" },
  ],
  env: {
    BASE_URL: baseUrl,
    GAE_URL: gaeUrl,
  },
  modules: [["@nuxtjs/sitemap"], ["@nuxtjs/axios"]],
  sitemap: {
    path: "/sitemap.xml",
    hostname: baseUrl,
    generate: true,
  },
}
