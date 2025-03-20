const title = "pomp's biased & opinionated list of ..."

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devServer: { port: 3001 },
    devtools: { enabled: true },
    modules: [
        "@nuxtjs/color-mode",
        "@nuxtjs/tailwindcss",
        "@nuxtjs/google-fonts",
        "@nuxt/icon",
        "@nuxthub/core",
    ],
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
        // default is "-mode". Without this, tailwind dark mode won't work.
        classSuffix: "",
    },

    // https://google-fonts.nuxtjs.org/getting-started/options
    googleFonts: {
        families: {
            "Noto Sans KR": true,
        },
    },
})
