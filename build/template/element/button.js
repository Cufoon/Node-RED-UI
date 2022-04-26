"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderButton = void 0;
const renderButton = ({ option, element, children }) => {
    var _a;
    if (option.hasChildren) {
        const name = option.niceName || element.id;
        return [
            `
      const ${name} = () => {
        return (<Button>${children}</Button>);
      }
      `,
            name
        ];
    }
    return [
        `
    <Button>${(_a = element.params) === null || _a === void 0 ? void 0 : _a.text}</Button>
    `
    ];
};
exports.renderButton = renderButton;
