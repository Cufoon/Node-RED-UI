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
          useRequest('/api/v1/active-data/temperature',{
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
    elements.set('State3', {
        id: 'State3',
        name: 'state',
        path: 'app-page-a-state3',
        option: {
            list: ['chart'],
            state: [
                ['humidity', '[]'],
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
          useRequest('/api/v1/active-data/humidity',{
            method: 'get',
            loadingText: '加载温度中',
            success: (res) => {
              set_humidity(res.humidity);
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
                    ['humidity'],
                    `
          const x = [];
          const y = [];
          humidity.map((item)=>{
            x.push(dayjs(item.time).format('HH:mm:ss'));
            y.push(item.value);
          });
          set_chart({x,y});
          `
                ]
            ]
        }
    });
    elements.set('State4', {
        id: 'State4',
        name: 'state',
        path: 'app-page-a-state4',
        option: {
            list: ['chart'],
            state: [
                ['lightness', '[]'],
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
          useRequest('/api/v1/active-data/lightness',{
            method: 'get',
            loadingText: '加载温度中',
            success: (res) => {
              set_lightness(res.lightness);
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
                    ['lightness'],
                    `
          const x = [];
          const y = [];
          lightness.map((item)=>{
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
                backgroundColor: '#00aa00',
                pointStyle: 'rectRounded'
            },
            onclick: 'upup'
        },
        content: { text: 'Part4' }
    });
    elements.set('Part5', {
        id: 'Part5',
        name: 'chartLine',
        path: 'app-page-a-state3-part5',
        option: {
            chart: {
                data: 'chart',
                name: '温度',
                borderColor: '#ff0000',
                backgroundColor: '#aa0000',
                pointStyle: 'rectRounded'
            },
            onclick: 'upup'
        },
        content: { text: 'Part5' }
    });
    elements.set('Part6', {
        id: 'Part6',
        name: 'chartLine',
        path: 'app-page-a-state4-part6',
        option: {
            chart: {
                data: 'chart',
                name: '温度',
                borderColor: '#0000ff',
                backgroundColor: '#0000aa',
                pointStyle: 'rectRounded'
            },
            onclick: 'upup'
        },
        content: { text: 'Part6' }
    });
    elements.set('Grid1', {
        id: 'Grid1',
        name: 'grid',
        path: 'app=page-a-Grid1'
    });
    elements.set('Row1', {
        id: 'Row1',
        name: 'row',
        path: 'app=page-a-row1',
        option: {
            justify: `'space-between'`,
            align: `'stretch'`
        }
    });
    elements.set('Col1', {
        id: 'Col1',
        name: 'col',
        path: 'app=page-a-Col1',
        option: {
            span: 7,
            xs: 24,
            md: 12,
            xl: 8
        }
    });
    elements.set('Col2', {
        id: 'Col2',
        name: 'col',
        path: 'app=page-a-Col2',
        option: {
            span: 7,
            xs: 24,
            md: 12,
            xl: 8
        }
    });
    elements.set('Col3', {
        id: 'Col3',
        name: 'col',
        path: 'app=page-a-Col3',
        option: {
            span: 7,
            xs: 24,
            md: 12,
            xl: 8
        }
    });
    elements.set('Card1', {
        id: 'Card1',
        name: 'card',
        path: 'app=cdskvfksd',
        option: {
            title: `'实时温度'`
        }
    });
    elements.set('Card2', {
        id: 'Card2',
        name: 'card',
        path: 'app=cdskvfksd',
        option: {
            title: `'实时湿度'`
        }
    });
    elements.set('Card3', {
        id: 'Card3',
        name: 'card',
        path: 'app=cdskvfksd',
        option: {
            title: `'实时光照'`
        }
    });
    elements.set('State5', {
        id: 'State5',
        name: 'state',
        path: 'ggggggggggggg',
        option: {
            state: [['tableData', '[]']],
            request: [
                [
                    ['loading', 'error', 'data'],
                    `
          useRequest('/api/v1/history/data',{
            method: 'post',
            data: {
              dataType: 2,
              dateStart: Date.now() - 50000000,
              dateEnd: Date.now()
            },
            loadingText: '加载温度中',
            success: (res) => {
              // set_lightness(res.lightness);
              console.log('request success');
            },
            fail: (err) => {
              GlobalMessage.error(err)
            }
          },[])
          `
                ]
            ],
            effect: [
                [
                    ['data'],
                    `
          const addedKey = data?.history?.map((item, index)=>{
            return {
              ...item,
              time: dayjs(item.time).format('YYYY-MM-DD HH:mm:ss'),
              key: index
            }
          });
          set_tableData(addedKey || []);
          `
                ]
            ]
        }
    });
    elements.set('Table1', {
        id: 'Table1',
        name: 'table',
        path: 'vbhjasbvhsbv',
        option: {
            columns: `[
        {title: '设备', dataIndex: 'deviceID'},
        {title: '数值', dataIndex: 'value'},
        {title: '时间', dataIndex: 'time'}
      ]`,
            data: 'tableData',
            loading: 'loading',
            stripe: 'true'
        }
    });
    elements.set('Card4', {
        id: 'Card4',
        name: 'card',
        path: '',
        option: {
            title: `'历史数据列表'`
        }
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
    elementsMap.set('PageElementC', ['State1']);
    elementsMap.set('State1', ['Part1', 'Part2', 'Part3']);
    elementsMap.set('PageElementA', ['Grid1']);
    elementsMap.set('Grid1', ['Row1']);
    elementsMap.set('Row1', ['Col1', 'Col2', 'Col3']);
    elementsMap.set('Col1', ['Card1']);
    elementsMap.set('Col2', ['Card2']);
    elementsMap.set('Col3', ['Card3']);
    elementsMap.set('Card1', ['State2']);
    elementsMap.set('Card2', ['State3']);
    elementsMap.set('Card3', ['State4']);
    elementsMap.set('State2', ['Part4']);
    elementsMap.set('State3', ['Part5']);
    elementsMap.set('State4', ['Part6']);
    elementsMap.set('PageElementB', ['Card4']);
    elementsMap.set('Card4', ['State5']);
    elementsMap.set('State5', ['Table1']);
    return [elements, elementsMap];
};
exports.mockElement = mockElement;
