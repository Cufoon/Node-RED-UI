const { checkElements, checkElementsMap, mapArrayAdd } = require('../util');

module.exports = function (RED) {
  function LowerCaseNode(config) {
    RED.nodes.createNode(this, config);
    const id = config.cufoon_id;
    const parent = config.cufoon_parent;
    const defaultContent = config.cufoon_default_content;
    const option = JSON.parse(config.cufoon_option);
    var node = this;
    node.on('input', function (msg) {
      let parent1 = parent;
      if (parent !== '') {
        msg.payload = id;
      } else {
        parent1 = msg.payload;
      }
      msg = checkElements(msg);
      const option1 = {};
      if (Object.keys(option).length > 0) {
        option1.option = option;
      }
      msg.cufoon.elements.set(id, {
        id: id,
        name: 'chartLine',
        ...option1,
        content: { text: defaultContent || '' }
      });
      msg = checkElementsMap(msg);
      mapArrayAdd(msg.cufoon.elementsMap, parent1, id);
      node.send(msg);
    });
  }

  RED.nodes.registerType('chartLine', LowerCaseNode);
};
