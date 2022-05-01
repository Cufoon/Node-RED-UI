import {
  generateIndexCss,
  generateIndexHtml,
  generatePackageJSON
} from '$template/project';
import fs from 'fs-extra';
import path from 'node:path';

export const createProject = (root: string, title: string) => {
  const rootPath = path.resolve(root, 'public');
  const indexHtmlPath = path.resolve(root, 'public/index.html');
  const indexCssPath = path.resolve(root, 'public/index.scss');
  const packageJSONPath = path.resolve(root, 'package.json');
  const indexHtml = generateIndexHtml(title || 'Cufoon Web');
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
