"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderButton = void 0;
const util_1 = require("../../template/util");
const renderButton = ({ option, element, children }) => {
    if (option.hasChildren) {
        const name = option.niceName || element.id;
        return [
            `
      const ${name} = () => {
        return (
          <Button ${(0, util_1.generateStyleAndClass)(element)}>
          ${(0, util_1.expandChildStrList)(children, element)}
          </Button>
        );
      }
      `,
            name
        ];
    }
    return [
        `
    <Button ${(0, util_1.generateStyleAndClass)(element)}>${(0, util_1.expandChildStrList)(children, element)}</Button>
    `,
        null
    ];
};
exports.renderButton = renderButton;
