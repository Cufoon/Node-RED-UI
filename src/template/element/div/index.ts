import type { Element } from '$interface/element';

export interface OptionsDiv {
  isRedBg: boolean;
}

export type ElementDataDiv = Element<
  OptionsDiv,
  Record<string, never> | undefined | null
>;

export const convert = (data: ElementDataDiv) => {
  let isBgRed = false;
  if (data.options?.isRedBg) {
    isBgRed = true;
  }
  return `<div${isBgRed ? ' style="background: red;"' : ''}>${data}</div>`;
};
