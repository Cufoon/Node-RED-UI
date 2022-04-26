"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderLayoutSider = exports.renderLayoutContent = exports.renderLayoutFooter = exports.renderLayoutHeader = exports.renderLayout = void 0;
const util_1 = require("../../template/util");
const renderLayout = ({ element, children }) => {
    const result = `
  const ${element.id} = () => {
    return (
      <Layout ${(0, util_1.generateStyleAndClass)(element)}>
      ${(0, util_1.expandChildStrList)(children, element)}
      </Layout>
    );
  }
  `;
    return [result, element.id];
};
exports.renderLayout = renderLayout;
const renderLayoutHeader = ({ element, children }) => {
    const result = `
    <Layout.Header ${(0, util_1.generateStyleAndClass)(element)}>
    ${(0, util_1.expandChildStrList)(children, element)}
    </Layout.Header>
  `;
    return [result, null];
};
exports.renderLayoutHeader = renderLayoutHeader;
const renderLayoutFooter = ({ element, children }) => {
    const result = `
    <Layout.Footer ${(0, util_1.generateStyleAndClass)(element)}>
    ${(0, util_1.expandChildStrList)(children, element)}
    </Layout.Footer>
  `;
    return [result, null];
};
exports.renderLayoutFooter = renderLayoutFooter;
const renderLayoutContent = ({ element, children }) => {
    const result = `
    <Layout.Content ${(0, util_1.generateStyleAndClass)(element)}>
    ${(0, util_1.expandChildStrList)(children, element)}
    </Layout.Content>
  `;
    return [result, null];
};
exports.renderLayoutContent = renderLayoutContent;
const renderLayoutSider = ({ element, children }) => {
    const result = `
    <Layout.Sider ${(0, util_1.generateStyleAndClass)(element)}>
    ${(0, util_1.expandChildStrList)(children, element)}
    </Layout.Sider>
  `;
    return [result, null];
};
exports.renderLayoutSider = renderLayoutSider;
