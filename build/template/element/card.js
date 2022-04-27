"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderCard = void 0;
const util_1 = require("../../template/util");
const renderCard = ({ element, children }) => {
    var _a;
    const onclick = (_a = element.option) === null || _a === void 0 ? void 0 : _a.onclick;
    const result = `
    <Card ${(0, util_1.generateStyleAndClass)(element)} ${(onclick && `onClick={${onclick}}`) || ''}>
    ${(0, util_1.expandChildStrList)(children, element)}
    </Card>
  `;
    return [result, null];
};
exports.renderCard = renderCard;
