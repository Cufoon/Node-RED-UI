import { RenderFunc } from '$interface/render';
import { generateStyleAndClass, expandOptions } from '$template/util';

export const renderRangePicker: RenderFunc = ({ element }) => {
  const labelRequired =
    (element.option?.required && `<span style={{color: 'red'}}>*</span>`) || '';

  const label = `<div>${labelRequired}${element.option?.label}</div>`;

  const result = `
    <Space>
      ${(element.option?.label && label) || ''}
      <DatePicker.RangePicker
        ${generateStyleAndClass(element)}
        showTime={{ defaultValue: ['00:00:00', '00:00:00'], format: 'HH:mm:ss' }}
        format='YYYY-MM-DD HH:mm:ss'
        ${expandOptions(element.option, ['onChange', 'onSelect', 'onOk'])}
      />
    </Space>
  `;
  return [result, null];
};
