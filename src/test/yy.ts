const origin = {
  root: ['AppElement', 'PageElementA', 'PageElementB', 'PageElementC'],
  AppElement: ['AppHeader', 'AppLayout', 'AppFooter'],
  AppLayout: ['AppSider', 'AppContent'],
  AppSider: ['AppSiderMenu'],
  AppContent: ['AppContentOutlet'],
  PageElementA: ['Grid1'],
  Grid1: ['Row1'],
  Row1: ['Col1', 'Col2', 'Col3'],
  Col1: ['Card1'],
  Col2: ['Card2'],
  Col3: ['Card3'],
  Card1: ['State2'],
  Card2: ['State3'],
  Card3: ['State4'],
  State2: ['Part4'],
  State3: ['Part5'],
  State4: ['Part6'],
  PageElementB: ['Card4'],
  Card4: ['Row2', 'State5'],
  Row2: ['State6', 'State7', 'State8'],
  State6: ['Select1'],
  State7: ['DatePicker1'],
  State8: ['Button1'],
  State5: ['Table1'],
  PageElementC: ['State1'],
  State1: ['Card5'],
  Card5: ['Row3', 'Table2', 'Modal1'],
  Row3: ['Col4'],
  Col4: ['Button2'],
  Modal1: ['Card6', 'Card7'],
  Card6: ['Switch1', 'Slider1', 'InputNumber5', 'InputNumber1', 'InputNumber2'],
  Card7: ['Switch2', 'Slider2', 'InputNumber6', 'InputNumber3', 'InputNumber4']
};

const xxxxxxx = new Map();

Object.keys(origin).map((item) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  xxxxxxx.set(item, origin[item]);
});

export const yy2 = xxxxxxx;
