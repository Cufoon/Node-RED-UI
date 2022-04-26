import type { ElementBuildData } from '$interface/element';
import { isArray } from '$util/check';
import generator from '$template/generate';

export type ElementMap = Map<string, string[]>;
export type ElementItemMap = Map<string, ElementBuildData>;

const scan = (
  append: (v: string) => void,
  relation: ElementMap,
  data: ElementItemMap,
  id: string
) => {
  console.log(id);
  const item = data.get(id);
  if (item !== undefined) {
    if (relation.has(id)) {
      const children = relation.get(id);
      if (isArray(children) && children.length > 0) {
        const childStrList = [];
        for (let i = 0; i < children.length; ++i) {
          const content = scan(append, relation, data, children[i]);
          childStrList.push(content);
        }
        const [c, n] = generator[item.name]({
          option: { hasChildren: true },
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
        option: { hasChildren: false },
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
) => {
  const generatedArray: string[] = [];
  const append = (v: string) => {
    generatedArray.push(v);
  };

  scan(append, relation, data, id);

  for (const line of generatedArray) {
    console.log(line);
  }
  return generatedArray.join('\n');
};
