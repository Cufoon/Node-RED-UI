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
        path: 'app-page-manage',
        option: {
            state: [
                ['loading', 'false'],
                ['deviceList', '[]'],
                ['currentPage', 1],
                ['pageSize', 25],
                ['totalMount', 0],
                ['nowAtDeviceID', 'null'],
                ['modalVisible', 'false'],
                ['switch1checked', 'false'],
                ['switch2checked', 'false'],
                ['setFanLevel', 0],
                ['setFanTime', 0],
                ['setFanTemLimit', 0],
                ['setFanHumLimit', 0],
                ['setLightLevel', 0],
                ['setLightTime', 0],
                ['setLightTemLimit', 0],
                ['setLightHumLimit', 0],
                ['modalLoading', 'false']
            ],
            handler: [
                [
                    'onPageChanged',
                    `
          set_currentPage(args[0]);
          set_pageSize(args[1]);
          `
                ],
                [
                    'openModal',
                    `
          console.log(args);
          set_nowAtDeviceID(args[0]?.deviceID);
          set_modalVisible(true);
          `
                ],
                [
                    'modalOK',
                    `
          console.log(nowAtDeviceID, 'modal OK');
          sendDeviceControl();
          `
                ],
                [
                    'modalCancel',
                    `
          console.log(nowAtDeviceID, 'modal Fail');
          set_modalVisible(false);
          modalClear();
          `
                ],
                [
                    'modalClear',
                    `
          set_switch1checked(false);
          set_switch2checked(false);
          set_setFanLevel(0);
          set_setFanTime(0);
          set_setFanTemLimit(0);
          set_setFanHumLimit(0);
          set_setLightLevel(0);
          set_setLightTime(0);
          set_setLightTemLimit(0);
          set_setLightHumLimit(0);
          set_modalLoading(false);
          `
                ]
            ],
            effect: [[['currentPage', 'pageSize', 'totalMount'], 'getDeviceList()']],
            request: [
                [
                    ['getDeviceList'],
                    `
          set_loading(true);
          const [err, data] = await Utils.requestGetWithParam('/api/v1/device/online',{
            _page: currentPage,
            _limit: pageSize
          })
          set_loading(false);
          if (err) {
            GlobalMessage.error(err);
          } else {
            const dlst = data?.data?.map((item)=>{
              return {
                key: item.clientid,
                deviceID: item.clientid,
                time: item.connected_at
              }
            })
            const total = data?.meta?.count || 0;
            set_deviceList(dlst);
            set_totalMount(total);
          }
          `
                ],
                [
                    ['sendDeviceControl'],
                    `
          if(!(switch1checked || switch2checked)){
            GlobalMessage.info('没有选择任何控制选项', 1);
            return;
          }
          set_modalLoading(true);
          let errCount = 0;
          if(switch2checked){
            const [err, data] = await Utils.requestPost('/api/v1/device/control',{
              deviceID: nowAtDeviceID,
              type: 1,
              data: {
              time: setLightTime,
              value: setLightLevel,
              tlimit: setLightTemLimit,
              hlimit: setLightHumLimit
            }
            })
            if (err) {
              errCount++;
              GlobalMessage.error(err);
            } else {
            }
          }
          if(switch1checked) {
            const [err1, data1] = await Utils.requestPost('/api/v1/device/control',{
              deviceID: nowAtDeviceID,
              type: 2,
              data: {
                time: setFanTime,
                value: setFanLevel,
                tlimit: setFanTemLimit,
                hlimit: setFanHumLimit
              }
            })
            if (err1) {
              errCount++;
              GlobalMessage.error(err1);
            } else {
            }
          }
          set_modalLoading(false);
          if(errCount === 0) {
            set_modalVisible(false);
            modalClear();
            GlobalMessage.success('成功');
          }
          `
                ]
            ]
        }
    });
    elements.set('Table2', {
        id: 'Table2',
        name: 'table',
        path: 'app-page-manage',
        option: {
            columns: `
        {title: '设备', dataIndex: 'deviceID'},
        {title: '连接时间', dataIndex: 'time'},
      `,
            columnsAction: [{ handler: 'openModal', text: '管理' }],
            data: 'deviceList',
            loading: 'loading',
            stripe: 'true',
            // pagePosition: `'tr'`,
            pagination: {
                showTotal: 'true',
                sizeCanChange: 'true',
                sizeOptions: '[25,50,100,200]',
                showJumper: 'true',
                onChange: 'onPageChanged',
                defaultPageSize: 'pageSize',
                defaultCurrent: 'currentPage',
                total: 'totalMount',
                pageSize: 'pageSize',
                current: 'currentPage'
            }
        }
    });
    elements.set('Card5', {
        id: 'Card5',
        name: 'card',
        path: 'app-page-a-state1-part1',
        option: {
            title: `'设备管理'`
        },
        content: { text: 'Card5' }
    });
    elements.set('Row3', {
        id: 'Row3',
        name: 'row',
        path: 'app-page-a-state1-part2',
        content: { text: 'Row3' }
    });
    elements.set('Col4', {
        id: 'Col4',
        name: 'col',
        path: 'app-page-a-state1-part3',
        content: { text: 'Col4' },
        option: {
            span: 2
        }
    });
    elements.set('Button2', {
        id: 'Button2',
        name: 'button',
        path: 'app-page-manage',
        option: {
            onClick: 'getDeviceList'
        },
        content: { text: '刷新设备列表' }
    });
    elements.set('Modal1', {
        id: 'Modal1',
        name: 'modal',
        path: '',
        option: {
            title: `\`管理设备-\${nowAtDeviceID}\``,
            onOk: 'modalOK',
            onCancel: 'modalCancel',
            visible: 'modalVisible',
            okButtonProps: {
                loading: 'modalLoading'
            },
            cancelButtonProps: {
                disabled: 'modalLoading'
            }
        },
        content: {
            text: '我是一个弹出窗口'
        }
    });
    elements.set('Switch1', {
        id: 'Switch1',
        name: 'switch',
        path: '',
        option: {
            label: '设置风扇',
            checked: 'switch1checked',
            onChange: `(e)=>{
        console.log('switch1checked to', e);
        set_switch1checked(e);
      }`
        }
    });
    elements.set('Slider1', {
        id: 'Slider1',
        name: 'slider',
        path: '',
        style: `{width: '200px'}`,
        option: {
            label: '风扇转速',
            min: 0,
            max: 8,
            showTicks: 'true',
            value: 'setFanLevel',
            onChange: `(e)=>{
        console.log('setFanLevel to', e);
        set_setFanLevel(e);
      }`
        }
    });
    elements.set('InputNumber5', {
        id: 'InputNumber5',
        name: 'inputNumber',
        path: '',
        option: {
            label: '持续时长',
            value: 'setFanTime',
            onChange: `(e) => {
        set_setFanTime(e);
      }`
        }
    });
    elements.set('InputNumber1', {
        id: 'InputNumber1',
        name: 'inputNumber',
        path: '',
        option: {
            label: '温度阈值',
            value: 'setFanTemLimit',
            onChange: `(e) => {
        set_setFanTemLimit(e);
      }`
        }
    });
    elements.set('InputNumber2', {
        id: 'InputNumber2',
        name: 'inputNumber',
        path: '',
        option: {
            label: '湿度阈值',
            value: 'setFanHumLimit',
            onChange: `(e) => {
        set_setFanHumLimit(e);
      }`
        }
    });
    elements.set('Switch2', {
        id: 'Switch2',
        name: 'switch',
        path: '',
        option: {
            label: '设置光照',
            checked: 'switch2checked',
            onChange: `(e) => {
        console.log('switch2checked to', e);
        set_switch2checked(e);
      }`
        }
    });
    elements.set('Slider2', {
        id: 'Slider2',
        name: 'slider',
        path: '',
        style: `{width: '200px'}`,
        option: {
            label: '光照强度',
            min: 0,
            max: 8,
            showTicks: 'true',
            value: 'setLightLevel',
            onChange: `(e)=>{
        console.log('setLightLevel to', e);
        set_setLightLevel(e);
      }`
        }
    });
    elements.set('InputNumber3', {
        id: 'InputNumber3',
        name: 'inputNumber',
        path: '',
        option: {
            label: '温度阈值',
            value: 'setLightTemLimit',
            onChange: `(e) => {
        set_setLightTemLimit(e);
      }`
        }
    });
    elements.set('InputNumber4', {
        id: 'InputNumber4',
        name: 'inputNumber',
        path: '',
        option: {
            label: '湿度阈值',
            value: 'setLightHumLimit',
            onChange: `(e) => {
        set_setLightHumLimit(e);
      }`
        }
    });
    elements.set('InputNumber6', {
        id: 'InputNumber6',
        name: 'inputNumber',
        path: '',
        option: {
            label: '持续时长',
            value: 'setLightTime',
            onChange: `(e) => {
        set_setLightTime(e);
      }`
        }
    });
    elements.set('Card6', {
        id: 'Card6',
        name: 'card',
        path: ''
    });
    elements.set('Card7', {
        id: 'Card7',
        name: 'card',
        path: ''
    });
    elements.set('State2', {
        id: 'State2',
        name: 'state',
        path: 'app-page-a-state2',
        option: {
            list: [['chart', '[]']],
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
            list: [['chart', '[]']],
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
            list: [['chart', '[]']],
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
        path: 'app-page-history-xxxx',
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
        path: 'app-page-history',
        option: {
            list: [['swr', 0], ['startDate'], ['endDate'], ['checkedType']],
            state: [
                ['tableData', '[]'],
                ['currentPage', 1],
                ['pageSize', 25],
                ['totalMount', 0]
            ],
            request: [
                [
                    ['loading', 'error', 'data'],
                    `
          useRequest('/api/v1/history/data',{
            method: 'post',
            data: {
              dataType: checkedType,
              dateStart: dayjs(startDate).toISOString(),
              dateEnd: dayjs(endDate).toISOString(),
              pageSize: pageSize,
              page: currentPage
            },
            loadingText: '加载历史数据中',
            success: (res) => {
              // set_lightness(res.lightness);
              console.log('request success');
            },
            fail: (err) => {
              GlobalMessage.error(err)
            }
          },[swr])
          `
                ]
            ],
            handler: [
                [
                    'onPageChanged',
                    `
          set_currentPage(args[0]);
          set_pageSize(args[1]);
          if(swr > 99999) {
            set_swr(0);
          } else {
            set_swr(swr+1);
          }
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
          const total = data?.total || 0;
          set_tableData(addedKey || []);
          set_totalMount(total);
          `
                ]
            ]
        }
    });
    elements.set('Table1', {
        id: 'Table1',
        name: 'table',
        path: 'app-page-history',
        option: {
            columns: `
        {title: '设备', dataIndex: 'deviceID'},
        {title: '数值', dataIndex: 'value'},
        {title: '时间', dataIndex: 'time'},
      `,
            data: 'tableData',
            loading: 'loading',
            stripe: 'true',
            pagination: {
                showTotal: 'true',
                sizeCanChange: 'true',
                sizeOptions: '[25,50,100,200]',
                showJumper: 'true',
                onChange: 'onPageChanged',
                defaultPageSize: 'pageSize',
                defaultCurrent: 'currentPage',
                total: 'totalMount',
                pageSize: 'pageSize',
                current: 'currentPage'
            }
        }
    });
    elements.set('State6', {
        id: 'State6',
        name: 'state',
        path: 'app-page-history',
        option: {
            list: [['checkedType', 1]],
            handler: [
                [
                    'onChange',
                    `
          console.log(args[0]);
          set_checkedType(args[0]);
          `
                ]
            ],
            effect: [[[], `set_checkedType(1)`]]
        }
    });
    elements.set('Select1', {
        id: 'Select1',
        name: 'select',
        path: '',
        option: {
            label: '数据类别',
            required: true,
            defaultValue: 1,
            value: 'checkedType',
            select_options: [
                { value: 1, text: '光照' },
                { value: 2, text: '温度' },
                { value: 3, text: '湿度' }
            ],
            onChange: 'onChange'
        }
    });
    elements.set('State7', {
        id: 'State7',
        name: 'state',
        path: 'app-page-history',
        option: {
            list: [
                ['startDate', 'default'],
                ['endDate', 'default']
            ],
            handler: [
                [
                    'onChange',
                    `
          console.log('onChange: ', args[0], args[1]);
          set_startDate(args[0][0]);
          set_endDate(args[0][1]);
          `
                ]
            ]
        }
    });
    elements.set('DatePicker1', {
        id: 'DatePicker1',
        name: 'datePicker',
        path: '',
        option: {
            label: '选择时间',
            required: true,
            onChange: 'onChange'
        }
    });
    elements.set('Row2', {
        id: 'Row2',
        name: 'row',
        path: 'app=page-b-row1',
        option: {
            justify: `'space-between'`,
            align: `'stretch'`
        }
    });
    elements.set('State8', {
        id: 'State8',
        name: 'state',
        path: 'app-page-history',
        option: {
            list: [['swr', 0]],
            handler: [
                [
                    'onClick',
                    `
          if(swr === undefined || swr === null || swr > 999999) {
            set_swr(0);
          } else {
            set_swr(swr+1);
          }
          `
                ]
            ]
        }
    });
    elements.set('Button1', {
        id: 'Button1',
        name: 'button',
        path: 'app-page-history',
        option: {
            onClick: 'onClick'
        },
        content: { text: '查询' }
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
    elementsMap.set('State1', ['Card5']);
    elementsMap.set('Card5', ['Row3', 'Table2', 'Modal1']);
    elementsMap.set('Modal1', ['Card6', 'Card7']);
    elementsMap.set('Card6', [
        'Switch1',
        'Slider1',
        'InputNumber5',
        'InputNumber1',
        'InputNumber2'
    ]);
    elementsMap.set('Card7', [
        'Switch2',
        'Slider2',
        'InputNumber6',
        'InputNumber3',
        'InputNumber4'
    ]);
    elementsMap.set('Row3', ['Col4']);
    elementsMap.set('Col4', ['Button2']);
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
    elementsMap.set('Card4', ['Row2', 'State5']);
    elementsMap.set('Row2', ['State6', 'State7', 'State8']);
    elementsMap.set('State5', ['Table1']);
    elementsMap.set('State6', ['Select1']);
    elementsMap.set('State7', ['DatePicker1']);
    elementsMap.set('State8', ['Button1']);
    return [elements, elementsMap];
};
exports.mockElement = mockElement;
