"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderTable = void 0;
const util_1 = require("../../template/util");
const renderTable = ({ element }) => {
    var _a;
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
        'pagePosition'
    ])}
    ${(0, util_1.expandOptions2Object)((_a = element.option) === null || _a === void 0 ? void 0 : _a.pagination, 'pagination', [
        'showTotal',
        'sizeCanChange',
        'sizeOptions',
        'showJumper',
        'onChange',
        'defaultPageSize',
        'defaultCurrent',
        'total',
        'pageSize',
        'current'
    ])}
    />
  `;
    return [result, null];
};
exports.renderTable = renderTable;
