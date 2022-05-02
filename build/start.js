"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const tslib_1 = require("tslib");
const node_path_1 = tslib_1.__importDefault(require("node:path"));
const vite_1 = require("vite");
let onlyServer = null;
const startServer = (rootPath) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    if (onlyServer !== null) {
        try {
            yield onlyServer.close();
        }
        catch (e) {
            console.log(e);
        }
    }
    const server = yield (0, vite_1.createServer)({
        // 任何合法的用户配置选项，加上 `mode` 和 `configFile`
        // configFile: false,
        root: node_path_1.default.resolve(rootPath, 'build'),
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
    yield server.listen();
    server.printUrls();
});
exports.startServer = startServer;
