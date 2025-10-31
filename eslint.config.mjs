import nextVitals from 'eslint-config-next/core-web-vitals';
import { defineConfig, globalIgnores } from 'eslint/config';

const eslintConfig = defineConfig([
  ...nextVitals,
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'node_modules',
  ]),
  {
    rules: {
      'react/no-unescaped-entities': 'off',
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'next/link',
              importNames: ['Link'],
              message: 'Please use Link from next-intl/link for internationalized routing.',
            },
          ],
        },
      ],
    },
  },
]);

export default eslintConfig;
