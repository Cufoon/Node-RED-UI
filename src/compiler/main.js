const snowpack = require('snowpack');
const env = require('./env');

console.log(env);
const config = snowpack.createConfiguration({ ...env });

(async () => {
  const { result } = await snowpack.build({ config });
  console.log(result);
})();
