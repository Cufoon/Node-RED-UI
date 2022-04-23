"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const snowpack_1 = tslib_1.__importDefault(require("snowpack"));
const env_1 = tslib_1.__importDefault(require("./env"));
console.log(env_1.default);
const config = snowpack_1.default.createConfiguration(Object.assign({}, env_1.default));
(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const result = yield snowpack_1.default.build({ config });
    console.log(result);
}))();
