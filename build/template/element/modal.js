"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderModal = void 0;
const util_1 = require("../../template/util");
const renderModal = ({ element, children }) => {
    var _a, _b;
    return [
        `
    <Modal
    ${(0, util_1.generateStyleAndClass)(element)}
    closable={false}
    ${(0, util_1.expandOptions)(element.option, [
            'onClick',
            'title',
            'onOk',
            'onCancel',
            'visible'
        ])}
    ${(0, util_1.expandOptions2Object)((_a = element.option) === null || _a === void 0 ? void 0 : _a.okButtonProps, 'okButtonProps', [
            'loading'
        ])}
    ${(0, util_1.expandOptions2Object)((_b = element.option) === null || _b === void 0 ? void 0 : _b.cancelButtonProps, 'cancelButtonProps', [
            'disabled'
        ])}
    >
    ${(0, util_1.expandChildStrList)(children, element)}
    </Modal>
    `,
        null
    ];
};
exports.renderModal = renderModal;
