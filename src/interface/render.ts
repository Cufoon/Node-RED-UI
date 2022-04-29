import type { ElementBuildData } from './element';

interface RenderParams {
  element: ElementBuildData;
  children?: string[];
}

export type RenderFunc = (
  v: RenderParams
) => [content: string, name: string | null];
