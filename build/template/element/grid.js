"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderCol = exports.renderRow = exports.renderGrid = void 0;
const util_1 = require("../../template/util");
const renderGrid = ({ element, children }) => {
    const result = `
    const ${element.id} = () => {
      <div ${(0, util_1.generateStyleAndClass)(element)}>
      ${(0, util_1.expandChildStrList)(children, element)}
      </div>
    }
  `;
    return [result, element.id];
};
exports.renderGrid = renderGrid;
const renderRow = ({ element, children }) => {
    const result = `
    <Grid.Row ${(0, util_1.generateStyleAndClass)(element)}>
    ${(0, util_1.expandChildStrList)(children, element)}
    </Grid.Row>
  `;
    return [result, null];
};
exports.renderRow = renderRow;
const renderCol = ({ element, children }) => {
    const result = `
    <Grid.Col ${(0, util_1.generateStyleAndClass)(element)}>
    ${(0, util_1.expandChildStrList)(children, element)}
    </Grid.Col>
  `;
    return [result, null];
};
exports.renderCol = renderCol;
