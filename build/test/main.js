"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const div_1 = require("../template/div");
const dataMap = new Map();
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
const process = (data) => {
    switch (data.name) {
        case 'div':
            return (0, div_1.convert)(data);
        default:
            console.log('123');
    }
};
const scan = (id) => {
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
