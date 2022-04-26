"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateBody = void 0;
const tslib_1 = require("tslib");
const check_1 = require("../util/check");
const generate_1 = tslib_1.__importDefault(require("../template/generate"));
const scan = (append, relation, data, id) => {
    console.log(id);
    const item = data.get(id);
    if (item !== undefined) {
        if (relation.has(id)) {
            const children = relation.get(id);
            if ((0, check_1.isArray)(children) && children.length > 0) {
                const childStrList = [];
                for (let i = 0; i < children.length; ++i) {
                    const content = scan(append, relation, data, children[i]);
                    childStrList.push(content);
                }
                const [c, n] = generate_1.default[item.name]({
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
        }
        else {
            const [content, n] = generate_1.default[item.name]({
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
const generateBody = (relation, data, id) => {
    const generatedArray = [];
    const append = (v) => {
        generatedArray.push(v);
    };
    scan(append, relation, data, id);
    let xxx = '';
    for (const line of generatedArray) {
        console.log(line);
        xxx += line;
    }
    return (xxx +
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
`);
};
exports.generateBody = generateBody;
