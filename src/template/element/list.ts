import { RenderFunc } from '$interface/render';
import { generateStyleAndClass } from '$template/util';

export const renderList: RenderFunc = ({ element, children }) => {
  const result = `
    <List ${generateStyleAndClass(element)}>
    ${children}
    </List>
  `;
  return [result, null];
};
