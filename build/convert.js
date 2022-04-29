"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFile = void 0;
const app_1 = require("./template/app");
const body_1 = require("./template/body");
const lib_1 = require("./template/lib");
const route_1 = require("./template/route");
const store_1 = require("./template/store");
const file_1 = require("./util/file");
const generateFile = ({ elements, elementsMap, routes, routesMap }) => {
    try {
        const importation = (0, lib_1.generateImportation)();
        const [generatedBody, storeDefault] = (0, body_1.generateBody)(elementsMap, elements, 'root');
        const store = (0, store_1.generateStore)(storeDefault);
        const appRender = (0, app_1.generateAppRender)('app');
        const generatedRoutes = (0, route_1.generateRoute)(routesMap, routes, 'root');
        (0, file_1.writeToFile)(importation);
        (0, file_1.appendToFile)(store);
        (0, file_1.appendToFile)(generatedBody);
        (0, file_1.appendToFile)(generatedRoutes);
        (0, file_1.appendToFile)(appRender);
        return true;
    }
    catch (e) {
        console.log(e);
        return false;
    }
};
exports.generateFile = generateFile;
