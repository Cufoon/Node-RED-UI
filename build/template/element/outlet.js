"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderOutlet = void 0;
const renderOutlet = ({ element }) => {
    const result = `
    const ${element.id} = Outlet;
  `;
    return [result, element.id];
};
exports.renderOutlet = renderOutlet;
