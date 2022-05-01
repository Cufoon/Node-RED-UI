import { RenderFunc } from '$interface/render';
import {
  generateStyleAndClass,
  expandOptions,
  expandOptions2Object
} from '$template/util';

export const renderTable: RenderFunc = ({ element }) => {
  let actions = '';
  element.option?.columnsAction?.map((item: { handler: any; text: any }) => {
    actions += `<Button type='text' onClick={()=>{ ${item.handler}(item) }}>${item.text}</Button>`;
  });

  if (actions !== '') {
    actions = `{title:'操作', render: (...args)=>{
      const item = args[1];
      return (<Space>${actions}</Space>)
    }}`;
  }

  let columns = `[${element.option?.columns || ''}${actions}]`;
  if (columns !== '[]') {
    columns = `columns={${columns}}`;
  }
  const result = `
    <Table
    ${generateStyleAndClass(element)}
    ${columns}
    ${expandOptions(element.option, [
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
