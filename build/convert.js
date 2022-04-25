"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFile = void 0;
const app_1 = require("./template/app");
const body_1 = require("./template/body");
const lib_1 = require("./template/lib");
const route_1 = require("./template/route");
const store_1 = require("./template/store");
const file_1 = require("./util/file");
const generateFile = () => {
    try {
        const importation = (0, lib_1.generateImportation)();
        const store = (0, store_1.generateStore)();
        const generatedBody = (0, body_1.generateBody)();
        const appRender = (0, app_1.generateAppRender)('app');
        const routesMap = new Map();
        const routes = new Map();
        routes.set('root', { path: '/', element: 'AppElement' });
        routes.set('pageA', { path: '/pageA', element: 'PageElementA' });
        routes.set('pageB', { path: '/pageB', element: 'PageElementB' });
        routes.set('pageC', { path: '/pageC', element: 'PageElementC' });
        routesMap.set('root', ['pageA', 'pageB', 'pageC']);
        const generatedRoutes = (0, route_1.generateRoute)(routesMap, routes, 'root');
        (0, file_1.writeToFile)(importation);
        (0, file_1.appendToFile)(store);
        (0, file_1.appendToFile)(generatedBody);
        (0, file_1.appendToFile)(generatedRoutes);
        (0, file_1.appendToFile)(appRender);
        console.log(importation + store + generatedBody + generatedRoutes + appRender);
        return true;
    }
    catch (e) {
        console.log(e);
        return false;
    }
};
exports.generateFile = generateFile;
// generateFile();
