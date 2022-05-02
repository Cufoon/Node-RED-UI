// import path from 'node:path';
import type { SnowpackUserConfig } from 'snowpack';
import proxy from 'http2-proxy';

export const generateSnowpackConfig = (
  sourcePath: string
): SnowpackUserConfig => {
  return {
    // root: path.resolve(__dirname, '../..', 'test'),
    root: sourcePath,
    mount: {
      public: '/',
      src: '/dist'
    },
    plugins: ['@snowpack/plugin-sass', '@snowpack/plugin-webpack', '@snowpack/plugin-react-refresh'],
    routes: [
      {
        match: 'routes',
        src: '/api/.*',
        dest: (req, res) => {
          // remove /api prefix (optional)
          req.url = req.url?.replace(/^\/api\//, '/api/');
          return proxy.web(req, res, {
            hostname: 'localhost',
            port: 8000
          });
        }
      },
      { match: 'routes', src: '.*', dest: '/index.html' }
    ],
    optimize: {
      /* Example: Bundle your final build: */
      // "bundle": true,
    },
    packageOptions: {
      /* ... */
      knownEntrypoints: ['compute-scroll-into-view']
    },
    devOptions: {
      /* ... */
    },
    buildOptions: {
      /* ... */
    }
  };
};
