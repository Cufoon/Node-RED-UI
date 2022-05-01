import childProcess from 'node:child_process';
import path from 'node:path';
import fs from 'fs-extra';
import dayjs from 'dayjs';
// import * as snowpack from 'snowpack';
import { generateSnowpackConfig } from '$config/snowpack';
import { generateFile } from '$convert';
import { createProject } from '$scaffold';
// import { mockElement } from '$test/element';
// import { mockRoute } from '$test/route';
import { yyy, uu1, uu2 } from '$test/xx';
import { yy2 } from '$test/yy';

console.log(generateSnowpackConfig());

const testProjectPath = path.resolve(__dirname, '../test');
const testProjectSourcePath = path.resolve(testProjectPath, 'src');

const compile = async () => {
  if (!createProject()) {
    return;
  }
  try {
    childProcess.execSync('npm install', {
      cwd: testProjectPath
    });
  } catch (e) {
    console.log(e);
    return;
  }
  if (!fs.existsSync(testProjectSourcePath)) {
    fs.mkdirSync(testProjectSourcePath, { recursive: true });
  }
  // const [elements, elementsMap] = mockElement();
  // const [routes, routesMap] = mockRoute();
  if (
    !generateFile({
      elements: yyy as any,
      elementsMap: yy2 as any,
      routes: uu1 as any,
      routesMap: uu2 as any
    })
  ) {
    return;
  }
  console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'), 'build success');
  // const config = snowpack.createConfiguration({ ...generateSnowpackConfig() });
  // // const result = await snowpack.build({ config });
  // const server = await snowpack.startServer({ config });
  // // console.log(result);
  // console.log(server);
};

compile();
