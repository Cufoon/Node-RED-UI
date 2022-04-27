import { RenderFunc } from '$interface/render';

export const renderRoot: RenderFunc = ({ children }) => [
  children?.join('\n') || '',
  null
];
