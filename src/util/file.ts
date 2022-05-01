import path from 'node:path';
import fs from 'fs-extra';

export const appendToFile = (rootPath: string, content: string) => {
  try {
    fs.appendFileSync(path.resolve(rootPath, 'src/index.jsx'), content);
  } catch (e: unknown) {
    console.log(e);
  }
};

export const writeToFile = (rootPath: string, content: string) => {
  try {
    fs.writeFileSync(path.resolve(rootPath, 'src/index.jsx'), content);
  } catch (e: unknown) {
    console.log(e);
  }
};
