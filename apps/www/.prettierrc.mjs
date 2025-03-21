import pompydevPrettierConfig from "@pompydev/prettier-config" with { type: "json" }

/** @type {import("prettier").Options} */
export default {
    ...pompydevPrettierConfig,
    plugins: ["prettier-plugin-svelte", "prettier-plugin-tailwindcss"],
    overrides: [
        ...pompydevPrettierConfig.overrides,
        { files: "*.svelte", options: { parser: "svelte" } },
    ],
}
