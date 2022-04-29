"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderSwitch = exports.renderSlider = exports.renderInputNumber = void 0;
const util_1 = require("../../template/util");
const renderInputNumber = ({ element, children }) => {
    var _a, _b;
    const labelRequired = (((_a = element.option) === null || _a === void 0 ? void 0 : _a.required) && `<span style={{color: 'red'}}>*</span>`) || '';
    const label = `<div>${labelRequired}${(_b = element.option) === null || _b === void 0 ? void 0 : _b.label}</div>`;
    return [
        `
    <Space>
    ${label}
    <InputNumber
    ${(0, util_1.generateStyleAndClass)(element)}
    ${(0, util_1.expandOptions)(element.option, ['value', 'onChange'])}
    >
    ${(0, util_1.expandChildStrList)(children, element)}
    </InputNumber>
    </Space>
    `,
        null
    ];
};
exports.renderInputNumber = renderInputNumber;
const renderSlider = ({ element, children }) => {
    var _a, _b;
    const labelRequired = (((_a = element.option) === null || _a === void 0 ? void 0 : _a.required) && `<span style={{color: 'red'}}>*</span>`) || '';
    const label = `<div>${labelRequired}${(_b = element.option) === null || _b === void 0 ? void 0 : _b.label}</div>`;
    return [
        `
    <Space>
    ${label}
    <Slider
    ${(0, util_1.generateStyleAndClass)(element)}
    ${(0, util_1.expandOptions)(element.option, [
            'min',
            'max',
            'range',
            'step',
            'showTicks',
            'value',
            'onChange'
        ])}
    >
    ${(0, util_1.expandChildStrList)(children, element)}
    </Slider>
    </Space>
    `,
        null
    ];
};
exports.renderSlider = renderSlider;
const renderSwitch = ({ element, children }) => {
    var _a, _b;
    const labelRequired = (((_a = element.option) === null || _a === void 0 ? void 0 : _a.required) && `<span style={{color: 'red'}}>*</span>`) || '';
    const label = `<div>${labelRequired}${(_b = element.option) === null || _b === void 0 ? void 0 : _b.label}</div>`;
    return [
        `
    <Space>
    ${label}
    <Switch
    ${(0, util_1.generateStyleAndClass)(element)}
    ${(0, util_1.expandOptions)(element.option, ['onChange', 'checked', 'defaultChecked'])}
    >
    ${(0, util_1.expandChildStrList)(children, element)}
    </Switch>
    </Space>
    `,
        null
    ];
};
exports.renderSwitch = renderSwitch;
