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
