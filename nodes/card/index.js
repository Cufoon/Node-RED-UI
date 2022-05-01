const { checkElements, checkElementsMap, mapArrayAdd } = require('../util');

module.exports = function (RED) {
  function LowerCaseNode(config) {
    RED.nodes.createNode(this, config);
    const id = config.cufoon_id;
    const parent = config.cufoon_parent;
    const defaultContent = config.cufoon_default_content;
    const title = config.cufoon_title;
    var node = this;
    node.on('input', function (msg) {
      let parent1 = parent;
      if (parent !== '') {
        msg.payload = parent;
      } else {
        parent1 = msg.payload;
      }
      msg = checkElements(msg);
      const option = {};
      if (title !== '') {
        option.option = {
          title: title
        };
      }
      msg.cufoon.elements.set(id, {
        id: id,
        name: 'card',
        ...option,
        content: { text: defaultContent || '' }
      });
      msg = checkElementsMap(msg);
      mapArrayAdd(msg.cufoon.elementsMap, parent1, id);
      node.send(msg);
    });
  }

  RED.nodes.registerType('card', LowerCaseNode);
};
