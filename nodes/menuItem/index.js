module.exports = function (RED) {
  function LowerCaseNode(config) {
    RED.nodes.createNode(this, config);
    const menu = config.cufoon_menu;
    const menuDefault = config.cufoon_default_menu;
    const pageDefault = config.cufoon_default_page;
    var node = this;
    node.on('input', function (msg) {
      // node.send(menu);
      msg.cufoon = {
        ...msg.cufoon,
        menu: JSON.parse(menu),
        menuDefault: menuDefault,
        pageDefault: pageDefault
      };
      node.send(msg);
    });
  }

  RED.nodes.registerType('menu-item', LowerCaseNode);
};
