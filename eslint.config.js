import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  {
    ignores: [
      "build/**",
      "node_modules/**",
      "src/components/ui/**",
      "src/hooks/use-mobile.ts",
      "src/lib/utils.ts",
      "src/vite-env.d.ts",
    ],
  },
  js.configs.recommended,
  react.configs.flat["jsx-runtime"],
  {
    ...reactHooks.configs["recommended-latest"],
    files: ["src/**/*.{js,jsx}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    settings: { react: { version: "detect" } },
    rules: {
      ...reactHooks.configs["recommended-latest"].rules,
      "react/jsx-uses-vars": "error",
      "no-unused-vars": [
        "error",
        { varsIgnorePattern: "^React$", argsIgnorePattern: "^_" },
      ],
    },
  },
];
