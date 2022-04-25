const { generateSnowpackConfig } = require('../build/config/snowpack');
const { createConfiguration, startServer } = require('snowpack');

(async () => {
  const config = createConfiguration({ ...generateSnowpackConfig() });
  // const result = await snowpack.build({ config });
  const server = await startServer({ config });
  console.log(server);
})();
