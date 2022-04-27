"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockElement = void 0;
const mockElement = () => {
    const elements = new Map();
    const elementsMap = new Map();
    elements.set('root', {
        id: 'root',
        name: 'root',
        path: 'root'
    });
    elements.set('AppElement', {
        id: 'AppElement',
        name: 'layout',
        path: 'app'
    });
    elements.set('AppLayout', {
        id: 'AppLayout',
        name: 'layout',
        path: 'app-layout'
    });
    elements.set('AppHeader', {
        id: 'AppHeader',
        name: 'layoutHeader',
        path: 'app-header',
        content: { text: 'This is AppHeader!' }
    });
    elements.set('AppSider', {
        id: 'AppSider',
        name: 'layoutSider',
        path: 'app-sider'
    });
    elements.set('AppContent', {
        id: 'AppContent',
        name: 'layoutContent',
        path: 'app-content'
    });
    elements.set('AppFooter', {
        id: 'AppFooter',
        name: 'layoutFooter',
        path: 'app-footer',
        content: { text: 'This is AppFooter!' }
    });
    elements.set('AppSiderMenu', {
        id: 'AppSiderMenu',
        name: 'menu',
        path: 'app-sider-menu'
    });
    elements.set('AppContentOutlet', {
        id: 'AppContentOutlet',
        name: 'outlet',
        path: 'app-content-outlet'
    });
    elements.set('PageElementA', {
        id: 'PageElementA',
        name: 'page',
        path: 'AppElement-PageElementA',
        content: { text: 'This is A page.' }
    });
    elements.set('PageElementB', {
        id: 'PageElementB',
        name: 'page',
        path: 'AppElement-PageElementB',
        content: { text: 'This is B page.' }
    });
    elements.set('PageElementC', {
        id: 'PageElementC',
        name: 'page',
        path: 'AppElement-PageElementC',
        content: { text: 'This is C page.' }
    });
    elements.set('State1', {
        id: 'State1',
        name: 'state',
        path: 'app-page-a-state1',
        option: {
            list: ['aaa'],
            handler: [
                ['upup', 'set_aaa(aaa + 1)'],
                ['init', 'set_aaa(0)']
            ],
            effect: [[[], 'init()']]
        }
    });
    elements.set('State2', {
        id: 'State2',
        name: 'state',
        path: 'app-page-a-state2',
        option: {
            list: ['chart'],
            state: [
                ['temperature', '[]'],
                ['timer', 0]
            ],
            handler: [
                [
                    'upup',
                    `
          const data = {};
          data.x = [...chart.x, ...chart.x];
          data.y = [...chart.y, ...chart.y];
          set_chart(data);
          `
                ],
                [
                    'init',
                    `set_chart({
            x: [1, 2, 3, 4, 5, 6],
            y: [1, 3, 2, 5, 4, 1]
          })`
                ]
            ],
            request: [
                [
                    [],
                    `
          useRequest('/api/active-data/temperature',{
            method: 'get',
            loadingText: '加载温度中',
            success: (res) => {
              set_temperature(res.temperature);
            },
            fail: (err) => {
              GlobalMessage.error(err)
            }
          },[timer])
          `
                ],
                [
                    [],
                    `
          useInterval(()=>{
            let next = timer + 1;
            if (next > 99999999) {
              next = 0;
            }
            set_timer(next);
          },1000)
          `
                ]
            ],
            effect: [
                [
                    ['temperature'],
                    `
          const x = [];
          const y = [];
          temperature.map((item)=>{
            x.push(dayjs(item.time).format('HH:mm:ss'));
            y.push(item.value);
          });
          set_chart({x,y});
          `
                ]
            ]
        }
    });
    elements.set('Part1', {
        id: 'Part1',
        name: 'card',
        path: 'app-page-a-state1-part1',
        content: { text: 'Part1' }
    });
    elements.set('Part2', {
        id: 'Part2',
        name: 'card',
        path: 'app-page-a-state1-part2',
        content: { text: 'Part2' },
        option: {
            onclick: 'upup',
            content: 'aaa'
        }
    });
    elements.set('Part3', {
        id: 'Part3',
        name: 'card',
        path: 'app-page-a-state1-part3',
        content: { text: 'Part3' }
    });
    elements.set('Part4', {
        id: 'Part4',
        name: 'chartLine',
        path: 'app-page-a-state2-part4',
        option: {
            chart: {
                data: 'chart',
                name: '温度',
                borderColor: '#00ff00',
                backgroundColor: '#00aa00'
            },
            onclick: 'upup'
        },
        content: { text: 'Part4' }
    });
    elementsMap.set('root', [
        'AppElement',
        'PageElementA',
        'PageElementB',
        'PageElementC'
    ]);
    elementsMap.set('AppElement', ['AppHeader', 'AppLayout', 'AppFooter']);
    elementsMap.set('AppLayout', ['AppSider', 'AppContent']);
    elementsMap.set('AppSider', ['AppSiderMenu']);
    elementsMap.set('AppContent', ['AppContentOutlet']);
    elementsMap.set('PageElementA', ['State1']);
    elementsMap.set('State1', ['Part1', 'Part2', 'Part3']);
    elementsMap.set('PageElementC', ['State2']);
    elementsMap.set('State2', ['Part4']);
    return [elements, elementsMap];
};
exports.mockElement = mockElement;
