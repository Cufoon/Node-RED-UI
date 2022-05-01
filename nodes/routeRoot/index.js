const { checkRoutes, checkRoutesMap } = require('../util');

module.exports = function (RED) {
  function LowerCaseNode(config) {
    RED.nodes.createNode(this, config);
    const path = config.cufoon_path;
    const pageElement = config.cufoon_page_element;
    var node = this;
    node.on('input', function (msg) {
      msg = checkRoutes(msg);
      msg.cufoon.routes.set('root', {
        path: path,
        element: pageElement
      });
      msg = checkRoutesMap(msg);
      node.send(msg);
    });
  }

  RED.nodes.registerType('route-root', LowerCaseNode);
};
