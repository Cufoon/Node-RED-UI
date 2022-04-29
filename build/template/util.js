"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expandOptions2Object = exports.expandOptions = exports.expandChildStrListWithRoot = exports.expandChildStrList = exports.getStatePathId = exports.generateStyleAndClass = void 0;
const check_1 = require("../util/check");
const generateStyleAndClass = (element) => {
    let result = '';
    if (element.class) {
        if ((0, check_1.isString)(element.class)) {
            result += ` className="${element.class}"`;
        }
        else if ((0, check_1.isArray)(element.class)) {
            result += ` className="${element.class.join(' ')}"`;
        }
    }
    if (element.style) {
        const style = element.style.replace(/\\n/g, '');
        result += ` style="${style}"`;
    }
    return result;
};
exports.generateStyleAndClass = generateStyleAndClass;
const getStatePathId = (p, k) => `${p}-${k}`;
exports.getStatePathId = getStatePathId;
const expandChildStrList = (p, e) => {
    var _a, _b;
    if ((0, check_1.isArray)(p)) {
        return p.join('\n');
    }
    if ((_a = e.content) === null || _a === void 0 ? void 0 : _a.text) {
        return (_b = e.content) === null || _b === void 0 ? void 0 : _b.text;
    }
    return '';
};
exports.expandChildStrList = expandChildStrList;
const expandChildStrListWithRoot = (p, e) => {
    const isHasOnlyChild = (0, check_1.isArray)(p) && p.length === 1;
    return `
    ${isHasOnlyChild ? '' : '<>'}
    ${(0, exports.expandChildStrList)(p, e)}
    ${isHasOnlyChild ? '' : '</>'}
  `;
};
exports.expandChildStrListWithRoot = expandChildStrListWithRoot;
const expandOptions = (options, ps) => {
    let result = '';
    options &&
        ps.forEach((item) => {
            if (Object.prototype.hasOwnProperty.call(options, item)) {
                result += `${item}={${options[item]}} `;
            }
        });
    if (result !== '') {
        result = ' ' + result;
    }
    return result;
};
exports.expandOptions = expandOptions;
const expandOptions2Object = (options, name, ps) => {
    let result = '';
    options &&
        ps.forEach((item) => {
            if (Object.prototype.hasOwnProperty.call(options, item)) {
                result += `${item}: ${options[item]},`;
            }
        });
    if (result !== '') {
        result = ` ${name}={{${result}}}`;
    }
    return result;
};
exports.expandOptions2Object = expandOptions2Object;
