import { RenderFunc } from '$interface/render';

type ChartLineOption =
  | {
      onclick?: string;
      chart?: any[];
    }
  | undefined;

export const renderChartLine: RenderFunc = ({ element }) => {
  const onClick = (element.option as ChartLineOption)?.onclick || '';
  let data = '';
  if ((element.option as ChartLineOption)?.chart) {
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
  } else {
    data = '{labels:[],datasets: []}';
  }

  const result = `
    <ChartLine
      ${onClick && `onClick={${onClick}}`}
      datasetIdKey='id'
      data={${data}}
      options={{
        responsive: true
      }}
    />
  `;
  return [result, null];
};
