import { RenderFunc } from '$interface/render';
import { generateStyleAndClass } from '$template/util';

type CardOption =
  | {
      onclick?: string;
      content?: string;
    }
  | undefined;

export const renderCard: RenderFunc = ({ element, children }) => {
  const onclick = (element.option as CardOption)?.onclick;
  const content = (element.option as CardOption)?.content;
  const result = `
    <Card ${generateStyleAndClass(element)} ${
    (onclick && `onClick={${onclick}}`) || ''
  }>
    ${(content && `{${content}}`) || children || element.content?.text}
    </Card>
  `;
  return [result, null];
};
