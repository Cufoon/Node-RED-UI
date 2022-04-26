import type { Element } from '$interface/element';
import type { RenderOptions } from '$interface/render';

export interface RenderParamsButton {
  option: RenderOptions;
  element: Element;
  children?: string;
}

export const renderButton = ({
  option,
  element,
  children
}: RenderParamsButton): [content: string, name?: string] => {
  if (option.hasChildren) {
    const name = option.niceName || element.id;
    return [
      `
      const ${name} = () => {
        return (<Button>${children}</Button>);
      }
      `,
      name
    ];
  }
  return [
    `
    <Button>${element.params?.text}</Button>
    `
  ];
};
