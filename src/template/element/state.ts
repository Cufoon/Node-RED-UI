import { RenderFunc } from '$interface/render';
import { expandChildStrListWithRoot, getStatePathId } from '$template/util';

type StateUse =
  | {
      list: string[];
      state: [string, unknown][];
      handler: [string, string][];
      request: [string[], string][];
      effect: [string[], string][];
      free: [string[], string][];
      static: [string[], string][];
    }
  | undefined;

export const renderStatefull: RenderFunc = ({ element, children }) => {
  const useDispatch = 'const dispatch = useDispatch();\n';
  let useState = '';
  (element.option as StateUse)?.list?.map((item) => {
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
  (element.option as StateUse)?.state?.map((item) => {
    useState += `const [${item[0]}, set_${item[0]}] = useState(${item[1]});`;
  });

  let methods = '';
  (element.option as StateUse)?.handler?.map((item) => {
    methods += `const ${item[0]} = (...args) => {
      ${item[1]}
    };
    `;
  });

  let request = '';
  (element.option as StateUse)?.request?.map((item) => {
    if (item[0].length > 1) {
      request += `const {loading: ${item[0][0]}, error: ${item[0][1]}, data: ${
        item[0][2]
      }} = ${item[1].trimStart()}`;
    } else if (item[0].length === 1) {
      request += `const ${item[0][0]} = async(...args) => {
        ${item[1]}
      }`;
    } else {
      request += `${item[1]}`;
    }
  });

  let effect = '';
  (element.option as StateUse)?.effect?.map((item) => {
    let effectDep = '';
    if (item[0].length > 0) {
      effectDep = item[0].join(',');
    }
    effect += `useEffect(()=>{
      ${item[1]}
    },[${effectDep}])
    `;
  });

  let frees = '';
  (element.option as StateUse)?.free?.map((item) => {
    if (item[0].length > 0) {
      frees += `const ${item[0][0]} = ${item[1]}`;
    } else {
      frees += `${item[1]}`;
    }
  });

  let statics = '';
  (element.option as StateUse)?.static?.map((item) => {
    if (item[0].length > 0) {
      statics += `const ${item[0][0]} = ${item[1]}`;
    } else {
      statics += `${item[1]}`;
    }
  });

  const result = `
  ${statics.trim()}
  const ${element.id} = () => {
    ${useDispatch.trim()}
    ${useState.trim()}
    ${methods.trim()}
    ${request.trim()}
    ${effect.trim()}
    ${frees.trim()}
    return (${expandChildStrListWithRoot(children, element)});
  }
  `;

  return [result, element.id];
};
