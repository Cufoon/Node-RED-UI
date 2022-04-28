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
    ${expandOptions(element.option, ['onClick', 'title'])}>
    ${expandChildStrList(children, element)}
    </Card>
  `;
  return [result, null];
};
