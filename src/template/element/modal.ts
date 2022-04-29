import type { RenderFunc } from '$interface/render';
import {
  expandChildStrList,
  expandOptions,
  expandOptions2Object,
  generateStyleAndClass
} from '$template/util';

export const renderModal: RenderFunc = ({ element, children }) => {
  return [
    `
    <Modal
    ${generateStyleAndClass(element)}
    closable={false}
    ${expandOptions(element.option, [
      'onClick',
      'title',
      'onOk',
      'onCancel',
      'visible'
    ])}
    ${expandOptions2Object(element.option?.okButtonProps, 'okButtonProps', [
      'loading'
    ])}
    ${expandOptions2Object(element.option?.cancelButtonProps, 'cancelButtonProps', [
      'disabled'
    ])}
    >
    ${expandChildStrList(children, element)}
    </Modal>
    `,
    null
  ];
};
