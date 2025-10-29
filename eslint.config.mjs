import { defineConfig, globalIgnores } from "eslint/config";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = defineConfig([
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "node_modules"
  ]),
  {
    rules: {'react/no-unescaped-entities': 'off'}
  }
]);

export default eslintConfig;
