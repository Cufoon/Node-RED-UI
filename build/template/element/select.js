"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderSelect = void 0;
const util_1 = require("../../template/util");
const renderSelect = ({ element }) => {
    var _a, _b;
    let options = '';
    (_b = (_a = element.option) === null || _a === void 0 ? void 0 : _a.select_options) === null || _b === void 0 ? void 0 : _b.map((item) => {
        options += `<Select.Option key={${item.value}} value={${item.value}}>${item.text}</Select.Option>`;
    });
    const result = `
    <Select
    ${(0, util_1.generateStyleAndClass)(element)}
    ${(0, util_1.expandOptions)(element.option, [
        'defaultValue',
        'value',
        'options',
        'onChange'
    ])}
    >
    ${options}
    </Select>
  `;
    return [result, null];
};
exports.renderSelect = renderSelect;
