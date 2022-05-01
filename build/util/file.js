"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeToFile = exports.appendToFile = void 0;
const tslib_1 = require("tslib");
const node_path_1 = tslib_1.__importDefault(require("node:path"));
const fs_extra_1 = tslib_1.__importDefault(require("fs-extra"));
const appendToFile = (rootPath, content) => {
    try {
        fs_extra_1.default.appendFileSync(node_path_1.default.resolve(rootPath, 'src/index.jsx'), content);
    }
    catch (e) {
        console.log(e);
    }
};
exports.appendToFile = appendToFile;
const writeToFile = (rootPath, content) => {
    try {
        fs_extra_1.default.writeFileSync(node_path_1.default.resolve(rootPath, 'src/index.jsx'), content);
    }
    catch (e) {
        console.log(e);
    }
};
exports.writeToFile = writeToFile;
