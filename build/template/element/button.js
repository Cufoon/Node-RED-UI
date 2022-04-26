"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderButton = void 0;
const util_1 = require("../../template/util");
const renderButton = ({ option, element, children }) => {
    var _a;
    if (option.hasChildren) {
        const name = option.niceName || element.id;
        return [
            `
      const ${name} = () => {
        return (<Button ${(0, util_1.generateStyleAndClass)(element)}>${children}</Button>);
      }
      `,
            name
        ];
    }
    return [
        `
    <Button ${(0, util_1.generateStyleAndClass)(element)}>${(_a = element.content) === null || _a === void 0 ? void 0 : _a.text}</Button>
    `,
        null
    ];
};
exports.renderButton = renderButton;
