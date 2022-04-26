import { RenderFunc } from '$interface/render';
import { generateStyleAndClass } from '$template/util';

export const renderGrid: RenderFunc = ({ element, children }) => {
  const result = `
  const ${element.id} = () => {
    <div ${generateStyleAndClass(element)}>
    ${children}
    </div>
  }
  `;
  return [result, element.id];
};

export const renderRow: RenderFunc = ({ element, children }) => {
  const result = `
    <Grid.Row ${generateStyleAndClass(element)}>
    ${children}
    </Grid.Row>
  `;
  return [result, null];
};

export const renderCol: RenderFunc = ({ element, children }) => {
  const result = `
    <Grid.Col ${generateStyleAndClass(element)}>
    ${children}
    </Grid.Col>
  `;
  return [result, null];
};
