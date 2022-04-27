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
}

type Func = (v: GenerateData) => boolean;

export const generateFile: Func = ({
  elements,
  elementsMap,
  routes,
  routesMap
}) => {
  try {
    const importation = generateImportation();
    const store = generateStore();
    const generatedBody = generateBody(elementsMap, elements, 'root');
    const appRender = generateAppRender('app');
    const generatedRoutes = generateRoute(routesMap, routes, 'root');

    writeToFile(importation);
    appendToFile(store);
    appendToFile(generatedBody);
    appendToFile(generatedRoutes);
    appendToFile(appRender);

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};
