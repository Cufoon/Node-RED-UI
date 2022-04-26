import { RenderFunc } from '$interface/render';
import { expandChildStrListWithRoot } from '$template/util';

export const renderPage: RenderFunc = ({ element, children }) => {
  const result = `
    const ${element.id} = () => {
      return (${expandChildStrListWithRoot(children, element)});
    }
  `;
  return [result, element.id];
};
