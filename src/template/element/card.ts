import { RenderFunc } from '$interface/render';
import { expandChildStrList, generateStyleAndClass } from '$template/util';

type CardOption =
  | {
      onclick?: string;
    }
  | undefined;

export const renderCard: RenderFunc = ({ element, children }) => {
  const onclick = (element.option as CardOption)?.onclick;
  const result = `
    <Card ${generateStyleAndClass(element)} ${
    (onclick && `onClick={${onclick}}`) || ''
  }>
    ${expandChildStrList(children, element)}
    </Card>
  `;
  return [result, null];
};
