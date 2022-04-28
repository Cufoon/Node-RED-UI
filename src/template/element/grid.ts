import { RenderFunc } from '$interface/render';
import {
  expandChildStrList,
  expandOptions,
  generateStyleAndClass
} from '$template/util';

export const renderGrid: RenderFunc = ({ element, children }) => {
  const result = `
    const ${element.id} = () => {
      return (<div ${generateStyleAndClass(element)}>
      ${expandChildStrList(children, element)}
      </div>);
    }
  `;
  return [result, element.id];
};

export const renderRow: RenderFunc = ({ element, children }) => {
  const result = `
    <Grid.Row ${generateStyleAndClass(element)}${expandOptions(element.option, [
    'gutter',
    'align',
    'justify'
  ])}>
    ${expandChildStrList(children, element)}
    </Grid.Row>
  `;
  return [result, null];
};

export const renderCol: RenderFunc = ({ element, children }) => {
  const result = `
    <Grid.Col
    ${generateStyleAndClass(element)}
    ${expandOptions(element.option, [
      'span',
      'offset',
      'order',
      'push',
      'pull',
      'xs',
      'sm',
      'md',
      'lg',
      'xl',
      'xxl'
    ])}
    >
    ${expandChildStrList(children, element)}
    </Grid.Col>
  `;
  return [result, null];
};
