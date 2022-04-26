"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderList = void 0;
const util_1 = require("../../template/util");
const renderList = ({ element, children }) => {
    const result = `
    <List ${(0, util_1.generateStyleAndClass)(element)}>
    ${children}
    </List>
  `;
    return [result, null];
};
exports.renderList = renderList;
