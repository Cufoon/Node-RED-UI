const chokidar = require('chokidar');
const dayjs = require('dayjs');
const path = require('node:path');
const childProcess = require('node:child_process');

const runTask = () => {
  const result = childProcess.execSync('yarn run tsc-alias', {
    cwd: path.resolve(__dirname, '..')
  });
  console.log('------------------------------------------------');
  console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'));
  console.log(result.toString());
  const result1 = childProcess.execSync('yarn run build:site', {
    cwd: path.resolve(__dirname, '..')
  });
  console.log('------------------------------------------------');
  console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'));
  console.log(result1.toString());
};

const createTaskScheduler = () => {
  let timerId = null;
  let canRun = true;
  let delayOne = false;

  const runner = () => {
    if (canRun) {
      if (timerId !== null) {
        clearTimeout(timerId);
        timerId = null;
      }
      timerId = setTimeout(() => {
        delayOne = false;
        canRun = false;
        runTask();
        canRun = true;
        if (delayOne) {
          runner();
        }
      }, 350);
    } else {
      delayOne = true;
    }
  };

  const clearRunner = () => {
    if (timerId !== null) {
      clearTimeout(timerId);
      timerId = null;
    }
  };

  return {
    run: runner,
    clear: clearRunner
  };
};

const taskScheduler = createTaskScheduler();

const watcher = chokidar.watch(path.resolve(__dirname, '../build'), {
  // ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true
});

watcher.on('all', (event, path) => {
  console.log(event, path);
  taskScheduler.run();
});

process.on('SIGINT', () => {
  watcher.close().then(() => {
    taskScheduler.clear();
    console.log('task scheduler cleared!');
    console.log('watcher exited!');
    process.exit();
  });
});
