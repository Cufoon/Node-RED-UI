import { isArray } from '$util/check';

export interface RouteItem {
  path?: string;
  element: string;
  isIndex?: boolean;
}
export type RouteMap = Map<string, string[]>;
export type RouteItemMap = Map<string, RouteItem>;

const generateStart = (data: RouteItem) => {
  return `
  <Route path='${data.path}' element={<${data.element} />}>
  `;
};

const generateEnd = () => {
  return '</Route>\n';
};

const generateSelfClosing = (data: RouteItem) => {
  let param = `path='${data.path}'`;
  if (data.isIndex === true) {
    param = 'index';
  }

  return `<Route ${param} element={<${data.element} />} />\n`;
};

const scan = (
  append: (v: string) => void,
  route: RouteMap,
  data: RouteItemMap,
  id: string
) => {
  const item = data.get(id);
  if (item !== undefined) {
    if (route.has(id)) {
      const children = route.get(id);
      if (isArray(children) && children.length > 0) {
        append(generateStart(item));
        for (let i = 0; i < children.length; ++i) {
          scan(append, route, data, children[i]);
        }
        append(generateEnd());
      }
    } else {
      append(generateSelfClosing(item));
    }
  }
};

export const generateRoute = (
  route: RouteMap,
  data: RouteItemMap,
  id: string
) => {
  let generatedContent = '';
  const append = (content: string) => {
    generatedContent += content;
  };
  scan(append, route, data, id);
  // appendToFile(generatedContent);

  return `
  const RouteList = () => {
    return (
      <Routes>
      ${generatedContent}
      </Routes>
    );
  };
  `;
};
