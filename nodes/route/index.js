const { checkRoutes, checkRoutesMap, mapArrayAdd } = require('../util');

module.exports = function (RED) {
  function LowerCaseNode(config) {
    RED.nodes.createNode(this, config);
    const id = config.cufoon_id;
    const parent = config.cufoon_parent;
    const path = config.cufoon_path;
    const pageElement = config.cufoon_page_element;
    var node = this;
    node.on('input', function (msg) {
      let parent1 = parent;
      if (parent !== '') {
        msg.payload = parent;
      } else {
        parent1 = msg.payload;
      }
      msg = checkRoutes(msg);
      msg.cufoon.routes.set(id, {
        path: path,
        element: pageElement
      });
      msg = checkRoutesMap(msg);
      mapArrayAdd(msg.cufoon.routesMap, parent1, id);
      node.send(msg);
    });
  }

  RED.nodes.registerType('route', LowerCaseNode);
};
