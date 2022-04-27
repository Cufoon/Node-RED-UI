"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderRoot = void 0;
const renderRoot = ({ children }) => [
    (children === null || children === void 0 ? void 0 : children.join('\n')) || '',
    null
];
exports.renderRoot = renderRoot;
