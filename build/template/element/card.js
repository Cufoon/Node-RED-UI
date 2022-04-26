"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderCard = void 0;
const util_1 = require("../../template/util");
const renderCard = ({ element, children }) => {
    var _a, _b, _c;
    const onclick = (_a = element.option) === null || _a === void 0 ? void 0 : _a.onclick;
    const content = (_b = element.option) === null || _b === void 0 ? void 0 : _b.content;
    const result = `
    <Card ${(0, util_1.generateStyleAndClass)(element)} ${(onclick && `onClick={${onclick}}`) || ''}>
    ${(content && `{${content}}`) || children || ((_c = element.content) === null || _c === void 0 ? void 0 : _c.text)}
    </Card>
  `;
    return [result, null];
};
exports.renderCard = renderCard;
