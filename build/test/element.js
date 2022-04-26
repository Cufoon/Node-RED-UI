"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockElement = void 0;
const mockElement = () => {
    const elements = new Map();
    const elementsMap = new Map();
    elements.set('root', {
        id: 'PageElementA',
        name: 'page',
        path: 'root',
        content: { text: 'root' }
    });
    elements.set('Button1', {
        id: 'Button1',
        name: 'card',
        path: 'root-button15-button16-button5-button1',
        content: { text: 'Button1' },
        option: {
            onclick: 'upup',
            content: 'aaa'
        }
    });
    elements.set('Button2', {
        id: 'Button2',
        name: 'layoutHeader',
        path: 'root-button15-button2',
        content: { text: 'Button2' }
    });
    elements.set('Button3', {
        id: 'Button3',
        name: 'card',
        path: 'root-button15-button16-button5-button3',
        content: { text: 'Button3' }
    });
    elements.set('Button4', {
        id: 'Button4',
        name: 'card',
        path: 'root-button15-button16-button5-button4',
        content: { text: 'Button4' }
    });
    elements.set('Button5', {
        id: 'Button5',
        name: 'layoutSider',
        path: 'root-button15-button16-button5',
        content: { text: 'Button5' }
    });
    elements.set('Button6', {
        id: 'Button6',
        name: 'card',
        path: 'root-button15-button16-button9-button6',
        content: { text: 'Button6' }
    });
    elements.set('Button7', {
        id: 'Button7',
        name: 'card',
        path: 'root-button15-button16-button9-button7',
        content: { text: 'Button7' }
    });
    elements.set('Button8', {
        id: 'Button8',
        name: 'card',
        path: 'root-button15-button16-button5-button8',
        content: { text: 'Button8' }
    });
    elements.set('Button9', {
        id: 'Button9',
        name: 'layoutContent',
        path: 'root-button15-button16-button9',
        content: { text: 'Button9' }
    });
    elements.set('Button10', {
        id: 'Button10',
        name: 'card',
        path: 'root-button15-button16-button9-button10',
        content: { text: 'Button10' }
    });
    elements.set('Button11', {
        id: 'Button11',
        name: 'card',
        path: 'root-button15-button16-button9-button11',
        content: { text: 'Button11' }
    });
    elements.set('Button12', {
        id: 'Button12',
        name: 'layoutFooter',
        path: 'root-button15-button12',
        content: { text: 'Button12' }
    });
    elements.set('Button13', {
        id: 'Button13',
        name: 'card',
        path: 'root-button15-button16-button5-button13',
        content: { text: 'Button13' }
    });
    elements.set('Button14', {
        id: 'Button14',
        name: 'card',
        path: 'root-button15-button16-button9-button14',
        content: { text: 'Button14' }
    });
    elements.set('Button15', {
        id: 'Button15',
        name: 'layout',
        path: 'root-button5',
        content: { text: 'Button15' }
    });
    elements.set('Button16', {
        id: 'Button16',
        name: 'layout',
        path: 'root-button15-button16',
        content: { text: 'Button16' }
    });
    elements.set('Button17', {
        id: 'Button17',
        name: 'state',
        path: 'root-button15-button16-button5',
        option: {
            list: ['aaa'],
            handler: [
                ['upup', 'set_aaa(aaa + 1)'],
                ['init', 'set_aaa(0)']
            ],
            mount: ['init']
        }
    });
    elementsMap.set('root', ['Button15']);
    elementsMap.set('Button15', ['Button2', 'Button16', 'Button12']);
    elementsMap.set('Button16', ['Button17', 'Button9']);
    elementsMap.set('Button17', ['Button5']);
    elementsMap.set('Button5', [
        'Button1',
        'Button3',
        'Button13',
        'Button8',
        'Button4'
    ]);
    elementsMap.set('Button9', [
        'Button6',
        'Button7',
        'Button10',
        'Button11',
        'Button14'
    ]);
    return [elements, elementsMap];
};
exports.mockElement = mockElement;
