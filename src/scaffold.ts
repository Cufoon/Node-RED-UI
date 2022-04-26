import {
  generateIndexCss,
  generateIndexHtml,
  generatePackageJSON
} from '$template/project';
import fs from 'fs-extra';
import path from 'node:path';

export const createProject = () => {
  const rootPath = path.resolve(__dirname, '../test/public');
  const indexHtmlPath = path.resolve(__dirname, '../test/public/index.html');
  const indexCssPath = path.resolve(__dirname, '../test/public/index.scss');
  const packageJSONPath = path.resolve(__dirname, '../test/package.json');
  const indexHtml = generateIndexHtml('Cufoon Web');
  const indexCss = generateIndexCss();
  const packageJSON = generatePackageJSON();

  if (!fs.existsSync(rootPath)) {
    fs.mkdirSync(rootPath, { recursive: true });
  }

  try {
    fs.writeFileSync(indexHtmlPath, indexHtml);
    fs.writeFileSync(indexCssPath, indexCss);
    fs.writeFileSync(packageJSONPath, packageJSON);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};
