const origin = {
  root: { id: 'root', name: 'root', path: 'root' },
  AppElement: {
    id: 'AppElement',
    name: 'layout',
    content: { text: '' }
  },
  AppHeader: {
    id: 'AppHeader',
    name: 'layoutHeader',
    content: { text: '' }
  },
  AppLayout: {
    id: 'AppLayout',
    name: 'layout',
    content: { text: '' }
  },
  AppFooter: {
    id: 'AppFooter',
    name: 'layoutFooter',
    content: { text: '' }
  },
  AppSider: {
    id: 'AppSider',
    name: 'layoutSider',
    content: { text: '' }
  },
  AppContent: {
    id: 'AppContent',
    name: 'layoutContent',
    content: { text: '' }
  },
  AppSiderMenu: {
    id: 'AppSiderMenu',
    name: 'menu',
    content: { text: '' }
  },
  AppContentOutlet: {
    id: 'AppContentOutlet',
    name: 'outlet',
    content: { text: '' }
  },
  PageElementA: {
    id: 'PageElementA',
    name: 'page',
    content: { text: '' }
  },
  Grid1: { id: 'Grid1', name: 'grid', content: { text: '' } },
  Row1: {
    id: 'Row1',
    name: 'row',
    option: { justify: "'space-between'", align: "'stretch'" },
    content: { text: '' }
  },
  Col1: {
    id: 'Col1',
    name: 'col',
    option: { span: 7, xs: 24, md: 12, xl: 8 },
    content: { text: '' }
  },
  Col2: {
    id: 'Col2',
    name: 'col',
    option: { span: 7, xs: 24, md: 12, xl: 8 },
    content: { text: '' }
  },
  Col3: {
    id: 'Col3',
    name: 'col',
    option: { span: 7, xs: 24, md: 12, xl: 8 },
    content: { text: '' }
  },
  Card1: {
    id: 'Card1',
    name: 'card',
    option: { title: "'实时温度'" },
    content: { text: '' }
  },
  Card2: {
    id: 'Card2',
    name: 'card',
    option: { title: "'实时湿度'" },
    content: { text: '' }
  },
  Card3: {
    id: 'Card3',
    name: 'card',
    option: { title: "'实时光照'" },
    content: { text: '' }
  },
  State2: {
    id: 'State2',
    name: 'state',
    path: 'app-page-a-state2',
    option: {
      state: [
        ['temperature', '[]'],
        ['timer', 0]
      ],
      list: [['chart', '[]']],
      handler: [
        [
          'upup',
          '\n    const data = {};\n    data.x = [...chart.x, ...chart.x];\n    data.y = [...chart.y, ...chart.y];\n    set_chart(data);\n    '
        ],
        [
          'init',
          'set_chart({\n      x: [1, 2, 3, 4, 5, 6],\n      y: [1, 3, 2, 5, 4, 1]\n    })'
        ]
      ],
      effect: [
        [
          ['temperature'],
          "\n    const x = [];\n    const y = [];\n    temperature.map((item)=>{\n      x.push(dayjs(item.time).format('HH:mm:ss'));\n      y.push(item.value);\n    });\n    set_chart({x,y});\n    "
        ]
      ],
      request: [
        [
          [],
          "\n    useRequest('/api/v1/active-data/temperature',{\n      method: 'get',\n      loadingText: '加载温度中',\n      success: (res) => {\n        set_temperature(res.temperature);\n      },\n      fail: (err) => {\n        GlobalMessage.error(err)\n      }\n    },[timer])\n    "
        ],
        [
          [],
          '\n    useInterval(()=>{\n      let next = timer + 1;\n      if (next > 99999999) {\n        next = 0;\n      }\n      set_timer(next);\n    },1000)\n    '
        ]
      ]
    },
    content: { text: '' }
  },
  State3: {
    id: 'State3',
    name: 'state',
    path: 'app-page-a-state3',
    option: {
      state: [
        ['humidity', '[]'],
        ['timer', 0]
      ],
      list: [['chart', '[]']],
      handler: [
        [
          'upup',
          '\n    const data = {};\n    data.x = [...chart.x, ...chart.x];\n    data.y = [...chart.y, ...chart.y];\n    set_chart(data);\n    '
        ],
        [
          'init',
          'set_chart({\n      x: [1, 2, 3, 4, 5, 6],\n      y: [1, 3, 2, 5, 4, 1]\n    })'
        ]
      ],
      effect: [
        [
          ['humidity'],
          "\n    const x = [];\n    const y = [];\n    humidity.map((item)=>{\n      x.push(dayjs(item.time).format('HH:mm:ss'));\n      y.push(item.value);\n    });\n    set_chart({x,y});\n    "
        ]
      ],
      request: [
        [
          [],
          "\n    useRequest('/api/v1/active-data/humidity',{\n      method: 'get',\n      loadingText: '加载温度中',\n      success: (res) => {\n        set_humidity(res.humidity);\n      },\n      fail: (err) => {\n        GlobalMessage.error(err)\n      }\n    },[timer])\n    "
        ],
        [
          [],
          '\n    useInterval(()=>{\n      let next = timer + 1;\n      if (next > 99999999) {\n        next = 0;\n      }\n      set_timer(next);\n    },1000)\n    '
        ]
      ]
    },
    content: { text: '' }
  },
  State4: {
    id: 'State4',
    name: 'state',
    path: 'app-page-a-state4',
    option: {
      state: [
        ['lightness', '[]'],
        ['timer', 0]
      ],
      list: [['chart', '[]']],
      handler: [
        [
          'upup',
          '\n    const data = {};\n    data.x = [...chart.x, ...chart.x];\n    data.y = [...chart.y, ...chart.y];\n    set_chart(data);\n    '
        ],
        [
          'init',
          'set_chart({\n      x: [1, 2, 3, 4, 5, 6],\n      y: [1, 3, 2, 5, 4, 1]\n    })'
        ]
      ],
      effect: [
        [
          ['lightness'],
          "\n    const x = [];\n    const y = [];\n    lightness.map((item)=>{\n      x.push(dayjs(item.time).format('HH:mm:ss'));\n      y.push(item.value);\n    });\n    set_chart({x,y});\n    "
        ]
      ],
      request: [
        [
          [],
          "\n    useRequest('/api/v1/active-data/lightness',{\n      method: 'get',\n      loadingText: '加载温度中',\n      success: (res) => {\n        set_lightness(res.lightness);\n      },\n      fail: (err) => {\n        GlobalMessage.error(err)\n      }\n    },[timer])\n    "
        ],
        [
          [],
          '\n    useInterval(()=>{\n      let next = timer + 1;\n      if (next > 99999999) {\n        next = 0;\n      }\n      set_timer(next);\n    },1000)\n    '
        ]
      ]
    },
    content: { text: '' }
  },
  Part4: {
    id: 'Part4',
    name: 'chartLine',
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
    content: { text: '' }
  },
  Part5: {
    id: 'Part5',
    name: 'chartLine',
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
    content: { text: '' }
  },
  Part6: {
    id: 'Part6',
    name: 'chartLine',
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
    content: { text: '' }
  },
  PageElementB: {
    id: 'PageElementB',
    name: 'page',
    content: { text: '' }
  },
  Card4: {
    id: 'Card4',
    name: 'card',
    option: { title: "'历史数据列表'" },
    content: { text: '' }
  },
  Row2: {
    id: 'Row2',
    name: 'row',
    option: { justify: "'space-between'", align: "'stretch'" },
    content: { text: '' }
  },
  State5: {
    id: 'State5',
    name: 'state',
    path: 'app-page-history',
    option: {
      state: [
        ['tableData', '[]'],
        ['currentPage', 1],
        ['pageSize', 25],
        ['totalMount', 0]
      ],
      list: [['swr', 0], ['startDate'], ['endDate'], ['checkedType']],
      handler: [
        [
          'onPageChanged',
          '\n    set_currentPage(args[0]);\n    set_pageSize(args[1]);\n    if(swr > 99999) {\n      set_swr(0);\n    } else {\n      set_swr(swr+1);\n    }\n    '
        ]
      ],
      effect: [
        [
          ['data'],
          "\n    const addedKey = data?.history?.map((item, index)=>{\n      return {\n        ...item,\n        time: dayjs(item.time).format('YYYY-MM-DD HH:mm:ss'),\n        key: index\n      }\n    });\n    const total = data?.total || 0;\n    set_tableData(addedKey || []);\n    set_totalMount(total);\n    "
        ]
      ],
      request: [
        [
          ['loading', 'error', 'data'],
          "\n    useRequest('/api/v1/history/data',{\n      method: 'post',\n      data: {\n        dataType: checkedType,\n        dateStart: dayjs(startDate).toISOString(),\n        dateEnd: dayjs(endDate).toISOString(),\n        pageSize: pageSize,\n        page: currentPage\n      },\n      loadingText: '加载历史数据中',\n      success: (res) => {\n        // set_lightness(res.lightness);\n        console.log('request success');\n      },\n      fail: (err) => {\n        GlobalMessage.error(err)\n      }\n    },[swr])\n    "
        ]
      ]
    },
    content: { text: '' }
  },
  State6: {
    id: 'State6',
    name: 'state',
    path: 'app-page-history',
    option: {
      state: [],
      list: [['checkedType', 1]],
      handler: [
        [
          'onChange',
          '\n    console.log(args[0]);\n    set_checkedType(args[0]);\n    '
        ]
      ],
      effect: [[[], 'set_checkedType(1)']],
      request: []
    },
    content: { text: '' }
  },
  State7: {
    id: 'State7',
    name: 'state',
    path: 'app-page-history',
    option: {
      state: [],
      list: [
        ['startDate', 'default'],
        ['endDate', 'default']
      ],
      handler: [
        [
          'onChange',
          "\n    console.log('onChange: ', args[0], args[1]);\n    set_startDate(args[0][0]);\n    set_endDate(args[0][1]);\n    "
        ]
      ],
      effect: [],
      request: []
    },
    content: { text: '' }
  },
  State8: {
    id: 'State8',
    name: 'state',
    path: 'app-page-history',
    option: {
      state: [],
      list: [['swr', 0]],
      handler: [
        [
          'onClick',
          '\n    if(swr === undefined || swr === null || swr > 999999) {\n      set_swr(0);\n    } else {\n      set_swr(swr+1);\n    }\n    '
        ]
      ],
      effect: [],
      request: []
    },
    content: { text: '' }
  },
  Select1: {
    id: 'Select1',
    name: 'select',
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
    },
    content: { text: '' }
  },
  DatePicker1: {
    id: 'DatePicker1',
    name: 'datePicker',
    option: { label: '选择时间', required: true, onChange: 'onChange' },
    content: { text: '' }
  },
  Button1: {
    id: 'Button1',
    name: 'button',
    option: { onClick: 'onClick' },
    content: { text: '查询' }
  },
  Table1: {
    id: 'Table1',
    name: 'table',
    option: {
      columns:
        "{title:'设备',dataIndex:'deviceID'},{title:'数值',dataIndex:'value'},{title:'时间',dataIndex:'time'},",
      columnsAction: [],
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
    },
    content: { text: '' }
  },
  PageElementC: {
    id: 'PageElementC',
    name: 'page',
    content: { text: '' }
  },
  State1: {
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
      list: [],
      handler: [
        ['onPageChanged', 'set_currentPage(args[0]);set_pageSize(args[1]);'],
        [
          'openModal',
          'console.log(args);set_nowAtDeviceID(args[0]?.deviceID);set_modalVisible(true);'
        ],
        [
          'modalOK',
          "console.log(nowAtDeviceID, 'modal OK');sendDeviceControl();"
        ],
        [
          'modalCancel',
          "console.log(nowAtDeviceID, 'modal Fail');set_modalVisible(false);modalClear();"
        ],
        [
          'modalClear',
          'set_switch1checked(false);set_switch2checked(false);set_setFanLevel(0);set_setFanTime(0);set_setFanTemLimit(0);set_setFanHumLimit(0);set_setLightLevel(0);set_setLightTime(0);set_setLightTemLimit(0);set_setLightHumLimit(0);set_modalLoading(false);'
        ]
      ],
      effect: [[['currentPage', 'pageSize', 'totalMount'], 'getDeviceList()']],
      request: [
        [
          ['getDeviceList'],
          "\n    set_loading(true);\n    const [err, data] = await Utils.requestGetWithParam('/api/v1/device/online',{\n      _page: currentPage,\n      _limit: pageSize\n    })\n    set_loading(false);\n    if (err) {\n      GlobalMessage.error(err);\n    } else {\n      const dlst = data?.data?.map((item)=>{\n        return {\n          key: item.clientid,\n          deviceID: item.clientid,\n          time: item.connected_at\n        }\n      })\n      const total = data?.meta?.count || 0;\n      set_deviceList(dlst);\n      set_totalMount(total);\n    }\n    "
        ],
        [
          ['sendDeviceControl'],
          "\n    if(!(switch1checked || switch2checked)){\n      GlobalMessage.info('没有选择任何控制选项', 1);\n      return;\n    }\n    set_modalLoading(true);\n    let errCount = 0;\n    if(switch2checked){\n      const [err, data] = await Utils.requestPost('/api/v1/device/control',{\n        deviceID: nowAtDeviceID,\n        type: 1,\n        data: {\n        time: setLightTime,\n        value: setLightLevel,\n        tlimit: setLightTemLimit,\n        hlimit: setLightHumLimit\n      }\n      })\n      if (err) {\n        errCount++;\n        GlobalMessage.error(err);\n      } else {\n      }\n    }\n    if(switch1checked) {\n      const [err1, data1] = await Utils.requestPost('/api/v1/device/control',{\n        deviceID: nowAtDeviceID,\n        type: 2,\n        data: {\n          time: setFanTime,\n          value: setFanLevel,\n          tlimit: setFanTemLimit,\n          hlimit: setFanHumLimit\n        }\n      })\n      if (err1) {\n        errCount++;\n        GlobalMessage.error(err1);\n      } else {\n      }\n    }\n    set_modalLoading(false);\n    if(errCount === 0) {\n      set_modalVisible(false);\n      modalClear();\n      GlobalMessage.success('成功');\n    }\n    "
        ]
      ]
    },
    content: { text: '' }
  },
  Card5: {
    id: 'Card5',
    name: 'card',
    option: { title: "'设备管理'" },
    content: { text: '' }
  },
  Row3: { id: 'Row3', name: 'row', content: { text: '' } },
  Table2: {
    id: 'Table2',
    name: 'table',
    option: {
      columns:
        "{title:'设备',dataIndex:'deviceID'},{title:'连接时间',dataIndex:'time'},",
      columnsAction: [{ handler: 'openModal', text: '管理' }],
      data: 'deviceList',
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
    },
    content: { text: '' }
  },
  Modal1: {
    id: 'Modal1',
    name: 'modal',
    option: {
      title: '`管理设备-${nowAtDeviceID}`',
      onOk: 'modalOK',
      onCancel: 'modalCancel',
      visible: 'modalVisible',
      okButtonProps: { loading: 'modalLoading' },
      cancelButtonProps: { disabled: 'modalLoading' }
    },
    content: { text: '' }
  },
  Col4: {
    id: 'Col4',
    name: 'col',
    option: { span: 2 },
    content: { text: '' }
  },
  Button2: {
    id: 'Button2',
    name: 'button',
    option: { onClick: 'getDeviceList' },
    content: { text: '刷新设备列表' }
  },
  Card6: { id: 'Card6', name: 'card', content: { text: '' } },
  Card7: { id: 'Card7', name: 'card', content: { text: '' } },
  Switch1: {
    id: 'Switch1',
    name: 'switch',
    option: {
      label: '设置风扇',
      checked: 'switch1checked',
      onChange:
        "(e)=>{console.log('switch1checked to', e);set_switch1checked(e);}"
    },
    content: { text: '' }
  },
  Slider1: {
    id: 'Slider1',
    name: 'slider',
    style: "{width: '300px'}",
    option: {
      label: '风扇转速',
      min: 0,
      max: 8,
      showTicks: 'true',
      value: 'setFanLevel',
      onChange: "(e)=>{console.log('setFanLevel to', e);set_setFanLevel(e);}"
    },
    content: { text: '' }
  },
  InputNumber5: {
    id: 'InputNumber5',
    name: 'inputNumber',
    option: {
      label: '持续时长',
      value: 'setFanTime',
      onChange: '(e) => {\n    set_setFanTime(e);\n  }'
    },
    content: { text: '' }
  },
  InputNumber1: {
    id: 'InputNumber1',
    name: 'inputNumber',
    option: {
      label: '温度阈值',
      value: 'setFanTemLimit',
      onChange: '(e) => {\n    set_setFanTemLimit(e);\n  }'
    },
    content: { text: '' }
  },
  InputNumber2: {
    id: 'InputNumber2',
    name: 'inputNumber',
    option: {
      label: '湿度阈值',
      value: 'setFanHumLimit',
      onChange: '(e) => {\n    set_setFanHumLimit(e);\n  }'
    },
    content: { text: '' }
  },
  Switch2: {
    id: 'Switch2',
    name: 'switch',
    option: {
      label: '设置光照',
      checked: 'switch2checked',
      onChange:
        "(e) => {\n    console.log('switch2checked to', e);\n    set_switch2checked(e);\n  }"
    },
    content: { text: '' }
  },
  Slider2: {
    id: 'Slider2',
    name: 'slider',
    style: "{width: '300px'}",
    option: {
      label: '光照强度',
      min: 0,
      max: 8,
      showTicks: 'true',
      value: 'setLightLevel',
      onChange:
        "(e)=>{\n    console.log('setLightLevel to', e);\n    set_setLightLevel(e);\n  }"
    },
    content: { text: '' }
  },
  InputNumber6: {
    id: 'InputNumber6',
    name: 'inputNumber',
    option: {
      label: '持续时长',
      value: 'setLightTime',
      onChange: '(e) => {\n    set_setLightTime(e);\n  }'
    },
    content: { text: '' }
  },
  InputNumber3: {
    id: 'InputNumber3',
    name: 'inputNumber',
    option: {
      label: '温度阈值',
      value: 'setLightTemLimit',
      onChange: '(e) => {\n    set_setLightTemLimit(e);\n  }'
    },
    content: { text: '' }
  },
  InputNumber4: {
    id: 'InputNumber4',
    name: 'inputNumber',
    option: {
      label: '湿度阈值',
      value: 'setLightHumLimit',
      onChange: '(e) => {\n    set_setLightHumLimit(e);\n  }'
    },
    content: { text: '' }
  }
};

const xxxxxxx = new Map();

Object.keys(origin).map((item) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  xxxxxxx.set(item, origin[item]);
});

export const yyy = xxxxxxx;

export const uu1origin = {
  root: { path: '/', element: 'AppElement' },
  Page1: { path: '/active-data', element: 'PageElementA' },
  Page2: { path: '/history', element: 'PageElementB' },
  Page3: { path: '/manage', element: 'PageElementC' }
};

const vv1 = new Map();
Object.keys(uu1origin).map((item) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  vv1.set(item, uu1origin[item]);
});

export const uu1 = vv1;

const uu2origin = { root: ['Page1', 'Page2', 'Page3'] };
const vv2 = new Map();
Object.keys(uu2origin).map((item) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  vv2.set(item, uu2origin[item]);
});
export const uu2 = vv2;

export const uu3 = JSON.parse(
  '[{"name":"实时数据","key":"menu-active-data","path":"active-data","icon":"IconStar"},{"name":"历史数据","key":"menu-fresh-manage-signup","path":"history","icon":"IconStar"},{"name":"设备管理","key":"menu-fresh-manage-interview","path":"manage","icon":"IconStar"}]'
);
