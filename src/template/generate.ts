import { RenderFunc } from '$interface/render';
import { renderButton } from './element/button';
import { renderCard } from './element/card';
import { renderChartLine } from './element/chart';
import { renderDivider } from './element/divider';
import { renderCol, renderGrid, renderRow } from './element/grid';
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
import { renderSelect } from './element/select';
import { renderStatefull } from './element/state';
import { renderTable } from './element/table';

interface TemplateFuncList {
  [index: string]: RenderFunc;
}

const box: TemplateFuncList = {
  root: renderRoot,
  button: renderButton,
  card: renderCard,
  chartLine: renderChartLine,
  col: renderCol,
  divider: renderDivider,
  grid: renderGrid,
  layout: renderLayout,
  layoutContent: renderLayoutContent,
  layoutFooter: renderLayoutFooter,
  layoutHeader: renderLayoutHeader,
  layoutSider: renderLayoutSider,
  menu: renderMenu,
  outlet: renderOutlet,
  page: renderPage,
  row: renderRow,
  state: renderStatefull,
  table: renderTable,
  select: renderSelect
};

export default box;
