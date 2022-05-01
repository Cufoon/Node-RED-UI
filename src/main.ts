import childProcess from 'node:child_process';
import path from 'node:path';
import fs from 'fs-extra';
import dayjs from 'dayjs';
import * as snowpack from 'snowpack';
import { generateSnowpackConfig } from '$config/snowpack';
import { generateFile } from '$convert';
import { createProject } from '$scaffold';
// import { mockElement } from '$test/element';
// import { mockRoute } from '$test/route';
// import { yyy, uu1, uu2 } from '$test/xx';
// import { yy2 } from '$test/yy';

console.log(generateSnowpackConfig(__dirname));

// const testProjectPath = path.resolve(__dirname, '../test');
// const testProjectSourcePath = path.resolve(testProjectPath, 'src');

export const compile = async (sourceData: any, rootPath: string) => {
  const projectPath = rootPath;
  const projectSourcePath = path.resolve(projectPath, 'src');
  if (!createProject(rootPath, sourceData.cufoon?.title)) {
    return;
  }
  try {
    childProcess.execSync('npm install', {
      cwd: projectPath
    });
  } catch (e) {
    console.log(e);
    return;
  }
  if (!fs.existsSync(projectSourcePath)) {
    fs.mkdirSync(projectSourcePath, { recursive: true });
  }
  // const [elements, elementsMap] = mockElement();
  // const [routes, routesMap] = mockRoute();
  if (
    !generateFile(rootPath, {
      elements: sourceData.elements,
      elementsMap: sourceData.elementsMap,
      routes: sourceData.routes,
      routesMap: sourceData.routesMap,
      menuData: sourceData.menu
    })
  ) {
    return;
  }
  const config = snowpack.createConfiguration({
    ...generateSnowpackConfig(rootPath)
  });
  const result = await snowpack.build({ config });
  console.log(result);
  console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'), 'build success');
  // const server = await snowpack.startServer({ config });
  // console.log(server);
};

// compile();
