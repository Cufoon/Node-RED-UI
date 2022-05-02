import { ElementBuildData } from '$interface/element';
import { generateAppRender } from '$template/app';
import { generateBody } from '$template/body';
import { generateImportation } from '$template/lib';
import { generateRoute, RouteItem } from '$template/route';
import { generateStore } from '$template/store';
import { appendToFile, writeToFile } from '$util/file';

export interface GenerateData {
  elements: Map<string, ElementBuildData>;
  elementsMap: Map<string, string[]>;
  routes: Map<string, RouteItem>;
  routesMap: Map<string, string[]>;
  menuData: any[];
  menuDefault: string;
  pageDefault: string;
}

type Func = (v1: string, v2: GenerateData) => boolean;

export const generateFile: Func = (
  rootPath: string,
  {
    elements,
    elementsMap,
    routes,
    routesMap,
    menuData,
    menuDefault,
    pageDefault
  }
) => {
  try {
    const importation = generateImportation(menuData, menuDefault, pageDefault);
    const [generatedBody, storeDefault] = generateBody(
      elementsMap,
      elements,
      'root'
    );
    const store = generateStore(storeDefault);
    const appRender = generateAppRender('app');
    const generatedRoutes = generateRoute(routesMap, routes, 'root');

    writeToFile(rootPath, importation);
    appendToFile(rootPath, store);
    appendToFile(rootPath, generatedBody);
    appendToFile(rootPath, generatedRoutes);
    appendToFile(rootPath, appRender);

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};
