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
      port: 1337,
      proxy: {
        '/api/v1': 'http://localhost:8000'
      }
    }
  });
  onlyServer = server;
  await server.listen();

  server.printUrls();
};
