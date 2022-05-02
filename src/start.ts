import path from 'node:path';
import { createServer } from 'vite';

let onlyServer: any = null;

export const startServer = async (rootPath: string) => {
  if (onlyServer !== null) {
    try {
      await onlyServer.close();
    } catch (e) {
      console.log(e);
    }
  }
  const server = await createServer({
    // 任何合法的用户配置选项，加上 `mode` 和 `configFile`
    // configFile: false,
    root: path.resolve(rootPath, 'build'),
    server: {
      host: '0.0.0.0',
      port: 37702,
      hmr: {
        path: 'wss',
        port: 443,
        clientPort: 443
      },
      proxy: {
        '/api/v1': 'http://localhost:37701'
      }
    }
  });
  onlyServer = server;
  await server.listen();

  server.printUrls();
};
