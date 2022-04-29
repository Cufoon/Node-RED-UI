import type { RenderFunc } from '$interface/render';
import {
  expandChildStrList,
  expandOptions,
  generateStyleAndClass
} from '$template/util';

export const renderInputNumber: RenderFunc = ({ element, children }) => {
  const labelRequired =
    (element.option?.required && `<span style={{color: 'red'}}>*</span>`) || '';

  const label = `<div>${labelRequired}${element.option?.label}</div>`;
  return [
    `
    <Space>
    ${label}
    <InputNumber
    ${generateStyleAndClass(element)}
    ${expandOptions(element.option, ['value', 'onChange'])}
    >
    ${expandChildStrList(children, element)}
    </InputNumber>
    </Space>
    `,
    null
  ];
};

export const renderSlider: RenderFunc = ({ element, children }) => {
  const labelRequired =
    (element.option?.required && `<span style={{color: 'red'}}>*</span>`) || '';

  const label = `<div>${labelRequired}${element.option?.label}</div>`;
  return [
    `
    <Space>
    ${label}
    <Slider
    ${generateStyleAndClass(element)}
    ${expandOptions(element.option, [
      'min',
      'max',
      'range',
      'step',
      'showTicks',
      'value',
      'onChange'
    ])}
    >
    ${expandChildStrList(children, element)}
    </Slider>
    </Space>
    `,
    null
  ];
};

export const renderSwitch: RenderFunc = ({ element, children }) => {
  const labelRequired =
    (element.option?.required && `<span style={{color: 'red'}}>*</span>`) || '';

  const label = `<div>${labelRequired}${element.option?.label}</div>`;
  return [
    `
    <Space>
    ${label}
    <Switch
    ${generateStyleAndClass(element)}
    ${expandOptions(element.option, ['onChange', 'checked', 'defaultChecked'])}
    >
    ${expandChildStrList(children, element)}
    </Switch>
    </Space>
    `,
    null
  ];
};
