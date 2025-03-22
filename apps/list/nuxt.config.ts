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
        "nuxt-umami",
    ],
    app: {
        head: {
            title, // default fallback title
            titleTemplate: `%s | ${title}`,
            link: [
                { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
            ],
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
            "Noto Sans KR": [
                // 100, // thin
                // 200, // extralight
                // 300, // light
                400, // normal
                // 500, // medium
                600, // semibold
                // 700, // bold
                800, // extrabold
                // 900, // black
            ],
        },
    },

    // https://umami.nuxt.dev/api/configuration
    umami: {
        id: "deb8f91b-5fe5-4082-ab35-de3c0e8f84fc",
        host: "https://umami.pompy.dev",
        autoTrack: true,
        ignoreLocalhost: true,
        domains: ["list.pompy.dev"],
    },
})
