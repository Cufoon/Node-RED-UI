"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const node_path_1 = tslib_1.__importDefault(require("node:path"));
exports.default = {
    root: node_path_1.default.resolve(__dirname, '..', 'example'),
    mount: {
        public: '/',
        src: '/dist'
    },
    plugins: [
    /* ... */
    ],
    routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
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
