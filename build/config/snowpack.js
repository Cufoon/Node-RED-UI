"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSnowpackConfig = void 0;
const tslib_1 = require("tslib");
const http2_proxy_1 = tslib_1.__importDefault(require("http2-proxy"));
const generateSnowpackConfig = (sourcePath) => {
    return {
        // root: path.resolve(__dirname, '../..', 'test'),
        root: sourcePath,
        mount: {
            public: '/',
            src: '/dist'
        },
        plugins: ['@snowpack/plugin-sass', '@snowpack/plugin-react-refresh'],
        routes: [
            {
                match: 'routes',
                src: '/api/.*',
                dest: (req, res) => {
                    var _a;
                    // remove /api prefix (optional)
                    req.url = (_a = req.url) === null || _a === void 0 ? void 0 : _a.replace(/^\/api\//, '/api/');
                    return http2_proxy_1.default.web(req, res, {
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
exports.generateSnowpackConfig = generateSnowpackConfig;
