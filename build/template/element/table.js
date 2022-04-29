"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderTable = void 0;
const util_1 = require("../../template/util");
const renderTable = ({ element }) => {
    var _a, _b, _c, _d;
    let actions = '';
    (_b = (_a = element.option) === null || _a === void 0 ? void 0 : _a.columnsAction) === null || _b === void 0 ? void 0 : _b.map((item) => {
        actions += `<Button onClick={()=>{ ${item.handler}(item) }}>${item.text}</Button>`;
    });
    if (actions !== '') {
        actions = `{title:'操作', render: (...args)=>{
      const item = args[1];
      return (<Space>${actions}</Space>)
    }}`;
    }
    let columns = `[${((_c = element.option) === null || _c === void 0 ? void 0 : _c.columns) || ''}${actions}]`;
    if (columns !== '[]') {
        columns = `columns={${columns}}`;
    }
    const result = `
    <Table
    ${(0, util_1.generateStyleAndClass)(element)}
    ${columns}
    ${(0, util_1.expandOptions)(element.option, [
        'data',
        'loading',
        'noDataElement',
        'stripe',
        'size',
        'pagePosition'
    ])}
    ${(0, util_1.expandOptions2Object)((_d = element.option) === null || _d === void 0 ? void 0 : _d.pagination, 'pagination', [
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
