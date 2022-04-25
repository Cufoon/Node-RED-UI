import childProcess from 'node:child_process';
import path from 'node:path';
import fs from 'fs-extra';
// import * as snowpack from 'snowpack';
import { generateSnowpackConfig } from '$config/snowpack';
import { generateFile } from '$convert';
import { createProject } from '$scaffold';
import dayjs from 'dayjs';

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
  if (!generateFile()) {
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
