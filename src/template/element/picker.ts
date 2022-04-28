import { RenderFunc } from '$interface/render';
import { generateStyleAndClass, expandOptions } from '$template/util';

export const renderRangePicker: RenderFunc = ({ element }) => {
  const result = `
    <DatePicker.RangePicker
      ${generateStyleAndClass(element)}
      showTime={{ defaultValue: ['00:00:00', '00:00:00'], format: 'HH:mm:ss' }}
      format='YYYY-MM-DD HH:mm:ss'
      ${expandOptions(element.option, ['onChange', 'onSelect', 'onOk'])}
    />
  `;
  return [result, null];
};
