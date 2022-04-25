const fs = require('fs-extra');
const path = require('node:path');

fs.removeSync(path.resolve(__dirname, '../build'));
