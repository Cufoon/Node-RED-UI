module.exports = function (RED) {
  function LowerCaseNode(config) {
    RED.nodes.createNode(this, config);
    const menu = config.cufoon_menu;
    var node = this;
    node.on('input', function (msg) {
      // node.send(menu);
      msg.cufoon = {
        ...msg.cufoon,
        menu: JSON.parse(menu)
      };
      node.send(msg);
    });
  }

  RED.nodes.registerType('menu-item', LowerCaseNode);
};
