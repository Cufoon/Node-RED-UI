"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const convert = (data) => {
    var _a;
    let isBgRed = false;
    if ((_a = data.options) === null || _a === void 0 ? void 0 : _a.isRedBg) {
        isBgRed = true;
    }
    return `<div${isBgRed ? ' style="background: red;"' : ''}>${data}</div>`;
};
exports.convert = convert;
