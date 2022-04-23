import { Element } from '../type/element';
import { convert as convert2div } from '../template/div';

const dataMap = new Map<string, Array<Element<unknown, unknown>>>();

dataMap.set('root', [
  {
    id: 'div---01',
    name: 'div',
    options: {
      isRedBg: true
    }
  }
]);

const writeObject = {
  content: ''
};

const process = (data: Element<any, any>) => {
  switch (data.name) {
    case 'div':
      return convert2div(data);
    default:
      console.log('123');
  }
};

const scan = (id: string) => {
  const children = dataMap.get(id);
  if (children && children.length > 0) {
    for (let i = 0; i < children.length; ++i) {
      const cid = children[i].id;
      scan(cid);
      const content = process(children[i]);
      writeObject.content += content + '\n';
    }
  }
};

scan('root');

console.log(writeObject);
