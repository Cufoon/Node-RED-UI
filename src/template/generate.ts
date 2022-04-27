import { RenderFunc } from '$interface/render';
import { renderButton } from './element/button';
import { renderCard } from './element/card';
import { renderChartLine } from './element/chart';
import { renderDivider } from './element/divider';
import { renderCol, renderRow } from './element/grid';
import {
  renderLayout,
  renderLayoutContent,
  renderLayoutFooter,
  renderLayoutHeader,
  renderLayoutSider
} from './element/layout';
import { renderMenu } from './element/menu';
import { renderOutlet } from './element/outlet';
import { renderPage } from './element/page';
import { renderRoot } from './element/root';
import { renderStatefull } from './element/state';

interface TemplateFuncList {
  [index: string]: RenderFunc;
}

const box: TemplateFuncList = {
  root: renderRoot,
  button: renderButton,
  page: renderPage,
  card: renderCard,
  divider: renderDivider,
  col: renderCol,
  row: renderRow,
  layout: renderLayout,
  layoutSider: renderLayoutSider,
  layoutHeader: renderLayoutHeader,
  layoutContent: renderLayoutContent,
  layoutFooter: renderLayoutFooter,
  state: renderStatefull,
  outlet: renderOutlet,
  menu: renderMenu,
  chartLine: renderChartLine
};

export default box;
