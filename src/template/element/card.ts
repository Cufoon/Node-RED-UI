import { RenderFunc } from '$interface/render';
import {
  expandChildStrList,
  expandOptions,
  generateStyleAndClass
} from '$template/util';

export const renderCard: RenderFunc = ({ element, children }) => {
  const result = `
    <Card
    ${generateStyleAndClass(element)}
    ${expandOptions(element.option, ['onClick', 'title'])}
    >
    <Space style={{width: '100%'}} direction='vertical'>
    ${expandChildStrList(children, element)}
    </Space>
    </Card>
  `;
  return [result, null];
};
