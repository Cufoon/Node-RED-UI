import type { RenderFunc } from '$interface/render';
import { generateStyleAndClass } from '$template/util';

export const renderButton: RenderFunc = ({ option, element, children }) => {
  if (option.hasChildren) {
    const name = option.niceName || element.id;
    return [
      `
      const ${name} = () => {
        return (<Button ${generateStyleAndClass(element)}>${children}</Button>);
      }
      `,
      name
    ];
  }
  return [
    `
    <Button ${generateStyleAndClass(element)}>${element.content?.text}</Button>
    `,
    null
  ];
};
