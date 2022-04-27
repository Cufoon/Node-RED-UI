"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateIndexCss = exports.generateIndexHtml = exports.generatePackageJSON = void 0;
const generatePackageJSON = (name = 'ui') => {
    const packageJSON = {
        name: name,
        version: '1.0.0',
        description: 'A nice web app!',
        keywords: ['Cufoon', 'Node-RED'],
        author: 'Cufoon',
        license: 'MIT',
        dependencies: {
            react: '^18.0.0',
            'react-dom': '^18.0.0',
            'react-router-dom': '^6.3.0',
            '@arco-design/web-react': '^2.32.1',
            'chart.js': '^3.7.1',
            'react-chartjs-2': '^4.1.0',
            'umi-request': '^1.4.0',
            qs: '^6.10.3',
            lodash: '^4.17.21',
            dayjs: '^1.11.1',
            ahooks: '^3.3.10'
        }
    };
    return JSON.stringify(packageJSON);
};
exports.generatePackageJSON = generatePackageJSON;
const generateIndexHtml = (title = 'Node-RED Web') => {
    return `
  <!DOCTYPE html>
  <html lang="zh-CN">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" type="text/css" href="/index.css" />
      <title>${title}</title>
    </head>
    <body>
      <div id="app"></div>
      <script type="module" src="/dist/index.js"></script>
    </body>
  </html>
  `;
};
exports.generateIndexHtml = generateIndexHtml;
const generateIndexCss = () => {
    return `
  @use "@arco-design/web-react/dist/css/arco.css";
  /* Add CSS styles here! */
  body {
    font-family: sans-serif;
  }
  `;
};
exports.generateIndexCss = generateIndexCss;
