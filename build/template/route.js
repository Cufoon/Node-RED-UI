"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRoute = void 0;
const check_1 = require("$util/check");
const generateStart = (data) => {
    return `
  <Route path='${data.path}' element={<${data.element} />}>
  `;
};
const generateEnd = () => {
    return '</Route>\n';
};
const generateSelfClosing = (data) => {
    let param = `path='${data.path}'`;
    if (data.isIndex === true) {
        param = 'index';
    }
    return `<Route ${param} element={<${data.element} />} />\n`;
};
const scan = (append, route, data, id) => {
    const item = data.get(id);
    if (item !== undefined) {
        if (route.has(id)) {
            const children = route.get(id);
            if ((0, check_1.isArray)(children) && children.length > 0) {
                append(generateStart(item));
                for (let i = 0; i < children.length; ++i) {
                    scan(append, route, data, children[i]);
                }
                append(generateEnd());
            }
        }
        else {
            append(generateSelfClosing(item));
        }
    }
};
const generateRoute = (route, data, id) => {
    let generatedContent = '';
    const append = (content) => {
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
exports.generateRoute = generateRoute;
