import { RenderFunc } from '$interface/render';
import { generateStyleAndClass } from '$template/util';

export const renderDivider: RenderFunc = ({ element }) => {
  const style = generateStyleAndClass(element);
  if (element.option?.type === 'vertical') {
    return [`<Divider ${style} type="vertical" />`, null];
  }
  if (element.content) {
    return [`<Divider ${style}>${element.content}</Divider>`, null];
  }
  return [`<Divider ${style}/>`, null];
};
