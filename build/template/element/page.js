"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderPage = void 0;
const util_1 = require("../../template/util");
const renderPage = ({ element, children }) => {
    const result = `
    const ${element.id} = () => {
      return (${(0, util_1.expandChildStrListWithRoot)(children, element)});
    }
  `;
    return [result, element.id];
};
exports.renderPage = renderPage;
