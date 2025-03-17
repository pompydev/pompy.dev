const title = "pomp's biased & opinionated rankings DB"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devServer: { port: 3001 },
    devtools: { enabled: true },
    modules: ["@nuxtjs/color-mode", "@nuxtjs/tailwindcss"],
    app: {
        head: {
            title, // default fallback title
            titleTemplate: `%s | ${title}`,
            htmlAttrs: {
                lang: "en",
            },
        },
    },

    // https://color-mode.nuxtjs.org/#configuration
    colorMode: {
        classSuffix: "",
    },
})
