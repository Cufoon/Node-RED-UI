import type { RenderFunc } from '$interface/render';
import { expandChildStrList, generateStyleAndClass } from '$template/util';

export const renderButton: RenderFunc = ({ option, element, children }) => {
  if (option.hasChildren) {
    const name = option.niceName || element.id;
    return [
      `
      const ${name} = () => {
        return (
          <Button ${generateStyleAndClass(element)}>
          ${expandChildStrList(children, element)}
          </Button>
        );
      }
      `,
      name
    ];
  }
  return [
    `
    <Button ${generateStyleAndClass(element)}>${expandChildStrList(
      children,
      element
    )}</Button>
    `,
    null
  ];
};
