import path from 'node:path';
import fs from 'fs-extra';

export const appendToFile = (content: string) => {
  try {
    fs.appendFileSync(
      path.resolve(__dirname, '../../test/src/index.jsx'),
      content
    );
  } catch (e: unknown) {
    console.log(e);
  }
};

export const writeToFile = (content: string) => {
  try {
    fs.writeFileSync(
      path.resolve(__dirname, '../../test/src/index.jsx'),
      content
    );
  } catch (e: unknown) {
    console.log(e);
  }
};
