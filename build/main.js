"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compile = void 0;
const tslib_1 = require("tslib");
const node_child_process_1 = tslib_1.__importDefault(require("node:child_process"));
const node_path_1 = tslib_1.__importDefault(require("node:path"));
const fs_extra_1 = tslib_1.__importDefault(require("fs-extra"));
const dayjs_1 = tslib_1.__importDefault(require("dayjs"));
const snowpack = tslib_1.__importStar(require("snowpack"));
const snowpack_1 = require("./config/snowpack");
const _convert_1 = require("./convert");
const _scaffold_1 = require("./scaffold");
// import { mockElement } from './test/element';
// import { mockRoute } from './test/route';
// import { yyy, uu1, uu2 } from './test/xx';
// import { yy2 } from './test/yy';
console.log((0, snowpack_1.generateSnowpackConfig)(__dirname));
// const testProjectPath = path.resolve(__dirname, '../test');
// const testProjectSourcePath = path.resolve(testProjectPath, 'src');
const compile = (sourceData, rootPath) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const projectPath = rootPath;
    const projectSourcePath = node_path_1.default.resolve(projectPath, 'src');
    if (!(0, _scaffold_1.createProject)(rootPath, (_a = sourceData.cufoon) === null || _a === void 0 ? void 0 : _a.title)) {
        return;
    }
    try {
        node_child_process_1.default.execSync('npm install', {
            cwd: projectPath
        });
    }
    catch (e) {
        console.log(e);
        return;
    }
    if (!fs_extra_1.default.existsSync(projectSourcePath)) {
        fs_extra_1.default.mkdirSync(projectSourcePath, { recursive: true });
    }
    // const [elements, elementsMap] = mockElement();
    // const [routes, routesMap] = mockRoute();
    if (!(0, _convert_1.generateFile)(rootPath, {
        elements: sourceData.elements,
        elementsMap: sourceData.elementsMap,
        routes: sourceData.routes,
        routesMap: sourceData.routesMap,
        menuData: sourceData.menu
    })) {
        return;
    }
    const config = snowpack.createConfiguration(Object.assign({}, (0, snowpack_1.generateSnowpackConfig)(rootPath)));
    const result = yield snowpack.build({ config });
    console.log(result);
    console.log((0, dayjs_1.default)().format('YYYY-MM-DD HH:mm:ss'), 'build success');
    // const server = await snowpack.startServer({ config });
    // console.log(server);
});
exports.compile = compile;
// compile();
