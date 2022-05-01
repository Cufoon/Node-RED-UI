module.exports = function (RED) {
  function LowerCaseNode(config) {
    RED.nodes.createNode(this, config);
    const menu = config.cufoon_menu;
    var node = this;
    node.on('input', function (msg) {
      msg.cufoon = {
        ...msg.cufoon,
        menu: menu
      };
      node.send(msg);
    });
  }

  RED.nodes.registerType('menu-item', LowerCaseNode);
};
