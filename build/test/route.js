"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockRoute = void 0;
const mockRoute = () => {
    const routesMap = new Map();
    const routes = new Map();
    routes.set('root', { path: '/', element: 'AppElement' });
    routes.set('pageA', { path: '/pageA', element: 'PageElementA' });
    routes.set('pageB', { path: '/pageB', element: 'PageElementB' });
    routes.set('pageC', { path: '/pageC', element: 'PageElementC' });
    routesMap.set('root', ['pageA', 'pageB', 'pageC']);
    return [routes, routesMap];
};
exports.mockRoute = mockRoute;
