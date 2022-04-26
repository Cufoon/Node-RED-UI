import type { Element } from '$interface/element';
import { isArray } from '$util/check';
import generator from '$template/generate';

export type ElementMap = Map<string, string[]>;
export type ElementItemMap = Map<string, Element>;

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
        let childStr = '';
        for (let i = 0; i < children.length; ++i) {
          const content = scan(append, relation, data, children[i]);
          childStr += content;
        }
        const [c, n] = generator.button({
          option: { hasChildren: true },
          element: item,
          children: childStr
        });
        append(c);
        return `<${n} />`;
      }
    } else {
      const [content] = generator.button({
        option: { hasChildren: false },
        element: item
      });
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

  let xxx = '';
  for (const line of generatedArray) {
    console.log(line);
    xxx += line;
  }
  return (
    xxx +
    `

    const AppElement = () => {
  return <><div>This is home page.</div><Outlet /></>;
};

// const PageElementA = () => {
//   return <div>This is A page.</div>;
// };

const PageElementB = () => {
  return <div>This is B page.</div>;
};

const PageElementC = () => {
  return <div>This is C page.</div>;
};
`
  );
};
