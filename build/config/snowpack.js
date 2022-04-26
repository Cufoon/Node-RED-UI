"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSnowpackConfig = void 0;
const tslib_1 = require("tslib");
const node_path_1 = tslib_1.__importDefault(require("node:path"));
const generateSnowpackConfig = () => {
    return {
        root: node_path_1.default.resolve(__dirname, '../..', 'test'),
        mount: {
            public: '/',
            src: '/dist'
        },
        plugins: ['@snowpack/plugin-sass', '@snowpack/plugin-react-refresh'],
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
