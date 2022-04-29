import { RenderFunc } from '$interface/render';
import {
  generateStyleAndClass,
  expandOptions,
  expandOptions2Object
} from '$template/util';

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
      'pagePosition'
    ])}
    ${expandOptions2Object(element.option?.pagination, 'pagination', [
      'showTotal',
      'sizeCanChange',
      'sizeOptions',
      'showJumper',
      'onChange',
      'defaultPageSize',
      'defaultCurrent',
      'total',
      'pageSize',
      'current'
    ])}
    />
  `;
  return [result, null];
};
