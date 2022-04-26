"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const button_1 = require("./element/button");
const card_1 = require("./element/card");
const divider_1 = require("./element/divider");
const grid_1 = require("./element/grid");
const layout_1 = require("./element/layout");
const outlet_1 = require("./element/outlet");
const page_1 = require("./element/page");
const state_1 = require("./element/state");
const box = {
    button: button_1.renderButton,
    page: page_1.renderPage,
    card: card_1.renderCard,
    divider: divider_1.renderDivider,
    col: grid_1.renderCol,
    row: grid_1.renderRow,
    layout: layout_1.renderLayout,
    layoutSider: layout_1.renderLayoutSider,
    layoutHeader: layout_1.renderLayoutHeader,
    layoutContent: layout_1.renderLayoutContent,
    layoutFooter: layout_1.renderLayoutFooter,
    state: state_1.renderStatefull,
    outlet: outlet_1.renderOutlet
};
exports.default = box;
