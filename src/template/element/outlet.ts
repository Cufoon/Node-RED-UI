import { RenderFunc } from '$interface/render';

export const renderOutlet: RenderFunc = ({ element }) => {
  const result = `
    const ${element.id} = Outlet;
  `;
  return [result, element.id];
};
