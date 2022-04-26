import { RenderFunc } from '$interface/render';
import { expandChildStrListWithRoot, getStatePathId } from '$template/util';

type StateUse =
  | {
      list: string[];
      handler: [string, string][];
      mount: string[];
    }
  | undefined;

export const renderStatefull: RenderFunc = ({ element, children }) => {
  const useDispatch = 'const dispatch = useDispatch();\n';
  let useState = '';
  (element.option as StateUse)?.list.map((item) => {
    const key = getStatePathId(element.path, item);
    useState += `
    const ${item} = useSelector(store => store['${key}']);
    const set_${item} = (v) => {
      dispatch({
        key: '${key}',
        value: v
      })
    }
    `;
  });
  let methods = '';
  (element.option as StateUse)?.handler.map((item) => {
    methods += `const ${item[0]} = (...args) => {
      ${item[1]}
    };
    `;
  });

  let mounted = '';
  (element.option as StateUse)?.mount.map((item) => {
    mounted += `useEffect(()=>{
      ${item}();
    },[])
    `;
  });

  const result = `
  const ${element.id} = () => {
    ${useDispatch}
    ${useState}
    ${methods}
    ${mounted}
    return (${expandChildStrListWithRoot(children, element)});
  }
  `;

  return [result, element.id];
};
