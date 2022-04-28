import { ElementBuildData } from '$interface/element';
import { isArray, isString } from '$util/check';

export const generateStyleAndClass = (element: ElementBuildData): string => {
  let result = '';
  if (element.class) {
    if (isString(element.class)) {
      result += ` className="${element.class}"`;
    } else if (isArray(element.class)) {
      result += ` className="${element.class.join(' ')}"`;
    }
  }
  if (element.style) {
    const style = element.style.replace(/\\n/g, '');
    result += ` style="${style}"`;
  }
  return result;
};

export const getStatePathId = (p: string, k: string): string => `${p}-${k}`;

export const expandChildStrList = (
  p: string[] | undefined,
  e: ElementBuildData
) => {
  if (isArray(p)) {
    return p.join('\n');
  }
  if (e.content?.text) {
    return e.content?.text;
  }
  return '';
};

export const expandChildStrListWithRoot = (
  p: string[] | undefined,
  e: ElementBuildData
) => {
  const isHasOnlyChild = isArray(p) && p.length === 1;
  return `
    ${isHasOnlyChild ? '' : '<>'}
    ${expandChildStrList(p, e)}
    ${isHasOnlyChild ? '' : '</>'}
  `;
};

export const expandOptions = (
  options: { [index: string]: unknown } | undefined,
  ps: string[]
) => {
  let result = '';
  options &&
    ps.forEach((item) => {
      if (Object.prototype.hasOwnProperty.call(options, item)) {
        result += `${item}={${options[item]}} `;
      }
    });
  if (result !== '') {
    result = ' ' + result;
  }
  return result;
};
