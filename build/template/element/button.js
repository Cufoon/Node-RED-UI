"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderButton = void 0;
const util_1 = require("../../template/util");
const renderButton = ({ element, children }) => {
    return [
        `
    <Button
    ${(0, util_1.generateStyleAndClass)(element)}
    ${(0, util_1.expandOptions)(element.option, ['onClick'])}
    >
    ${(0, util_1.expandChildStrList)(children, element)}
    </Button>
    `,
        null
    ];
};
exports.renderButton = renderButton;
