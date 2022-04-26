"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderLayoutSider = exports.renderLayoutContent = exports.renderLayoutFooter = exports.renderLayoutHeader = exports.renderLayout = void 0;
const util_1 = require("../../template/util");
const renderLayout = ({ element, children }) => {
    var _a;
    const result = `
  const ${element.id} = () => {
    return (
      <Layout ${(0, util_1.generateStyleAndClass)(element)}>
      ${children || ((_a = element.content) === null || _a === void 0 ? void 0 : _a.text)}
      </Layout>
    );
  }
  `;
    return [result, element.id];
};
exports.renderLayout = renderLayout;
const renderLayoutHeader = ({ element, children }) => {
    var _a;
    const result = `
    <Layout.Header ${(0, util_1.generateStyleAndClass)(element)}>
    ${children || ((_a = element.content) === null || _a === void 0 ? void 0 : _a.text)}
    </Layout.Header>
  `;
    return [result, null];
};
exports.renderLayoutHeader = renderLayoutHeader;
const renderLayoutFooter = ({ element, children }) => {
    var _a;
    const result = `
    <Layout.Footer ${(0, util_1.generateStyleAndClass)(element)}>
    ${children || ((_a = element.content) === null || _a === void 0 ? void 0 : _a.text)}
    </Layout.Footer>
  `;
    return [result, null];
};
exports.renderLayoutFooter = renderLayoutFooter;
const renderLayoutContent = ({ element, children }) => {
    var _a;
    const result = `
    <Layout.Content ${(0, util_1.generateStyleAndClass)(element)}>
    ${children || ((_a = element.content) === null || _a === void 0 ? void 0 : _a.text)}
    </Layout.Content>
  `;
    return [result, null];
};
exports.renderLayoutContent = renderLayoutContent;
const renderLayoutSider = ({ element, children }) => {
    var _a;
    const result = `
    <Layout.Sider ${(0, util_1.generateStyleAndClass)(element)}>
    ${children || ((_a = element.content) === null || _a === void 0 ? void 0 : _a.text)}
    </Layout.Sider>
  `;
    return [result, null];
};
exports.renderLayoutSider = renderLayoutSider;
