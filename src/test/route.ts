import { RouteItem } from '$template/route';

export const mockRoute = (): [
  Map<string, RouteItem>,
  Map<string, string[]>
] => {
  const routesMap = new Map<string, string[]>();
  const routes = new Map<string, RouteItem>();

  routes.set('root', { path: '/', element: 'AppElement' });
  routes.set('pageA', { path: '/pageA', element: 'PageElementA' });
  routes.set('pageB', { path: '/pageB', element: 'PageElementB' });
  routes.set('pageC', { path: '/pageC', element: 'PageElementC' });
  routesMap.set('root', ['pageA', 'pageB', 'pageC']);

  return [routes, routesMap];
};
