"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderCard = void 0;
const util_1 = require("../../template/util");
const renderCard = ({ element, children }) => {
    const result = `
    <Card
    ${(0, util_1.generateStyleAndClass)(element)}
    ${(0, util_1.expandOptions)(element.option, ['onClick', 'title'])}
    >
    <Space style={{width: '100%'}} direction='vertical'>
    ${(0, util_1.expandChildStrList)(children, element)}
    </Space>
    </Card>
  `;
    return [result, null];
};
exports.renderCard = renderCard;
