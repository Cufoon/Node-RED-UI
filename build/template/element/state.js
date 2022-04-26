"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderStatefull = void 0;
const util_1 = require("../../template/util");
const renderStatefull = ({ element, children }) => {
    var _a, _b, _c, _d;
    const useDispatch = 'const dispatch = useDispatch();\n';
    let useState = '';
    (_a = element.option) === null || _a === void 0 ? void 0 : _a.list.map((item) => {
        const key = (0, util_1.getStatePathId)(element.path, item);
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
    (_b = element.option) === null || _b === void 0 ? void 0 : _b.handler.map((item) => {
        methods += `const ${item[0]} = (...args) => {
      ${item[1]}
    };
    `;
    });
    let mounted = '';
    (_c = element.option) === null || _c === void 0 ? void 0 : _c.mount.map((item) => {
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
    return (
      <>
      ${children || ((_d = element.content) === null || _d === void 0 ? void 0 : _d.text)}
      </>
    );
  }
  `;
    return [result, element.id];
};
exports.renderStatefull = renderStatefull;
