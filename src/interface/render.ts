import type { ElementBuildData } from './element';

export interface RenderOptions {
  hasChildren: boolean;
  niceName?: string;
}

interface RenderParams {
  option: RenderOptions;
  element: ElementBuildData;
  children?: string[];
}

export type RenderFunc = (
  v: RenderParams
) => [content: string, name: string | null];
