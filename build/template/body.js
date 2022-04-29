"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateBody = void 0;
const tslib_1 = require("tslib");
const check_1 = require("../util/check");
const generate_1 = tslib_1.__importDefault(require("../template/generate"));
const util_1 = require("./util");
const scan = (globalState, append, relation, data, id) => {
    var _a, _b;
    console.log(id);
    const item = data.get(id);
    if (item !== undefined) {
        if (item.name === 'state' && item.path && (0, check_1.isArray)((_a = item.option) === null || _a === void 0 ? void 0 : _a.list)) {
            (_b = item.option) === null || _b === void 0 ? void 0 : _b.list.map((si) => {
                globalState((0, util_1.getStatePathId)(item.path, si[0]), si[1]);
            });
        }
        if (relation.has(id)) {
            const children = relation.get(id);
            if ((0, check_1.isArray)(children) && children.length > 0) {
                const childStrList = [];
                for (let i = 0; i < children.length; ++i) {
                    const content = scan(globalState, append, relation, data, children[i]);
                    childStrList.push(content);
                }
                const [c, n] = generate_1.default[item.name]({
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
    const store = {};
    const setStoreDefault = (p, v) => {
        store[p] = v;
    };
    scan(setStoreDefault, append, relation, data, id);
    for (const line of generatedArray) {
        console.log(line);
    }
    return [generatedArray.join('\n'), store];
};
exports.generateBody = generateBody;
