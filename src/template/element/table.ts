import { RenderFunc } from '$interface/render';
import { generateStyleAndClass, expandOptions } from '$template/util';

export const renderTable: RenderFunc = ({ element }) => {
  const result = `
    <Table
    ${generateStyleAndClass(element)}
    ${expandOptions(element.option, [
      'columns',
      'data',
      'loading',
      'noDataElement',
      'stripe',
      'size',
      'pagination',
      'pagePosition'
    ])}
    />
  `;
  return [result, null];
};
