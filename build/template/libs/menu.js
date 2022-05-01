"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMenuData = void 0;
const generateMenuData = (menu) => {
    const scan = (v) => {
        let x = '';
        v.map((item) => {
            let y = '';
            Object.keys(item).map((key) => {
                if (key === 'children') {
                    const c = scan(item.children);
                    y += `children: ${c},`;
                }
                else {
                    if (key === 'icon') {
                        y += `icon: <${item[key]} />,`;
                    }
                    else {
                        y += `${key}: '${item[key]}',`;
                    }
                }
            });
            x += `{${y}},`;
        });
        return `[${x}]`;
    };
    return scan(menu);
};
exports.generateMenuData = generateMenuData;
