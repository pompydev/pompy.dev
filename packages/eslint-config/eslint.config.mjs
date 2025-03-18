import pluginJs from "@eslint/js"
import { globalIgnores } from "eslint/config"
import pluginImport from "eslint-plugin-import"
import pluginOxlint from "eslint-plugin-oxlint"
import pluginSimpleImportSort from "eslint-plugin-simple-import-sort"
import turbo from "eslint-plugin-turbo"
import tseslint from "typescript-eslint"

export default tseslint.config([
    globalIgnores(["**/dist/", "**/build/"]),
    pluginJs.configs.recommended,
    tseslint.configs.strict,
    {
        rules: {
            "@typescript-eslint/no-non-null-assertion": "off", //https://typescript-eslint.io/rules/no-non-null-assertion
            "@typescript-eslint/consistent-type-imports": "error", // https://typescript-eslint.io/rules/consistent-type-imports
        },
    },
    turbo.configs["flat/recommended"],
    {
        plugins: {
            import: pluginImport,
        },
        rules: {
            "import/first": "error",
            "import/newline-after-import": "error",
            "import/no-anonymous-default-export": "off",
            "import/no-duplicates": "error",
        },
    },
    {
        plugins: {
            "simple-import-sort": pluginSimpleImportSort,
        },
        rules: {
            "simple-import-sort/imports": "error",
            "simple-import-sort/exports": "error",
        },
    },
    ...pluginOxlint.configs["flat/recommended"],
])
