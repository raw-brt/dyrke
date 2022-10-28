/* eslint-disable quotes */
module.exports = {
    env: {
      browser: true,
      es2021: true,
      jest: true,
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier",
    ],
    overrides: [],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: ["react", "react-hooks", "@typescript-eslint", "prettier"],
    rules: {
      "react/react-in-jsx-scope": "off",
      "spaced-comment": ["error", "always", { markers: ["/"] }],
      camelcase: "warn",
      quotes: ["warn", "double"],
      "no-duplicate-imports": "error",
      "no-undef": "off",
      "react/jsx-curly-brace-presence": ["warn", { props: "never", children: "never" }],
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
    settings: {
      "import/resolver": {
        typescript: {},
      },
      react: {
        version: "detect",
      },
    },
    globals: {
      React: true,
      JSX: true,
    },
  };