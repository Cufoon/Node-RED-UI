import { RenderFunc } from '$interface/render';
import { expandChildStrList, generateStyleAndClass } from '$template/util';

export const renderList: RenderFunc = ({ element, children }) => {
  const result = `
    <List ${generateStyleAndClass(element)}>
    ${expandChildStrList(children, element)}
    </List>
  `;
  return [result, null];
};
