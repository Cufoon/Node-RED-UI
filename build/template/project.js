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
            'react-router-dom': '^6.3.0'
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
  /* Add CSS styles here! */
  body {
    font-family: sans-serif;
  }
  `;
};
exports.generateIndexCss = generateIndexCss;
