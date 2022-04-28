import { RenderFunc } from '$interface/render';
import { generateStyleAndClass, expandOptions } from '$template/util';

export const renderSelect: RenderFunc = ({ element }) => {
  let options = '';

  element.option?.select_options?.map((item: { value: any; text: any }) => {
    options += `<Select.Option key={${item.value}} value={${item.value}}>${item.text}</Select.Option>`;
  });

  const result = `
    <Select
    ${generateStyleAndClass(element)}
    ${expandOptions(element.option, [
      'defaultValue',
      'value',
      'options',
      'onChange'
    ])}
    >
    ${options}
    </Select>
  `;
  return [result, null];
};
