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
        const elements = new Map();
        const elementsMap = new Map();
        elements.set('root', {
            id: 'PageElementA',
            name: 'Button',
            params: { text: 'root' }
        });
        elements.set('Button1', {
            id: 'Button1',
            name: 'Button',
            params: { text: 'Button1' }
        });
        elements.set('Button2', {
            id: 'Button2',
            name: 'Button',
            params: { text: 'Button2' }
        });
        elements.set('Button3', {
            id: 'Button3',
            name: 'Button',
            params: { text: 'Button3' }
        });
        elements.set('Button4', {
            id: 'Button4',
            name: 'Button',
            params: { text: 'Button4' }
        });
        elements.set('Button5', {
            id: 'Button5',
            name: 'Button',
            params: { text: 'Button5' }
        });
        elements.set('Button6', {
            id: 'Button6',
            name: 'Button',
            params: { text: 'Button6' }
        });
        elements.set('Button7', {
            id: 'Button7',
            name: 'Button',
            params: { text: 'Button7' }
        });
        elements.set('Button8', {
            id: 'Button8',
            name: 'Button',
            params: { text: 'Button8' }
        });
        elements.set('Button9', {
            id: 'Button9',
            name: 'Button',
            params: { text: 'Button9' }
        });
        elements.set('Button10', {
            id: 'Button10',
            name: 'Button',
            params: { text: 'Button10' }
        });
        elements.set('Button11', {
            id: 'Button11',
            name: 'Button',
            params: { text: 'Button11' }
        });
        elements.set('Button12', {
            id: 'Button12',
            name: 'Button',
            params: { text: 'Button12' }
        });
        elements.set('Button13', {
            id: 'Button13',
            name: 'Button',
            params: { text: 'Button13' }
        });
        elements.set('Button14', {
            id: 'Button14',
            name: 'Button',
            params: { text: 'Button14' }
        });
        elementsMap.set('root', ['Button2', 'Button5', 'Button9', 'Button12']);
        elementsMap.set('Button5', [
            'Button1',
            'Button3',
            'Button13',
            'Button8',
            'Button4'
        ]);
        elementsMap.set('Button9', [
            'Button6',
            'Button7',
            'Button10',
            'Button11',
            'Button14'
        ]);
        const generatedBody = (0, body_1.generateBody)(elementsMap, elements, 'root');
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
        // console.log(
        //   importation + store + generatedBody + generatedRoutes + appRender
        // );
        return true;
    }
    catch (e) {
        console.log(e);
        return false;
    }
};
exports.generateFile = generateFile;
// generateFile();
