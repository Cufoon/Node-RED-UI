import { RenderFunc } from '$interface/render';
import { expandChildStrList, generateStyleAndClass } from '$template/util';

export const renderLayout: RenderFunc = ({ element, children }) => {
  const result = `
  const ${element.id} = () => {
    return (
      <Layout ${generateStyleAndClass(element)}>
      ${expandChildStrList(children, element)}
      </Layout>
    );
  }
  `;
  return [result, element.id];
};

export const renderLayoutHeader: RenderFunc = ({ element, children }) => {
  const result = `
    <Layout.Header ${generateStyleAndClass(element)}>
    ${expandChildStrList(children, element)}
    </Layout.Header>
  `;
  return [result, null];
};

export const renderLayoutFooter: RenderFunc = ({ element, children }) => {
  const result = `
    <Layout.Footer ${generateStyleAndClass(element)}>
    ${expandChildStrList(children, element)}
    </Layout.Footer>
  `;
  return [result, null];
};

export const renderLayoutContent: RenderFunc = ({ element, children }) => {
  const result = `
    <Layout.Content ${generateStyleAndClass(element)}>
    ${expandChildStrList(children, element)}
    </Layout.Content>
  `;
  return [result, null];
};

export const renderLayoutSider: RenderFunc = ({ element, children }) => {
  const result = `
    <Layout.Sider ${generateStyleAndClass(element)}>
    ${expandChildStrList(children, element)}
    </Layout.Sider>
  `;
  return [result, null];
};
