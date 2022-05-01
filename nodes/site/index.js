module.exports = function (RED) {
  function LowerCaseNode(config) {
    RED.nodes.createNode(this, config);
    const name = config.cufoon_name;
    var node = this;
    node.on('input', function (msg) {
      msg.payload = RED.settings;
      msg.payload = 'root';
      msg.cufoon = {
        ...msg.cufoon,
        site: {
          ...msg.cufoon?.site,
          name: name
        }
      };
      if (!msg.cufoon?.elements) {
        msg.cufoon = {
          ...msg.cufoon,
          elements: new Map()
        };
      }
      msg.cufoon.elements.set('root', {
        id: 'root',
        name: 'root',
        path: 'root'
      });
      if (!msg.cufoon?.elementsMap) {
        msg.cufoon = {
          ...msg.cufoon,
          elementsMap: new Map()
        };
      }
      node.send(msg);
      // node.send(RED.settings);
    });
  }

  RED.nodes.registerType('new-site', LowerCaseNode);
};
