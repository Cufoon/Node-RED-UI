const path = require('node:path');
const { startServer } = require('../../build/start');

module.exports = function (RED) {
  function LowerCaseNode(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    node.on('input', function (msg) {
      (async () => {
        await startServer(path.resolve(process.cwd(), 'cufoon_www'));
        node.send('start server success');
      })();
    });
  }

  RED.nodes.registerType('startServer', LowerCaseNode);
};
