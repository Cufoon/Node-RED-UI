"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderTable = void 0;
const util_1 = require("../../template/util");
const renderTable = ({ element }) => {
    const result = `
    <Table
    ${(0, util_1.generateStyleAndClass)(element)}
    ${(0, util_1.expandOptions)(element.option, [
        'columns',
        'data',
        'loading',
        'noDataElement',
        'stripe',
        'size',
        'pagination',
        'pagePosition'
    ])}
    />
  `;
    return [result, null];
};
exports.renderTable = renderTable;
