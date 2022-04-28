"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderStatefull = void 0;
const util_1 = require("../../template/util");
const renderStatefull = ({ element, children }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    const useDispatch = 'const dispatch = useDispatch();\n';
    let useState = '';
    (_b = (_a = element.option) === null || _a === void 0 ? void 0 : _a.list) === null || _b === void 0 ? void 0 : _b.map((item) => {
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
    (_d = (_c = element.option) === null || _c === void 0 ? void 0 : _c.state) === null || _d === void 0 ? void 0 : _d.map((item) => {
        useState += `const [${item[0]}, set_${item[0]}] = useState(${item[1]});`;
    });
    let methods = '';
    (_f = (_e = element.option) === null || _e === void 0 ? void 0 : _e.handler) === null || _f === void 0 ? void 0 : _f.map((item) => {
        methods += `const ${item[0]} = (...args) => {
      ${item[1]}
    };
    `;
    });
    let request = '';
    (_h = (_g = element.option) === null || _g === void 0 ? void 0 : _g.request) === null || _h === void 0 ? void 0 : _h.map((item) => {
        if (item[0].length > 1) {
            request += `const {loading: ${item[0][0]}, error: ${item[0][1]}, data: ${item[0][2]}} = ${item[1].trimStart()}`;
        }
        else if (item[0].length === 1) {
            request += `const ${item[0][0]} = async(...args) => {
        ${item[1]}
      }`;
        }
        else {
            request += `${item[1]}`;
        }
    });
    let effect = '';
    (_k = (_j = element.option) === null || _j === void 0 ? void 0 : _j.effect) === null || _k === void 0 ? void 0 : _k.map((item) => {
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
    (_m = (_l = element.option) === null || _l === void 0 ? void 0 : _l.free) === null || _m === void 0 ? void 0 : _m.map((item) => {
        if (item[0].length > 0) {
            frees += `const ${item[0][0]} = ${item[1]}`;
        }
        else {
            frees += `${item[1]}`;
        }
    });
    let statics = '';
    (_p = (_o = element.option) === null || _o === void 0 ? void 0 : _o.static) === null || _p === void 0 ? void 0 : _p.map((item) => {
        if (item[0].length > 0) {
            statics += `const ${item[0][0]} = ${item[1]}`;
        }
        else {
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
    return (${(0, util_1.expandChildStrListWithRoot)(children, element)});
  }
  `;
    return [result, element.id];
};
exports.renderStatefull = renderStatefull;
