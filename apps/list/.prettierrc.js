import pompydevPrettierConfig from "@pompydev/prettier-config" with { type: "json" }

/** @type {import("prettier").Options} */
export default {
    ...pompydevPrettierConfig,
    plugins: ["prettier-plugin-tailwindcss"],
}
