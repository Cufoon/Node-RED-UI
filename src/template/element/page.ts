import { RenderFunc } from '$interface/render';

export const renderPage: RenderFunc = ({ element, children }) => {
  const result = `
  const ${element.id} = () => {
    return (
    <>
    ${children}
    </>);
  }
  `;
  return [result, element.id];
};
