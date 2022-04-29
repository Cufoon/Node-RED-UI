"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderChartLine = void 0;
const renderChartLine = ({ element }) => {
    var _a, _b;
    const onClick = ((_a = element.option) === null || _a === void 0 ? void 0 : _a.onclick) || '';
    let data = '';
    if ((_b = element.option) === null || _b === void 0 ? void 0 : _b.chart) {
        data = `{
      labels: ${element.option.chart.data}?.x || [],
      datasets: [{
        id: 1,
        label: '${element.option.chart.name || '系列1'}',
        data: ${element.option.chart.data}?.y || [],
        borderColor: '${element.option.chart.borderColor || '#ff0000'}',
        backgroundColor: '${element.option.chart.backgroundColor || '#880000'}',
        cubicInterpolationMode: 'monotone'
      }]
    }`;
    }
    else {
        data = '{labels:[],datasets: []}';
    }
    const result = `
    <ChartLine
      ${onClick && `onClick={${onClick}}`}
      datasetIdKey='id'
      data={${data}}
      options={{
        responsive: true,
        animation: false
      }}
    />
  `;
    return [result, null];
};
exports.renderChartLine = renderChartLine;
