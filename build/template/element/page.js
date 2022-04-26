"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderPage = void 0;
const renderPage = ({ element, children }) => {
    const result = `
  const ${element.id} = () => {
    return (
    <>
    ${children}
    </>);
  }
  `;
    return [result, element.id];
};
exports.renderPage = renderPage;
