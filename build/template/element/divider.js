"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderDivider = void 0;
const util_1 = require("../../template/util");
const renderDivider = ({ element }) => {
    var _a;
    const style = (0, util_1.generateStyleAndClass)(element);
    if (((_a = element.option) === null || _a === void 0 ? void 0 : _a.type) === 'vertical') {
        return [`<Divider ${style} type="vertical" />`, null];
    }
    if (element.content) {
        return [`<Divider ${style}>${element.content}</Divider>`, null];
    }
    return [`<Divider ${style}/>`, null];
};
exports.renderDivider = renderDivider;
