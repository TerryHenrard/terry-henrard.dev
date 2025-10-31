import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  reactCompiler: true,
  typedRoutes: true,
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
};

const withNextIntl = createNextIntlPlugin({
  requestConfig: './features/i18n/lib/request.ts',
  experimental: {
    createMessagesDeclaration: './features/i18n/messages/en.json',
  },
});

export default withNextIntl(nextConfig);
