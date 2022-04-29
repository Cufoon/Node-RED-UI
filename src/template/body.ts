import type { ElementBuildData } from '$interface/element';
import { isArray } from '$util/check';
import generator from '$template/generate';
import { getStatePathId } from './util';

export type ElementMap = Map<string, string[]>;
export type ElementItemMap = Map<string, ElementBuildData>;

const scan = (
  globalState: (p: string, v: any) => void,
  append: (v: string) => void,
  relation: ElementMap,
  data: ElementItemMap,
  id: string
) => {
  console.log(id);
  const item = data.get(id);
  if (item !== undefined) {
    if (item.name === 'state' && item.path && isArray(item.option?.list)) {
      item.option?.list.map((si: any[]) => {
        globalState(getStatePathId(item.path, si[0]), si[1]);
      });
    }
    if (relation.has(id)) {
      const children = relation.get(id);
      if (isArray(children) && children.length > 0) {
        const childStrList = [];
        for (let i = 0; i < children.length; ++i) {
          const content = scan(
            globalState,
            append,
            relation,
            data,
            children[i]
          );
          childStrList.push(content);
        }
        const [c, n] = generator[item.name]({
          element: item,
          children: childStrList
        });
        if (n !== null) {
          append(c);
          return `<${n} />`;
        }
        return c;
      }
    } else {
      const [content, n] = generator[item.name]({
        element: item
      });
      if (n !== null) {
        append(content);
        return `<${n} />`;
      }
      return content;
    }
  }
  return '';
};

export const generateBody = (
  relation: ElementMap,
  data: ElementItemMap,
  id: string
): [string, object] => {
  const generatedArray: string[] = [];
  const append = (v: string) => {
    generatedArray.push(v);
  };

  const store: { [index: string]: any } = {};
  const setStoreDefault = (p: string, v: any) => {
    store[p] = v;
  };

  scan(setStoreDefault, append, relation, data, id);

  for (const line of generatedArray) {
    console.log(line);
  }
  return [generatedArray.join('\n'), store];
};
