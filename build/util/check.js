"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = void 0;
const isArray = (data) => {
    return {}.toString.call(data) === '[object Array]';
};
exports.isArray = isArray;
