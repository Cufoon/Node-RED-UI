"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appendToFile = void 0;
const tslib_1 = require("tslib");
const node_path_1 = tslib_1.__importDefault(require("node:path"));
const fs_extra_1 = tslib_1.__importDefault(require("fs-extra"));
const appendToFile = (content) => {
    try {
        fs_extra_1.default.appendFileSync(node_path_1.default.resolve(__dirname, '../..', 'test/index.jsx'), content);
    }
    catch (e) {
        console.log(e);
    }
};
exports.appendToFile = appendToFile;
