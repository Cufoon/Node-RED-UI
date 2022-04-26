import { RenderFunc } from '$interface/render';
import { expandChildStrList, generateStyleAndClass } from '$template/util';

export const renderGrid: RenderFunc = ({ element, children }) => {
  const result = `
    const ${element.id} = () => {
      <div ${generateStyleAndClass(element)}>
      ${expandChildStrList(children, element)}
      </div>
    }
  `;
  return [result, element.id];
};

export const renderRow: RenderFunc = ({ element, children }) => {
  const result = `
    <Grid.Row ${generateStyleAndClass(element)}>
    ${expandChildStrList(children, element)}
    </Grid.Row>
  `;
  return [result, null];
};

export const renderCol: RenderFunc = ({ element, children }) => {
  const result = `
    <Grid.Col ${generateStyleAndClass(element)}>
    ${expandChildStrList(children, element)}
    </Grid.Col>
  `;
  return [result, null];
};
