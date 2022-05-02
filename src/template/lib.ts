import { messageLib } from './libs/message';
import { utilLib } from './libs/util';
import { requestLib } from './libs/request';
import { generateMenuData } from './libs/menu';
// import { uu3 } from '../test/xx';

export const generateImportation = (menuData: any[]) => {
  return `
import React, { createContext, useReducer, useContext, useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, HashRouter, Route, Routes, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Card, Layout, Button, Menu, Message, Grid, Table, Select, DatePicker, Space, Modal, Switch, InputNumber, Slider } from '@arco-design/web-react';
import { IconStar } from '@arco-design/web-react/icon';
import umiRequest from 'umi-request';
import qs from 'qs';
import dayjs from 'dayjs';
import lodash from 'lodash';
import { useInterval } from 'ahooks';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line as ChartLine } from 'react-chartjs-2';
ChartJS.register(...registerables);
const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

darkThemeMq.addEventListener('change', (e) => {
  if (e.matches) {
    document.body.setAttribute('arco-theme', 'dark');
  } else {
    document.body.removeAttribute('arco-theme');
  }
});

const Cufoon = {};

${messageLib}
${utilLib}
${requestLib}

Cufoon.PageMenuDifferentKey = 'menu-active-data';
// Cufoon.PageMenuData = [
//   {
//     name: '实时数据',
//     key: 'menu-active-data',
//     path: 'pageA',
//     icon: <IconStar />
//   },
//   {
//     name: '历史数据',
//     key: 'menu-fresh-manage-signup',
//     path: 'pageB',
//     icon: <IconStar />
//   },
//   {
//     name: '设备管理',
//     key: 'menu-fresh-manage-interview',
//     path: 'pageC',
//     icon: <IconStar />
//   }
// ];
Cufoon.PageMenuData = ${generateMenuData(menuData)}
`;
};
