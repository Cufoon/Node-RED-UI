export const generatePackageJSON = (name: string = 'ui') => {
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
      '@arco-design/web-react': '^2.32.1'
    }
  };

  return JSON.stringify(packageJSON);
};

export const generateIndexHtml = (title: string = 'Node-RED Web') => {
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

export const generateIndexCss = () => {
  return `
  @use "@arco-design/web-react/dist/css/arco.css";
  /* Add CSS styles here! */
  body {
    font-family: sans-serif;
  }
  `;
};
