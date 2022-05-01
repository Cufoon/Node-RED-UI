const path = require('node:path');
const { compile } = require('../../build/main');

module.exports = function (RED) {
  function LowerCaseNode(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    node.on('input', function (msg) {
      (async () => {
        await compile(msg.cufoon, path.resolve(process.cwd(), 'cufoon_www'));
        node.send('compile success');
      })();
    });
  }

  RED.nodes.registerType('compile', LowerCaseNode);
};
