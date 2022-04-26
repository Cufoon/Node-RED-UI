import { Element } from '$interface/element';
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
    const elements = new Map<string, Element>();
    const elementsMap = new Map<string, string[]>();
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
    const generatedBody = generateBody(elementsMap, elements, 'root');
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

    // console.log(
    //   importation + store + generatedBody + generatedRoutes + appRender
    // );
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

// generateFile();
