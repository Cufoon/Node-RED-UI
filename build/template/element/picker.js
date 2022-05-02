"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderRangePicker = void 0;
const util_1 = require("../../template/util");
const renderRangePicker = ({ element }) => {
    var _a, _b, _c;
    const labelRequired = (((_a = element.option) === null || _a === void 0 ? void 0 : _a.required) && `<span style={{color: 'red'}}>*</span>`) || '';
    const label = `<div>${labelRequired}${(_b = element.option) === null || _b === void 0 ? void 0 : _b.label}</div>`;
    const result = `
    <Space>
      ${(((_c = element.option) === null || _c === void 0 ? void 0 : _c.label) && label) || ''}
      <DatePicker.RangePicker
        ${(0, util_1.generateStyleAndClass)(element)}
        showTime={{ defaultValue: ['00:00:00', '00:00:00'], format: 'HH:mm:ss' }}
        format='YYYY-MM-DD HH:mm:ss'
        ${(0, util_1.expandOptions)(element.option, ['onChange', 'onSelect', 'onOk', 'value'])}
      />
    </Space>
  `;
    return [result, null];
};
exports.renderRangePicker = renderRangePicker;
