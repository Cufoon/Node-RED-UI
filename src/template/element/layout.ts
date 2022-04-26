import { RenderFunc } from '$interface/render';
import { generateStyleAndClass } from '$template/util';

export const renderLayout: RenderFunc = ({ element, children }) => {
  const result = `
  const ${element.id} = () => {
    return (
      <Layout ${generateStyleAndClass(element)}>
      ${children || element.content?.text}
      </Layout>
    );
  }
  `;
  return [result, element.id];
};

export const renderLayoutHeader: RenderFunc = ({ element, children }) => {
  const result = `
    <Layout.Header ${generateStyleAndClass(element)}>
    ${children || element.content?.text}
    </Layout.Header>
  `;
  return [result, null];
};

export const renderLayoutFooter: RenderFunc = ({ element, children }) => {
  const result = `
    <Layout.Footer ${generateStyleAndClass(element)}>
    ${children || element.content?.text}
    </Layout.Footer>
  `;
  return [result, null];
};

export const renderLayoutContent: RenderFunc = ({ element, children }) => {
  const result = `
    <Layout.Content ${generateStyleAndClass(element)}>
    ${children || element.content?.text}
    </Layout.Content>
  `;
  return [result, null];
};

export const renderLayoutSider: RenderFunc = ({ element, children }) => {
  const result = `
    <Layout.Sider ${generateStyleAndClass(element)}>
    ${children || element.content?.text}
    </Layout.Sider>
  `;
  return [result, null];
};
