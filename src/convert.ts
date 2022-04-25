import { generateAppRender } from '$template/app';
import { generateBody } from '$template/body';
import { generateImportation } from '$template/lib';
import { generateRoute, RouteItem } from '$template/route';
import { generateStore } from '$template/store';
import { appendToFile, writeToFile } from '$util/file';

export const generateFile = () => {
  try {
    const importation = generateImportation();
    const store = generateStore();
    const generatedBody = generateBody();
    const appRender = generateAppRender('app');

    const routesMap = new Map<string, string[]>();
    const routes = new Map<string, RouteItem>();

    routes.set('root', { path: '/', element: 'AppElement' });
    routes.set('pageA', { path: '/pageA', element: 'PageElementA' });
    routes.set('pageB', { path: '/pageB', element: 'PageElementB' });
    routes.set('pageC', { path: '/pageC', element: 'PageElementC' });
    routesMap.set('root', ['pageA', 'pageB', 'pageC']);

    const generatedRoutes = generateRoute(routesMap, routes, 'root');
    writeToFile(importation);
    appendToFile(store);
    appendToFile(generatedBody);
    appendToFile(generatedRoutes);
    appendToFile(appRender);

    console.log(
      importation + store + generatedBody + generatedRoutes + appRender
    );
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

// generateFile();
