import pompydevEslintConfig from "@pompydev/eslint-config"
import { globalIgnores } from "eslint/config"

export default [
    globalIgnores(["**/.nuxt/", "**/.output/"]),
    ...pompydevEslintConfig,
]
