"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const button_1 = require("./element/button");
const card_1 = require("./element/card");
const chart_1 = require("./element/chart");
const divider_1 = require("./element/divider");
const grid_1 = require("./element/grid");
const layout_1 = require("./element/layout");
const menu_1 = require("./element/menu");
const outlet_1 = require("./element/outlet");
const page_1 = require("./element/page");
const picker_1 = require("./element/picker");
const root_1 = require("./element/root");
const select_1 = require("./element/select");
const state_1 = require("./element/state");
const table_1 = require("./element/table");
const box = {
    root: root_1.renderRoot,
    button: button_1.renderButton,
    card: card_1.renderCard,
    chartLine: chart_1.renderChartLine,
    col: grid_1.renderCol,
    divider: divider_1.renderDivider,
    grid: grid_1.renderGrid,
    layout: layout_1.renderLayout,
    layoutContent: layout_1.renderLayoutContent,
    layoutFooter: layout_1.renderLayoutFooter,
    layoutHeader: layout_1.renderLayoutHeader,
    layoutSider: layout_1.renderLayoutSider,
    menu: menu_1.renderMenu,
    outlet: outlet_1.renderOutlet,
    page: page_1.renderPage,
    row: grid_1.renderRow,
    state: state_1.renderStatefull,
    table: table_1.renderTable,
    select: select_1.renderSelect,
    datePicker: picker_1.renderRangePicker
};
exports.default = box;
