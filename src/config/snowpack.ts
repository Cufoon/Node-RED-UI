import path from 'node:path';
import type { SnowpackUserConfig } from 'snowpack';

export const generateSnowpackConfig = (): SnowpackUserConfig => {
  return {
    root: path.resolve(__dirname, '../..', 'test'),
    mount: {
      public: '/',
      src: '/dist'
    },
    plugins: [
      /* ... */
    ],
    routes: [
      /* Enable an SPA Fallback in development: */
      { match: 'routes', src: '.*', dest: '/index.html' }
    ],
    optimize: {
      /* Example: Bundle your final build: */
      // "bundle": true,
    },
    packageOptions: {
      /* ... */
    },
    devOptions: {
      /* ... */
    },
    buildOptions: {
      /* ... */
    }
  };
};