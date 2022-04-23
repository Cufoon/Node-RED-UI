import snowpack from 'snowpack';
import env from './env';

console.log(env);
const config = snowpack.createConfiguration({ ...env });

(async () => {
  const result = await snowpack.build({ config });
  console.log(result);
})();
