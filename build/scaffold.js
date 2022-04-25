"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProject = void 0;
const tslib_1 = require("tslib");
const project_1 = require("$template/project");
const fs_extra_1 = tslib_1.__importDefault(require("fs-extra"));
const node_path_1 = tslib_1.__importDefault(require("node:path"));
const createProject = () => {
    const rootPath = node_path_1.default.resolve(__dirname, '../test/public');
    const indexHtmlPath = node_path_1.default.resolve(__dirname, '../test/public/index.html');
    const indexCssPath = node_path_1.default.resolve(__dirname, '../test/public/index.css');
    const packageJSONPath = node_path_1.default.resolve(__dirname, '../test/package.json');
    const indexHtml = (0, project_1.generateIndexHtml)('Cufoon Web');
    const indexCss = (0, project_1.generateIndexCss)();
    const packageJSON = (0, project_1.generatePackageJSON)();
    if (!fs_extra_1.default.existsSync(rootPath)) {
        fs_extra_1.default.mkdirSync(rootPath, { recursive: true });
    }
    try {
        fs_extra_1.default.writeFileSync(indexHtmlPath, indexHtml);
        fs_extra_1.default.writeFileSync(indexCssPath, indexCss);
        fs_extra_1.default.writeFileSync(packageJSONPath, packageJSON);
        return true;
    }
    catch (e) {
        console.log(e);
        return false;
    }
};
exports.createProject = createProject;
