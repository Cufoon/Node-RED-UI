module.exports = function (RED) {
  function LowerCaseNode(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    node.on('input', function (msg) {
      msg.payload = RED.settings;
      node.send(msg);
      // node.send(RED.settings);
    });
  }

  RED.nodes.registerType('new-site', LowerCaseNode);
};
