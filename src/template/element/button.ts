import type { RenderFunc } from '$interface/render';
import {
  expandChildStrList,
  expandOptions,
  generateStyleAndClass
} from '$template/util';

export const renderButton: RenderFunc = ({ element, children }) => {
  return [
    `
    <Button
      type='primary'
    ${generateStyleAndClass(element)}
    ${expandOptions(element.option, ['onClick'])}
    >
    ${expandChildStrList(children, element)}
    </Button>
    `,
    null
  ];
};
