const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * Next.js apps.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  extends: [
    ...[
      "@vercel/style-guide/eslint/node",
      "@vercel/style-guide/eslint/typescript",
      "@vercel/style-guide/eslint/browser",
      "@vercel/style-guide/eslint/react",
      "@vercel/style-guide/eslint/next"
    ].map(require.resolve),
    "turbo"
  ],
  parserOptions: {
    project
  },
  globals: {
    React: true,
    JSX: true
  },
  settings: {
    "import/resolver": {
      typescript: {
        project
      },
      node: {
        extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  ignorePatterns: ["node_modules/", "dist/"],

  rules: {
    "import/no-default-export": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unnecessary-type-assertion": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "unicorn/filename-case": "off",
    "no-nested-ternary": "off",
    camelcase: "off",
    "eslint-comments/require-description": ["off", { ignore: [] }],
    "react/function-component-definition": "off",
    "react/jsx-no-leaked-render": "off",
    "react/no-array-index-key": "off",
    "no-console": "warn"
  }
};
