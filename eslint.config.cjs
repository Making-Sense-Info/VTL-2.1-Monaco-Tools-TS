const tsParser = require("@typescript-eslint/parser");
const tsPlugin = require("@typescript-eslint/eslint-plugin");
const prettier = require("eslint-config-prettier");

module.exports = [
    {
        ignores: ["node_modules/**", "dist/**", ".yarn_home/**", "CHANGELOG.md", "eslint.config.cjs"],
    },
    {
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
            },
        },
        plugins: {
            "@typescript-eslint": tsPlugin,
        },
        rules: {
            ...(tsPlugin.configs.recommended?.rules || {}),
            "no-extra-boolean-cast": "off",
            "@typescript-eslint/explicit-module-boundary-types": "off",
            ...(prettier.rules || {}),
        },
    },
];
