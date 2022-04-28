"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderRangePicker = void 0;
const util_1 = require("../../template/util");
const renderRangePicker = ({ element }) => {
    const result = `
    <DatePicker.RangePicker
      ${(0, util_1.generateStyleAndClass)(element)}
      showTime={{ defaultValue: ['00:00:00', '00:00:00'], format: 'HH:mm:ss' }}
      format='YYYY-MM-DD HH:mm:ss'
      ${(0, util_1.expandOptions)(element.option, ['onChange', 'onSelect', 'onOk'])}
    />
  `;
    return [result, null];
};
exports.renderRangePicker = renderRangePicker;
