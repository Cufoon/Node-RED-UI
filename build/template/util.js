"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStatePathId = exports.generateStyleAndClass = void 0;
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
