"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const node_child_process_1 = tslib_1.__importDefault(require("node:child_process"));
const node_path_1 = tslib_1.__importDefault(require("node:path"));
const fs_extra_1 = tslib_1.__importDefault(require("fs-extra"));
// import * as snowpack from 'snowpack';
const snowpack_1 = require("./config/snowpack");
const _convert_1 = require("./convert");
const _scaffold_1 = require("./scaffold");
const dayjs_1 = tslib_1.__importDefault(require("dayjs"));
console.log((0, snowpack_1.generateSnowpackConfig)());
const testProjectPath = node_path_1.default.resolve(__dirname, '../test');
const testProjectSourcePath = node_path_1.default.resolve(testProjectPath, 'src');
const compile = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    if (!(0, _scaffold_1.createProject)()) {
        return;
    }
    try {
        node_child_process_1.default.execSync('npm install', {
            cwd: testProjectPath
        });
    }
    catch (e) {
        console.log(e);
        return;
    }
    if (!fs_extra_1.default.existsSync(testProjectSourcePath)) {
        fs_extra_1.default.mkdirSync(testProjectSourcePath, { recursive: true });
    }
    if (!(0, _convert_1.generateFile)()) {
        return;
    }
    console.log((0, dayjs_1.default)().format('YYYY-MM-DD HH:mm:ss'), 'build success');
    // const config = snowpack.createConfiguration({ ...generateSnowpackConfig() });
    // // const result = await snowpack.build({ config });
    // const server = await snowpack.startServer({ config });
    // // console.log(result);
    // console.log(server);
});
compile();
