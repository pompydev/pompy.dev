import { FlatCompat } from "@eslint/eslintrc"
import pompydevEslintConfig from "@pompydev/eslint-config"
import { globalIgnores } from "eslint/config"

const compat = new FlatCompat({
    baseDirectory: import.meta.dirname,
})

export default [
    globalIgnores(["**/.next"]),

    // https://nextjs.org/docs/app/api-reference/config/eslint
    ...compat.config({
        extends: ["next/core-web-vitals", "next/typescript"],
        settings: { next: { rootDir: "apps/blog/" } },
    }),
    {
        rules: {
            "react-hooks/exhaustive-deps": "off",
        },
    },
    ...pompydevEslintConfig,
]
