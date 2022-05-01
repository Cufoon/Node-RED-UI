const fs = require('node:fs');
const path = require('node:path');

const x = [
  {
    name: '实时数据',
    key: 'menu-active-data',
    path: 'pageA',
    icon: 'IconStar'
  },
  {
    name: '历史数据',
    key: 'menu-fresh-manage-signup',
    path: 'pageB',
    icon: 'IconStar'
  },
  {
    name: '设备管理',
    key: 'menu-fresh-manage-interview',
    path: 'pageC',
    icon: 'IconStar'
  }
];

const s = JSON.stringify(x);

fs.writeFileSync(path.resolve(__dirname, '1.txt'), s);
