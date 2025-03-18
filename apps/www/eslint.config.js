import pompydevEslintConfig from "@pompydev/eslint-config"
import { globalIgnores } from "eslint/config"
import svelte from "eslint-plugin-svelte"
import globals from "globals"
import tseslint from "typescript-eslint"

import svelteConfig from "./svelte.config.js"

export default [
    globalIgnores(["**/.svelte-kit/", "vite.config.ts.*"]),
    ...pompydevEslintConfig,
    ...svelte.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },
    {
        files: ["**/*.svelte", "**/*.svelte.js", "**/*.svelte.ts"],
        languageOptions: {
            parserOptions: {
                projectService: true,
                extraFileExtensions: [".svelte"],
                parser: tseslint.parser,
                svelteConfig,
            },
        },
    },
]
