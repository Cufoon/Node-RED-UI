"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isString = exports.isArray = void 0;
const isArray = (data) => {
    return {}.toString.call(data) === '[object Array]';
};
exports.isArray = isArray;
const isString = (data) => {
    return {}.toString.call(data) === '[object String]';
};
exports.isString = isString;
