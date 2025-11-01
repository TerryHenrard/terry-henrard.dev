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
    'core/components/ui/**',
    'features/ai/components/ai-elements/**',
  ]),
  {
    rules: {
      'react/no-unescaped-entities': 'off',
      'react/jsx-no-literals': [
        'error',
        {
          noStrings: true,
          ignoreProps: true,
          allowedStrings: [],
        },
      ],
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'next/link',
              message:
                'Please use Link from @/features/i18n/lib/navigation for internationalized routing.',
            },
          ],
        },
      ],
    },
  },
]);

export default eslintConfig;
